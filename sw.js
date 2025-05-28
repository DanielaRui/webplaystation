const CACHE_NAME = 'playstation-pwa-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/juegos.html',
  '/info.html',
  '/css/index.css',
  '/manifest.json',
  '/script.js',
  '/assets/wallpaperplay.jpg',
  '/assets/ps_trailer.mp4',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Instalación: cachear recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Activación: limpiar cachés antiguas si es necesario
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// Interceptar solicitudes y servir desde caché cuando sea posible
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Si está en caché, lo devuelve; si no, lo busca en red
      return response || fetch(event.request);
    })
  );
});
