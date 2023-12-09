importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

const { precacheAndRoute } = workbox.precaching;

CACHE_FILES = [{"revision":"2efbb41d7877d10aac9d091f58ccd7b9","url":"assets/AssetManifest.json"},{"revision":"dc3d03800ccca4601324923c0b1d6d57","url":"assets/FontManifest.json"},{"revision":"65e21b5db78a7c132bbb04776ec9c399","url":"assets/fonts/MaterialIcons-Regular.otf"},{"revision":"89ed8f4e49bcdfc0b5bfc9b24591e347","url":"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf"},{"revision":"bbf39143dfd758d8d847453b120c8ebb","url":"canvaskit/canvaskit.js"},{"revision":"42df12e09ecc0d5a4a34a69d7ee44314","url":"canvaskit/canvaskit.wasm"},{"revision":"96ae916cd2d1b7320fff853ee22aebb0","url":"canvaskit/chromium/canvaskit.js"},{"revision":"be0e3b33510f5b7b0cc76cc4d3e50048","url":"canvaskit/chromium/canvaskit.wasm"},{"revision":"95f16c6690f955a45b2317496983dbe9","url":"canvaskit/skwasm.js"},{"revision":"1a074e8452fe5e0d02b112e22cdcf455","url":"canvaskit/skwasm.wasm"},{"revision":"51253d3321b11ddb8d73fa8aa87d3b15","url":"canvaskit/skwasm.worker.js"},{"revision":"5dcef449791fa27946b3d35ad8803796","url":"favicon.png"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"flutter_service_worker.js"},{"revision":"6b515e434cea20006b3ef1726d2c8894","url":"flutter.js"},{"revision":"ac9a721a12bbc803b44f645561ecb1e1","url":"icons/Icon-192.png"},{"revision":"96e752610906ba2a93c65f8abe1645f1","url":"icons/Icon-512.png"},{"revision":"c457ef57daa1d16f64b27b786ec2ea3c","url":"icons/Icon-maskable-192.png"},{"revision":"301a7604d45b3e739efc881eb04896ea","url":"icons/Icon-maskable-512.png"},{"revision":"66642f85456ec05324a040a7c82e26f2","url":"index.html"},{"revision":"1ec55c6dc6d1209b3dc056f842ea90cb","url":"init.js"},{"revision":"4ad7906377241f5f775bd3f1e89352b8","url":"main.dart.js"},{"revision":"8e66e1314dbabf0aa13062137d7bf013","url":"manifest.json"},{"revision":"322dfa94430cc69aa45ce83495f46466","url":"version.json"},{"revision":"0f24c1b514014d80592c4788c8e09a18","url":"workbox-config.js"}] ?? [];

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
