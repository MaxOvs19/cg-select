// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var _cgDropdown = require("./cg-dropdown");
// ------------------------------Обычный селект--------------------
const dropdown = new (0, _cgDropdown.DropDown)({
    selector: ".cg-dropdown_one",
    placeholder: "Выберите авто",
    lable: "EXAMPLE",
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "Ferari", 
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    }
});
// const ger = {
//   placeholder: 'searcH????',
//   textInListSearch: 'None',
// };
// dropdown.addLenguage(ger);
// ------------------------------URL--------------------
const dropdown3 = new (0, _cgDropdown.DropDown)({
    selector: ".cg-dropdown_three",
    placeholder: "URL",
    url: "https://jsonplaceholder.typicode.com/users",
    searchMode: true,
    darkTheme: false,
    lenguage: "ru",
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        }
    },
    multiselect: true,
    multiselectTag: true
});
// --------------------------------Категории--------------------------
const dropdown4 = new (0, _cgDropdown.DropDown)({
    selector: ".cg-dropdown_categories",
    placeholder: "Выберите регион",
    searchMode: true,
    items: [
        {
            category: "Russia",
            categoryItems: [
                {
                    id: "28qwds",
                    title: "Москва",
                    value: 0
                },
                ,
                "Ростов-на-дону",
                "Саратов",
                "Волгоград",
                "Донецк", 
            ]
        },
        {
            category: "USA",
            categoryItems: [
                "Alabama",
                "Texas",
                "Colorado",
                "Klirens",
                "Los-Angeles"
            ]
        },
        {
            category: "France",
            categoryItems: [
                "Paris"
            ]
        }, 
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        },
        placeholder: {
            maxWidth: "500px "
        }
    },
    multiselect: true,
    multiselectTag: true
});
//----------------управление с помощью кнопок----------------------------------
const dropdownBtn = new (0, _cgDropdown.DropDown)({
    selector: ".cg-dropdown_usedBtn",
    placeholder: "Выберите авто",
    searchMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "max", 
    ],
    styles: {
        head: {
            width: "830px",
            color: "black",
            backgroundColor: "rgb(176 223 167)"
        },
        list: {
            width: "824px",
            color: "black",
            backgroundColor: "rgb(176 223 167)"
        },
        caret: {
            borderTop: "6px solid black"
        }
    },
    multiselect: true
});
const buttonOpen = document.querySelector(".button__open");
const buttonClose = document.querySelector(".button__close");
dropdownBtn.buttonControl(buttonOpen, "open");
dropdownBtn.buttonControl(buttonClose, "close");
//-------------------------Функция Disabled----------------------------------
const dropdownDisabled = new (0, _cgDropdown.DropDown)({
    selector: ".cg-dropdown_checkboxDisable",
    placeholder: "Выберите авто",
    searchMode: true,
    items: [
        "BMW",
        {
            id: "213sade",
            title: "Opel",
            value: 1
        },
        "Mersedes",
        "MAN",
        "max", 
    ],
    styles: {
        head: {
            width: "830px"
        },
        list: {
            width: "824px"
        },
        placeholder: {
            maxWidth: "500px "
        }
    },
    multiselect: true
});
dropdownDisabled.disabled(true);
let chbox = document.getElementById("checkboxDisable");
chbox.addEventListener("click", ()=>{
    if (chbox.checked == true) dropdownDisabled.disabled(false);
    else dropdownDisabled.disabled(true);
});

},{"./cg-dropdown":"41A0O"}],"41A0O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @class Описание класса DropDown
 * @description Этот класс реализовывает функционал кастомного селекта, с возможностями кастомизации.
 *@author Овсяников Максим
 */ parcelHelpers.export(exports, "DropDown", ()=>DropDown);
var _utils = require("./components/utils");
var _createElement = require("./components/create-element");
var _language = require("./language/language");
class DropDown {
    /**
   * Созданный HTML елемент
   * @type {HTMLElement}
   */ #element;
    /**
   * Созданный список(ul), с классом list
   * @type {HTMLElement}
   */ #list;
    /**
   * Настройки селекта передаваемые при создании экземпляра класса
   * @type {object}
   */ #options;
    /**
   * Переменная для управления каретки
   * @type {HTMLElement}
   */ #caret;
    /**
   * Массив переданных элементов
   * @type {object[]}
   */ #items;
    /**
   * Переданные категории
   * @type {string}
   */ #category;
    /**
   * Выбранный или массив выбранных элементов из списка
   * @type {object[] | object}
   */ #selectedItems;
    /**
   * Массив индексов выбранных элементов
   * @type {number[]}
   */ #indexes = [];
    /**
   * Метод экземпляра класса DropDown
   * @returns {string[] | string | null} Возвращает выбранные элемент(ы) в виде массива/элемента/null
   * @description Геттер возвращающий выбранные элемент(ы) селекта
   */ get value() {
        return this.#selectedItems ?? null;
    }
    /**
   * Метод экземпляра класса DropDown
   * @returns {number | number[]}Возвращает индексы выбранных элемента(ов) в виде массива/пустой массив
   * @description Геттер возвращающий индексы выбранных элемента(ов) селекта
   */ get indexes() {
        return this.#indexes ?? [];
    }
    /**
   *
   * @param {object} options Объект принимающий настройки селекта
   * @constructor Конструктор класса DropDown
   * @description  Конструктор принимает объект и рендерит селект.
   * @example
   * options = {
   *  selector: 'Уникальный селектор',
      selected: 'Выбранный элемент',
      placeholder: '...',
      items: [string|number|object],
      darkTheme: true/false,
      searchMode: true/false,
      closeOnSelect:  true/false,
      lenguage: 'ru/en',
      styles: {
        head: {
          background: '...',
        },
        list: {...},
        chips: {...},
        caret: {...},
        placeholder: {...},
        lable: {..},
      },
      event: '...',
      url: 'http/...',
      multiselect: true/false,
      multiselectTag: true/false,
   * }
     
   */ constructor(options = {}){
        this.#init(options);
        this.#render();
        this.#initEvent();
        this.#closeSelectClick();
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {string | object} item добавляемый елемент
   * @description добавляет переданный элемент в конец списка и перерисовывает список. Не может использоваться при передачи элементов с категорями
   * @method addItem
   */ addItem(item) {
        if (this.#category) {
            console.log("can`t add item to category");
            return;
        }
        if (!item) return false;
        const index = this.#items.length;
        this.#items.push((0, _utils.getFormatItem)(item, index));
        this.#render();
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {number} index индекс удаляемого элемента
   * @description удаляет елемент по индексу из списка и перерисовывает его. Не может использоваться при передачи элементов с категорями.
   * @method deleteItem
   */ deleteItem(index) {
        if (this.#category) {
            console.log("can`t add item to category");
            return;
        }
        const item = this.#items[index];
        this.#items.splice(index, 1);
        this.#render();
    }
    /**
   * Метод экземпляра класса DropDown
   * @description удаляет все елементы из списка и перерисовывает его.
   * @method deleteItemAll
   */ deleteItemAll() {
        this.#items.splice(0, this.#items.length);
        this.#render();
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {number} index индекс выбранного элемента
   * @description  выбирает элемент который будет изначально отрисовываться в селекте
   * @method selectIndex
   */ selectIndex(index) {
        if (this.#category) {
            console.log("can`t add item to category");
            return;
        }
        const options = this.#element.querySelectorAll(".list__item");
        if (index > options.length) return;
        const select = options[index].innerText;
        this.#render(select);
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {number} numberItem номер возвращаемого элемента
   * @returns {HTMLElement} возвращает ссылку на выбранный HTML элемент
   * @method getElement
   */ getElement(numberItem) {
        if (numberItem > this.#items.length) return;
        return this.#items[numberItem];
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {boolean} value - Передаваемый параметр для добавления атрибута disabled;
   * @description Метод позволяющий переключать состояние селекта disabled,
   * @method disabled
   */ disabled(value) {
        if (typeof value !== "boolean") return;
        const select = this.#element.querySelector(".cg-select");
        const nativSelect = this.#element.querySelector(".nativSelect");
        if (value === true) {
            this.#element.setAttribute("disabled", true);
            nativSelect.setAttribute("disabled", true);
            select.classList.add("disabled");
        } else {
            this.#element.removeAttribute("disabled");
            nativSelect.removeAttribute("disabled");
            select.classList.remove("disabled");
        }
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {HTMLInputElement} button - HTML кнопка
   * @param {string} method - метод открытия open/close
   * @description Метод позволяющий открывать/закрывать селект с помощью кнопок
   * @method buttonControl
   */ buttonControl(button, method) {
        this.btn = button;
        button.addEventListener("click", ()=>{
            if (method === "open") this.#open(true);
            else if (method === "close") this.#close();
            else return;
        });
    }
    /**
   * Метод экземпляра класса DropDown
   * @param {object} lenguage объект в котором находятся поля для подключения языка имеет два обязательных поля placeholder, textInListSearch
   * @description метод позволяющий заменить плейсхолдер в поиске и текст который выводится если нет результата
   * @method addLenguage
   */ addLenguage(lenguage) {
        const { placeholder , textInListSearch  } = lenguage;
        const { searchMode  } = this.#options;
        if (searchMode && searchMode == true) {
            const search = this.#element.querySelector(".inputSearch");
            const textNoRezult = this.#element.querySelector(".noRezult");
            const textNode = document.createTextNode(textInListSearch);
            search.setAttribute("placeholder", placeholder);
            search.setAttribute("placeholder", placeholder);
            textNoRezult.innerText = "";
            textNoRezult.appendChild(textNode);
        }
    }
    /**
   * Приватный метод инициализации экземпляра класса DropDown
   * @method #init
   * @member
   * @protected
   * @param {object} options передаваемые настройки селекта
   * @description Приватный метод. Общая инициализация селекта. Получение настоек и преобразвание элементов селекта.
   * @example
   *  {
        selector: '.cg-dropdown_one',
        placeholder: 'Выберите авто',
        items: [
          'BMW',
          {
            id: '213sade',
            title: 'Opel',
            value: 1,
          },
          'Mersedes',
          'MAN',
          'max',
        ],
        darkTheme: true,
        multiselect: true,
        multiselectTag: true,
      }
   */  #init(options) {
        this.#options = options;
        const { items , multiselect , url  } = this.#options;
        const elem = document.querySelector(options.selector);
        if (!elem) throw new Error(`Element with selector ${options.selector}`);
        this.#element = elem;
        this.#element.addEventListener("click", (e)=>{
            e.preventDefault();
            this.#open();
        });
        this.#items = [];
        if (multiselect && multiselect == true) this.#selectedItems = [];
        if (!items && url) {
            this.#renderUrl();
            return;
        }
        items.forEach((dataItem, index)=>{
            if (dataItem.category && dataItem.categoryItems) {
                this.#category = dataItem.category;
                this.#items.push(this.#category);
                dataItem.categoryItems.forEach((categoryItem, indexCategory)=>{
                    this.#items.push((0, _utils.getFormatItem)(categoryItem, indexCategory));
                });
            } else this.#items.push((0, _utils.getFormatItem)(dataItem, index));
        });
    }
    /**
   * Привaтный метод экземпляра класса DropDown
   *
   * @method #initSelected
   * @param {string} select необязательный елемент. Используется в методе selectIndex
   * @description Отрисовывает и стилизует селект
   * @protected
   */  #initSelected(select) {
        const { styles , selected , placeholder , lable  } = this.#options;
        if (selected) (0, _utils.createSelected)(this.#element, selected);
        else if (placeholder) (0, _utils.createSelected)(this.#element, placeholder);
        else (0, _utils.createSelected)(this.#element, "Select...");
        if (select) (0, _utils.createSelected)(this.#element, select, styles);
        if (lable) {
            const lableItem = document.createElement("h1");
            const textLable = document.createTextNode(lable);
            lableItem.appendChild(textLable);
            lableItem.classList.add("label");
            this.#element.insertAdjacentElement("beforebegin", lableItem);
        }
        if (styles) (0, _utils.customStyles)(this.#element, styles);
    }
    /**
   * Приватный метод рендера экземпляра класса DropDown
   *@protected
   * @method #render
   * @param {string} select  необязательный елемент. Передаеться в метод initSelected
   * @description Рендер елементов в селекте.
   */  #render(select1) {
        const { styles: styles1 , multiselect: multiselect1 , searchMode , multiselectTag , darkTheme , lenguage  } = this.#options;
        const random = Math.random().toString(36).substring(2, 10);
        if (select1 || select1 && styles1) {
            this.#initSelected(select1);
            (0, _utils.customStyles)(this.#element, styles1);
        } else this.#initSelected();
        const ulList = document.createElement("ul");
        const nativSelect = (0, _createElement.createNativeSelect)();
        let intputSearch = "";
        this.random = random;
        if (searchMode) {
            if (lenguage === "ru") intputSearch = (0, _createElement.createInputSearch)(random, (0, _language.ru).placeholder);
            else intputSearch = (0, _createElement.createInputSearch)(random, (0, _language.en).placeholder);
            ulList.appendChild(intputSearch);
        }
        ulList.classList.add("list");
        if (styles1) {
            const { list  } = styles1;
            (0, _utils.customStylesFormat)(list, ulList);
        }
        this.#element.appendChild(ulList);
        this.#items.forEach((dataItem)=>{
            this.#element.appendChild(nativSelect);
            const liItem = document.createElement("li");
            const nativOption = (0, _createElement.createNativSelectOption)();
            const strongItem = document.createElement("strong");
            liItem.classList.add("list__item");
            strongItem.classList.add("category");
            if (multiselect1 && multiselect1 == true) {
                const checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                checkBox.setAttribute("id", `chbox-${dataItem.id}`);
                liItem.appendChild(checkBox);
                if (multiselectTag && multiselectTag == true) checkBox.classList.add("displayHide");
                nativSelect.setAttribute("multiple", "multiple");
            }
            let textNode = "";
            if (dataItem.title) {
                nativOption.text = dataItem.title;
                nativOption.value = dataItem.title;
                textNode = document.createTextNode(dataItem.title);
                nativSelect.appendChild(nativOption);
                liItem.appendChild(textNode);
                ulList.appendChild(liItem);
            } else {
                textNode = document.createTextNode(dataItem);
                strongItem.appendChild(textNode);
                ulList.appendChild(strongItem);
            }
        });
        this.#items.filter((item, index)=>{
            if (typeof item !== "object") this.#items.splice(index, 1);
            return item;
        });
        if (darkTheme == false) this.#checkTheme();
        this.#list = this.#element.querySelector(".list");
        this.#caret = this.#element.querySelector(".caret");
        this.#addOptionsBehaviour();
    }
    /**
   * Приватный метод рендера экземпляра класса DropDown
   * @protected
   * @method #checkTheme
   * @description Изменяет цветовую схему с темной на светлую.
   */  #checkTheme() {
        const { darkTheme: darkTheme1 , searchMode: searchMode1  } = this.#options;
        const select2 = this.#element.querySelector(".cg-select");
        const caret = this.#element.querySelector(".caret");
        const list1 = this.#element.querySelector("ul.list");
        const search = this.#element.querySelector(".inputSearch");
        if (darkTheme1 == false) {
            select2.classList.add("selectWhite");
            caret.classList.add("caretWhite");
            list1.classList.add("listWhite");
            if (searchMode1 == true) search.classList.add("inputWhite");
        } else if (darkTheme1 == true || !darkTheme1) return;
        else throw new Error("Styles error or invalid value entered!");
    }
    /**
   * Приватный метод рендера экземпляра класса DropDown
   *@protected
   * @method #renderUrl
   * @description Рендер елементов в селекте переданных с URL и их настойка
   */ async #renderUrl() {
        const { url: url1 , items: items1 , multiselect: multiselect2 , multiselectTag: multiselectTag1  } = this.#options;
        if (items1) return;
        if (!url1) return;
        const response = await fetch(url1);
        const dataUrl = await response.json();
        const nativSelect1 = (0, _createElement.createNativeSelect)();
        dataUrl.forEach((dataItem, index)=>{
            const item = {
                id: dataItem.id,
                title: dataItem.name,
                value: index
            };
            const ulUrl = this.#element.querySelector(".list");
            const nativOption = (0, _createElement.createNativSelectOption)();
            const liUrl = document.createElement("li");
            const textUrl = document.createTextNode(item.title);
            if (multiselect2 && multiselect2 == true) {
                const checkBox = document.createElement("input");
                checkBox.type = "checkbox";
                if (multiselectTag1 && multiselectTag1 == true) checkBox.classList.add("displayHide");
                checkBox.setAttribute("id", `chbox-${item.id}`);
                nativSelect1.setAttribute("multiple", "multiple");
                liUrl.appendChild(checkBox);
            }
            liUrl.classList.add("list__item");
            nativOption.value = item.title;
            nativOption.text = item.title;
            nativSelect1.appendChild(nativOption);
            liUrl.appendChild(textUrl);
            ulUrl.appendChild(liUrl);
            this.#items.push(item);
        });
        this.#element.appendChild(nativSelect1);
        this.#items.filter((item, index)=>{
            if (typeof item !== "object") this.#items.splice(index, 1);
            return item;
        });
        this.#addOptionsBehaviour();
    }
    /**
   * Приватный метод экземпляра класса DropDown
   * @protected
   * @param {boolean} oneClick необязательный параметр передаваемый из функции buttonControl
   * @description Открывает список для выбора элемента
   * @method #open
   */  #open(oneClick) {
        if (oneClick === true) {
            this.#list.classList.add("open");
            this.#caret.classList.add("caret_rotate");
        } else {
            this.#list.classList.toggle("open");
            this.#caret.classList.toggle("caret_rotate");
        }
    }
    /**
   * Приватный метод экземпляра класса DropDown
   * @protected
   * @description Закрывает список
   * @method #close
   */  #close() {
        this.#list.classList.remove("open");
        this.#caret.classList.remove("caret_rotate");
    }
    /**
   * Приватный метод экземпляра класса DropDown
   * @protected
   * @description Метод реализовывающий выбор элементов в разных режимах. Обычный/Мультиселект/Мультиселект + Мультиселект Таг.
   * @method #addOptionsBehaviour
   */  #addOptionsBehaviour() {
        const { multiselect: multiselect3 , placeholder: placeholder1 , selected: selected1 , multiselectTag: multiselectTag2 , searchMode: searchMode2 , closeOnSelect , darkTheme: darkTheme2 ,  } = this.#options;
        const options1 = this.#element.querySelectorAll(".list__item");
        const select3 = this.#element.querySelector(".selected");
        const nativOption = this.#element.querySelectorAll(".nativSelect__nativOption");
        const ulMultipul = document.createElement("ul");
        if (multiselect3 && multiselect3 == true) {
            ulMultipul.classList.add("multiselect-tag");
            select3.classList.add("overflow-hidden");
        }
        if (searchMode2 && searchMode2 === true) this.#searchMode(this.random);
        options1.forEach((option, index)=>{
            option.addEventListener("click", (event)=>{
                const dataSelectText = {
                    placeholder: placeholder1,
                    selected: selected1,
                    selectedItems: this.#selectedItems,
                    indexes: this.#indexes,
                    darkTheme: darkTheme2,
                    multiselectTag: multiselectTag2
                };
                const item = this.#items[index];
                if (closeOnSelect == false || multiselect3 && multiselect3 == true) {
                    event.stopPropagation();
                    event.preventDefault();
                }
                const checkIndex = this.#indexes.indexOf(index);
                if (multiselect3 && multiselect3 == true) {
                    option.classList.toggle("active");
                    const checkBox = option.querySelector('input[type="checkbox"]');
                    if (checkBox) {
                        if (!(event.target instanceof HTMLInputElement)) checkBox.checked = !checkBox.checked;
                        if (checkIndex === -1) {
                            (0, _utils.nativOptionMultiple)(nativOption, item.title, true);
                            this.#indexes.push(index);
                            select3.innerText = "";
                            if (multiselectTag2 && multiselectTag2 == true) {
                                this.#selectedItems.push(item);
                                select3.appendChild(ulMultipul);
                                const data = {
                                    option: this.#options,
                                    element: this.#element,
                                    indexes: this.#indexes,
                                    selectedItems: this.#selectedItems
                                };
                                ulMultipul.appendChild((0, _createElement.createBreadcrumb)(data, item.title, index, item.id));
                            } else {
                                this.#selectedItems.push(item.title);
                                select3.innerText = this.#selectedItems;
                            }
                        } else {
                            if (multiselectTag2 && multiselectTag2 == true) {
                                const tagItem = document.getElementById(`tag-${index}-${item.id}`);
                                ulMultipul.removeChild(tagItem);
                            }
                            this.#indexes.splice(checkIndex, 1);
                            this.#selectedItems.splice(checkIndex, 1);
                            (0, _utils.nativOptionMultiple)(nativOption, item.title, false);
                        }
                        if (!this.#selectedItems.length) (0, _utils.getSelectText)(dataSelectText, select3);
                        else if (multiselectTag2 && multiselectTag2 == true) select3.appendChild(ulMultipul);
                        else select3.innerText = this.#selectedItems;
                    }
                } else {
                    select3.innerText = item.title;
                    this.#selectedItems = item;
                    (0, _utils.nativOptionOrdinary)(nativOption, item.title);
                    options1.forEach((option)=>{
                        option.classList.remove("active");
                    });
                    option.classList.add("active");
                }
                (0, _utils.clearSelect)(select3, this.#element, dataSelectText);
            });
        });
    }
    /**
   * Метод который реализует поиск элементов в селекте
   * @protected
   * @param {string} random уникальное значение для input элемента.
   * @method #searchMode
   */  #searchMode(random1) {
        const { lenguage: lenguage1  } = this.#options;
        const input = this.#element.querySelector(`#searchSelect-${random1}`);
        const searchSelect = this.#element.querySelectorAll(".list__item");
        const result = document.createElement("p");
        let textNode = "";
        if (lenguage1 === "ru") textNode = document.createTextNode(`${(0, _language.ru).textInListSearch}`);
        else textNode = document.createTextNode(`${(0, _language.en).textInListSearch}`);
        result.appendChild(textNode);
        result.classList.add("displayHide");
        result.classList.add("noRezult");
        input.parentElement.appendChild(result);
        input.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
        input.oninput = function() {
            let val = this.value.trim();
            if (val != "") searchSelect.forEach((elem)=>{
                if (elem.innerText.search(val) == -1) {
                    elem.classList.add("displayHide");
                    result.classList.remove("displayHide");
                } else elem.classList.remove("displayHide");
            });
            else searchSelect.forEach((elem)=>{
                elem.classList.remove("displayHide");
                result.classList.add("displayHide");
            });
        };
    }
    /**
   * Приватный метод экземпляра класса DropDown
   * @protected
   * @description Открывает и закрывает список по переданному эвенту
   * @method #initEvent
   */  #initEvent() {
        const { event  } = this.#options;
        if (!event) return;
        if (event) {
            if (event === "mouseenter") {
                this.#element.addEventListener(event, ()=>{
                    this.#open();
                });
                this.#element.addEventListener("mouseleave", ()=>{
                    this.#close();
                });
            }
        }
    }
    /**
   * Приватный метод экземпляра класса DropDown
   * @protected
   * @description Закрывает список по клику вне элемента
   * @method #closeSelectClick
   */  #closeSelectClick() {
        const dropdown = document.querySelector(`${this.#options.selector}`);
        document.addEventListener("click", (e)=>{
            const withinBoundaries = e.composedPath().includes(dropdown);
            if (!withinBoundaries) {
                if (this.btn) return;
                else this.#close();
            }
        });
    }
}

},{"./components/utils":"fUmAp","./components/create-element":"g9A92","./language/language":"c79uo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUmAp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Utils module
 * @module Utils
 */ /**
 * Создание кнопки выбора элементов
 * @param {HTMLElement} element созданный экземпляр класса DropDown
 * @param {string} content placeholer передаваемый из настроек селекта
 * @param {object} styles не обязательный параметр. Объект в котором находяться настройки кастомизации частей селекта
 */ parcelHelpers.export(exports, "createSelected", ()=>createSelected);
/**
 * Поиск и стилизация елементов полученных из styles экземпляра DropDown
 * @param {HTMLElement} element созданный экземпляр класса DropDown
 * @param {object} styles объект в котором находяться настройки кастомизации частей селекта
 */ parcelHelpers.export(exports, "customStyles", ()=>customStyles);
/**
 * Универсальный метод для стилизации селекта
 * @param {object} elemOption объект полученное из объекта styles у которого мы получаем ключ-значение стилей
 * @param {HTMLElement} selector  HTMLElement подвергающиеся кастомизации
 */ parcelHelpers.export(exports, "customStylesFormat", ()=>customStylesFormat);
/**
 * Проверка содержит ли item  указанные свойства,
 * @param {object} item проверяемый на определенную структуру элемент
 * @returns {boolean} возвращает true/false если item содержит указанные свойства
 */ parcelHelpers.export(exports, "checkItemStruct", ()=>checkItemStruct);
/**
 * Вставка изначального текста селекта(до выбора)
 * @param {object} data объект в котором находяться title селекта
 * @param {HTMLElement} select елемент селекта, куда будет вставляться title
 * @returns {HTMLElement} возвращает сформированный елемент селекта
 */ parcelHelpers.export(exports, "getSelectText", ()=>getSelectText);
/**
 * Преобразование каждого елемента полученного из поля Items;
 * @param {object | string} dataItem полученный елемент переданный при создании селекта может быть как object/string
 * @param {number} index индекс этого элемента
 * @returns {object} возвращает сформированный объект
 */ parcelHelpers.export(exports, "getFormatItem", ()=>getFormatItem);
/**
 * Поведение нативного(одинарного) селекта при выборе кастомного
 * @param {NodeList} element NodeList нативного селекта
 * @param {object} item выбранный элемент в кастомном селекте
 */ parcelHelpers.export(exports, "nativOptionOrdinary", ()=>nativOptionOrdinary);
/**
 * Поведение нативного(Multiple) селекта при выборе в кастомном
 * @param {NodeList} element NodeList нативного селекта
 * @param {object} item выбранный элемент в кастомном селекте
 * @param {boolean} condition специальный флаг при котором добавляются/убераются атрибуты у нативного селекта
 */ parcelHelpers.export(exports, "nativOptionMultiple", ()=>nativOptionMultiple);
/**
 * Создание кнопки отчиски селекта, при единичном выборе.
 * @param {HTMLElement} select место в селекте которое будет переназначено на ''.
 * @param {HTMLElement} element экземпляр класса DropDown.
 * @param {object} dataSelectText текст который отрисовывается в селекте.
 */ parcelHelpers.export(exports, "clearSelect", ()=>clearSelect);
function createSelected(element, content, styles) {
    if (content) element.innerHTML = `
      <div class="cg-select">
         <p class="selected">${content}</p>
          <div class="caret"></div>
       </div>
      `;
    if (styles) {
        customStyles(element, styles);
        element.innerHTML = `
      <div class="cg-select" style = "${styles}">
          <p class="selected" style = "${styles}">${content}</p>
          <div class="caret" style = "${styles}"></div>
      </div>
    `;
    }
}
function customStyles(element, styles) {
    if (!styles) return;
    const { head , caret , placeholder , lable  } = styles;
    const cgSelect = element.querySelector(".cg-select");
    const caretSelect = element.querySelector(".caret");
    const placeholderSelect = element.querySelector(".selected");
    const lableItem = element.parentElement.querySelector("h1.label");
    customStylesFormat(head, cgSelect);
    customStylesFormat(caret, caretSelect);
    customStylesFormat(lable, lableItem);
    if (placeholderSelect) customStylesFormat(placeholder, placeholderSelect);
}
function customStylesFormat(elemOption, selector) {
    if (elemOption) Object.entries(elemOption).forEach(([key, value])=>{
        selector.style[key] = value;
    });
}
function checkItemStruct(item) {
    if (item && typeof item !== "object") return false;
    return item.hasOwnProperty("id") && item.hasOwnProperty("title") && item.hasOwnProperty("value");
}
function getSelectText(data, select) {
    const { placeholder , selected  } = data;
    if (placeholder) select.innerText = placeholder;
    else if (selected) select.innerText = selected;
    else select.innerText = "Select...";
    return select;
}
function getFormatItem(dataItem, index) {
    const random = Math.random().toString(36).substring(2, 10);
    let item = {};
    if (checkItemStruct(dataItem)) item = {
        id: dataItem.id,
        title: dataItem.title,
        value: index
    };
    else item = {
        id: random,
        title: dataItem,
        value: index
    };
    return item;
}
function nativOptionOrdinary(element, item) {
    element.forEach((option)=>{
        option.removeAttribute("selected");
        if (option.textContent === item) option.setAttribute("selected", "selected");
    });
}
function nativOptionMultiple(element, item, condition) {
    element.forEach((option)=>{
        if (condition == true) {
            if (option.textContent === item) option.setAttribute("selected", "selected");
        } else if (condition == false) {
            if (option.textContent === item) option.removeAttribute("selected");
        } else return;
    });
}
function clearSelect(select, element, dataSelectText) {
    const { selectedItems , indexes , darkTheme , multiselectTag  } = dataSelectText;
    const options = element.querySelectorAll(".list__item");
    const ulMultiSelect = element.querySelector(".multiselect-tag");
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const checkBox = element.querySelectorAll("li input");
    svgIcon.setAttribute("viewBox", "0 0 10 10");
    path1.setAttribute("d", "M2,8 L8,2");
    path2.setAttribute("d", "M2,2 L8,8");
    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);
    if (multiselectTag && multiselectTag == true) return;
    if (darkTheme === true || !darkTheme) {
        path1.classList.add("pathWhite");
        path2.classList.add("pathWhite");
    }
    if (darkTheme === false) {
        path1.classList.add("pathBlack");
        path2.classList.add("pathBlack");
    }
    svgIcon.classList.add("svg-icon");
    svgIcon.classList.add("svg-clear");
    select.appendChild(svgIcon);
    svgIcon.addEventListener("click", ()=>{
        select.innerText = "";
        if (Array.isArray(selectedItems)) {
            selectedItems.splice(0);
            indexes.splice(0);
        }
        checkBox.forEach((item)=>{
            item.checked = false;
        });
        getSelectText(dataSelectText, select);
        options.forEach((option)=>{
            option.classList.remove("active");
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"g9A92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @module createBreadcrumb
 */ /**
 * Метод который создает и отвечает за поведение chips
 * @param {object} data объект в котором содержатся настройки и элементы селекта
 * @param {string} title имя выбранного элемента для отрисовки chips
 * @param {number} index индекс выбранного элемента для отрисовки chips
 * @param {string} id уникальное id выбранного элемента
 * @returns {HTMLElement} возвращает сформированный HTMLElement chips item
 */ parcelHelpers.export(exports, "createBreadcrumb", ()=>createBreadcrumb);
/**
 * Метод который создает нативный селект
 * @returns {HTMLSelectElement} Возвращает созданный нативный селект
 */ parcelHelpers.export(exports, "createNativeSelect", ()=>createNativeSelect);
/**
 * Метод который создает Options для нативного селекта
 * @returns {HTMLOptionElement} Возвращает созданные Options нативного селекта
 */ parcelHelpers.export(exports, "createNativSelectOption", ()=>createNativSelectOption);
/**
 * Метод который создает поиск элементов в селекте
 * @param {string} random уникальное значение для input элемента.
 * @param {string} lenguage текст на определенном языке переданный из файла language.js
 * @returns {HTMLInputElement} Возвращает сформированный input елемент.
 */ parcelHelpers.export(exports, "createInputSearch", ()=>createInputSearch);
var _utils = require("./utils");
function createBreadcrumb(data, title, index, id) {
    const { element , option , indexes , selectedItems  } = data;
    const { placeholder , styles  } = option;
    const selected = element.querySelector(".selected");
    const nativOption = element.querySelectorAll(".nativSelect__nativOption");
    const liChip = document.createElement("li");
    const textNode = document.createTextNode(title);
    const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    svgIcon.setAttribute("viewBox", "0 0 10 10");
    path1.setAttribute("d", "M3,7 L7,3");
    path2.setAttribute("d", "M3,3 L7,7");
    liChip.setAttribute("id", `tag-${index}-${id}`);
    svgIcon.classList.add("svg-icon");
    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);
    liChip.appendChild(textNode);
    liChip.appendChild(svgIcon);
    if (styles) {
        const { chips  } = styles;
        (0, _utils.customStylesFormat)(chips, liChip);
    }
    svgIcon.addEventListener("click", (event)=>{
        event.preventDefault();
        event.stopPropagation();
        (0, _utils.nativOptionMultiple)(nativOption, title, false);
        const deleteIcon = indexes.indexOf(index);
        let checkBox = "";
        indexes.splice(deleteIcon, 1);
        selectedItems.splice(deleteIcon, 1);
        if (id) checkBox = document.getElementById(`chbox-${id}`);
        else checkBox = document.getElementById(`chbox-${index}`);
        checkBox.checked = false;
        checkBox.parentElement.classList.remove("active");
        if (!selectedItems.length) selected.innerText = placeholder;
        liChip.parentElement.removeChild(liChip);
    });
    return liChip;
}
function createNativeSelect() {
    const nativSelect = document.createElement("select");
    nativSelect.setAttribute("name", "dataSelect");
    nativSelect.classList.add("nativSelect");
    return nativSelect;
}
function createNativSelectOption() {
    const nativOption = document.createElement("option");
    nativOption.classList.add("nativSelect__nativOption");
    return nativOption;
}
function createInputSearch(random, lenguage) {
    const intputSearch = document.createElement("input");
    intputSearch.type = "text";
    intputSearch.classList.add("inputSearch");
    intputSearch.setAttribute("id", `searchSelect-${random}`);
    if (lenguage) intputSearch.setAttribute("placeholder", `${lenguage}`);
    else intputSearch.setAttribute("placeholder", "Search...");
    intputSearch.addEventListener("click", (e)=>{
        e.preventDefault();
    });
    return intputSearch;
}

},{"./utils":"fUmAp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c79uo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ru", ()=>ru);
parcelHelpers.export(exports, "en", ()=>en);
const ru = {
    placeholder: "Поиск...",
    textInListSearch: "Совпадений нет..."
};
const en = {
    placeholder: "Search...",
    textInListSearch: "No matches..."
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequire4940")

//# sourceMappingURL=index.975ef6c8.js.map
