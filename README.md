# Muhammad ABU BAKAR — AI Systems & Automation Portfolio

A modern, production-ready portfolio and business systems studio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Google Gemini API**.

---

## 🚀 Deploy to Vercel

This project is configured with zero-configuration support for **Vercel**.

### Method 1: Deploy with Git (Recommended)

1. **Push your repository** to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Click **"Import Project"** and select your repository.
4. Framework Preset will automatically be detected as **Next.js**.
5. In the **Environment Variables** section, add:
   - `GEMINI_API_KEY`: Your Google Gemini API Key *(get a free key from [Google AI Studio](https://aistudio.google.com/app/apikey))*
6. Click **Deploy**.

---

### Method 2: Deploy with Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Log in and deploy:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## 🛠 Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Add your `GEMINI_API_KEY` inside `.env.local`.

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build & Test locally:**
   ```bash
   npm run build
   npm start
   ```

---

## 📂 Project Structure

- `app/` - Next.js App Router (pages, layouts, API routes, error boundaries)
  - `app/api/assistant/` - Server-side Gemini AI diagnostic copilot
  - `app/api/contact/` - Lead intake & diagnostic inquiry validation
  - `app/work/` & `app/work/[slug]/` - System architecture case studies
  - `app/insights/` & `app/insights/[slug]/` - Systems engineering essays
  - `app/systems/` - Core capability breakdown
  - `app/process/` - The 4-step engineering methodology
  - `app/about/` - Engineer identity, philosophy & background
  - `app/contact/` - Interactive bottleneck diagnostic intake form
- `components/` - Reusable UI components (visualizer, interactive diagrams, navigation, assistant drawer)
- `public/` - Static assets & portraits (`abu-bakar.png`)
- `lib/` - Case study datasets & TypeScript utility helpers
