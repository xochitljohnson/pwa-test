window.addEventListener("load", handleBattery);

async function handleBattery() {
  function decimalToPercentage(decimalNumber) {
    const percentage = decimalNumber * 100;
    return percentage + "%";
  }

  try {
    const battery = await navigator.getBattery();
    const level = decimalToPercentage(battery.level);
    alert(`Your battery is at ${level}`);
  } catch (error) {
    console.error("Error while getting battery information:", error);
  }
}
