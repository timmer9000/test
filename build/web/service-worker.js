importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

const { precacheAndRoute } = workbox.precaching;

CACHE_FILES = self.__WB_MANIFEST ?? [];

precacheAndRoute(CACHE_FILES);

self.addEventListener("install", function (event) {
  self.skipWaiting();
  console.log("installed");
});

self.addEventListener("activate", () => {
  console.log("activated");
  console.log("Claiming control");
  return self.clients.claim();
});
