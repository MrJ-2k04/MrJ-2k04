<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img alt="Jay Soni, Full-Stack Engineer & Solutions Architect" src="assets/header-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://webwizards.in"><img src="https://img.shields.io/badge/website-webwizards.in-0d9488?style=flat-square" alt="Website"></a>
  <a href="https://www.linkedin.com/in/jay-soni-462333229"><img src="https://img.shields.io/badge/linkedin-jay--soni-0a66c2?style=flat-square" alt="LinkedIn"></a>
  <a href="mailto:jay@webwizards.in"><img src="https://img.shields.io/badge/email-jay%40webwizards.in-2563eb?style=flat-square" alt="Email"></a>
  <a href="https://presentify.in"><img src="https://img.shields.io/badge/founder-presentify.in-7c3aed?style=flat-square" alt="Presentify"></a>
  <img src="https://komarev.com/ghpvc/?username=MrJ-2k04&style=flat-square&color=59636e&label=profile+views" alt="Profile views">
</p>

<br>

I build software end to end, from the data model and APIs to the cloud setup and the screen people use. For 3+ years I've delivered production web apps for international clients, and I founded **Presentify**, an AI attendance platform that went from an idea to the App Store and Google Play.

```js
const jay = {
  basedIn: "Ahmedabad, India 🇮🇳",
  role: "Full-Stack Engineer & Solutions Architect",
  now: "Building AI features on a production AWS SaaS platform",
  stack: ["React", "Node.js", "AWS", "Python", "Flutter"],
  into: ["Serverless & GPU infra", "Applied AI", "Secure-by-default systems"],
  askMeAbout: ["AWS architecture", "Face recognition pipelines", "Shipping solo"],
  openTo: ["Freelance", "Full-time"],
};
```

## ✦ Journey

```mermaid
timeline
    2021 : Joined GitHub
         : Started BCA
    2022 : Started freelancing on Upwork
         : React and Redux certification
    2023 : Upwork-certified in JavaScript frontend
         : Python for data science
    2024 : Built Savari Dekho, a MERN carpooling app
         : Finished BCA with an 8.74 CGPA
         : Started MCA
    2025 : Built PriceTrack, 98.2% R² price model
         : Founded Presentify
    2026 : Presentify live on App Store and Google Play
         : 1,200+ students onboarded
         : AI pipelines on a production AWS SaaS
         : MCA with an 8.78 CGPA
```

## ✦ Selected work

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>📸 Presentify</h3>
      <sub>Founder & Full-Stack Engineer</sub>
      <p>Face recognition attendance for schools and colleges. Teachers photograph the class, and attendance is marked in seconds.</p>
      <p><b>1,200+</b> students · <b>430+</b> lectures · <b>~20s</b> avg match time</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Flutter app, a React admin dashboard, a Next.js site and a Node/GraphQL API</li>
          <li>A FastAPI + InsightFace matcher on Modal's serverless GPUs (29.5s P95 over 400+ jobs)</li>
          <li>One centroid embedding per student plus an ~8% margin cut look-alike false positives</li>
          <li>JWT + refresh tokens and role-based access across a five-level org hierarchy</li>
          <li>Docker on Render, MongoDB, S3 behind Cloudflare CDN, Mailgun</li>
        </ul>
      </details>
      <a href="https://presentify.in"><img src="https://img.shields.io/badge/visit-presentify.in-7c3aed?style=flat-square" alt="Visit Presentify"></a>
    </td>
    <td width="50%" valign="top">
      <h3>🤖 AI presentations on AWS</h3>
      <sub>Client work · Production SaaS</sub>
      <p>Took over a prototype that couldn't be integrated and turned it into a production feature that generates presentations with Claude.</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Kept the prototype's usable logic and rebuilt the rest as an <b>SQS → Lambda → Bedrock</b> pipeline</li>
          <li>Moved it to ECS/ECR container images once its dependencies outgrew Lambda's size limit</li>
          <li>Runs on a wider Amplify, AppSync, DynamoDB and Cognito stack</li>
        </ul>
      </details>
      <img src="https://img.shields.io/badge/private-client_work-59636e?style=flat-square" alt="Private client work">
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🚗 Savari Dekho</h3>
      <sub>Carpooling platform</sub>
      <p>A carpooling app where drivers can offer rides and passengers can find and pay for a seat.</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Built on the MERN stack: MongoDB, Express, React and Node.js</li>
          <li>Payments through Razorpay and RazorpayX, with Google Maps for routing</li>
          <li>Frontend on Cloudflare Pages under a custom subdomain, with the API on self-managed hosting</li>
        </ul>
      </details>
      <a href="https://savaridekho.webwizards.in"><img src="https://img.shields.io/badge/live-demo-0d9488?style=flat-square" alt="Live demo"></a>
      <a href="https://github.com/MrJ-2k04/savari-dekho"><img src="https://img.shields.io/badge/code-GitHub-1f2328?style=flat-square&logo=github&logoColor=white" alt="Code on GitHub"></a>
    </td>
    <td width="50%" valign="top">
      <h3>📈 PriceTrack</h3>
      <sub>Used vehicle price predictor</sub>
      <p>Predicts used bike prices and lets you compare six models side by side. Random Forest leads with <b>98.2% R²</b>.</p>
      <details>
        <summary><b>Under the hood</b></summary>
        <br>
        <ul>
          <li>Cleaned and explored a dataset of 30,000+ used bikes</li>
          <li>Linear, Ridge, Lasso, Decision Tree, Random Forest and Gradient Boosting models</li>
          <li>A Streamlit UI shows live predictions from all six models</li>
        </ul>
      </details>
      <a href="https://github.com/MrJ-2k04/PriceTrack"><img src="https://img.shields.io/badge/code-GitHub-1f2328?style=flat-square&logo=github&logoColor=white" alt="Code on GitHub"></a>
    </td>
  </tr>
</table>

## ✦ Toolbox

<table>
  <tr>
    <td width="140"><sub><b>Frontend</b></sub></td>
    <td><img src="https://skillicons.dev/icons?i=react,nextjs,redux,materialui,tailwind,flutter&perline=10" height="36" alt="React, Next.js, Redux, MUI, Tailwind, Flutter"></td>
  </tr>
  <tr>
    <td><sub><b>Backend</b></sub></td>
    <td><img src="https://skillicons.dev/icons?i=nodejs,express,nestjs,graphql,prisma,fastapi,wordpress&perline=10" height="36" alt="Node.js, Express, NestJS, GraphQL, Prisma, FastAPI, WordPress"></td>
  </tr>
  <tr>
    <td><sub><b>Data</b></sub></td>
    <td><img src="https://skillicons.dev/icons?i=mongodb,dynamodb,postgres,mysql,firebase&perline=10" height="36" alt="MongoDB, DynamoDB, PostgreSQL, MySQL, Firebase"></td>
  </tr>
  <tr>
    <td><sub><b>Cloud & DevOps</b></sub></td>
    <td><img src="https://skillicons.dev/icons?i=aws,docker,cloudflare,vercel,git,github,gitlab&perline=10" height="36" alt="AWS, Docker, Cloudflare, Vercel, Git, GitHub, GitLab"></td>
  </tr>
  <tr>
    <td><sub><b>Languages</b></sub></td>
    <td><img src="https://skillicons.dev/icons?i=js,ts,python,dart,java,cpp,cs&perline=10" height="36" alt="JavaScript, TypeScript, Python, Dart, Java, C++, C#"></td>
  </tr>
</table>

<sub><b>Also:</b> AWS Lambda · AppSync · Cognito · SQS · ECS/ECR · Bedrock · InsightFace · ONNX Runtime · Modal · Stripe · Razorpay · Mailgun · Resend</sub>

## ✦ GitHub pulse

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/pulse-dark.svg">
  <img alt="GitHub contribution stats" src="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/pulse-light.svg" width="100%">
</picture>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/snake-dark.svg">
  <img alt="A snake eating my contribution graph" src="https://raw.githubusercontent.com/MrJ-2k04/MrJ-2k04/output/snake-light.svg" width="100%">
</picture>

<img src="assets/footer.svg" alt="Thanks for stopping by" width="100%">

<p align="center">
  <sub>Open to freelance and full-time work. The fastest way to reach me is <a href="mailto:jay@webwizards.in">email</a>.</sub>
</p>
