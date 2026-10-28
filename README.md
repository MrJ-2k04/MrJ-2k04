<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img alt="Jay Soni, Full-Stack Engineer & Solutions Architect" src="assets/header-light.svg" width="100%">
</picture>

<h3 align="center">Engineering ideas into production-ready software.</h3>
<p align="center">Full-stack applications · Cloud architecture · AI integration</p>

<p align="center">
  <a href="https://webwizards.in"><img src="https://img.shields.io/badge/website-webwizards.in-0d9488?style=flat-square" alt="Website"></a>
  <a href="https://www.linkedin.com/in/jay-soni-462333229"><img src="https://img.shields.io/badge/linkedin-jay--soni-0a66c2?style=flat-square" alt="LinkedIn"></a>
  <a href="mailto:jay@webwizards.in"><img src="https://img.shields.io/badge/email-jay%40webwizards.in-2563eb?style=flat-square" alt="Email"></a>
</p>

<br>

I design, build and deploy production software, from full-stack web and mobile apps to cloud infrastructure and AI-powered features. For the last three years I've been a core engineer on **EngagementHub**, a platform Australian financial advisers use to run their practices, and I've shipped products of my own along the way.

```js
const jay = {
  basedIn: "Ahmedabad, India 🇮🇳",
  now: "Shipping AI features on AWS for EngagementHub",
  coreStack: ["React", "Node.js", "AWS", "Python"],
  into: ["Serverless & GPU infra", "Applied AI", "Secure-by-default systems"],
  openTo: ["Freelance", "Full-time"],
};
```

<br>

## ✦ Selected work

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>💼 EngagementHub</h3>
      <p><b>An all-in-one platform for financial advisers and dealer groups in Australia.</b></p>
      <p><b>My role:</b> full-stack engineer since 2023, taking features from design through to production on a React and AWS serverless stack.</p>
      <p>📈 <b>230+</b> commits · <b>6</b> AI tools built · <b>3</b> years on the product</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>AI presentations, reports, insurance summaries, proposals and file notes, generated with Claude on AWS Bedrock</li>
          <li>Rebuilt a stalled AI prototype as an SQS → Lambda → Bedrock pipeline, then moved it to ECS/ECR when it outgrew Lambda</li>
          <li>Production DocuSign signing with live signer tracking and push notifications</li>
          <li>Settings that cascade from dealer groups to practices to advisers</li>
          <li>Built on Amplify, AppSync (GraphQL), Lambda, DynamoDB, SQS, S3 and Cognito</li>
        </ul>
      </details>
      <a href="https://www.engagementhub.net"><img src="https://img.shields.io/badge/website-engagementhub.net-7c3aed?style=flat-square" alt="EngagementHub website"></a>
    </td>
    <td width="50%" valign="top">
      <h3>📸 Presentify</h3>
      <p><b>Face recognition attendance for schools and colleges.</b></p>
      <p><b>My role:</b> founder and sole engineer, from the architecture to the App Store and Google Play launch.</p>
      <p>📈 <b>1,200+</b> students · <b>430+</b> lectures · <b>~20s</b> per class photo</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Flutter app, React admin dashboard, Next.js site and a Node/GraphQL API</li>
          <li>FastAPI + InsightFace matching on Modal's serverless GPUs (29.5s at P95 over 400+ jobs)</li>
          <li>One centroid embedding per student plus an ~8% margin cut look-alike false positives</li>
          <li>JWT with refresh tokens and role-based access across a five-level hierarchy</li>
        </ul>
      </details>
      <a href="https://presentify.in"><img src="https://img.shields.io/badge/website-presentify.in-7c3aed?style=flat-square" alt="Presentify website"></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🚗 Savari Dekho</h3>
      <p><b>A carpooling app where drivers offer rides and passengers book and pay for seats.</b></p>
      <p><b>My role:</b> built the whole stack and deployed it on my own domain.</p>
      <p>📈 Live payments and route maps, end to end</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>MERN stack: MongoDB, Express, React and Node.js</li>
          <li>Razorpay and RazorpayX for payments and payouts, Google Maps for routing</li>
          <li>Frontend on Cloudflare Pages, API on self-managed hosting</li>
        </ul>
      </details>
      <a href="https://savaridekho.webwizards.in"><img src="https://img.shields.io/badge/live-demo-0d9488?style=flat-square" alt="Live demo"></a>
      <a href="https://github.com/MrJ-2k04/savari-dekho"><img src="https://img.shields.io/badge/code-GitHub-1f2328?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
    <td width="50%" valign="top">
      <h3>📈 PriceTrack</h3>
      <p><b>Predicts used bike prices and compares six models side by side.</b></p>
      <p><b>My role:</b> data cleaning, modelling and the interactive UI.</p>
      <p>📈 <b>98.2%</b> R² with Random Forest, up from 92.8% with linear regression</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Cleaned and explored a dataset of 30,000+ used bikes</li>
          <li>Linear, Ridge, Lasso, Decision Tree, Random Forest and Gradient Boosting models</li>
          <li>A Streamlit UI shows live predictions from all six models</li>
        </ul>
      </details>
      <a href="https://github.com/MrJ-2k04/PriceTrack"><img src="https://img.shields.io/badge/code-GitHub-1f2328?style=flat-square&logo=github&logoColor=white" alt="Code"></a>
    </td>
  </tr>
</table>

<br>

## ✦ Journey

```mermaid
timeline
    2021 : Joined GitHub
         : Started BCA
    2022 : Started freelancing on Upwork
    2023 : Joined EngagementHub
         : Upwork-certified in JavaScript frontend
    2024 : Built Savari Dekho
         : Finished BCA, started MCA
    2025 : Built PriceTrack
         : Founded Presentify
    2026 : Presentify live on both app stores
         : Built AI tools at EngagementHub
         : MCA with an 8.78 CGPA
```

<br>

## ✦ Toolbox

<table>
  <tr>
    <td width="150"><b>Frontend</b></td>
    <td><img src="https://skillicons.dev/icons?i=react,nextjs,flutter,tailwind" height="40" alt="React, Next.js, Flutter, Tailwind"></td>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td><img src="https://skillicons.dev/icons?i=nodejs,nestjs,graphql,fastapi" height="40" alt="Node.js, NestJS, GraphQL, FastAPI"></td>
  </tr>
  <tr>
    <td><b>Data</b></td>
    <td><img src="https://skillicons.dev/icons?i=dynamodb,mongodb,postgres" height="40" alt="DynamoDB, MongoDB, PostgreSQL"></td>
  </tr>
  <tr>
    <td><b>Cloud</b></td>
    <td><img src="https://skillicons.dev/icons?i=aws,docker,cloudflare" height="40" alt="AWS, Docker, Cloudflare"></td>
  </tr>
  <tr>
    <td><b>Languages</b></td>
    <td><img src="https://skillicons.dev/icons?i=ts,js,python,dart" height="40" alt="TypeScript, JavaScript, Python, Dart"></td>
  </tr>
  <tr>
    <td><b>AI</b></td>
    <td>AWS Bedrock (Claude) · InsightFace · ONNX Runtime</td>
  </tr>
</table>

<br>

## ✦ GitHub pulse

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/pulse-dark.svg">
  <img alt="GitHub contribution stats" src="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/pulse-light.svg" width="100%">
</picture>

<details>
  <summary><b>🐍 Watch a snake eat my contribution graph</b></summary>
  <br>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/snake-dark.svg">
    <img alt="A snake eating my contribution graph" src="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/snake-light.svg" width="100%">
  </picture>
</details>

<br>

<img src="assets/footer.svg" alt="Thanks for stopping by" width="100%">

<p align="center">
  Open to freelance and full-time work. The fastest way to reach me is <a href="mailto:jay@webwizards.in">email</a>.
  <br><br>
  <img src="https://komarev.com/ghpvc/?username=MrJ-2k04&style=flat-square&color=59636e&label=profile+views" alt="Profile views">
</p>
