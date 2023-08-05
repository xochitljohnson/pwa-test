// Geolocation
// window.addEventListener('load', () => {
//     navigator.geolocation.getCurrentPosition(handleLoad);
//     navigator.geolocation.watchCurrentPosition(handlePositionUpdate, handleError, options);
//    })

// window.addEventListener('unload', () => {
//     console.log('Location no longer tracked...')
//     navigator.geolocation.clearWatch(watchID)
// })

navigator.geolocation.getCurrentPosition(handleLoad);
navigator.geolocation.watchCurrentPosition(handlePositionUpdate, handleError, options);

  function handleLoad(geo) {
    const { latitude, longitude } = geo.coords;
    console.log(`Lat: ${latitude}, Lon: ${longitude}`);
  }


  function handlePositionUpdate(position) {
   
    console.log(position.coords);

  }

  function handleError(error) {
    console.error(error)
  }
  
  const options = {
    enableHighAccuracy: false,
    timeout: 100,
    maximumAge: 0,
  };
