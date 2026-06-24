self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("quiz-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/manifest.json"
            ]);
        })
    );
});