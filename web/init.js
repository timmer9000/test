window.addEventListener('load', function(ev) {
    // Download main.dart.js
    _flutter.loader.loadEntrypoint({
      serviceWorker: {
        serviceWorkerUrl: './service-worker.js',
        serviceWorkerVersion: serviceWorkerVersion,
      },
      onEntrypointLoaded: function(engineInitializer) {
        engineInitializer.initializeEngine().then(function(appRunner) {
          appRunner.runApp();
        });
      }
    });
  });
  