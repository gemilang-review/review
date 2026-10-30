// 最简单的 service worker：只为了让手机把它当成可以安装的 App。
// 不缓存任何资料——分数、名单都在 Google 上，每次打开都是最新的。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
