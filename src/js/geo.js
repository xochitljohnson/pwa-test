// Geolocation

if('geolocation' in navigator) {
  const options = {
    maximumAge: 10000,
    timeout: 5000,
    enableHighAccuracy:true
  }
  
  const geo = navigator.geolocation;
  
  geo.getCurrentPosition(handleGetPosition, handleError, options);
  geo.watchPosition(handlePositionUpdate, handleError, options);
  
  function handleGetPosition(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Lat: ${latitude}, Lon: ${longitude}`);
  }
  
  function handlePositionUpdate(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Update! Lat: ${latitude}, Lon: ${longitude}`);
  }
  
  function handleError(error) {
   const {code, message} = error
    if (code === 2) {
      console.log(`Error 2 but don't worry about it`)
    } return
  }
  
} else {
  alert('Your browser does not have Geolocation capabilities. Sorry!')
} return





