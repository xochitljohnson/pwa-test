// Call install event
// - The 'self' keyword referes to the sw global scope allowing you to handle events specific to sw lifecycle. There is also no access to window or document object.

const cacheName = 'v2'; //you'll have different versions of caches you'll want to keep track of

const cacheAssets = [
    'index.html',
    'about.html',
    '/css/style.css',
    '/js/app.js'
]

// self.addEventListener('install', handleInstall)


// // activate event
// self.addEventListener('activate', hanldeActivate)


// async function handleInstall(event) {
//     try {
//      const handleCache = event.waitUntil(caches.open(cacheName).then(cache => {
//         console.log(`SW: caching files`);
//         cache.addAll(cacheAssets).then(()=> self.skipWaiting())
//      }))
//      await handleCache
//     } catch (error) {
//     console.error(error)
//     }
//  }

 
// async function hanldeActivate(event) {
//     try {
//         // remove unwanted caches
//         event.waitUntil(caches.keys().then(cacheNames => {
//             return Promise.all(cacheNames.map(cache => {
//                 if (cache !== cacheName) {
//                     console.log('SW: Clearing old cache')
//                     return caches.delete(cache)
//                 }
//             }))
//         }))
//      await console.log(`Service worker has been activated`)
//     } catch (error) {
//     console.error(error)
//     }
//  }





// //  fetch event
// self.addEventListener('fetch', handleFetch)

// async function handleFetch(event) {
//     try {
//         console.log('fetching...')
//         const respond = event.respondWith(
//             fetch(event.request).catch(() => caches.match(event.request))
//         )
//     } catch (error) {
//         console.error(error)
//     }
// }