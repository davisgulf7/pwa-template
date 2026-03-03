import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Demo Interaction
    const btn = document.getElementById('demo-btn');
    const output = document.getElementById('demo-output');

    btn.addEventListener('click', () => {
        output.textContent = 'JavaScript is securely linked and modifying the DOM!';
    });

    // PWA Service Worker Registration & Reload UI
    if ('serviceWorker' in navigator) {
        import('virtual:pwa-register').then(({ registerSW }) => {
            const pwaToast = document.getElementById('pwa-toast');
            const pwaRefreshBtn = document.getElementById('pwa-refresh');
            const pwaCloseBtn = document.getElementById('pwa-close');

            let updateServiceWorker;

            updateServiceWorker = registerSW({
                // Change to 'prompt' so we can control when the update happens via our UI toast
                onNeedRefresh() {
                    console.log('New content available, showing update prompt.');
                    pwaToast.classList.remove('hidden');
                    // Small delay to allow display:block before fading in
                    setTimeout(() => pwaToast.classList.remove('opacity-0'), 10);
                },
                onOfflineReady() {
                    console.log('App is ready to work offline.');
                },
                onRegistered(r) {
                    console.log('SW Registered:', r);
                },
                onRegisterError(error) {
                    console.error('SW registration error:', error);
                }
            });

            // If the user clicks 'Reload', tell the SW to update and refresh the page
            pwaRefreshBtn.addEventListener('click', () => {
                if (updateServiceWorker) {
                    updateServiceWorker(true);
                }
            });

            // If the user clicks 'Close', hide the toast
            pwaCloseBtn.addEventListener('click', () => {
                pwaToast.classList.add('opacity-0');
                setTimeout(() => pwaToast.classList.add('hidden'), 300);
            });
        }).catch((error) => console.error('Service worker registration import failed:', error));
    }
});
