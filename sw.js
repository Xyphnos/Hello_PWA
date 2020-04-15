let cacheName = 'hello-pwa';
let filesToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/main.js',
    './font/web fonts/amerika_regular_macroman/AMERIKA_-webfont.woff',
    './images/asd.png',
    './webfonts/fa-brands-400.eot',
    './webfonts/fa-brands-400.svg',
    './webfonts/fa-brands-400.ttf',
    './webfonts/fa-brands-400.woff',
    './webfonts/fa-brands-400.woff2',
    './webfonts/fa-regular-400.eot',
    './webfonts/fa-regular-400.svg',
    './webfonts/fa-regular-400.ttf',
    './webfonts/fa-regular-400.woff',
    './webfonts/fa-regular-400.woff2',
    './webfonts/fa-solid-900.eot',
    './webfonts/fa-solid-900.svg',
    './webfonts/fa-solid-900.ttf',
    './webfonts/fa-solid-900.woff',
    './webfonts/fa-solid-900.woff2',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', (e) => {
    e.waitUntil(
        ( async () => {
        try {
        const cache = await caches.open(cacheName);
        cache.addAll(filesToCache);
        } catch (e) {
            console.log('1', e.message);
        }

    })());
});

/* Serve cached content when offline */
self.addEventListener('fetch', (e) => {
    e.respondWith(
        ( async () => {
        try {
            const response = await caches.match(e.request);
            return response || fetch(e.request);
        } catch (e) {
            console.log('2', e.message);
        }

    })());
});