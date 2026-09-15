// Registered purely to satisfy Chrome's installability criteria (the
// automatic `beforeinstallprompt` banner still wants a service worker with
// a fetch handler, even though menu-based "Install app" stopped requiring
// one in Chrome 108/112 — see developer.chrome.com/blog/update-install-criteria).
// No caching: this site's assets (3D models, textures, video) change often
// and are heavy — a real offline cache is a separate, deliberate feature,
// not a side effect of ticking the install-prompt box. Every request just
// passes straight through to the network.
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
