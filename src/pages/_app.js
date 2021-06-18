import { useEffect } from 'react';
import '../styles/globals.css'

function loadServiceWorker() {
  if("serviceWorker" in navigator) {
    console.log("Registering service worker");
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js", { scope:  "/"})
        .then((registration) => {
          console.log(`Service Worker registered with scope: ${registration.scope}`);
        }, (err) => {
          console.error(err);
        })
    })
  }
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    loadServiceWorker();
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
