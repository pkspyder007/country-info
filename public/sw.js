const IMAGE_CACHE = "country-image-cache-v1";
const API_CACHE = "country-api-cache-v1";

self.addEventListener("install", () => {

});

self.addEventListener("activate", () => {
    console.log("Updating service worker");
})


//cache first 
self.addEventListener("fetch", event => {
    // console.log( event.request, " : ", event.request.url);
    // For images
    if(event.request.url.includes("https://restcountries.eu/data")) {
        caches.open(IMAGE_CACHE).then((imageCache) => {
            return caches.match(event.request).then(res => {
                if(res) console.log(`Cache hit for image : ${event.request.url}`);
                else console.log(`Cache miss for image : ${event.request.url}`);
                return res || fetch(event.request).then(response => {
                    imageCache.put(event.request, response.clone());
                });
            })
        });
    }

    // for country data (API)
    if(event.request.url.includes("https://restcountries.eu/rest/v2/alpha")) {
        caches.open(API_CACHE).then((apiCache) => {
            return caches.match(event.request).then(res => {
                if(res) console.log(`Cache hit for API request : ${event.request.url}`);
                else console.log(`Cache miss for API request : ${event.request.url}`);
                return res || fetch(event.request).then(response => {
                    apiCache.put(event.request, response.clone());
                });
            })
        });
    }


});