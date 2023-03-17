


// Define el nombre del cache
const CACHE_NAME = 'wwwroot-cache';

// Define la lista de archivos para ser cacheados
const urlsToCache = [
  './',
  './index.html',
  './wwwroot/css/site.css',
  './wwwroot/js/site.js',
  './wwwroot/img/pwa/icon-48x48.png',
  './wwwroot/img/pwa/icon-72x72.png',
];

// Instala el Service Worker y agrega los archivos al cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {

        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las solicitudes y busca en el cache si hay una respuesta
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si hay una respuesta en el cache, la devuelve
        if (response) {
          return response;
        }
        // Si no, hace la solicitud a la red y agrega la respuesta al cache
        return fetch(event.request)
          .then(response => {
            // Verifica que la respuesta sea válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            // Clona la respuesta para poder agregarla al cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});

// Elimina cualquier versión antigua del cache cuando se activa una nueva versión
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});
