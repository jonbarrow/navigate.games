// TODO - Add an option to download all the site data for offline mode. Otherwise images/videos that haven't loaded in before won't be cached
// TODO - Add the ability to update the cache, without clearing the site data, so caches can be updated without losing POI tracking

const CACHE_NAME = 'mario-kart-world-map-v1';
const URLS_TO_CACHE = [
	'/',
	'/mario-kart-world',
	'/assets/images/map/base.webp',
	'/assets/images/icons/p-switch.png',
	'/assets/images/icons/question-panel.png',
	'/assets/images/icons/peach-medallion.png',
	'/assets/images/icons/yoshi-food.webp',
	'/assets/images/icons/coin-stack.png',
	'/assets/images/icons/github.png',
	'/assets/images/icons/favicon-96x96.png',
	'/assets/images/icons/favicon.svg',
	'/assets/images/icons/favicon.ico',
	'/assets/images/icons/apple-touch-icon.png',
	'/assets/data/pois/mario-kart-world/missions.json',
	'/assets/data/pois/mario-kart-world/panels.json',
	'/assets/data/pois/mario-kart-world/medallions.json',
	'/assets/data/pois/mario-kart-world/yoshi-foods.json',
	'/assets/data/pois/mario-kart-world/coin-stacks.json',
	'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css',
	'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return Promise.allSettled(URLS_TO_CACHE.map(url => cache.add(url)));
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			if (response) {
				return response;
			}

			const fetchRequest = event.request.clone();

			return fetch(fetchRequest).then((response) => {
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, response.clone());
				});

				return response;
			}).catch((e) => {
				// * This should never happen, but handle it anyway
				if (event.request.destination === 'document') {
					return new Response(
						`<html>
							<head>
								<title>Offline - Mario Kart World Map</title>
							</head>
							<body>
								<h1>You're offline</h1>
								<p>Please check your internet connection and try again.</p>
								<button onclick="window.location.reload()">Retry</button>
							</body>
						</html>`, {
							headers: { 'Content-Type': 'text/html' }
						}
					);
				}

				throw e;
			});
		})
	);
});
