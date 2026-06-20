# 💰 Finance Dashboard

A responsive personal finance dashboard built with React, TypeScript, and Tailwind CSS. Track income, expenses, and visualize monthly trends with interactive charts.

🔗 **Live Demo:** [your-vercel-link-here]

![Dashboard Screenshot](./screenshot.png)

## Features

- 📊 Monthly income vs. expenses bar chart (Recharts)
- 💳 Real-time summary cards (Total Income, Expenses, Balance)
- 🔍 Filterable transactions table (All / Income / Expenses)
- 📱 Fully responsive layout (mobile-first design)
- 🛠️ Fully typed with TypeScript

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS** — styling
- **Recharts** — data visualization
- **React Router** — client-side routing

## Getting Started

\`\`\`bash
git clone https://github.com/arminimani70/finance-dashboard.git
cd finance-dashboard
npm install
npm run dev
\`\`\`

## Project Structure

\`\`\`
src/
├── components/ # Reusable UI components
├── pages/ # Page-level components (Dashboard, Transactions)
├── data/ # Mock transaction data
├── types/ # TypeScript interfaces & types
└── utils/ # Calculation helper functions
\`\`\`

## What I Learned

This project helped me practice:

- Designing TypeScript interfaces before building components
- Separating "smart" container components from "dumb" presentational ones
- Managing state with `useState` and optimizing with `useMemo`
- Building reusable, prop-driven components (controlled component pattern)
- Data visualization with Recharts

## Author

**Armin Imani** — Frontend Developer  
[LinkedIn](https://linkedin.com/in/arminimani70)
