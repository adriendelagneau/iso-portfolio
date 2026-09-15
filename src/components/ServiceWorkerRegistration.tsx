"use client";

import { useEffect } from "react";

// Registers public/sw.js. The worker itself does no caching — it exists so
// Chrome's installability criteria (a fetch-handling service worker) is met
// and the automatic "Add to Home Screen" prompt can fire.
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register("/sw.js").catch((err) => {
      console.error("Service worker registration failed:", err);
    });
  }, []);

  return null;
}
