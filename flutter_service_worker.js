'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "68d7cd08d575eed6cd80c9de6ffcde24",
".git/config": "1b71c0d6ff811eada65012fcb3f265a4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "dec7bd80f8806c74f7a1ef92ddd417b7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f044281ad3b13796ec33d1e92f13392c",
".git/logs/refs/heads/main": "bb89d792956f281ae2e70a1fe69c7b30",
".git/logs/refs/heads/master": "260eda5cdc547df2765ed09c948527ca",
".git/logs/refs/remotes/origin/main": "508f315d73903e1c8ea8ab4dc16e9bd5",
".git/objects/0e/6341a6078702dcbf1a69684b8b5de3b3600a19": "c17ff1dc445dd3b0b70119864fb2e0c1",
".git/objects/0e/a921eca6fc9427f62c152566e27bbaad2d0974": "92d1d3e149b8a78bbf07b50852d0e36d",
".git/objects/0f/03f08b3acc8adc41e779491d8c5f5c525531f0": "c0ed4d23f211a8e5aca983b73c1f0fd5",
".git/objects/18/3e34a592d2304bed40a2764ae69fe5bcb41c37": "e7088a4dea2485f397730c02fb80cc74",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1b/47c233d3d7ec31bc0e51a5fd7ade060e3dbd55": "9da64bfeb148ff4bcd75b28a722b69f3",
".git/objects/1d/f5ab2adf1979591f4bf4b23b608ffc0ab16b34": "49d587ad756965ce18d41bc09f1b11e4",
".git/objects/1f/7c9e0af657789d3b9e41baa4497ffbd4284b3e": "ffb2e742d54ff40cd1b28dd5a2538503",
".git/objects/21/f49a6793aab769be636807ab07b9fbd187e985": "4e6e3da1db0a66ac67227249f39ae66f",
".git/objects/24/bed0f413fe6ac6f6ec6ce2aaa5ff66d24c1be5": "b372884257c64dc62942f71472e97d04",
".git/objects/2c/e4edad84d019b7914cbfd8c496a0ee5a6bd34d": "bd16dd11a16c9bc5a726400bc38e2fdf",
".git/objects/37/efdc8b22142d62859b30bfd32fad941313b6a1": "3e724662f28590bc7c213ee7c2f6fd15",
".git/objects/47/8f74fa40aebce3daf7a2253b8a8f45968b1190": "f078522ff68d827546aba0e26d3c96ba",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/ecfc4310e0700b0f94e906d74d7f0763ae14d8": "3622b6fa186e39efa6ceca187d0963e9",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/37bb33cfc4f97aec27d6c35e5366cf4f2615d1": "296f51e51324602ad7211c2f83ddeca0",
".git/objects/54/4beeb20c5d1a8c4c53dab8f209a2aafd0eca41": "10585416e0962809750c2d19a076ed6f",
".git/objects/55/ea4d979fc8d4cb5897bc51a1d0d001e6da8712": "f7b7cae3d77db6648a2f821258ee1469",
".git/objects/67/08c245dc196ca0db52f805e033b0abd8adc915": "5ce1aa0847c5f0ed6a0bcac638b0033d",
".git/objects/6e/9ee8ffbcdca333728ed405a0acbeb90818f4ae": "b699fec25d6bec27532600ce6f9bef93",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/b668dbb9890d4fc6585524c582af4f9914a5c1": "4bc0f159a2a5bf1ea1934ff35050947d",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/aa253b89df4be7f4d6146be8c599e314101e5c": "fa3f1377c9c4149c1e058f1c8c1a5ca7",
".git/objects/7f/3d4b090ba5a4b146cefb1944a0c2a9ddd49fc7": "f321a21b7de48d4b38466e9c0425adc3",
".git/objects/81/95c7879567c6f47300bec6dc0fe78c1cbf60a7": "e9da75cf0f3734140332eaff7e438943",
".git/objects/82/15f81e1163af47817f14b12e84128e6324ef88": "961458773e7f83cef84db8e3e0ef82a6",
".git/objects/84/83a0e9b2bde318070201128c26bfb8367fa9b2": "85f43a107c858b200dece9550b470b97",
".git/objects/8a/8611a5836243678f08e7b5081afee916be03b9": "6551043f49adab67a6b2923b0098ad6e",
".git/objects/8b/464a08064b790f616a160fcd60b37fd2914012": "7646edae047fd0395c1990c483bea263",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/f1e68020f8c3da0da593b587302e6385cf2ca5": "c502183fd03f948986fadd860c8c0d43",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/98/c427259099950d5f545e5914a5a30a19a88ad3": "ec62452aa8cd2eea3aa628f692d1bf4a",
".git/objects/9a/7d8718d25c660abead8d53d48ea495a05f947f": "f3dd2c87c46126a8157cfe68be91178f",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/e3fec896aa2cf9638b595f61c84e6d5bc8ba6d": "66f2c00a53e69ec99713a62d2602b9af",
".git/objects/9f/6bbb0af10c77eeb4fe532df85ed6e79502861f": "71b045ce26586e14e925cd90f7ebe3a1",
".git/objects/a0/7714a47c4e33a7e9014efe0634daf77d2072bd": "0adc321ba1dcdd310771cfa31baec9d6",
".git/objects/a3/9d3789ef6cbb5cd29f317d0c0d72e981545f4b": "766e12e49029b34cfaf4ce4aeb16fb5f",
".git/objects/aa/c0ff767b808c9a5deac16633d1f185330c1c57": "3b6721dd0e5a9c56a9955865bc9ef1cd",
".git/objects/b1/c3e2634761da4c1a6f16c0707f1f57b2327d38": "b0a6c83c206eea11112fd1d02d852917",
".git/objects/b3/9f051a80b8f5c9fa63a97e023a75e259b9fc62": "70ab7406d52d71e650ccce2a3a2d3d6e",
".git/objects/b6/073a27c90d6b9861caf1bbe9649aa3eb0a15b4": "9a498b4d625d21ac84f6338db4fbf408",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/dd144f5bb0bd370df175a0e32a1998fe4a7cd7": "8848f321eda35b73dbc58d56f3817780",
".git/objects/c0/6cadc78973c468225c35dda26ac7b16b064d3c": "6fb4cd0fb8d4a6b6c82a421603eb6ea8",
".git/objects/c5/712b0763276474a247fc27f29c5d0868cba2c6": "82bf4e6af73b62fde2affbe60b8d5634",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cc/d556fe113c11102920a704647420019f40b88d": "d2728b1f3de73dfccf21e6b84732d372",
".git/objects/d0/5cef5c3081f4c4973e654f5c165dda0b7534fb": "97f375c5fa895253be44c6743c9da300",
".git/objects/d1/b4658cbc382d180a93bac34be9f0d96683de41": "e4898e3fb57586d39bc5b771d30f77cb",
".git/objects/d3/3e2bb7681d1e343549da4369ecb118a1fe88bd": "71ab1a8dc0bf490d875e397e5be01edf",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d7/9e5adb2fd5c3c6cdc63bf5d2c9481bf9bc0a93": "5c0ea921e51f7412d7e5b2b65bde4662",
".git/objects/db/d5ee556c586dfdca62991b1bc0fed7b3ab21c9": "93dc947ecd1f8a51c838308a723e553d",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/5b9673a5d90170512a8f338ae33bf36e335082": "14477d166f09f502ce153324d8717af3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/30cf836a1ff4cc7ccc7d293bdb609482881509": "8285fd7c864c1a842afb202d51fb45ba",
".git/objects/e5/50f52f592f07fb546a51be133b3819904b4615": "4c49dc2773ff9327507f51270dd5d513",
".git/objects/e7/31e9cf917ab9d36986091806a9d13433a5b795": "c62fa1667559ca9798e25f0cf58781f7",
".git/objects/e7/8f76812b454e5115a300573c1737555a012b0f": "a0b18c9b57b3b3ea4f1e8eaa54f0cf09",
".git/objects/ee/66da1115a19781d93e3940681299b935302c23": "43eb334161378dfed1c3a906e8e986b3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/66b93b3f28f45addcfba52bba32014d0240959": "4c48f09bb63611de370f995743d1944e",
".git/refs/heads/main": "5f5a943680dd826eec6c8333e90ac506",
".git/refs/heads/master": "5f5a943680dd826eec6c8333e90ac506",
".git/refs/remotes/origin/main": "5f5a943680dd826eec6c8333e90ac506",
"assets/AssetManifest.bin": "36ea094b150778d22cf1eae0f93ad2cc",
"assets/AssetManifest.bin.json": "ac8d4603c21c5651a6d15317499ac026",
"assets/AssetManifest.json": "3755c39f26af565eb4d9fe819bebc71a",
"assets/assets/document/color.json": "507b038046f10e9ea7479c9239310cec",
"assets/assets/document/language/en.json": "4eb90f863479ebd20222c4aed0f7086e",
"assets/assets/document/language/zh.json": "26b75f27214835280de12cc62c33ff9c",
"assets/assets/document/language.json": "561178a5945117a9dff9c4461501432e",
"assets/assets/document/register.json": "9be89badcd5d61410312a77bad0a4997",
"assets/assets/document/styles.dart": "7162101a46fc8bf760dbd62ee5c90c5a",
"assets/assets/document/system.json": "1f7a502b3b25ead54074ffed4b62aaa7",
"assets/assets/document/tutorial/en.json": "13746e692f59d3aa9d2dd908c90558f3",
"assets/assets/document/tutorial/tutorial.json": "91f64881e7785b93e968f0c3d0c1fd36",
"assets/assets/document/tutorial/zh.json": "fdd54c37cca7ee2c59b1f9cbbf778c03",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Bold.ttf": "52e5e29a7805a81bac01a170e45d103d",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Light.ttf": "9ef30f36fbe394633b7235332346f5b1",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Medium.ttf": "518133df6fcaf4237f97187e2ea1019e",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-Regular.ttf": "778bb9a271006ab9d103287699611325",
"assets/assets/fonts/space_grotesk/SpaceGrotesk-SemiBold.ttf": "b7bae4f584fc5d817de4178708946eb0",
"assets/FontManifest.json": "9f0e757b134b904e3fc90aa9b50f799b",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3f17feb4646ebf01a5bfe2810be214ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "34a4e5dd6c254d6b2e33a34d84cc2d4c",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "552bd6a2af73427da8aa1da60d0f766b",
"icons/Icon-192.png": "c6c3a279d97b24ce71dc68a10e07ba03",
"icons/Icon-512.png": "e283a65be18140a84a7a85ebc42396cc",
"icons/Icon-maskable-192.png": "c6c3a279d97b24ce71dc68a10e07ba03",
"icons/Icon-maskable-512.png": "e283a65be18140a84a7a85ebc42396cc",
"icons/icon.png": "e7777c6ccd43cc4d62c708873970f675",
"index.html": "65aae75f57c4bc837b343c62d3b80ca3",
"/": "65aae75f57c4bc837b343c62d3b80ca3",
"main.dart.js": "208224efa8b1fb1f39be995b82ac22b6",
"manifest.json": "d1025d04d8f1a3e9f881588be6913d96",
"splash/img/dark-1x.png": "2a6b8e6f612c14b5a20a86399ff3c282",
"splash/img/dark-2x.png": "e283a65be18140a84a7a85ebc42396cc",
"splash/img/dark-3x.png": "eee55a2a083b33d6134fa678d9864ac0",
"splash/img/dark-4x.png": "bcf409229047ee126d797fd892602273",
"splash/img/light-1x.png": "2a6b8e6f612c14b5a20a86399ff3c282",
"splash/img/light-2x.png": "e283a65be18140a84a7a85ebc42396cc",
"splash/img/light-3x.png": "eee55a2a083b33d6134fa678d9864ac0",
"splash/img/light-4x.png": "bcf409229047ee126d797fd892602273",
"version.json": "457162d2433711cd934ce2ec37cd0366"};
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
