// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\Montserrat\\Montserrat-Regular.ttf":[["Montserrat-Regular.104dc861.ttf","fonts/Montserrat/Montserrat-Regular.ttf"],"fonts/Montserrat/Montserrat-Regular.ttf"],"./..\\fonts\\Montserrat\\Montserrat-Medium.ttf":[["Montserrat-Medium.1605b0f0.ttf","fonts/Montserrat/Montserrat-Medium.ttf"],"fonts/Montserrat/Montserrat-Medium.ttf"],"./..\\fonts\\Montserrat\\Montserrat-MediumItalic.ttf":[["Montserrat-MediumItalic.bc636779.ttf","fonts/Montserrat/Montserrat-MediumItalic.ttf"],"fonts/Montserrat/Montserrat-MediumItalic.ttf"],"./..\\fonts\\CaveatBrush\\CaveatBrush-Regular.ttf":[["CaveatBrush-Regular.e9915df9.ttf","fonts/CaveatBrush/CaveatBrush-Regular.ttf"],"fonts/CaveatBrush/CaveatBrush-Regular.ttf"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\other\\cupcake.png":[["cupcake.d0c1b248.png","images/mobile/other/cupcake.png"],"images/mobile/other/cupcake.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\background\\bg.png":[["bg.9f92e3b8.png","images/mobile/background/bg.png"],"images/mobile/background/bg.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\other\\cupcake@2x.png":[["cupcake@2x.6ba3c4d3.png","images/mobile/other/cupcake@2x.png"],"images/mobile/other/cupcake@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\background\\bg@2x.png":[["bg@2x.76337930.png","images/mobile/background/bg@2x.png"],"images/mobile/background/bg@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\cupcake.png":[["cupcake.a1604bf2.png","images/tablet/other/cupcake.png"],"images/tablet/other/cupcake.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\background\\bg.png":[["bg.4d73709f.png","images/tablet/background/bg.png"],"images/tablet/background/bg.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\cupcake@2x.png":[["cupcake@2x.5b4d78fe.png","images/tablet/other/cupcake@2x.png"],"images/tablet/other/cupcake@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\background\\bg@2x.png":[["bg@2x.4ffdb7a5.png","images/tablet/background/bg@2x.png"],"images/tablet/background/bg@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\background\\bg.png":[["bg.4d340784.png","images/desktop/background/bg.png"],"images/desktop/background/bg.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\cupcake.png":[["cupcake.5df7d73f.png","images/desktop/other/cupcake.png"],"images/desktop/other/cupcake.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\background\\bg@2x.png":[["bg@2x.300f8644.png","images/desktop/background/bg@2x.png"],"images/desktop/background/bg@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\cupcake@2x.png":[["cupcake@2x.90bf6631.png","images/desktop/other/cupcake@2x.png"],"images/desktop/other/cupcake@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\donut\\donuts.png":[["donuts.1544696e.png","images/mobile/donut/donuts.png"],"images/mobile/donut/donuts.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\donut\\donuts@2x.png":[["donuts@2x.5986d838.png","images/mobile/donut/donuts@2x.png"],"images/mobile/donut/donuts@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\donut\\donuts.png":[["donuts.17e3daef.png","images/tablet/donut/donuts.png"],"images/tablet/donut/donuts.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\donut\\donuts@2x.png":[["donuts@2x.1dbcfd0c.png","images/tablet/donut/donuts@2x.png"],"images/tablet/donut/donuts@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\donut\\donuts.png":[["donuts.2523e192.png","images/desktop/donut/donuts.png"],"images/desktop/donut/donuts.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\donut\\donuts@2x.png":[["donuts@2x.02ceace9.png","images/desktop/donut/donuts@2x.png"],"images/desktop/donut/donuts@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\background\\bg_2.png":[["bg_2.70091d7d.png","images/mobile/background/bg_2.png"],"images/mobile/background/bg_2.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\background\\bg_2@2x.png":[["bg_2@2x.71d11964.png","images/mobile/background/bg_2@2x.png"],"images/mobile/background/bg_2@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\donut\\donut_5.png":[["donut_5.61007962.png","images/tablet/donut/donut_5.png"],"images/tablet/donut/donut_5.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\confetti.png":[["confetti.1e1b0f89.png","images/tablet/other/confetti.png"],"images/tablet/other/confetti.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\background\\bg_2.png":[["bg_2.19f96e9f.png","images/tablet/background/bg_2.png"],"images/tablet/background/bg_2.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\donut\\donut_5@2x.png":[["donut_5@2x.4bf7c14a.png","images/tablet/donut/donut_5@2x.png"],"images/tablet/donut/donut_5@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\confetti@2x.png":[["confetti@2x.2ad10498.png","images/tablet/other/confetti@2x.png"],"images/tablet/other/confetti@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\background\\bg_2@2x.png":[["bg_2@2x.bfb5246c.png","images/tablet/background/bg_2@2x.png"],"images/tablet/background/bg_2@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\donut\\donut_5.png":[["donut_5.25cd3d01.png","images/desktop/donut/donut_5.png"],"images/desktop/donut/donut_5.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\confetti.png":[["confetti.17a9bc96.png","images/desktop/other/confetti.png"],"images/desktop/other/confetti.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\background\\bg_2.png":[["bg_2.659958a8.png","images/desktop/background/bg_2.png"],"images/desktop/background/bg_2.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\donut\\donut_5@2x.png":[["donut_5@2x.5e1b0f67.png","images/desktop/donut/donut_5@2x.png"],"images/desktop/donut/donut_5@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\confetti@2x.png":[["confetti@2x.2190cdeb.png","images/desktop/other/confetti@2x.png"],"images/desktop/other/confetti@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\background\\bg_2@2x.png":[["bg_2@2x.5bce98c4.png","images/desktop/background/bg_2@2x.png"],"images/desktop/background/bg_2@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\other\\flour.png":[["flour.c9262f90.png","images/mobile/other/flour.png"],"images/mobile/other/flour.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\mobile\\other\\flour@2x.png":[["flour@2x.ec713b54.png","images/mobile/other/flour@2x.png"],"images/mobile/other/flour@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\flour.png":[["flour.e92336bb.png","images/tablet/other/flour.png"],"images/tablet/other/flour.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\tablet\\other\\flour@2x.png":[["flour@2x.2667d921.png","images/tablet/other/flour@2x.png"],"images/tablet/other/flour@2x.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\flour.png":[["flour.4fe254f2.png","images/desktop/other/flour.png"],"images/desktop/other/flour.png"],"F:\\Github\\the-donut-king-team-project-my\\src\\images\\desktop\\other\\flour@2x.png":[["flour@2x.144bd33a.png","images/desktop/other/flour@2x.png"],"images/desktop/other/flour@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");

// кнопка читать больше-меньше btn-read-more
(function () {
  var menuBtnRef = document.querySelector('[data-button]');
  var mobileMenuRef = document.querySelector('[data-text-more]');
  menuBtnRef.addEventListener('click', function () {
    var expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})(); // мобильное меню в хедере mobile-menu


(function () {
  var menuBtnRef = document.querySelector('[data-menu-button]');
  var mobileMenuRef = document.querySelector('[data-menu]');
  var mobileNavList = document.querySelector('[data-menu-list]');
  var mobileMenuHidden = document.querySelector('[modal-open]');
  menuBtnRef.addEventListener('click', function () {
    var expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    mobileMenuHidden.classList.toggle('is-hidden');
  });
  mobileNavList.addEventListener('click', function () {
    var expanded = mobileNavList.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuRef.classList.toggle('is-open');
    mobileNavList.setAttribute('aria-expanded', !expanded);
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.classList.toggle('is-active');
    mobileMenuHidden.classList.toggle('is-hidden');
  });
})(); // плавная прокрутка страницы до нужной секции menu-delay


$(document).ready(function () {
  // Добавить плавную прокрутку до всех ссылок
  $('a').on('click', function (event) {
    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== '') {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault(); // Хранить хэш

      var hash = this.hash; // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (500) указывает количество миллисекунд, необходимых для прокрутки до указанной области

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function () {
        // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
        window.location.hash = hash;
      });
    } // Конец, если

  });
}); // общая кнопка-скрол на странице scroll

$(function () {
  // при нажатии на кнопку scrollup
  $('.scrollup').click(function () {
    // переместиться в верхнюю часть страницы
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
}); // при прокрутке окна (window)

$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  } // иначе скрыть кнопку scrollup
  else {
      $('.scrollup').fadeOut();
    }
}); //   модальное окно с картой modal-map

(function () {
  var refs = {
    openModalBtn: document.querySelector('[data-modal-map-open]'),
    closeModalBtn: document.querySelector('[data-modal-map-close]'),
    modal: document.querySelector('[data-modal-map]')
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})(); // скрипт для menu-icon
// Look for .hamburger


var hamburger = document.querySelector('.hamburger'); // On click

hamburger.addEventListener('click', function () {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active'); // Do something else, like open/close menu
}); //   скрипт для блокировки кнопок в форме button-block

(function () {
  registForm.addEventListener('input', function () {
    if (phone.validity.valid && username.validity.valid && email.validity.valid) {
      registBtn.removeAttribute('disabled');
    } else {
      registBtn.setAttribute('disabled', 'disabled');
    }
  });
})();

(function () {
  contactDiv.addEventListener('input', function () {
    if (user_email.validity.valid > 0 && question.validity.valid > 0) {
      contactBtn.removeAttribute('disabled');
    } else {
      contactBtn.setAttribute('disabled', 'disabled');
    }
  });
})(); // скрипт slick


$(function () {
  $('.reviews-list').slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.reviews-text',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.reviews-text').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.reviews-list',
    centerMode: true,
    centerPadding: '0px'
  });
});
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49966" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map