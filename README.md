# Athira Azman – Portfolio (React + Vite)

A fast, modern portfolio built with **Vite + React**, **Tailwind CSS**, **Framer Motion**, and **React Router**.  
It highlights selected work (WanderWise, AS Seafood Supplier, CarMe, Money Budget App) plus an AIESEC journey timeline—with smooth animations, dark mode, and mobile-friendly carousels.

## ✨ Features

- **Beautiful landing page** with hero, “Featured Project” (WanderWise), more projects, and an **AIESEC journey** timeline + photo carousel
- **Project case studies** with consistent layout:
  - **WanderWise** (Flutter, Firebase, OpenRouter AI) — source-available (non-commercial)
  - **AS Seafood Supplier** (PHP, MySQL, Bootstrap 5, Chart.js) — customer/admin flows, dual carousels
  - **CarMe** (PHP, MySQL) — car rental platform, dual carousels
  - **Money Budget App** (Java Swing/NetBeans) — phone-style carousel
- **Dark mode** toggle persisted in `localStorage`
- **Responsive, accessible** UI (Tailwind)
- **Framer Motion** for subtle, performant animations
- **React Router** for in-app navigation (no new tab when moving between case studies)

## 🧰 Tech Stack

- **Frontend:** React 18, Vite, React Router, Tailwind CSS, Framer Motion
- **Images & assets:** served from `/public` (e.g. `/GL.jpg`, `/nyan-cat.gif`, `/WanderWiseVertical.png`)
- **Carousels:** custom React components (with autoplay, dots, arrows, keyboard support)

> The AS Seafood & CarMe *apps themselves* are PHP/MySQL projects and are showcased here as case studies; this repository is the React portfolio site.

## 🗂️ Project Structure (high level)

src/
main.jsx
App.jsx
pages/
Home.jsx
WanderWise.jsx
AS_Seafood_Supplier.jsx
CarMe.jsx
MoneyBudget.jsx
public/
GL.jpg
nyan-cat.gif
WanderWiseVertical.png
(add your screenshots here, e.g. /seafood, /carme, /money-budget)
tailwind.config.js
vite.config.js


## ▶️ Getting Started (dev)

```bash
# 1) Install deps
npm install

# 2) Start dev server (HMR)
npm run dev

# 3) Build for prod
npm run build

# 4) Preview the production build
npm run preview