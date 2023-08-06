// Geolocation
// window.addEventListener('load', () => {
//     navigator.geolocation.getCurrentPosition(handleLoad);
//     navigator.geolocation.watchCurrentPosition(handlePositionUpdate, handleError, options);
//    })

// window.addEventListener('unload', () => {
//     console.log('Location no longer tracked...')
//     navigator.geolocation.clearWatch(watchID)
// })
const options = {
  maximumAge: 10000,
  timeout: 5000,
  enableHighAccuracy:true
}

navigator.geolocation.getCurrentPosition(handleGetPosition, handleError, options);
navigator.geolocation.watchPosition(handlePositionUpdate, handleError, options);

function handleGetPosition(geo) {
  const { latitude, longitude } = geo.coords;
  console.log(`Lat: ${latitude}, Lon: ${longitude}`);
}

function handlePositionUpdate(position) {
  console.log(position.coords);
}

function handleError(error) {
  console.error(error);
}

