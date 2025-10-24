# Deployment Guide - GitHub Pages

This guide explains how to deploy the host MFE application to GitHub Pages.

## Automatic Deployment via GitHub Actions

The application is automatically deployed to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. **Enable GitHub Pages**:

   - Go to your repository settings: https://github.com/hemantajax/mfe-host/settings/pages
   - Under "Build and deployment", set:
     - Source: **Deploy from a branch**
     - Branch: **gh-pages** / (root)
   - Click Save

2. **Push your changes**:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

3. **Monitor deployment**:
   - Go to Actions tab: https://github.com/hemantajax/mfe-host/actions
   - Watch the "Deploy to GitHub Pages" workflow
   - Once complete, your app will be available at: **https://hemantajax.github.io/mfe-host/**

## Manual Deployment

You can also deploy manually from your local machine:

```bash
npm run deploy
```

This command will:

1. Build the application for production with the correct base href
2. Deploy to the `gh-pages` branch
3. Push to GitHub

## Configuration Details

### Base URL

- Production URL: `https://hemantajax.github.io/mfe-host/`
- Base href: `/mfe-host/`

### Module Federation Remotes

The production manifest points to these remote applications:

- Messages: `https://hemantajax.github.io/mfedemos/messages`
- Products: `https://hemantajax.github.io/mfedemos/products`
- Cart: `https://hemantajax.github.io/mfedemos/cart`
- Profile: `https://hemantajax.github.io/mfedemos/profile`
- Orders: `https://hemantajax.github.io/mfedemos/orders`
- Analytics: `https://hemantajax.github.io/mfedemos/analytics`
- Notifications: `https://hemantajax.github.io/mfedemos/notifications`

### Build Configuration

- Production build: `nx build dashboard --configuration=production`
- Output directory: `dist/apps/dashboard`
- Configuration in `apps/dashboard/project.json`:
  - `baseHref`: `/mfe-host/` (for routing)
  - `deployUrl`: `/mfe-host/` (for asset paths)

## Troubleshooting

### 404 Errors

If you get 404 errors after deployment:

- Ensure the `gh-pages` branch exists
- Check that GitHub Pages is enabled in repository settings
- Verify the base href is set correctly

### Module Federation Loading Issues

If remote modules fail to load:

- Check the remote URLs in `module-federation.manifest.prod.json`
- Ensure CORS is properly configured on remote servers
- Verify remotes are deployed and accessible

### Build Errors

If the build fails:

```bash
# Clean the build cache
nx reset

# Rebuild
npm run build:prod
```

## Files Modified for Deployment

1. **package.json** - Added `deploy` script
2. **apps/dashboard/project.json** - Added `baseHref` and `deployUrl` for production
3. **.github/workflows/deploy.yml** - GitHub Actions workflow
4. **apps/dashboard/public/.nojekyll** - Prevents Jekyll processing
5. **apps/dashboard/public/module-federation.manifest.prod.json** - Remote URLs

## Additional Commands

```bash
# Build for production
npm run build:prod

# Test production build locally
nx serve-static dashboard --configuration=production

# View build size analysis
npm run build:prod -- --stats-json
```

## Support

For issues or questions:

- Check the Actions tab for deployment logs
- Review the browser console for errors
- Ensure all dependencies are installed: `npm ci`
