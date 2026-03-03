import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// ⚠️ IMPORTANT: Replace __REPO_NAME__ with your actual GitHub repository name
// e.g., if your repo is https://github.com/davisgulf7/my-new-app
// then replace __REPO_NAME__ with 'my-new-app'

export default defineConfig({
    base: '/__REPO_NAME__/',
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['vite.svg'],
            manifest: {
                name: 'GulfStudios PWA App',
                short_name: 'App',
                description: 'A progressive web app by GulfStudios',
                theme_color: '#ffffff',
                start_url: '/__REPO_NAME__/',
                scope: '/__REPO_NAME__/',
                display: 'standalone',
                background_color: '#ffffff',
                icons: [
                    {
                        src: 'vite.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    },
                    {
                        src: 'vite.svg',
                        sizes: '512x512',
                        type: 'image/svg+xml'
                    }
                ]
            }
        })
    ]
});
