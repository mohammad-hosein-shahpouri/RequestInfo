export function RegisterServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/RequestInfo/sw.js");
    });
  }
}