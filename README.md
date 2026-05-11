# TAMU Underwater Robotics Website

React website for the TAMU Underwater Robotics AUV team, rebuilt from the reference Wix content.

## Manual Setup

From the repository root:

```powershell
cd app/frontend
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

If PowerShell blocks `npm` because script execution is disabled, use `npm.cmd` instead:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production Build

```powershell
cd app/frontend
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## GitHub Pages Deployment

Deployment is configured with GitHub Actions in `.github/workflows/deploy.yml`.

After changes are pushed to `main`, GitHub Actions will:

1. Install dependencies.
2. Build the React app from `app/frontend`.
3. Publish `app/frontend/dist` to the `gh-pages` branch.

In the GitHub repository settings, set Pages source to **Deploy from a branch**, then choose:

- Branch: `gh-pages`
- Folder: `/root`

Expected public URL after deployment:

```text
https://sphoorthigurram.github.io/auv-robotics/
```
