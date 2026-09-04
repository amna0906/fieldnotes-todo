# Fieldnotes — a small to-do app

A daily task log built with React + Vite, with toast notifications via `react-hot-toast`.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Deploy to GitHub Pages

See the full walkthrough in the chat, or the short version:

1. Push this folder to a new GitHub repo.
2. In `vite.config.js`, set `base: '/your-repo-name/'`.
3. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
4. Push to `main` — the included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically.
5. Your app will be live at `https://your-username.github.io/your-repo-name/`.
