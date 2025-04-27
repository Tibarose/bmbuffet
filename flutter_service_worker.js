'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0ee4534d43e20736af559675e45e71c5",
".git/config": "3f47d7ccb29c6e80b325bba955d00df4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "acd78eafd2093a745ea0494f5d52561d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "35dd8ba4e77044bde6c859fc1f8e1076",
".git/logs/refs/heads/gh-pages": "35dd8ba4e77044bde6c859fc1f8e1076",
".git/logs/refs/remotes/origin/gh-pages": "f292fe30af25381364cb8575a49f91d0",
".git/objects/01/3558fcb4d728b0cbe47f81aa50ac34dba9ec54": "7308aa54e9a721c001683a1f2a4b0729",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/e9ee5a8c5d29e28e9da82ab56bf706a4d0d7f0": "47b5f79de2843cfb595c10cdfb8d5128",
".git/objects/0f/28d10a77b85778b9d0c427ae4545f98e1c3616": "6845c0d08f1d3549bb751f04be12fdda",
".git/objects/11/df0d2f442e58d8bd3cf2ffe8a2dbcbaea6068d": "ecf6cdeaec3db5a0866ea45930d6cc15",
".git/objects/15/6bf72bdef09510d4ec1bb8c6ca32efcc72ab6a": "c5e2827b5032c0a5725be85227999389",
".git/objects/15/9a2c087029847da0cf26e567f88bb004fcc972": "a6128ea951c6b1e51e30a1458fdcec99",
".git/objects/15/d3d9fd1c4f95397118bdf787eafb171217dff5": "8161cc196a464b2be7733c203ac70d2f",
".git/objects/16/89900eab8a1c4d264d52728e9803abe6601bac": "f73f3b9238e1cd89ad44633368552e21",
".git/objects/23/1ea97e8f1c6a46707fa863bb47a3641d256617": "8eb7d12c064aa0e1ef528be15411dd7d",
".git/objects/29/8fb154f934a6607355dc7c78748698c09866ce": "7c7babbd6a02d2083fbd9f9f2d8c9d8c",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/133374ffe0c25a2f7dda65607dd2cf3d2967a6": "c355832dbcdb98a9d1c328952bc94b71",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/40d36c5a68d6bab5ddeab03c1d9fab95b0e6c1": "0cc88299a3a0e54fa03c7a53abc705d5",
".git/objects/3e/bcf15a565d27a443a2cba1609810811f6c4283": "7c179c083d3baa9f69c808aa1f4797fe",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/81b7bf750d644a86ca129569d71644e3e7a07b": "4e24da05ca33c5147575af5b65a06ad7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7510c364a58a0c0df79767df05601b812116ab": "478a169bc695edb4b243f7f99af97140",
".git/objects/4d/36abb26342125a782067ecfc29826cfcdc18d3": "24f5de9106f361305be9b850603c68fd",
".git/objects/4e/7c2bacf406d2e273c135997196837c421cfa5c": "8490cd8f0b4b1272e19eda2a8816d0ed",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/54/35390d088962542eabf4e4fedc33b213b08563": "860eee7cbd2ec4f73252bdef710cefa7",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/db09e360c3337f5510912c5484ccd9abce05ec": "40e94e9a37b52b15e57b83748fdf3de9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/37200ecc798762675f84e825e6112058839905": "18ce083a9d7889852ab239a3f95de78c",
".git/objects/6d/ff982cff3b06281fac5aa5c0c2e03b68b6c17a": "fd4875aa3201372db694592fe8e0abc0",
".git/objects/6f/b2a9ff27c43f11bcf9397b0b6faf62c785a1e7": "bb3f0f5891a89d4e45440f539e5951e0",
".git/objects/71/545996b56625192775bb519bd2538b75c18c6d": "440569dfac481d248e2d63a49b4e2052",
".git/objects/76/fe0068585e6afc1cca6b6518c3ac108f807f3c": "fa86c0cdf27c5cf976244ae5dfa34aac",
".git/objects/79/c75d2a71c20a257d4e814235c3784ee0d9ba3c": "db4d9c03e287c302146bf101c58878b8",
".git/objects/7a/d06b0bd140e132297b7cd15d42a1ccf8a477d4": "4494d5ada862709005793c6ef31dfeba",
".git/objects/84/5ba216a17e780a30ddd588bf86fa3f2cc98bfe": "d486d0fb9ae1f4aca34f9f065fb84dab",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8c/7f13e75144f8e8379e7f5c2cc84e647bfd328d": "9303b27838e36e6ef074d6d2e046dab3",
".git/objects/91/00bb449bd3a8d64ad0580ecad1cdfc91af93ba": "d898969f5e7993b1d08f80a99bd9edcd",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/8cda848b85322db7af3f2f1650b780397b7af7": "c3b2c77f9b433ab0d562af22ee05dae2",
".git/objects/91/a5652d47148e5060397675ae9232aba1c82462": "ddd47d72e0a87648d5388832085bc459",
".git/objects/92/479c430ff03bf1ce5f39244a37c3780d9ec21a": "1d7a57483f7adb179945a9681bf40db4",
".git/objects/99/a8ca1fd016c5c01134dc03815593a5d9ca1bcd": "2480e34633525d05aa4ce5a9b16acdcd",
".git/objects/99/ff70148d567948f1456cb406f1c1fed68b9717": "aae389baf507d201245aa53a7c9b01e0",
".git/objects/a0/c74c4d7c9ea7de9de21946588589a69f40ed95": "5aeef99569ef2722133ab76692a81efb",
".git/objects/a1/0fbf974062a581328955c6403a50e7138bebf6": "ac2bc311b96b136210a2ea582854aa47",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/687c1a10d71c6cc29827f17d0631af9bf00a69": "f1ac0ffa96ab60beb7911a1f26fa9cfa",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b6/0ed67986caeb662f0ff4dbf6325ebfabd2b86a": "f3155e6714c5dc212e7b02de5ae5b56c",
".git/objects/ba/5f7e3cc75c0585836b56c43c2fa0ff035d6dd1": "f1fd96023f3e01d06abac1baaff54ee8",
".git/objects/c6/e20f015c3e484801bc44410e0102748177a735": "46ea1db30a3f2175789651b3c56d9eb5",
".git/objects/c8/a57311cbe8661d16e881613faf1ade55b85816": "d08663aacb11848f129b69ea25b99412",
".git/objects/cb/79e31f309ea80af8f0b912584d659982c4dd29": "1322ca9d58abc7dcba6f9af0dc2bf928",
".git/objects/cc/4d9bb89680cce5aff760d528e8278a3c8748fc": "9a3971fac885a6e16e4ba31c76ad0625",
".git/objects/d4/0bc32b08f7fa8f3826761c8af6b24763802008": "6f03991563844bd0980250c36ae9110f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/65feba8160c5c3ceeded33eab8e147d502cc16": "9027970208384387491df33d221d8a9b",
".git/objects/d5/8cecf2d9eefbaab486be5e150e2d203f34f275": "bc65f2e94a9a573d0b58601682eac483",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/db/84da5812bb7f07d5c79d11ea969085356fc891": "730987e6dae30765b0bacac112daa09e",
".git/objects/e4/c27542f669de6cfee3b0ffb263f97925d675bd": "3b24bf5a03d5e974b36b88d362b6e672",
".git/objects/e5/a7d6489128a5e85a66f2efcc58cd69305ef8fe": "9fdcbc1257a15a8af9e8eca8cbdd0077",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f0/84ca075e22e90f2050407dec824ec605adb366": "430c7ca8bde1db18d0de665b41838e4c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/271d784002a17891789b0d35b34562d4d5ccd1": "65173cb55af1a80e2ef196640c482095",
".git/refs/heads/gh-pages": "0026bc4b604a32be2212ee83b67e6188",
".git/refs/remotes/origin/gh-pages": "0026bc4b604a32be2212ee83b67e6188",
"404.html": "0d0c873130bdc854ae3af13c8d08ffbb",
"assets/AssetManifest.bin": "2e796dd8ba61fee485804a12d9adf431",
"assets/AssetManifest.bin.json": "d7b78ea118cd85339bba173aee53b3a8",
"assets/AssetManifest.json": "23aea16ac4082bfd5633858f9a831cc4",
"assets/assets/moon.svg": "a37efe9a5b59affd23da92352da5d59f",
"assets/assets/sun.svg": "da58cfa1dd3b68ebe454ee4cabfd3080",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "107c30673d0ce447f9005dd3e7f7d778",
"assets/NOTICES": "80cb886194ca7c178185306e890cd826",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "24290e0b7d6ec11863e74e9862635fbf",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "023779ace53b2f93eb9a5a936effb74a",
"icons/Icon-192.png": "7c9694dbf68cab3f4886ddff710961a2",
"icons/Icon-512.png": "7c9694dbf68cab3f4886ddff710961a2",
"icons/Icon-maskable-192.png": "7c9694dbf68cab3f4886ddff710961a2",
"icons/Icon-maskable-512.png": "7c9694dbf68cab3f4886ddff710961a2",
"index.html": "3f5b3d7140d6f2bf60c1144cd74e1b8d",
"/": "3f5b3d7140d6f2bf60c1144cd74e1b8d",
"main.dart.js": "09f8fa946ec454515d7bde19c4071a41",
"manifest.json": "d4d2b58c5e57e4d41d08b576fb71dbf5",
"notification_helper.js": "3e38f963f5f7aecda819a2037b4c50d3",
"version.json": "4cfce3009434e8565e0a44da8be28883"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
