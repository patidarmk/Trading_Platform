💹 Trading Platform Simulator
    A real-time trading simulation dashboard built using Next.js. This project emulates order placement in a live order book environment, supporting venues like OKX, Bybit, and Deribit.

✅ Features
    🧮 Simulate Market & Limit Orders

    📉 Slippage & Market Impact Calculations

    📊 Live Orderbook & Depth Visualizations

    🔄 Multi-Timing Scenarios (Immediate, 5s, 10s, 30s)

    💰 Live P/L Estimation

    🌍 Supports Multiple Venues (OKX, Bybit, Deribit)

🚀 Getting Started
    First, install dependencies:

    npm install or npm i

Run the development server:

    npm run dev
    Open http://localhost:3000 in your browser to view the app.

🌐 Live Demo
    🔗 https://trading-platform-rho.vercel.app

📦 Libraries Used
    Library	Purpose
    Next.js	React-based web application framework
    React	UI development library
    Tailwind CSS	Utility-first CSS framework for styling
    shadcn/ui	Accessible and unstyled UI primitives
    Zustand	Lightweight state management library
    

📄 Assumptions
    Orderbook data is either simulated or fetched from mock APIs.

    Market price reference is based on the best bid/ask available at the time of simulation.

    Simulation scenarios like “5s delay” assume a static snapshot of the orderbook at that time.

    Orders are filled based on price-time priority (top-down).

    This tool is designed for simulation/demo purposes only, not actual trading.

🗂️ Project Structure

/app          → Next.js app directory (routing, pages)

/components   → Reusable UI components

/store        → Zustand stores for global state

/lib          → Utility functions and simulation logic

/types        → Type definitions (order, venue, etc.)




