# GitHub Pages Hosting Guide for Portfolio

This guide will walk you through deploying your React + Vite portfolio to GitHub Pages.

## 📋 Prerequisites

- [x] Portfolio code uploaded to GitHub repository
- [ ] GitHub account with repository access
- [ ] Node.js and npm installed locally

## 🚀 Deployment Steps

### Step 1: Update Vite Configuration

You need to configure Vite to work with GitHub Pages by setting the correct base path.

**Edit `vite.config.js`:**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'portfolio' with your repository name
  css: {
    postcss: './postcss.config.js',
  },
})
```

> [!IMPORTANT]
> Replace `'/portfolio/'` with `'/your-repo-name/'`. If your repository is named differently, use that name. The base path must match your GitHub repository name exactly.

> [!NOTE]
> If you're using a custom domain or deploying to `username.github.io`, set `base: '/'` instead.

---

### Step 2: Add Deployment Script to package.json

Add a deploy script to automate the build and deployment process.

**Update `package.json` scripts section:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "vite build && gh-pages -d dist"
  }
}
```

---

### Step 3: Install gh-pages Package

Install the `gh-pages` package as a development dependency:

```bash
npm install --save-dev gh-pages
```

This package handles the deployment to the `gh-pages` branch automatically.

---

### Step 4: Update .gitignore (Optional)

Ensure your `.gitignore` file includes the `dist` folder to avoid committing build files:

```
# Build output
dist
dist-ssr
```

Your current `.gitignore` already includes this, so no changes needed.

---

### Step 5: Build and Deploy

Run the following commands to build and deploy your portfolio:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The `deploy` script will:
1. Build your project to the `dist` folder
2. Push the contents to the `gh-pages` branch
3. Make it available on GitHub Pages

---

### Step 6: Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

> [!TIP]
> GitHub Pages will automatically deploy whenever you push to the `gh-pages` branch. The deployment usually takes 1-2 minutes.

---

### Step 7: Access Your Live Portfolio

Your portfolio will be available at:

```
https://your-username.github.io/your-repo-name/
```

For example, if your username is `johndoe` and repository is `portfolio`:
```
https://johndoe.github.io/portfolio/
```

---

## 🔧 Alternative Deployment Methods

### Method 1: GitHub Actions (Recommended for CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # or master, depending on your default branch

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Then configure GitHub Pages to use GitHub Actions:**
1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**

> [!WARNING]
> If using GitHub Actions, you don't need the `gh-pages` package. Remove the `deploy` script from `package.json`.

---

### Method 2: Manual Deployment

If you prefer manual control:

```bash
# Build the project
npm run build

# Navigate to dist folder
cd dist

# Initialize git (if not already)
git init
git add -A
git commit -m 'Deploy'

# Push to gh-pages branch
git push -f git@github.com:username/repo-name.git main:gh-pages

cd ..
```

---

## 🛠️ Handling Environment Variables

Your portfolio uses environment variables (`.env` file). For GitHub Pages:

> [!CAUTION]
> Never commit sensitive API keys to GitHub. GitHub Pages is for static sites only.

**For EmailJS or similar services:**

1. **Option A**: Use public keys (recommended for EmailJS)
   - EmailJS provides public keys safe for client-side use
   - Configure in EmailJS dashboard

2. **Option B**: Use GitHub Secrets with Actions
   - Add secrets in **Settings** → **Secrets and variables** → **Actions**
   - Reference in workflow: `${{ secrets.YOUR_SECRET }}`
   - Inject during build using environment variables

**Example for GitHub Actions:**

```yaml
- name: Build
  run: npm run build
  env:
    VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
    VITE_EMAILJS_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_TEMPLATE_ID }}
    VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
```

---

## 🐛 Troubleshooting

### Issue: Blank page after deployment

**Solution**: Check the `base` path in `vite.config.js` matches your repository name.

```javascript
base: '/your-exact-repo-name/'
```

### Issue: 404 errors for routes

**Solution**: Add a `404.html` file in the `public` folder that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/portfolio'">
  </head>
  <body>
  </body>
</html>
```

Then update `App.jsx` to handle the redirect.

### Issue: Assets not loading

**Solution**: Ensure all asset paths are relative or use Vite's asset handling:

```javascript
// Good
import logo from './assets/logo.png'

// Avoid absolute paths
// Bad: /assets/logo.png
```

### Issue: CSS not applying

**Solution**: Clear browser cache or check if PostCSS/Tailwind is building correctly:

```bash
npm run build
npm run preview  # Test the production build locally
```

---

## 📱 Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Create a `CNAME` file in the `public` folder:
   ```
   www.yourname.com
   ```

2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `your-username.github.io`

3. In GitHub Settings → Pages, add your custom domain

> [!TIP]
> GitHub provides free SSL certificates for custom domains automatically.

---

## ✅ Deployment Checklist

- [ ] Update `vite.config.js` with correct `base` path
- [ ] Install `gh-pages` package
- [ ] Add `deploy` script to `package.json`
- [ ] Run `npm run build` to test build locally
- [ ] Run `npm run deploy` to deploy
- [ ] Configure GitHub Pages settings
- [ ] Verify deployment at `https://username.github.io/repo-name/`
- [ ] Test all features (navigation, forms, animations)
- [ ] Check mobile responsiveness
- [ ] Verify environment variables are working

---

## 🔄 Updating Your Portfolio

Whenever you make changes:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build and deploy
npm run deploy
```

Or if using GitHub Actions, simply push to main:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 📚 Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)

---

## 🎉 Success!

Your portfolio should now be live on GitHub Pages! Share your link and showcase your work to the world.

**Example URL**: `https://your-username.github.io/portfolio/`

> [!NOTE]
> First deployment may take 5-10 minutes. Subsequent deployments are usually faster (1-2 minutes).
