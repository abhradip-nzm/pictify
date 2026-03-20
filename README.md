# Pictify Creator — AI-Powered Product Studio

Transform your photos into 16 beautiful personalized products with AI.

## Features

- 📸 **Photo Selection** — Choose from 8 sample archetypes or upload your own
- 💜 **Emotion Engine** — 6 emotion profiles that guide AI product curation
- 🏷️ **Keyword Tags** — Add mood keywords to personalize designs
- 🎨 **Style Presets** — Minimal / Vibrant / Vintage / Luxury
- ✦ **AI Generation** — 5-step animated AI pipeline generating 16 products
- 📦 **16 Product Types** — Mugs, canvas prints, T-shirts, pillows, puzzles, and more
- 🛒 **Cart & Checkout** — Full add-to-cart flow with order total
- 🎨 **Color Customization** — Per-product accent color swatches
- 📊 **Live Stats** — Real-time emotion match %, print quality, cart summary
- 🤖 **AI Insights** — Rotating AI analysis of your photo + emotion

## Tech Stack

- React 18 + Vite
- CSS Modules
- Inter font (Google Fonts)
- No external UI libraries — fully custom design system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/        # UI components (each with .jsx + .module.css)
│   ├── Header
│   ├── LeftPanel
│   ├── AiThinking
│   ├── ResultsPanel
│   ├── ProductCard
│   ├── CartPanel
│   ├── VariationPanel
│   ├── EmptyState
│   └── Toast
├── data/
│   └── constants.js   # All static data (products, emotions, styles, etc.)
├── hooks/
│   ├── useAiGeneration.js
│   ├── useCart.js
│   └── useToast.js
├── styles/
│   └── global.css     # Design tokens + global reset
├── App.jsx
├── App.module.css
└── main.jsx
```

## Design System

All design tokens are CSS custom properties defined in `src/styles/global.css`.
The app uses a dark purple aesthetic with Inter as the font family.
