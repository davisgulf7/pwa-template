import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('demo-btn');
    const output = document.getElementById('demo-output');

    btn.addEventListener('click', () => {
        output.textContent = 'JavaScript is working perfectly!';
    });

    // PWA Service Worker Registration
    if ('serviceWorker' in navigator) {
        import('virtual:pwa-register').then(({ registerSW }) => {
            registerSW({ immediate: true });
        }).catch((error) => console.error('Service worker registration failed:', error));
    }
});
