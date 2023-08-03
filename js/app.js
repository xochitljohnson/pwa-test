// Make sure SW are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", handleSW);
}

// Call back function that will handle event listener
async function handleSW() {
  try {
    const register = await navigator.serviceWorker.register("../sw2.js");
     console.log("SW Registration complete", register);
  } catch (error) {
    handleError(error);
  }
}

export function handleError(error) {
  console.error(`You have an error: ${error}`);
}

