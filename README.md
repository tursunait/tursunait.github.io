# Tursunai Turumbekova – Personal Website

**https://tursunait.github.io**

This is the source code for my personal website and portfolio, built with React and TypeScript. It showcases my work as an Applied Scientist focused on large-scale data analysis, ML/LLM evaluation, and data engineering.

## Features

- **Hero section** with name, headline, and social links
- **Expertise** section highlighting:
  - Machine Learning & Applied Science
  - Statistics & Experimentation
  - Data Engineering & Tools
- **Career History** timeline with roles at BNY Mellon, Cayu Technologies, O! Mobile Operator, PwC, and education (Duke University, KIMEP University)
- **Projects & Leadership** section featuring:
  - Udacity Onboarding Experiment Analysis
  - Behavioral Modeling for Phishing Detection
  - Amazon Sales Data Analysis and Demand Forecasting
  - Databricks Urbanization Analysis & Dashboard
  - Py Script with SQL Database
  - AskSQL – Text-to-SQL Microservice
- **Contact** section with location, email, and links to LinkedIn/GitHub
- Dark/light mode toggle and responsive layout

## Tech Stack

- **Frontend:** React 18, TypeScript, Create React App
- **UI & Styling:** MUI, SCSS
- **Icons:** Font Awesome, MUI Icons
- **Timeline:** `react-vertical-timeline-component`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install dependencies

From the project root:

```bash
npm install
```
**Run the development server**
```
npm start
```
The app will run at http://localhost:3000 by default.

**Build for production**
```
npm run build
```
This creates an optimized production build in the build/ directory.

**Deploying to GitHub Pages**
This repo is intended to be served from https://tursunait.github.io.

1. Ensure package.json has:
```
"homepage": "https://tursunait.github.io"
```
2. Build the app:
```
npm run build
```
3. Copy the build output into docs/:
```
rm -rf docs
cp -R build docs
```
4. Commit and push:
```
git add docs package.json
git commit -m "Update GitHub Pages build"
git push
```
5. On GitHub, go to Settings → Pages and set:

- Source: main branch
- Folder: /docs
Your site will be available at https://tursunait.github.io after GitHub Pages finishes deploying.

**Customization**
- Content: Edit components in src/components:
    - Main.tsx (hero section)
    - Expertise.tsx (skills)
    - Timeline.tsx (experience & education)
    - Project.tsx (projects)
    - Contact.tsx (contact info)

- Styling: Update SCSS files in src/assets/styles.
- Metadata: Update public/index.html and public/manifest.json (title, description, icons).
