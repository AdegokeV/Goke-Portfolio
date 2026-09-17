# Oluwatosin Adegoke — Portfolio

This is an adapted personal portfolio built from the user-supplied Gazi-V2 React/Vite template, with Oluwatosin's content, project screenshots, portrait, avatar, graphite-grey theme, and contact links.

## Test locally

1. Install dependencies once:

   ```powershell
   npm install --ignore-scripts
   ```

2. Run the development server:

   ```powershell
   npm run dev
   ```

3. Open the localhost URL shown in the terminal (normally `http://localhost:5173`).

## Verify a production build

```powershell
npm run build
```

Vite writes the deployable site to `dist/`.

## Push to your GitHub repository

Create an empty repository, then run these commands from this folder:

```powershell
git init
git add .
git commit -m "Create portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

`node_modules/` and `dist/` are excluded by `.gitignore`; they should not be committed.

## Deploy later

Import the GitHub repository into Vercel or Netlify, using `npm run build` as the build command and `dist` as the publish directory. You can also use GitHub Actions to deploy `dist` to GitHub Pages.
