flutter build web --pwa-strategy none --release
workbox injectManifest web/workbox-config.js
flutter run -d web-server --web-hostname 192.168.0.211 --web-port 8086