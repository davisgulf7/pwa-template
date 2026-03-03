# GulfStudios PWA Template

This is a ready-to-use template repository for creating Progressive Web Apps (PWAs) using Vite and Vanilla JavaScript. It is pre-configured with the `vite-plugin-pwa` module, a GitHub Action for automatic deployment to GitHub Pages via the `gh-pages` branch, and correct relative base pathing.

## Quick Start Setup (60 Seconds)

When you clone or "Use this template" to create a new repository, follow these exact steps to ensure everything works perfectly:

### 1. Find and Replace Repo Name

You MUST update the references to your GitHub repository name so the automated deployment and offline service worker can find your files.

* Open `vite.config.js`
* Find `__REPO_NAME__` and replace it with your exact new repository name.
* **Example:** If your new repo URL is `https://github.com/davisgulf7/my-new-game`, you would replace `__REPO_NAME__` with `my-new-game`. (There are three instances to replace in that file).

### 2. Swap Your Icons

The `public` folder contains placeholder icons. For your PWA to be installable on mobile devices, you need real icons.

* Replace the `vite.svg` file in the `public` folder with the icon for your new app. Make sure your manifest inside `vite.config.js` points to the correct filenames if you change them.

### 3. Deploy

This repository uses an automated GitHub Action to deploy your site.

1. Push your changes to the `main` branch.
2. Wait 60 seconds for the GitHub Action to run.
3. Go to your repository settings on GitHub -> **Pages**.
4. Under "Build and deployment", ensure the "Source" dropdown is set to **Deploy from a branch**.
5. Ensure the branch is set to **`gh-pages`** (this branch is created automatically by the Action).
6. Save and view your live site!

## Development Scripts

* `npm run dev` - Start local development server
* `npm run build` - Compile for production into the `dist` folder
