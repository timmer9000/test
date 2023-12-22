flutter build web --pwa-strategy none --release
workbox injectManifest web/workbox-config.js
flutter run -d chrome --web-port 8081