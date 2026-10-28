// Builds pulse-{light,dark}.svg from the public contribution calendar, which counts private work too.
const fs = require('fs');

const CALENDAR_QUERY = `query($login: String!, $from: DateTime!, $to: DateTime!) {
  user(login: $login) {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar { weeks { contributionDays { contributionCount date } } }
    }
  }
}`;

const THEMES = {
  light: { bg: '#ffffff', panel: '#f6f8fa', border: '#d0d7de', text: '#1f2328', muted: '#59636e', idle: '#d0d7de', accent: ['#b45309', '#d97706', '#f59e0b'] },
  dark: { bg: '#0d1117', panel: '#151b23', border: '#303945', text: '#f4f6f8', muted: '#8b949e', idle: '#303945', accent: ['#f4bd32', '#f7cc5c', '#ffe69a'] },
};

const SANS = `'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif`;
const MONO = `ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', monospace`;
const WEEKDAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
const DAY_MS = 86400000;
const EASE = 'calcMode="spline" keyTimes="0;1" keySplines="0.2 0.8 0.2 1"';

const fmt = (n) => n.toLocaleString('en-US');
const fmtDate = (d, opts) => new Date(d).toLocaleDateString('en-GB', { timeZone: 'UTC', ...opts });
const fade = (begin) => `<animate attributeName="opacity" from="0" to="1" begin="${begin}s" dur="0.6s" fill="freeze"/>`;

async function collect(github, login) {
  const { user } = await github.graphql('query($login: String!) { user(login: $login) { createdAt } }', { login });
  const days = [];
  for (let y = new Date(user.createdAt).getUTCFullYear(); y <= new Date().getUTCFullYear(); y++) {
    const res = await github.graphql(CALENDAR_QUERY, { login, from: `${y}-01-01T00:00:00Z`, to: `${y}-12-31T23:59:59Z` });
    days.push(...res.user.contributionsCollection.contributionCalendar.weeks.flatMap((w) => w.contributionDays));
  }
  return { createdAt: user.createdAt, days: days.filter((d) => new Date(d.date) <= new Date()) };
}

function summarise({ createdAt, days }) {
  const now = Date.now();
  const sumBetween = (from, to) => days.filter((d) => { const t = new Date(d.date).getTime(); return t > from && t <= to; }).reduce((s, d) => s + d.contributionCount, 0);
  const lastYear = sumBetween(now - 365 * DAY_MS, now);
  const yearBefore = sumBetween(now - 730 * DAY_MS, now - 365 * DAY_MS);
  const best = days.reduce((a, d) => (d.contributionCount > a.contributionCount ? d : a));

  const byYear = {};
  const byWeekday = Array(7).fill(0);
  for (const d of days) {
    byYear[d.date.slice(0, 4)] = (byYear[d.date.slice(0, 4)] || 0) + d.contributionCount;
    byWeekday[new Date(d.date).getUTCDay()] += d.contributionCount;
  }

  return {
    total: days.reduce((s, d) => s + d.contributionCount, 0),
    since: fmtDate(createdAt, { month: 'short', year: 'numeric' }),
    lastYear,
    growth: yearBefore ? Math.round((lastYear / yearBefore - 1) * 100) : 0,
    activeDays: days.filter((d) => d.contributionCount > 0).length,
    best: { count: best.contributionCount, date: fmtDate(best.date, { day: 'numeric', month: 'short', year: 'numeric' }) },
    years: Object.entries(byYear).slice(-5),
    weekdays: [1, 2, 3, 4, 5, 6, 0].map((i) => ({ label: WEEKDAYS[i][0], value: byWeekday[i] })),
    busiest: WEEKDAYS[byWeekday.indexOf(Math.max(...byWeekday))],
  };
}

function render(s, t) {
  const base = 368;
  const bar = (x, w, h, begin, fill) => `<rect x="${x}" y="${base}" width="${w}" height="0" rx="${Math.min(6, w / 4)}" fill="${fill}">
      <animate attributeName="height" from="0" to="${h}" begin="${begin}s" dur="0.9s" fill="freeze" ${EASE}/>
      <animate attributeName="y" from="${base}" to="${base - h}" begin="${begin}s" dur="0.9s" fill="freeze" ${EASE}/>
    </rect>`;

  const tiles = [
    ['TOTAL CONTRIBUTIONS', fmt(s.total), `since ${s.since}`, t.muted],
    ['LAST 12 MONTHS', fmt(s.lastYear), s.growth > 0 ? `↑ ${s.growth}% year over year` : 'contributions', s.growth > 0 ? t.accent[0] : t.muted],
    ['ACTIVE DAYS', fmt(s.activeDays), 'days with a contribution', t.muted],
    ['MOST IN ONE DAY', fmt(s.best.count), `on ${s.best.date}`, t.muted],
  ].map(([label, value, sub, subColor], i) => {
    const x = 24 + i * 292;
    return `<g opacity="0">${fade(0.1 + i * 0.12)}
    <rect x="${x}" y="24" width="276" height="132" rx="14" fill="${t.panel}" stroke="${t.border}"/>
    <text x="${x + 24}" y="60" font-family="${MONO}" font-size="14" letter-spacing="1.5" fill="${t.muted}">${label}</text>
    <text x="${x + 22}" y="110" font-family="${SANS}" font-size="46" font-weight="700" fill="${t.text}">${value}</text>
    <text x="${x + 24}" y="140" font-family="${SANS}" font-size="17" fill="${subColor}">${sub}</text>
  </g>`;
  }).join('\n  ');

  const yearMax = Math.max(...s.years.map(([, v]) => v));
  const years = s.years.map(([year, v], i) => {
    const h = Math.max(4, Math.round((v / yearMax) * 112));
    const cx = 126 + i * 139;
    const begin = 0.6 + i * 0.12;
    return `${bar(cx - 28, 56, h, begin, 'url(#bar)')}
    <text x="${cx}" y="${base - h - 10}" text-anchor="middle" font-family="${SANS}" font-size="17" font-weight="600" fill="${t.text}" opacity="0">${fmt(v)}${fade(begin + 0.6)}</text>
    <text x="${cx}" y="396" text-anchor="middle" font-family="${MONO}" font-size="15" fill="${t.muted}">${year}</text>`;
  }).join('\n    ');

  const dayMax = Math.max(...s.weekdays.map((d) => d.value));
  const weekdays = s.weekdays.map((d, i) => {
    const cx = 839 + i * 47;
    return `${bar(cx - 11, 22, Math.max(4, Math.round((d.value / dayMax) * 96)), 0.8 + i * 0.08, d.value === dayMax ? t.accent[1] : t.idle)}
    <text x="${cx}" y="396" text-anchor="middle" font-family="${MONO}" font-size="15" fill="${t.muted}">${d.label}</text>`;
  }).join('\n    ');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="456" viewBox="0 0 1200 456" role="img" aria-label="${fmt(s.total)} GitHub contributions since ${s.since}, ${fmt(s.lastYear)} in the last 12 months">
  <defs>
    <linearGradient id="bar" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="${t.accent[0]}"/>
      <stop offset="0.6" stop-color="${t.accent[1]}"/>
      <stop offset="1" stop-color="${t.accent[2]}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="456" rx="20" fill="${t.bg}"/>

  ${tiles}

  <g opacity="0">${fade(0.5)}
    <rect x="24" y="172" width="752" height="240" rx="14" fill="${t.panel}" stroke="${t.border}"/>
    <rect x="792" y="172" width="384" height="240" rx="14" fill="${t.panel}" stroke="${t.border}"/>
    <text x="48" y="208" font-family="${MONO}" font-size="14" letter-spacing="1.5" fill="${t.muted}">CONTRIBUTIONS PER YEAR</text>
    <text x="816" y="208" font-family="${MONO}" font-size="14" letter-spacing="1.5" fill="${t.muted}">WEEKLY RHYTHM</text>
    <text x="816" y="236" font-family="${SANS}" font-size="17" fill="${t.muted}">busiest on <tspan fill="${t.accent[1]}" font-weight="600">${s.busiest}</tspan></text>
  </g>
  ${years}
  ${weekdays}

  <text x="600" y="442" text-anchor="middle" font-family="${MONO}" font-size="15" fill="${t.muted}">includes private work · refreshed daily · updated ${fmtDate(Date.now(), { day: 'numeric', month: 'short', year: 'numeric' })}</text>
</svg>
`;
}

module.exports = async ({ github, login, outDir }) => {
  const stats = summarise(await collect(github, login));
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, theme] of Object.entries(THEMES)) fs.writeFileSync(`${outDir}/pulse-${name}.svg`, render(stats, theme));
  return stats;
};
