window.addEventListener("load", handleBattery);
 
async function handleBattery() {
  function decimalToPercentage(decimalNumber) {
    let percentage = decimalNumber * 100;
    return percentage + "%";
  }

  try {
    let battery = await navigator.getBattery();
    let level = decimalToPercentage(battery.level);
    if (level = '100%') {
      const modal = document.getElementById('batteryCheck')
  
      modal.showModal()
    }
  } catch (error) {
    console.error("Error while getting battery information:", error);
  }
}
