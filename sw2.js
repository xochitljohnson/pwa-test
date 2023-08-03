// Caching the whole site
const cacheName = 'v1';

// Event invocations
self.addEventListener('install', handleInstall)
self.addEventListener('activate', handleActivate)
self.addEventListener('fetch', handleFetch)

// Callback functions

async function handleFetch(event) {
    try {
        console.log('fetching...')
        await event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        )
    } catch (error) {
        console.error(error)
    }
}

async function handleInstall(event) {
    try {
    
    
    } catch (error) {
    console.error(error)
    }
 }

 
async function handleActivate(event) {
    try {
        // remove unwanted caches
        event.waitUntil(caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                if (cache !== cacheName) {
                    console.log('SW: Clearing old cache')
                    return caches.delete(cache)
                }
            }))
        }))
     await console.log(`Service worker has been activated`)
    } catch (error) {
    console.error(error)
    }
 }

async function handleFetch(event) {
    try {
      event.respondWith(fetch(event.request).then(response => {
        // Make clone of response
        const resClone = response.clone();
        // Open cache
        caches.open(cacheName).then(cache => {
            // Add response to cache
            cache.put(event.request, resClone)
        });
        return response;
      })).catch(err => caches.match(event.request).then(response => response))
    } catch (error) {
        console.log(error)
    }
}