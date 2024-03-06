/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 766:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = true;
var EventHandler = /** @class */ (function () {
    function EventHandler() {
        this.events = [];
    }
    EventHandler.prototype.register = function (el, event, listener) {
        if (!el || !event || !listener)
            return null;
        this.events.push({ el: el, event: event, listener: listener });
        el.addEventListener(event, listener);
        return { el: el, event: event, listener: listener };
    };
    EventHandler.prototype.unregister = function (_a) {
        var el = _a.el, event = _a.event, listener = _a.listener;
        if (!el || !event || !listener)
            return null;
        this.events = this.events.filter(function (e) { return el !== e.el
            || event !== e.event || listener !== e.listener; });
        el.removeEventListener(event, listener);
        return { el: el, event: event, listener: listener };
    };
    EventHandler.prototype.unregisterAll = function () {
        this.events.forEach(function (_a) {
            var el = _a.el, event = _a.event, listener = _a.listener;
            return el.removeEventListener(event, listener);
        });
        this.events = [];
    };
    return EventHandler;
}());
exports.Z = EventHandler;


/***/ }),

/***/ 187:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";

  /*!
   * @pixelunion/shopify-asyncview v2.0.5
   * (c) 2020 Pixel Union
  */

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var deferred = {};

var AsyncView = /*#__PURE__*/function () {
  function AsyncView() {
    _classCallCheck(this, AsyncView);
  }

  _createClass(AsyncView, null, [{
    key: "load",

    /**
     * Load the template given by the provided URL into the provided
     * view
     *
     * @param {string} url - The url to load
     * @param {object} query - An object containing additional query parameters of the URL
     * @param {string} query.view - A required query parameter indicating which view to load
     * @param {object} [options] - Config options
     * @param {string} [options.hash] - A hash of the current page content
     */
    value: function load(url) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!('view' in query)) {
        return Promise.reject(new Error('\'view\' not found in \'query\' parameter'));
      }

      var querylessUrl = url.replace(/\?[^#]+/, '');
      var queryParamsString = new RegExp(/.+\?([^#]+)/).exec(url);
      var queryParams = query;

      if (queryParamsString && queryParamsString.length >= 2) {
        queryParamsString[1].split('&').forEach(function (param) {
          var _param$split = param.split('='),
              _param$split2 = _slicedToArray(_param$split, 2),
              key = _param$split2[0],
              value = _param$split2[1];

          queryParams[key] = value;
        });
      } // NOTE: We're adding an additional timestamp to the query.
      // This is to prevent certain browsers from returning cached
      // versions of the url we are requesting.
      // See this PR for more info: https://github.com/pixelunion/shopify-asyncview/pull/4


      var cachebustingParams = _objectSpread2({}, queryParams, {
        _: new Date().getTime()
      });

      var hashUrl = querylessUrl.replace(/([^#]+)(.*)/, function (match, address, hash) {
        return "".concat(address, "?").concat(Object.keys(queryParams).sort().map(function (key) {
          return "".concat(key, "=").concat(encodeURIComponent(queryParams[key]));
        }).join('&')).concat(hash);
      });
      var requestUrl = querylessUrl.replace(/([^#]+)(.*)/, function (match, address, hash) {
        return "".concat(address, "?").concat(Object.keys(cachebustingParams).sort().map(function (key) {
          return "".concat(key, "=").concat(encodeURIComponent(cachebustingParams[key]));
        }).join('&')).concat(hash);
      });
      var promise = new Promise(function (resolve, reject) {
        var data;

        if (hashUrl in deferred) {
          resolve(deferred[hashUrl]);
          return;
        }

        deferred[hashUrl] = promise;

        if (options.hash) {
          data = sessionStorage.getItem(hashUrl);

          if (data) {
            var deserialized = JSON.parse(data);

            if (options.hash === deserialized.options.hash) {
              delete deferred[hashUrl];
              resolve(deserialized);
              return;
            }
          }
        }

        var xhr = new XMLHttpRequest();
        xhr.open('GET', requestUrl, true);

        xhr.onload = function () {
          var el = xhr.response;
          var newOptions = {};
          var optionsEl = el.querySelector('[data-options]');

          if (optionsEl && optionsEl.innerHTML) {
            newOptions = JSON.parse(el.querySelector('[data-options]').innerHTML);
          }

          var htmlEls = el.querySelectorAll('[data-html]');
          var newHtml = {};

          if (htmlEls.length === 1 && htmlEls[0].getAttribute('data-html') === '') {
            newHtml = htmlEls[0].innerHTML;
          } else {
            for (var i = 0; i < htmlEls.length; i++) {
              newHtml[htmlEls[i].getAttribute('data-html')] = htmlEls[i].innerHTML;
            }
          }

          var dataEls = el.querySelectorAll('[data-data]');
          var newData = {};

          if (dataEls.length === 1 && dataEls[0].getAttribute('data-data') === '') {
            newData = JSON.parse(dataEls[0].innerHTML);
          } else {
            for (var _i = 0; _i < dataEls.length; _i++) {
              newData[dataEls[_i].getAttribute('data-data')] = JSON.parse(dataEls[_i].innerHTML);
            }
          }

          if (options.hash) {
            try {
              sessionStorage.setItem(hashUrl, JSON.stringify({
                options: newOptions,
                data: newData,
                html: newHtml
              }));
            } catch (error) {
              console.error(error);
            }
          }

          delete deferred[hashUrl];
          resolve({
            data: newData,
            html: newHtml
          });
        };

        xhr.onerror = function () {
          delete deferred[hashUrl];
          reject();
        };

        xhr.responseType = 'document';
        xhr.send();
      });
      return promise;
    }
  }]);

  return AsyncView;
}();

/* harmony default export */ __webpack_exports__["Z"] = (AsyncView);


/***/ }),

/***/ 923:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var LOCAL_STORAGE_KEY = 'pxu-shopify-surface-pick-up';
var loadingClass = 'surface-pick-up--loading';

var isNotExpired = function isNotExpired(timestamp) {
  return timestamp + 1000 * 60 * 60 >= Date.now();
};

var removeTrailingSlash = function removeTrailingSlash(s) {
  return s.replace(/(.*)\/$/, '$1');
}; // Haversine Distance
// The haversine formula is an equation giving great-circle distances between
// two points on a sphere from their longitudes and latitudes


function calculateDistance(latitude1, longitude1, latitude2, longitude2, unitSystem) {
  var dtor = Math.PI / 180;
  var radius = unitSystem === 'metric' ? 6378.14 : 3959;
  var rlat1 = latitude1 * dtor;
  var rlong1 = longitude1 * dtor;
  var rlat2 = latitude2 * dtor;
  var rlong2 = longitude2 * dtor;
  var dlon = rlong1 - rlong2;
  var dlat = rlat1 - rlat2;
  var a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.pow(Math.sin(dlon / 2), 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
}

function getGeoLocation() {
  return _getGeoLocation.apply(this, arguments);
}

function _getGeoLocation() {
  _getGeoLocation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var options = {
                maximumAge: 3600000,
                // 1 hour
                timeout: 5000
              };

              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (_ref3) {
                  var coords = _ref3.coords;
                  return resolve(coords);
                }, reject, options);
              } else {
                reject();
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getGeoLocation.apply(this, arguments);
}

function setLocation(_x) {
  return _setLocation.apply(this, arguments);
}

function _setLocation() {
  _setLocation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
    var latitude, longitude, newData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            latitude = _ref.latitude, longitude = _ref.longitude;
            newData = {
              latitude: latitude,
              longitude: longitude,
              timestamp: Date.now()
            };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
            return _context2.abrupt("return", fetch('/localization.json', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                latitude: latitude,
                longitude: longitude
              })
            }).then(function () {
              return {
                latitude: latitude,
                longitude: longitude
              };
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _setLocation.apply(this, arguments);
}

function getLocation() {
  return _getLocation.apply(this, arguments);
}

function _getLocation() {
  _getLocation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var requestLocation,
        cachedLocation,
        _args3 = arguments;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            requestLocation = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
            cachedLocation = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

            if (!(cachedLocation && isNotExpired(cachedLocation.timestamp))) {
              _context3.next = 4;
              break;
            }

            return _context3.abrupt("return", cachedLocation);

          case 4:
            if (!requestLocation) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", getGeoLocation().then(function (coords) {
              setLocation(coords); // We don't need to wait for this

              return coords;
            }));

          case 6:
            return _context3.abrupt("return", null);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getLocation.apply(this, arguments);
}

var SurfacePickUp = /*#__PURE__*/function () {
  function SurfacePickUp(el, options) {
    _classCallCheck(this, SurfacePickUp);

    this.el = el;
    this.options = _objectSpread2({
      root_url: window.Theme && window.Theme.routes && window.Theme.routes.root_url || ''
    }, options);
    this.options.root_url = removeTrailingSlash(this.options.root_url);
    this.callbacks = [];
    this.onBtnPress = null;
    this.latestVariantId = null;
  }

  _createClass(SurfacePickUp, [{
    key: "load",
    value: function load(variantId) {
      var _this = this;

      // If no variant is available, empty element and quick-return
      if (!variantId) {
        this.el.innerHTML = '';
        return Promise.resolve(true);
      } // Because Shopify doesn't expose any `pick_up_enabled` data on the shop object, we
      // don't know if the variant might be, or is definitely not available for pick up.
      // Until we know the shop has > 0 pick up locations, we want to avoid prompting the
      // user for location data (it's annoying, and only makes sense to do if we use it).
      //
      // Instead, we have to make an initial request, check and see if any pick up locations
      // were returned, then ask for the users location, then make another request to get the
      // location-aware pick up locations.
      //
      // As far as I can tell the pick up aware locations differ only in sort order - which
      // we could do on the front end - but we're following this approach to ensure future
      // compatibility with any changes Shopify makes (maybe disabling options based on
      // user location, or whatever else).
      //
      // Shopify has indicated they will look into adding pick_up_enabled data to the shop
      // object, which which case this method can be greatly simplifed into 2 simple cases.


      this.latestVariantId = variantId;
      this.el.classList.add(loadingClass);
      return this._getData(variantId).then(function (data) {
        return _this._injectData(data);
      });
    }
  }, {
    key: "onModalRequest",
    value: function onModalRequest(callback) {
      if (this.callbacks.indexOf(callback) >= 0) return;
      this.callbacks.push(callback);
    }
  }, {
    key: "offModalRequest",
    value: function offModalRequest(callback) {
      this.callbacks.splice(this.callbacks.indexOf(callback));
    }
  }, {
    key: "unload",
    value: function unload() {
      this.callbacks = [];
      this.el.innerHTML = '';
    }
  }, {
    key: "_getData",
    value: function _getData(variantId) {
      var _this2 = this;

      return new Promise(function (resolve) {
        var xhr = new XMLHttpRequest();
        var requestUrl = "".concat(_this2.options.root_url, "/variants/").concat(variantId, "/?section_id=surface-pick-up");
        xhr.open('GET', requestUrl, true);

        xhr.onload = function () {
          var el = xhr.response;
          var embed = el.querySelector('[data-html="surface-pick-up-embed"]');
          var itemsContainer = el.querySelector('[data-html="surface-pick-up-items"]');
          var items = itemsContainer.content.querySelectorAll('[data-surface-pick-up-item]');
          resolve({
            embed: embed,
            itemsContainer: itemsContainer,
            items: items,
            variantId: variantId
          });
        };

        xhr.onerror = function () {
          resolve({
            embed: {
              innerHTML: ''
            },
            itemsContainer: {
              innerHTML: ''
            },
            items: [],
            variantId: variantId
          });
        };

        xhr.responseType = 'document';
        xhr.send();
      });
    }
  }, {
    key: "_injectData",
    value: function _injectData(_ref2) {
      var _this3 = this;

      var embed = _ref2.embed,
          itemsContainer = _ref2.itemsContainer,
          items = _ref2.items,
          variantId = _ref2.variantId;

      if (variantId !== this.latestVariantId || items.length === 0) {
        this.el.innerHTML = '';
        this.el.classList.remove(loadingClass);
        return;
      }

      this.el.innerHTML = embed.innerHTML;
      this.el.classList.remove(loadingClass);
      var calculatedDistances = false;

      var calculateDistances = function calculateDistances() {
        if (calculatedDistances) return Promise.resolve();
        return getLocation(true).then(function (coords) {
          items.forEach(function (item) {
            var distanceEl = item.querySelector('[data-distance]');
            var distanceUnitEl = item.querySelector('[data-distance-unit]');
            var unitSystem = distanceUnitEl.dataset.distanceUnit;
            var itemLatitude = parseFloat(distanceEl.dataset.latitude);
            var itemLongitude = parseFloat(distanceEl.dataset.longitude);

            if (coords && isFinite(itemLatitude) && isFinite(itemLongitude)) {
              var distance = calculateDistance(coords.latitude, coords.longitude, itemLatitude, itemLongitude, unitSystem);
              distanceEl.innerHTML = distance.toFixed(1);
            } else {
              distanceEl.remove();
              distanceUnitEl.remove();
            }
          });
        })["catch"](function (e) {
          console.log(e);
          items.forEach(function (item) {
            var distanceEl = item.querySelector('[data-distance]');
            var distanceUnitEl = item.querySelector('[data-distance-unit]');
            distanceEl.remove();
            distanceUnitEl.remove();
          });
        })["finally"](function () {
          calculatedDistances = true;
        });
      };

      this.el.querySelector('[data-surface-pick-up-embed-modal-btn]').addEventListener('click', function () {
        calculateDistances().then(function () {
          return _this3.callbacks.forEach(function (callback) {
            return callback(itemsContainer.innerHTML);
          });
        });
      });
    }
  }]);

  return SurfacePickUp;
}();

/* harmony default export */ __webpack_exports__["Z"] = (SurfacePickUp);


/***/ }),

/***/ 880:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ PaymentTerms; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PaymentTerms = /*#__PURE__*/function () {
  function PaymentTerms(el) {
    _classCallCheck(this, PaymentTerms);

    this._el = el;
    this._reference = this._el.querySelector('[data-payment-terms-reference] shopify-payment-terms');
    this._target = this._el.querySelector('[data-payment-terms-target]');
    if (!this._reference || !this._target) return;
    this._input = document.createElement('input');
    this._input.name = 'id';
    this._input.type = 'hidden';

    this._target.appendChild(this._input);

    this._target.appendChild(this._reference);

    this._target.style.display = null;
  }

  _createClass(PaymentTerms, [{
    key: "update",
    value: function update(variantId) {
      if (!this._reference || !this._target) return;
      this._input.value = variantId;

      this._input.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    }
  }]);

  return PaymentTerms;
}();



/***/ }),

/***/ 581:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ShippingCalculator; }
});

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/theme-addresses.js
/**
 * CountryProvinceSelector Constructor
 * @param {String} countryOptions the country options in html string
 */
function CountryProvinceSelector(countryOptions) {
  if (typeof countryOptions !== 'string') {
    throw new TypeError(countryOptions + ' is not a string.');
  }
  this.countryOptions = countryOptions;
}

/**
 * Builds the country and province selector with the given node element
 * @param {Node} countryNodeElement The <select> element for country
 * @param {Node} provinceNodeElement The <select> element for province
 * @param {Object} options Additional settings available
 * @param {CountryProvinceSelector~onCountryChange} options.onCountryChange callback after a country `change` event
 * @param {CountryProvinceSelector~onProvinceChange} options.onProvinceChange callback after a province `change` event
 */
CountryProvinceSelector.prototype.build = function (countryNodeElement, provinceNodeElement, options) {
  if (typeof countryNodeElement !== 'object') {
    throw new TypeError(countryNodeElement + ' is not a object.');
  }

  if (typeof provinceNodeElement !== 'object') {
    throw new TypeError(provinceNodeElement + ' is not a object.');
  }

  var defaultValue = countryNodeElement.getAttribute('data-default');
  options = options || {}

  countryNodeElement.innerHTML = this.countryOptions;
  countryNodeElement.value = defaultValue;

  if (defaultValue && getOption(countryNodeElement, defaultValue)) {
    var provinces = buildProvince(countryNodeElement, provinceNodeElement, defaultValue);
    options.onCountryChange && options.onCountryChange(provinces, provinceNodeElement, countryNodeElement);
  }

  // Listen for value change on the country select
  countryNodeElement.addEventListener('change', function (event) {
    var target = event.target;
    var selectedValue = target.value;
    
    var provinces = buildProvince(target, provinceNodeElement, selectedValue);
    options.onCountryChange && options.onCountryChange(provinces, provinceNodeElement, countryNodeElement);
  });

  options.onProvinceChange && provinceNodeElement.addEventListener('change', options.onProvinceChange);
}

/**
 * This callback is called after a user interacted with a country `<select>`
 * @callback CountryProvinceSelector~onCountryChange
 * @param {array} provinces the parsed provinces
 * @param {Node} provinceNodeElement province `<select>` element
 * @param {Node} countryNodeElement country `<select>` element
 */

 /**
 * This callback is called after a user interacted with a province `<select>`
 * @callback CountryProvinceSelector~onProvinceChange
 * @param {Event} event the province selector `change` event object
 */

/**
 * Returns the <option> with the specified value from the
 * given node element
 * A null is returned if no such <option> is found
 */
function getOption(nodeElement, value) {
  return nodeElement.querySelector('option[value="' + value +'"]')
}

/**
 * Builds the options for province selector
 */
function buildOptions (provinceNodeElement, provinces) {
  var defaultValue = provinceNodeElement.getAttribute('data-default');

  provinces.forEach(function (option) {
    var optionElement = document.createElement('option');
    optionElement.value = option[0];
    optionElement.textContent = option[1];

    provinceNodeElement.appendChild(optionElement);
  })

  if (defaultValue && getOption(provinceNodeElement, defaultValue)) {
    provinceNodeElement.value = defaultValue;
  }
}

/**
 * Builds the province selector
 */
function buildProvince (countryNodeElement, provinceNodeElement, selectedValue) {
  var selectedOption = getOption(countryNodeElement, selectedValue);
  var provinces = JSON.parse(selectedOption.getAttribute('data-provinces'));

  provinceNodeElement.options.length = 0;

  if (provinces.length) {
    buildOptions(provinceNodeElement, provinces)
  }

  return provinces;
}

// EXTERNAL MODULE: ./node_modules/@pixelunion/events/dist/EventHandler.js
var EventHandler = __webpack_require__(766);
;// CONCATENATED MODULE: ./source/scripts/helpers/ShippingCalculator.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ShippingCalculator = /*#__PURE__*/function () {
  function ShippingCalculator(_ref) {
    var el = _ref.el;

    _classCallCheck(this, ShippingCalculator);

    this.el = el;
    this.events = new EventHandler/* default */.Z();
    this.rates = this.el.querySelector('[data-shipping-rates]');
    this.message = this.el.querySelector('[data-shipping-message]');
    this.zip = this.el.querySelector('[data-shipping-calculator-zipcode]');
    this.submit = this.el.querySelector('[data-shipping-calculator-submit]');
    this.response = this.el.querySelector('[data-shipping-calculator-response]');
    this.countrySelect = this.el.querySelector('[data-shipping-calculator-country]');
    this.provinceSelect = this.el.querySelector('[data-shipping-calculator-province]');
    this.provinceContainer = this.el.querySelector('[data-shipping-calculator-province-container]');
    this.buildCalculator();
  }

  _createClass(ShippingCalculator, [{
    key: "buildCalculator",
    value: function buildCalculator() {
      var _this = this;

      this.shippingCountryProvinceSelector = new CountryProvinceSelector(this.countrySelect.innerHTML);
      this.shippingCountryProvinceSelector.build(this.countrySelect, this.provinceSelect, {
        onCountryChange: function onCountryChange(provinces) {
          if (provinces.length) {
            _this.provinceContainer.style.display = 'block';
          } else {
            _this.provinceContainer.style.display = 'none';
          } // "Province", "State", "Region", etc. and "Postal Code", "ZIP Code", etc.
          // Even countries without provinces include a label.


          var _window$Countries$_th = window.Countries[_this.countrySelect.value],
              label = _window$Countries$_th.label,
              zipLabel = _window$Countries$_th.zip_label;
          _this.provinceContainer.querySelector('label[for="address_province"]').innerHTML = label;
          _this.el.querySelector('label[for="address_zip"]').innerHTML = zipLabel;
        }
      });
      this.events.register(this.submit, 'click', function (e) {
        e.preventDefault();

        _this.getRates();
      });
    }
  }, {
    key: "getRates",
    value: function getRates() {
      var _this2 = this;

      var shippingAddress = {};
      shippingAddress.country = this.countrySelect ? this.countrySelect.value : '';
      shippingAddress.province = this.provinceSelect ? this.provinceSelect.value : '';
      shippingAddress.zip = this.zip ? this.zip.value : '';
      var queryString = Object.keys(shippingAddress).map(function (key) {
        return "".concat(encodeURIComponent("shipping_address[".concat(key, "]")), "=").concat(encodeURIComponent(shippingAddress[key]));
      }).join('&');
      fetch("".concat(window.PXUTheme.routes.cart_url, "/shipping_rates.json?").concat(queryString)).then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.displayRates(data);
      });
    }
  }, {
    key: "displayRates",
    value: function displayRates(rates) {
      var _this3 = this;

      var propertyName = Object.keys(rates);
      this.clearRates();

      if (propertyName[0] === 'shipping_rates') {
        rates.shipping_rates.forEach(function (rate) {
          var rateLi = document.createElement('li');
          rateLi.innerHTML = "".concat(rate.name, ": ").concat(_this3.formatPrice(rate.price));

          _this3.rates.appendChild(rateLi);
        });

        if (rates.shipping_rates.length > 1) {
          this.message.innerHTML = "".concat(window.PXUTheme.translation.additional_rates_part_1, " ").concat(rates.shipping_rates.length, " ").concat(window.PXUTheme.translation.additional_rates_part_2, " ").concat(this.zip.value, ", ").concat(this.provinceSelect.value, ", ").concat(this.countrySelect.value, ", ").concat(window.PXUTheme.translation.additional_rates_part_3, " ").concat(this.formatPrice(rates.shipping_rates[0].price));
        } else {
          this.message.innerHTML = "".concat(window.PXUTheme.translation.additional_rate, " ").concat(this.zip.value, ", ").concat(this.provinceSelect.value, ", ").concat(this.countrySelect.value, ", ").concat(window.PXUTheme.translation.additional_rate_at, " ").concat(this.formatPrice(rates.shipping_rates[0].price));
        }

        this.response.classList.add('shipping-rates--display-rates');
      } else {
        this.message.innerHTML = "Error: ".concat(propertyName[0], " ").concat(rates[propertyName[0]]);
        this.response.classList.add('shipping-rates--display-error');
      }
    }
  }, {
    key: "clearRates",
    value: function clearRates() {
      this.response.classList.remove('shipping-rates--display-error', 'shipping-rates--display-rates');
      this.message.innerHTML = '';
      this.rates.innerHTML = '';
    }
  }, {
    key: "formatPrice",
    value: function formatPrice(price) {
      var formattedPrice;

      if (window.PXUTheme.currency.display_format === 'money_with_currency_format') {
        formattedPrice = "<span class=\"money\">".concat(window.PXUTheme.currency.symbol).concat(price, " ").concat(window.PXUTheme.currency.iso_code, "</span>");
      } else {
        formattedPrice = "<span class=\"money\">".concat(window.PXUTheme.currency.symbol).concat(price, "</span>");
      }

      return formattedPrice;
    }
  }, {
    key: "unload",
    value: function unload() {
      this.events.unregisterAll();
    }
  }]);

  return ShippingCalculator;
}();



/***/ }),

/***/ 666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
!function() {
"use strict";
/* harmony import */ var _pixelunion_shopify_surface_pick_up__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(923);
/* harmony import */ var _helpers_PaymentTerms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(880);
/* harmony import */ var _helpers_ShippingCalculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(581);
/* harmony import */ var _pixelunion_shopify_asyncview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(666);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






/*============================================================================
  Global - header
==============================================================================*/

window.header = {
  init: function init() {
    this.setHeaderPosition(); //remove duplicate header on update

    if ($('.mobile-header').length > 1) {
      var nav_menu = $("#nav").data("mmenu");
      nav_menu.close();
      $('.mobile-header:last, #nav:last').remove();
    } // Only applied when there is a full-width banner across top of page


    var $header = $('.feature_image .header.header-background--false'); // To offset the fixed header

    if ($('.header').hasClass('mm-fixed-top')) {
      $('.menu li:not(.cart) a[href^="#"], .flex-caption a[href^="#"]').on('click', function (e) {
        var anchorlink = $(this).attr('href');

        if ($('.index-sections').find(anchorlink).length) {
          e.preventDefault();
          var headerHeight = $('.header').outerHeight();
          $('html, body').animate({
            scrollTop: $(anchorlink).offset().top - headerHeight
          }, 2000);
        }
      });
    }

    ;

    if ($header.hasClass('sticky-header--true')) {
      $(".index-sections .shopify-section:nth-child(2), .shopify-section:nth-child(2), .main-wrapper, .page-details-block:nth-child(2)").waypoint(function (direction) {
        if (direction == 'down') {
          $header.addClass('sticky--active fadeInDown delay-0s header_bar');
          $header.removeClass('is-absolute');
          header.dynamicDropdown();
        } else if (direction == 'up') {
          $header.removeClass('sticky--active fadeInDown delay-0s header_bar');
          $header.addClass('is-absolute');
          header.dynamicDropdown();
        }
      }, {
        offset: function offset() {
          // sticky header activates when merchant scrolls down the page the height of the header plus 250px
          return -$header.outerHeight() - 250;
        }
      });
    }

    $header.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function () {
      $(this).removeClass('fadeIn');
    });
    $('#cart').mmenu({
      navbar: {
        add: false
      },
      offCanvas: {
        pageSelector: "#content_wrapper"
      },
      "extensions": ["theme-white", "position-front", "position-right"]
    });
    $('.cart-button, .icon-menu').on("click", function (e) {
      $('#search').hide();
    });
    var navSettings = {
      "navbar": {
        add: true,
        title: $('.mobile_logo').html()
      },
      scrollBugFix: {
        fix: true
      },
      searchfield: {
        add: $('#header').data('search-enabled'),
        search: false,
        position: "top",
        placeholder: window.PXUTheme.translation.search
      },
      "extensions": ["theme-white"],
      offCanvas: {
        pageSelector: "#content_wrapper"
      }
    };

    if ($('.mobile-search-bar').length > 0) {
      var navSettings = {
        "navbar": {
          add: true,
          title: $('.mobile_logo').html()
        },
        scrollBugFix: {
          fix: true
        },
        "extensions": ["theme-white"],
        offCanvas: {
          pageSelector: "#content_wrapper"
        }
      };
    }

    $('#nav').mmenu(navSettings, {
      searchfield: {
        "form": {
          "action": "/search"
        },
        "input": {
          "name": "q"
        }
      }
    }); // Add a link to the navbar title

    $('#mm-1').find('.mm-navbar__title').attr('href', '/');

    if (window.PXUTheme.theme_settings.mobile_search_location == 'mobile-menu') {
      window.PXUTheme;

      if (window.PXUTheme.theme_settings.enable_autocomplete == true) {
        document.querySelectorAll('#nav .mm-searchfield').forEach(function (searchfield) {
          searchfield.dataset.autocompleteTrue = 'true';
        });
      }

      ;

      if (window.PXUTheme.theme_settings.search_option == 'product') {
        $('#nav .mm-searchfield').append('<input type="hidden" name="type" value="product" />');
      } else {
        $('#nav .mm-searchfield').append('<input type="hidden" name="type" value="product,page,article" />');
      }

      ;
    }

    ;
    $('body').on('mouseenter', '.sub-menu', function () {
      $(this).attr('aria-expanded', true);
      $(this).find('details').attr('open', true);
    });
    $('body').on('mouseleave', '.sub-menu', function () {
      $(this).attr('aria-expanded', false);
      $(this).find('details').attr('open', false);
    });
    this.dynamicDropdown();
  },
  setHeaderPosition: function setHeaderPosition() {
    // Determine the header position
    if ($('.promo-banner').length) {
      var announcementHeight = $('.promo-banner').outerHeight();
      $('.header').css('top', announcementHeight);
    } else {
      $('.header').css('top', '0');
    }
  },
  dynamicDropdown: function dynamicDropdown() {
    var headerNavigationWidth = $('[data-header-navigation]').width();
    var $headerNavItems = $('[data-header-nav-item]');
    var dropdownPosition = $('.header').data('dropdown-position');
    var singleLineNav = true;
    var totalNavItemsWidth = 0;
    $headerNavItems.each(function (index, navItem) {
      totalNavItemsWidth += $(navItem).outerWidth();
    });

    if (totalNavItemsWidth > headerNavigationWidth) {
      singleLineNav = false;
    }

    if (dropdownPosition == 'below_header' && singleLineNav == true) {
      $('.header_bar').removeClass('header-dropdown-position--below_parent');
      $('.header_bar').addClass('header-dropdown-position--below_header');
      $('.header_bar').attr('data-dropdown-position', 'below_header');
      $('.header_bar.header-dropdown-position--below_header .dropdown').css({
        "padding-top": $('.header').height() / 2
      });
      $('.header_bar.header-dropdown-position--below_header .disclosure__list-wrap').css({
        "padding-top": $('.header').height() / 2
      });
    } else {
      $('.header').addClass('header-dropdown-position--below_parent');
      $('.header').removeClass('header-dropdown-position--below_header');
      $('.header').attr('data-dropdown-position', 'below_parent');
      $('.header .dropdown').removeAttr('style');
    }
  },
  setPadding: function setPadding() {
    if ($('body').hasClass('index') && window.PXUTheme.media_queries.large.matches) {
      var $reorderableFirstSection = $('.index-sections .shopify-section').first();

      if ($reorderableFirstSection.hasClass('parallax-banner')) {
        if ($('.header').hasClass('header-background--true') && $('.header').hasClass('header-transparency--false')) {
          $reorderableFirstSection.css('padding-top', $('.header').height());
        }
      }
    }
  },
  openDropdown: function openDropdown() {
    $('[data-header-nav-details]').on('click', handleDetailClick);
    $('[data-header-nav-details]').on('touchend', handleDetailClick);

    function handleDetailClick(e) {
      e.stopPropagation();
      var clickedParent = e.target.closest('li.sub-menu');
      var clickedDetails = e.currentTarget;
      var clickedLink = clickedDetails.querySelector('summary');

      var detailsElements = _toConsumableArray(document.querySelectorAll('.header__navigation li.sub-menu > [data-header-nav-details]')); // Close siblings


      if (detailsElements.includes(clickedDetails)) {
        detailsElements.forEach(function (detailsElement) {
          var details = detailsElement;

          if (details !== clickedDetails) {
            details.open = false;
          }
        });
      } // If the link being clicked is a parent link, then take control of the navigation


      if (clickedParent && clickedLink.getAttribute('href')) {
        e.preventDefault();

        if (clickedDetails.open) {
          window.location = clickedLink.getAttribute('href');
          return;
        } // If the submenu isn't open, open it


        clickedDetails.open = true;
      }
    }
  },
  unload: function unload($target) {
    $('a[href^="#"]').off('click');
    $('[data-header-nav-details]').off('click');
    $('[data-header-nav-details]').off('touchend');
  }
};
/*============================================================================
  Home page - featured promotions
==============================================================================*/

window.featured_promotions = {
  init: function init() {
    window.animate_content.init();
  },
  unload: function unload($target) {}
};
/*============================================================================
  Home page - video
==============================================================================*/

window.videoTheme = {
  init: function init() {
    // Set up plyr for newly embedded video
    var featuredVideos = $('[data-video-element]').get();
    var featuredVideoPlayers = Plyr.setup(featuredVideos, {
      controls: controls,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true
      },
      storage: {
        enabled: false
      }
    }); // Adds plyr video id to video wrapper

    $.each(featuredVideoPlayers, function (index, player) {
      var id = player.id;
      var $video;

      if (player.isHTML5) {
        $video = $(player.elements.wrapper).find('video');
        $video.attr('data-plyr-video-id', id);
      } // When a video is playing, pause any other instances


      player.on('play', function (event) {
        var instance = event.detail.plyr;
        $.each(featuredVideoPlayers, function (index, player) {
          if (instance.id != player.id) {
            player.pause();
          }
        });
      });
    });
    $('[data-video-element]').each(function (index, video) {
      // Variables
      var $video = $(video);
      var $section = $video.parents('.shopify-section').attr('id', id);
      var $videoElement = $section.find($video);
      var $videoWrapper = $videoElement.parents('.video-wrapper');
      var $playButton = $videoWrapper.find('[data-play-button]');
      var $videoText = $videoWrapper.find('[data-video-text]');
      var $videoTextContainer = $videoWrapper.find('[data-video-text-container]');
      var $posterImage = $videoWrapper.data('poster-image-uploaded');
      var aspectRatio = $videoWrapper.data('aspect-ratio');
      var id = $videoWrapper.data('video-src');
      var isAutoplay = $videoWrapper.data('autoplay');
      var isLoopingEnabled = $videoWrapper.data('autoloop');
      var isMuted = $videoWrapper.data('mute-video');
      $.each(featuredVideoPlayers, function (index, player) {
        var videoID;
        var playerID;

        if (player.isYouTube || player.isVimeo) {
          var videoID = $videoWrapper.attr('id');
          var playerID = $(player.elements.original).attr('id');
        } else if (player.isHTML5) {
          var videoID = $videoWrapper.find('[data-plyr-video-id]').data('plyr-video-id');
          var playerID = player.id;
          $videoElement = $section.find('.plyr--video');
        }

        if (playerID == videoID) {
          // Reset play button icon
          $videoWrapper.removeClass('play-button-icon--visible'); // Reset image

          $videoWrapper.removeClass('video-is-playing'); // Autoplay

          if (isAutoplay) {
            // If on desktop or player is YouTube/Vimeo
            if (window.PXUTheme.media_queries.large.matches || player.isYouTube || player.isVimeo) {
              player.autoplay = true; // Hide image

              $videoWrapper.addClass('video-is-playing'); // Show video

              $videoElement.show(); // If display text over video unchecked

              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              } // Keep play button hidden


              $playButton.hide(); // HTML5 Mobile Video
            } else if (window.PXUTheme.media_queries.medium.matches && player.isHTML5) {
              // Hide image
              $videoWrapper.addClass('video-is-playing'); // Show video

              $videoElement.show(); // Display button so that video can be played

              $playButton.show();
              player.on('play', function () {
                // Show video
                $videoElement.show(); // Hide play button

                $playButton.hide();
              });
            }
          } else {
            // If Autoplay disabled
            // If poster image, show image wrapper otherwise hide it
            if ($posterImage) {
              $videoWrapper.removeClass('video-is-playing');
            } else {
              $videoWrapper.addClass('video-is-playing');
              $videoElement.show();
            }
          } // Clicking image will play video


          $videoWrapper.find('.parallax__wrap, .banner__wrap').on('click', function () {
            if (!player.playing && !$videoWrapper.hasClass('video-is-playing')) {
              player.play();
            }
          }); // Muted

          if (isMuted) {
            player.muted = true;
          } // Aspect Ratio


          if (aspectRatio) {
            player.ratio = aspectRatio;
          } // Looping


          if (isLoopingEnabled) {
            player.loop = true;
          } // Show Video Controls
          // - video controls get hidden using a css class: '.video-controls-enabled--false'
          // If button exists, hide text and poster


          if ($playButton) {
            $playButton.on('click', function () {
              // Hide image
              $videoWrapper.addClass('video-is-playing'); // Show video

              $videoElement.show(); // If display text over video unchecked

              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              } // Play video


              player.play();
            });
          }

          player.on('ready', function () {
            window.videoTheme.resizeVideo($videoWrapper);
          });
          player.on('play', function () {
            // Hide image
            $videoWrapper.addClass('video-is-playing'); // Reset play button icon

            $videoWrapper.removeClass('play-button-icon--visible'); // Show video

            $videoElement.show(); // If display text over video unchecked

            if ($videoTextContainer.hasClass('display-text-over-video--false')) {
              $videoText.hide();
            } else {
              $videoText.show();
            } // Hide play button


            if ($playButton) {
              $playButton.hide();
            }
          }); // If video is paused, play button icon or button must be shown
          // If button text is filled out, use play button
          // If button text is not filled out, use play button icon

          player.on('pause', function () {
            if ($playButton.length > 0) {
              $playButton.show();
              $videoWrapper.removeClass('play-button-icon--visible');
              $videoTextContainer.hide();
            } else {
              $videoWrapper.addClass('play-button-icon--visible');
            }
          }); // If page loads with video paused and no button showing, show icon

          if (!player.playing && $playButton.is(':hidden') || $playButton.length == 0) {
            $videoWrapper.addClass('play-button-icon--visible');
          }

          return false;
        }
      });
    });
  },
  resizeVideo: function resizeVideo($videoWrapper) {
    // get height and width of the video
    var videoHeight = $videoWrapper.find('.plyr--video').height();
    var videoWidth = $videoWrapper.find('.plyr__video-wrapper').width(); // calculate correct padding-bottom percentage for responsive videos

    var paddingBottom = videoHeight / videoWidth * 100; // apply that padding bottom ratio

    $videoWrapper.find('.plyr__video-wrapper').css('padding-bottom', paddingBottom + '%');
  }
};
/*============================================================================
  Banner image
==============================================================================*/

window.banner_image = {
  init: function init() {
    var contentAreaPadding = $('.header').data('content-area-padding');

    if (window.PXUTheme.media_queries.large.matches) {
      var $reorderableFirstSection = $('.global-wrapper .shopify-section').first();
      $reorderableFirstSection.attr('style', '');

      if ($reorderableFirstSection.hasClass('parallax-banner')) {
        // Has banner
        if ($('.header').hasClass('header-background--true') && $('.header').hasClass('header-transparency--false')) {
          if ($('.global-wrapper__product').length || $('.shopify-policy__container').length || $('.global-wrapper__customer').length) {
            $('.global-wrapper__product, .shopify-policy__container, .global-wrapper__customer').css('padding-top', $('.header').height() + contentAreaPadding);
          } else {
            $reorderableFirstSection.css('padding-top', $('.header').height() + contentAreaPadding);
          }

          $('.header').parent().removeClass('feature_image');
          $('.header').addClass('header_bar');

          if ($('.header').hasClass('sticky-header--false')) {
            $('.header').addClass('is-absolute');
          } else {
            $('.header.is-absolute').removeClass('is-absolute');
          }
        } else if ($('.header').hasClass('header-background--false') && $('.header').hasClass('header-transparency--true')) {
          $('.header').parent().addClass('feature_image');
          $('.header').removeClass('header_bar');
          $('.header').addClass('is-absolute');

          if ($('.header').hasClass('sticky-header--true')) {
            $('.header').addClass('is-absolute');
          }
        } else if ($('.header').hasClass('header-background--false') && $('.header').hasClass('header-transparency--false')) {
          $('.header').parent().addClass('feature_image');
          $('.header').removeClass('header_bar');
          $('.header').addClass('is-absolute');

          if ($('.header').hasClass('sticky-header--true')) {
            $('.header').addClass('is-absolute');
          }
        } else if ($('.header').hasClass('header-background--true') && $('.header').hasClass('header-transparency--true')) {
          $('.header').parent().removeClass('feature_image');
          $('.header').addClass('header_bar');

          if ($('.header').hasClass('sticky-header--false')) {
            $('.header').addClass('is-absolute');
          } else {
            $('.header.is-absolute').removeClass('is-absolute');
          }
        }
      } else {
        // No banner
        if ($('.global-wrapper__product').length || $('.shopify-policy__container').length || $('.global-wrapper__customer').length) {
          $('.global-wrapper__product, .shopify-policy__container, .global-wrapper__customer').css('padding-top', $('.header').height() + contentAreaPadding);
        } else {
          $reorderableFirstSection.css('padding-top', $('.header').height() + contentAreaPadding);
        }

        if ($('.header').hasClass('sticky-header--false')) {
          $('.header').addClass('header_bar');
          $('.header').addClass('is-absolute');
        } else {
          $('.feature_image').removeClass('feature_image');
          $('.header').addClass('header_bar');
          $('.header.is-absolute').removeClass('is-absolute');
        }
      }
    }
  },
  resetPadding: function resetPadding() {
    var $reorderableFirstSection = $('.global-wrapper .shopify-section').first();

    if ($reorderableFirstSection.hasClass('parallax-banner')) {
      $reorderableFirstSection.css('padding-top', '0px');
    } else {
      if (window.PXUTheme.media_queries.large.matches) {
        if ($('.global-wrapper__product').length || $('.shopify-policy__container').length || $('.global-wrapper__customer').length) {
          $('.global-wrapper__product, .shopify-policy__container, .global-wrapper__customer').css('padding-top', $('.header').height() + window.contentAreaPadding);
        } else {
          $reorderableFirstSection.css('padding-top', $('.header').height());
        }
      } else {
        $reorderableFirstSection.css('padding-top', '0px');
      }
    }
  },
  unload: function unload($target) {}
};
/*============================================================================
  Announcement Bar
==============================================================================*/

var announcement_bar = {
  init: function init() {
    if ($('.promo-banner').length) {
      var announcement = Cookies.get('promo-banner');

      if (announcement != 'dismiss') {
        $('body').addClass('promo-banner--true');
        $('.promo-banner__close').on('click', function () {
          $('.promo-banner--true').attr('style', '');
          $('body').removeClass('promo-banner--true');
          announcement_bar.setPadding();
          Cookies.set('promo-banner', 'dismiss', {
            path: '/'
          }, {
            expires: 30
          });
        });
      }
    } //call setPadding on initialization


    announcement_bar.setPadding();
  },
  setPadding: function setPadding() {
    // Setting padding relative to promo banner height
    var bannerHeight = $('.promo-banner').innerHeight();
    var bannerPadding = bannerHeight - 25 + 'px';
    var parentSection = $('.promo-banner').parent('.shopify-section--header');

    if ($('body').hasClass('promo-banner--true')) {
      if ($('.header').hasClass('sticky-header--true') || $('.mobile-header').hasClass('mobile-sticky-header--false') && window.PXUTheme.media_queries.medium.matches) {
        $(parentSection).css('padding-bottom', bannerPadding);
      }
    } else {
      $(parentSection).css('padding-bottom', '0');
      $('.header').css('top', '0');
    }
  }
};
/*============================================================================
  Banner
==============================================================================*/

window.banner = {
  init: function init() {
    window.animate_content.init(); //Arrow scroll

    var headerHeight = $('.header').outerHeight();

    if ($('.header').hasClass('sticky-header--true')) {
      $('.scroll-arrow').smoothScroll({
        offset: -headerHeight
      });
    } else {
      $('.scroll-arrow').smoothScroll();
    }

    announcement_bar.init();
  },
  unload: function unload($target) {}
};
/*============================================================================
  Newsletter
==============================================================================*/

var newsletter_popup = {
  init: function init() {
    var popup = Cookies.get('popup');
    var newsletter_popup_days = parseInt(window.PXUTheme.theme_settings.newsletter_popup_days);
    var cookie_enabled = newsletter_popup_days != 0 ? true : false;

    if (cookie_enabled && popup == 'open') {
      return false;
    } else {
      newsletter_popup.open();
    }

    if (cookie_enabled) {
      Cookies.set('popup', 'open', {
        expires: newsletter_popup_days
      });
    }
  },
  open: function open() {
    var newsletter_popup_seconds = parseInt(window.PXUTheme.theme_settings.newsletter_popup_seconds);

    if (window.PXUTheme.theme_settings.newsletter_popup_mobile || window.PXUTheme.media_queries.large.matches) {
      setTimeout(function () {
        $.fancybox.open($('.js-newsletter-popup'), {
          baseClass: 'newsletter_popup',
          hash: false,
          infobar: false,
          toolbar: false,
          loop: true,
          smallBtn: true,
          touch: false,
          mobile: {
            preventCaptionOverlap: false,
            toolbar: true,
            buttons: ["close"]
          }
        });
      }, newsletter_popup_seconds * 1000);
    }
  }
};
/*============================================================================
  Product
==============================================================================*/

window.product = {
  init: function init() {
    var $notify_form = $('.notify_form .contact-form'); // Find product galleries on page but exclude those in the quickshop (quickshop logic handled in fancybox event)

    var $productGalleries = $('.product-gallery'); // For each product gallery, create an object and add it to an array of galleries

    var galleriesArray = [];
    globalPlayersArray = [];

    if ($productGalleries.length > 0) {
      $.each($productGalleries, function (index, gallery) {
        var $productSection = $(gallery).closest('.product_section');
        galleriesArray.push({
          element: $(gallery),
          productSection: $productSection,
          thumbnailsEnabled: $productSection.data('thumbnails-enabled'),
          thumbnailsSliderEnabled: $productSection.data('thumbnails-slider-enabled'),
          thumbnailsPosition: $productSection.data('thumbnails-position'),
          thumbnailsArrows: $productSection.data('gallery-arrows-enabled'),
          slideshowAnimation: $productSection.data('slideshow-animation'),
          slideShowSpeed: $productSection.data('slideshow-speed'),
          activateZoom: $productSection.data('activate-zoom'),
          productMediaSupported: $productSection.data('product-media-supported'),
          loopingEnabled: $(gallery).find('.product-gallery__main').data('video-looping-enabled'),
          sectionID: $productSection.parents('.shopify-section').attr('id')
        });
      });
    }

    if (galleriesArray.length > 0) {
      // For each galleryObject, enable a Flickity slider
      $.each(galleriesArray, function (index, galleryObject) {
        window.product.enableSlider(galleryObject); // If product media is supported for the gallery, then also launch product media and Plyr

        if (galleryObject.productMediaSupported) {
          // Find videos within gallery section
          var videos;
          videos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();
          window.product.loadPlyr(galleryObject, videos);
          window.product.launchProductMedia(galleryObject); // Go through each gallery, on video play check instance ID against other player IDs

          var instance;
          $.each(galleryObject.videoPlayers, function (index, player) {
            player.on('play', function (event) {
              instance = event.detail.plyr; // Ensures only one video is playing at a time

              $.each(globalPlayersArray, function (index, player) {
                if (instance.id != player.id) {
                  player.pause();
                }
              });
            });
          });
        } // Hover to zoom


        if (galleryObject.activateZoom) {
          document.addEventListener('lazyloaded', window.product.enableZoom);
        }
      });
    }

    if ($('.product-quickshop__container').length == 0) {
      window.product.loadProductRecommendations();
    }

    window.product.productSwatches();
    window.animate_content.init();
  },
  unitPricing: function unitPricing(item) {
    var unitPriceMeasurementReferenceValue = '';
    var unitPriceOutput = '';

    if (item.unit_price_measurement) {
      if (item.unit_price_measurement.reference_value != 1) {
        unitPriceMeasurementReferenceValue = item.unit_price_measurement.reference_value;
      }

      unitPriceOutput += "<div class=\"item_unit-price\">".concat(item.unit_price_measurement.quantity_value).concat(item.unit_price_measurement.quantity_unit, " | ").concat(Shopify.formatMoney(item.unit_price, $('body').data('money-format')), " / ").concat(unitPriceMeasurementReferenceValue).concat(item.unit_price_measurement.reference_unit, "</div>");
      return unitPriceOutput;
    }
  },
  productSwatches: function productSwatches() {
    $('[data-product-form="uninitialized"]').each(function (_, options) {
      options.dataset.productForm = '';
      var $options = $(options);
      var paymentTerms = new _helpers_PaymentTerms__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z(options.closest('[data-product-details]'));
      var surfacePickUpEl = $options.closest('.js-product_section').find('[data-surface-pick-up]')[0];
      var productTitle = $options.data('product-title');
      var currentVariantId = $options.data('variant-id');
      var currentVariantTitle = $options.data('variant-title');
      var surfacePickUp;

      if (surfacePickUpEl) {
        surfacePickUp = new _pixelunion_shopify_surface_pick_up__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z(surfacePickUpEl);
        surfacePickUp.load(currentVariantId);
        surfacePickUp.onModalRequest(function (contents) {
          var surfacePickUpModal = document.querySelector('[data-surface-pick-up-modal]');
          var fragment; // Build out pop-up content for product with no variants, else build
          // out popup content for product with variants

          if (currentVariantTitle == 'Default Title' && productTitle) {
            fragment = document.createDocumentFragment();

            var _header = document.createElement('div');

            var title = document.createElement('h2');

            _header.classList.add('surface-pick-up__modal-header');

            title.classList.add('surface-pick-up__modal-title');
            title.innerHTML = productTitle;

            _header.appendChild(title);

            fragment.appendChild(_header);
          } else if (currentVariantTitle !== 'Default Title' && productTitle) {
            fragment = document.createDocumentFragment();

            var _header2 = document.createElement('div');

            var _title = document.createElement('h2');

            _header2.classList.add('surface-pick-up__modal-header');

            _title.classList.add('surface-pick-up__modal-title');

            _title.innerHTML = productTitle;

            _header2.appendChild(_title);

            if (window.currentVariant.title !== 'Default Title') {
              var subtitle = document.createElement('span');
              subtitle.classList.add('surface-pick-up__modal-subtitle');
              subtitle.innerHTML = window.currentVariant.title;

              _header2.appendChild(subtitle);
            }

            fragment.appendChild(_header2);
          }

          surfacePickUpModal.innerHTML = contents;
          surfacePickUpModal.insertBefore(fragment, surfacePickUpModal.firstChild);
          $.fancybox.open(surfacePickUpModal, {
            hash: false,
            infobar: false,
            toolbar: false,
            loop: true,
            smallBtn: true,
            touch: false,
            video: {
              autoStart: false
            },
            mobile: {
              preventCaptionOverlap: false,
              toolbar: true
            }
          });
        });
      }

      var selectId = $options.data('select-id');

      if (document.getElementById(selectId)) {
        new Shopify.OptionSelectors(selectId, {
          product: $options.data('product'),
          onVariantSelected: function onVariantSelected(variant, selector) {
            window.currentVariant = variant;
            paymentTerms.update(variant ? variant.id : null);

            if (surfacePickUp) {
              surfacePickUp.load(variant ? variant.id : null);
            }

            window.selectCallback(variant, selector);
          },
          enableHistoryState: $options.data('enable-state')
        });
      }
    });

    if (window.PXUTheme.theme_settings.product_form_style == "swatches") {
      $('.product_form').addClass('is-visible');
      $('.swatch :radio').change(function () {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
      }); //Swatches linked with selected options

      if ($('.js-product_section').length) {
        var $productForms = $('.js-product_section').find('.product_form'); //Loop through each product and set the initial option value state

        $productForms.each(function () {
          var JSONData = $(this).data('product');
          var productID = $(this).data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).find('.swatch-options .swatch');

          if (swatchOptions.length > 1) {
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      } //Add click event when there is more than one product on the page (eg. Collection in Detail)


      if ($('.js-product_section').length > 1) {
        $('body').on('click', '.swatch-element', function () {
          var swatchValue = $(this).data('value').toString();
          $(this).siblings('input[value="' + swatchValue.replace(/\"/g, '\\"') + '"]').prop("checked", true).trigger("change");
          var JSONData = $(this).parents('.product_form').data('product');
          var productID = $(this).parents('.product_form').data('product-id');
          var productSection = '.product-' + productID + ' .js-product_section';
          var swatchOptions = $(this).parents('.product_form').find('.swatch-options .swatch');

          if (swatchOptions.length > 1) {
            Shopify.linkOptionSelectors(JSONData, productSection);
          }
        });
      }
    }
  },
  enableZoom: function enableZoom() {
    var $image = $(event.target);
    var zoomSrc = $image.data('zoom-src');

    if (zoomSrc) {
      $image.wrap('<span class="zoom-container"></span>').css('display', 'block').parent().zoom({
        url: zoomSrc,
        touch: false,
        magnify: 1
      });
    }
  },
  enableSlider: function enableSlider(galleryObject) {
    var $el = galleryObject.element.find('.product-gallery__main');
    var $thumbnailProductGallery = galleryObject.element.find('.product-gallery__thumbnails');
    var $slides = $el.find('.product-gallery__image');
    var $thumbnails = $thumbnailProductGallery.find('.product-gallery__thumbnail');
    var arrowShape = 'M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z';
    $el.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      dragThreshold: 10,
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: $el.data('media-count') > 1 ? true : false,
      autoPlay: galleryObject.slideShowSpeed * 1000,
      fade: galleryObject.slideShowAnimation === 'fade' ? true : false,
      watchCSS: false,
      arrowShape: arrowShape
    });
    var $slides = $el.find('.product-gallery__image');
    $slides.each(function (_, slide) {
      var $slide = $(slide); // Listen for model pause/play events

      $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function () {
        $el.flickity('unbindDrag');
      });
      $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function () {
        $el.flickity('bindDrag');
      });
    });
    $el.on('change.flickity', function () {
      $slides.each(function (index, slide) {
        // Variables to be used
        var $slide = $(slide);
        var mediaType = $slide.data('media-type'); // Check whether slide is active slide (featured image shown) or inactive slide (slide hidden)

        if ($slide.hasClass('is-selected')) {
          // Switch statement to go through different media types (video, model)
          switch (mediaType) {
            case 'model':
              /* On slide change, if active slide contains 3d model
              * If on desktop, on hover, unbind flickity, after hover bind flickity
              * On model play event, unbind flickity to ensure model can be interacted with
              * On model pause event, bind flickity so that slide can be swiped
              * Pause all model slides when hidden
              */
              if (window.PXUTheme.media_queries.large.matches) {
                // On mouseenter event, unbind flickity
                $slide.on('mouseenter', function () {
                  $el.flickity('unbindDrag');
                }); // On mouseleave event, bind flickity

                $slide.on('mouseleave', function () {
                  $el.flickity('bindDrag');
                });
              }

              break;
          }
        } else {
          // Below logic deals with the hidden slides when a flickity change is triggered
          // Switch statement to go through different media types (video, model)
          switch (mediaType) {
            case 'model':
              // Pause models when hidden
              if (galleryObject.models.length > 0) {
                $.each(galleryObject.models, function (index, model) {
                  model.pause();
                });
              }

              break;

            case 'video':
              // Variables
              var $htmlVideo = $slide.find('[data-html5-video]');
              var videoID = $htmlVideo.find('video').data('plyr-video-id'); // Pause all html5 videos for slides that are hidden

              if ($htmlVideo.length) {
                $.each(galleryObject.videoPlayers, function (index, player) {
                  if (player.id == videoID) {
                    player.pause();
                  }
                });
              }

              break;

            case 'external_video':
              // Variables
              var $iframeVideo = $slide.find('iframe');
              var iframeID = $iframeVideo.attr('id'); // Pause all youtube videos for slides that are hidden

              if ($iframeVideo.length) {
                $.each(galleryObject.videoPlayers, function (index, player) {
                  if (player.media.id == iframeID) {
                    player.pause();
                  }
                });
              }

              break;
          }
        }
      });
    });
    $el.on('settle.flickity', function () {
      $el.flickity('resize');
    });
    $(window).on('load', function () {
      $el.flickity('resize');
    });
    $slides.each(function (index, slide) {
      // Variables to be used
      var $slide = $(slide);
      var mediaType = $slide.data('media-type'); // Check whether slide is active slide (featured image shown)

      if ($slide.hasClass('is-selected')) {
        if (mediaType == 'model') {
          // If slide has 3D model, unbind flickity on hover on desktop
          // Allows you to click anywhere to trigger model ui
          if (window.PXUTheme.media_queries.large.matches) {
            // On mouseenter event, unbind flickity
            $slide.on('mouseenter', function () {
              $el.flickity('unbindDrag');
            }); // On mouseleave event, bind flickity

            $slide.on('mouseleave', function () {
              $el.flickity('bindDrag');
            });
          }
        } // Detect keyboard 'ENTER' key on slides


        $slide.keypress(function (event) {
          if (event.which == 13) {
            $slide.find('model-viewer, .product-gallery__link, .plyr').focus();
            $el.on('settle.flickity', function (event, index) {
              // Run video autoplay logic if featured media is a video
              if (mediaType == 'video' || mediaType == 'external_video') {
                checkForVideos();
              } // Autoplay model if featured media is a model


              if (mediaType == 'model') {
                // If model container has class is-selected then play the model
                autoplayModel();
              } // Unbind settle event


              $el.off('settle.flickity');
            });
          }
        });
      }
    });
    var $sliderArrows = $el.find('.flickity-prev-next-button');

    if (($sliderArrows || $thumbnails) && window.PXUTheme.media_queries.large.matches) {
      $sliderArrows.on('click', function () {
        // Find out media type of featured media slide
        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');
        $el.on('settle.flickity', function (event, index) {
          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          } // Autoplay model if featured media is a model


          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          } // Unbind settle event


          $el.off('settle.flickity');
        });
      }); // Detect keyboard 'ENTER' key on slider arrows

      $sliderArrows.on('keypress', function (event) {
        if (event.which == 13) {
          $el.focus();
          $el.attr('tabindex', 0);
          $el.find('.product-gallery__image').attr('tabindex', 0);
        }
      });
      $thumbnails.on('click', function () {
        // Change slide
        var index = $(event.currentTarget).index();
        $el.flickity('select', index); // Find out media type of featured media slide

        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');
        $el.on('settle.flickity', function (event, index) {
          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          } // Autoplay model if featured media is a model


          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          } // Unbind settle event


          $el.off('settle.flickity');
        });
      }); // Added functionality for keyboard 'enter' key

      $thumbnails.keypress(function (event) {
        var index = $(event.currentTarget).index();

        if (event.which == 13) {
          // Change slide
          $el.flickity('select', index); // Find selected slide

          var $selectedSlide = $el.find('.product-gallery__image.is-selected'); // Find out media type of featured media slide

          var mediaType = $selectedSlide.data('media-type'); // Bring focus to media inside selected slide once slide has finished animation

          $el.on('settle.flickity', function (event, index) {
            $selectedSlide.find('[data-youtube-video]').attr('tabindex', '0');
            $selectedSlide.find('model-viewer, .plyr, .product-gallery__link').focus(); // Run video autoplay logic if featured media is a video

            if (mediaType == 'video' || mediaType == 'external_video') {
              checkForVideos();
            } // Autoplay model if featured media is a model


            if (mediaType == 'model') {
              // If model container has class is-selected then play the model
              autoplayModel();
            } // Unbind settle event


            $el.off('settle.flickity');
          });
        }
      });
    }

    function autoplayModel() {
      $.each(galleryObject.models, function (index, model) {
        var $slide = $(model.container).parents('.product-gallery__image');

        if ($slide.hasClass('is-selected')) {
          model.play();
        }
      });
    }

    function checkForVideos() {
      $slides.each(function (index, slide) {
        // Variables
        var $slide = $(slide);
        var mediaType = $slide.data('media-type');
        var videoID = $slide.find('video').data('plyr-video-id');
        var $iframeVideo = $slide.find('iframe');
        var iframeID = $iframeVideo.attr('id');

        if ($slide.hasClass('is-selected')) {
          if (mediaType == 'video') {
            videoID = $slide.find('video').data('plyr-video-id');

            if (videoID) {
              autoplayVideo(videoID, $slide);
            }
          } else if (mediaType == 'external_video') {
            if (iframeID) {
              autoplayYoutubeVideo(iframeID, $slide);
            }
          }
        }
      });
    }

    function autoplayVideo(videoID, $slide) {
      // Compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function (index, player) {
        if (player.id == videoID) {
          player.play(); // On fullscreen exit, focus on the thumbnail nav

          player.on('exitfullscreen', function (event) {
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');

            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          });
        }
      });
    }

    function autoplayYoutubeVideo(iframeID, $slide) {
      // compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function (index, player) {
        if (player.playing) {
          player.pause();
        }

        if (player.media.id == iframeID) {
          player.play(); // On fullscreen exit, focus on the thumbnail nav

          player.on('exitfullscreen', function (event) {
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');

            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          });
        }
      });
    } // Thumbnail gallery logic begins


    if (galleryObject.thumbnailsEnabled == true) {
      if (galleryObject.thumbnailsSliderEnabled == true && $slides.length > 1) {
        // If desktop determine which slider we build
        if (window.PXUTheme.media_queries.large.matches) {
          // If thumbnail position is left/right then vertical slider gets enabled
          if (galleryObject.thumbnailsPosition == 'left-thumbnails' || galleryObject.thumbnailsPosition == 'right-thumbnails') {
            $thumbnailProductGallery.css('max-height', $el.closest('.product-gallery__main').outerHeight());
            $thumbnailProductGallery.addClass('vertical-slider-enabled');
            $thumbnails.on('click', function (event) {
              var index = $(event.currentTarget).index();
              $el.flickity('select', index);
            });
            var navCellHeight = $thumbnails.height();
            var navHeight = $thumbnailProductGallery.height();
            $el.on('select.flickity', function () {
              // set selected nav cell
              var flkty = $el.data('flickity');
              $thumbnailProductGallery.find('.is-nav-selected').removeClass('is-nav-selected');
              var $selected = $thumbnails.eq(flkty.selectedIndex).addClass('is-nav-selected'); // scroll nav

              var scrollY = $selected.position().top + $thumbnailProductGallery.scrollTop() - (navHeight + navCellHeight) / 2;
              $thumbnailProductGallery.animate({
                scrollTop: scrollY
              });
            });
          } else {
            $thumbnailProductGallery.flickity({
              cellAlign: 'center',
              contain: true,
              groupCells: '80%',
              imagesLoaded: true,
              pageDots: false,
              prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
              asNavFor: $el[0],
              arrowShape: arrowShape
            });
            $thumbnailProductGallery.on('settle.flickity', function () {
              $thumbnailProductGallery.flickity('resize');
            });
            $(window).on('load', function () {
              $thumbnailProductGallery.flickity('resize');
            }); // Once thumbnail is focused, move carousel to that cell

            $.each($thumbnails, function (index, thumbnail) {
              var $thumbnail = $(thumbnail);

              if ($thumbnail.hasClass('is-selected')) {
                $thumbnail.on('focus', function () {
                  $thumbnailProductGallery.flickity('selectCell', index);
                });
              }
            });
          }
        } else {
          // If not on desktop, create standard thumbnail slider
          $thumbnailProductGallery.flickity({
            cellAlign: 'center',
            contain: true,
            groupCells: '80%',
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
            asNavFor: $el[0],
            arrowShape: arrowShape
          });
        }
      } else {
        // If thumbnail slider is disabled, ensure thumbnails can still navigate product images
        $thumbnailProductGallery.find('.product-gallery__thumbnail').on('click', function () {
          var index = $(this).index();
          $el.flickity('selectCell', index);
        });
      }
    }
  },
  launchProductMedia: function launchProductMedia(galleryObject) {
    // function to check if browser is IE
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./); // Ensure product media libraries are present

    if (!isIE11) {
      window.Shopify.loadFeatures([{
        name: 'shopify-xr',
        version: '1.0'
      }, {
        name: 'model-viewer-ui',
        version: '1.0'
      }], onAllFeaturesLoaded);
    } // Enable looping for videos based off their section setting
    // Find videos where they are contained within this section
    // Set looping


    $.each(galleryObject.videoPlayers, function (index, player) {
      var $wrapper = $(player.elements.wrapper);

      if (galleryObject.sectionID != null) {
        var $section = $wrapper.parents('.shopify-section').attr('id', galleryObject.sectionID);
        var loopingEnabled = $section.find(galleryObject.element).find('.product-gallery__main').data('video-looping-enabled');
      } else {
        var loopingEnabled = galleryObject.element.find('.product-gallery__main').data('video-looping-enabled');
      }

      player.loop = loopingEnabled;
    }); // 3D Model Setup

    var config = {
      // Default control list
      controls: ['zoom-in', 'zoom-out', 'fullscreen'],
      focusOnPlay: false
    };

    function onAllFeaturesLoaded() {
      // If product media enabled look for model-viewer tags and setup
      galleryObject.models = [];
      var $models = $($('model-viewer', galleryObject.element));
      $models.each(function (index, model) {
        model = new Shopify.ModelViewerUI(model, config);
        galleryObject.models.push(model);
      });
    }
  },
  enableVideoOnHover: function enableVideoOnHover($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function (index, player) {
        if (player.id == videoID || player.media.id == videoID) {
          player.toggleControls(false);
          player.muted = true;
          player.play();
        }
      });
    }
  },
  disableVideoOnHover: function disableVideoOnHover($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function (index, player) {
        if (player.id == videoID || player.media.id == videoID) {
          if (player.playing) {
            player.pause();
          }
        }
      });
    }
  },
  loadPlyr: function loadPlyr(galleryObject, videos, showSecondaryMedia) {
    // Initializes Plyr library for HTML5 and YouTube videos in Product Gallery
    utilities.launchVideoPlayer(Plyr, galleryObject, videos, showSecondaryMedia);

    if (galleryObject) {
      // Adds plyr video id to video wrapper
      $.each(galleryObject.videoPlayers, function (index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;

        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      });
    }
  },
  loadProductRecommendations: function loadProductRecommendations() {
    var $productRecommendations = $('.product-recommendations');
    var productID = $productRecommendations.data('product-id');
    var limit = $productRecommendations.data('limit');
    var recommendationsURL = $productRecommendations.data('recommendations-url');
    var sectionEnabled = $productRecommendations.data('enabled');
    var sectionId = $productRecommendations.data('section-id');
    if (!sectionEnabled) return; // Build request URL

    var requestUrl = recommendationsURL + "?section_id=" + sectionId + "&limit=" + limit + "&product_id=" + productID;
    $.ajax({
      type: 'GET',
      url: requestUrl,
      success: function success(data) {
        if (!sectionEnabled) {
          return;
        }

        var $recommendedProductsElement = $(data).find('.product-recommendations').html(); // Insert product list into the product  recommendations container

        $productRecommendations.html($recommendedProductsElement); // Initialize shopify payment buttons

        if (Shopify.PaymentButton) {
          Shopify.PaymentButton.init();
        }

        window.collection.init(); // Active swatch functionality for the recommended product quick shop

        window.product.productSwatches();

        if (window.PXUTheme.theme_settings.collection_secondary_image) {
          window.collection.showSecondaryImage();
        }
      }
    });
  },
  unload: function unload($target) {
    // Destroy Flickity slider
    var $gallerySlider = $target.find('.product-gallery__main');
    var $thumbnailSlider = $target.find('.product-gallery__thumbnails');
    $gallerySlider.flickity('destroy');
    $thumbnailSlider.flickity('destroy');
    document.removeEventListener('lazyloaded', window.product.enableZoom);
  }
};
/*============================================================================
  Product form
==============================================================================*/

window.productFormListeners = {
  init: function init() {
    $(document).on("click", ".minus", function (e) {
      var quantity = parseInt($(this).next("input").val());
      quantity -= 1;
      $(this).next("input").val(quantity);

      if (quantity == 0) {
        $(this).closest('li.cart_item').slideUp();
        setTimeout(ajaxSubmitCart, 500);
      } else {
        $(this).next("input").trigger('change');
      }

      e.stopPropagation();
      e.preventDefault();
      return false;
    });
    $(document).on("click", ".plus", function (e) {
      var quantity = parseInt($(this).prev("input").val());
      quantity += 1;
      $(this).prev("input").val(quantity).trigger('change');
      e.stopPropagation();
      e.preventDefault();
      return false;
    }); // Prevent the default behavior of the cart link when the quantity input is clicked

    $(document).on('click', '.cart__quantity input.quantity', function (e) {
      return false;
    });
    $(document).on("change", "#cart_form input[type='number']", function () {
      $("#cart_form").submit();
    });

    if ($('.tos_agree').length) {
      $('body').on('click', 'input[type="submit"]', function () {
        if ($(this).parents('form').find('.tos_agree').length) {
          if ($(this).parents('form').find('.tos_agree').is(':checked')) {
            $(this).submit();
          } else {
            alert(window.PXUTheme.translation.agree_to_terms_warning);
            return false;
          }
        } else {
          $(this).submit();
        }
      });
    }
  },
  unload: function unload() {}
};
/*============================================================================
  Collection
==============================================================================*/

window.collection = {
  init: function init() {
    if (window.PXUTheme.theme_settings.collection_swatches) {
      window.PXUTheme;

      if (window.PXUTheme.media_queries.large.matches) {
        $('.thumbnail').hover(function () {
          $('.swatch span', $(this)).each(function () {
            if ($(this).data("image").indexOf("no-image") == -1) {
              $('<img/>')[0].src = $(this).data("image");
            }
          });
        });
        $('.swatch span').hover(function () {
          if ($(this).data("image").indexOf("no-image") == -1) {
            $(this).parents('.thumbnail').find('img').attr('src', $(this).data("image"));
            $(this).parents('.thumbnail').find('img').attr('srcset', $(this).data("image"));
          }
        });
      }
    } // Remove the Quick shop button and Fancybox data attributes on mobile devices


    if (window.PXUTheme.device.hasTouch.matches) {
      $('.quick_shop').remove();
      $('.quick_shop--list').removeAttr('data-fancybox data-src data-gallery');
    } // Display the Quick shop on desktop


    if (window.PXUTheme.media_queries.large.matches) {
      $('.quick_shop, .quick_shop--list').fancybox({
        baseClass: 'quick-shop__lightbox product-' + product.id,
        hash: false,
        infobar: false,
        toolbar: false,
        loop: false,
        smallBtn: true,
        video: {
          autoStart: false
        },
        touch: false,
        mobile: {
          preventCaptionOverlap: false,
          toolbar: true,
          buttons: ["close"]
        },
        afterShow: function afterShow(e) {
          var _this = this;

          // When the modal is opened, prevent scrolling
          document.documentElement.classList.add('scroll-locked');
          var productUrl = $(e.current.src).data('url');
          _pixelunion_shopify_asyncview__WEBPACK_IMPORTED_MODULE_1__/* .default.load */ .Z.load(productUrl, {
            view: 'quickshop'
          }).then(function (_ref) {
            var data = _ref.data,
                html = _ref.html;
            $(e.current.src + '.modal').html(html.content);
            window.product.init(); // Initialize shopify payment buttons

            if (Shopify.PaymentButton) {
              Shopify.PaymentButton.init();
            } // Grab the fancybox element that is being clicked


            var $fancyboxImageElement = $(_this.opts.$orig);
            var $gallery = $('.' + $fancyboxImageElement.data('gallery'));
            var selector = $('.fancybox-is-open').find('.selector-wrapper select');
            var $productForm = $('.fancybox-is-open .js-product_section').find('.product_form'); //Link sold out options when there is more than one option available

            if (window.PXUTheme.theme_settings.product_form_style == 'swatches') {
              var JSONData = $productForm.data('product');
              var productID = $productForm.data('product-id');
              var productSection = '.product-' + productID + ' .js-product_section';
              var swatchOptions = $productForm.find('.swatch-options .swatch');

              if (swatchOptions.length > 1) {
                Shopify.linkOptionSelectors(JSONData, productSection);
              }
            }

            selector.trigger('change'); // Global variables

            var $gallery = $('.' + $fancyboxImageElement.data('gallery'));
            var galleryObject = {
              element: $gallery,
              thumbnailsEnabled: $gallery.parents('.product_section').data('thumbnails-enabled'),
              thumbnailsSliderEnabled: $gallery.parents('.product_section').data('thumbnails-slider-enabled'),
              thumbnailsPosition: $gallery.parents('.product_section').data('thumbnails-position'),
              thumbnailsArrows: $gallery.parents('.product_section').data('gallery-arrows-enabled'),
              slideshowAnimation: $gallery.parents('.product_section').data('slideshow-animation'),
              slideShowSpeed: $gallery.parents('.product_section').data('slideshow-speed'),
              activateZoom: $gallery.parents('.product_section').data('activate-zoom'),
              productMediaSupported: $gallery.parents('.product_section').data('product-media-supported'),
              loopingEnabled: $gallery.data('video-looping-enabled'),
              sectionID: null
            };
            window.product.enableSlider(galleryObject);

            if (galleryObject.productMediaSupported) {
              // Find videos within gallery section
              var thumbnailVideos;
              thumbnailVideos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();
              window.product.loadPlyr(galleryObject, thumbnailVideos);
              window.product.launchProductMedia(galleryObject);
            } // Hover to zoom


            if (galleryObject.activateZoom) {
              document.addEventListener('lazyloaded', window.product.enableZoom);
            } // Initialize tabs


            var quickshopTabs = $('.product_section.is-quickshop').find('ul.tabs');

            if (quickshopTabs) {
              quickshopTabs.each(function () {
                var tab = $(this).find('> li > a');
                tab.click(function (e) {
                  var contentLocation = $(this).attr('href');

                  if (contentLocation.charAt(0) == "#") {
                    e.preventDefault();
                    tab.removeClass('active');
                    $(this).addClass('active');
                    $(this).parents('ul.tabs').next().find(contentLocation).show().css({
                      'display': 'block'
                    }).addClass('active').siblings().hide().removeClass('active');
                  }
                });
              });
            }
          });
        },
        afterClose: function afterClose() {
          // When the modal is closed, allow scrolling
          document.documentElement.classList.remove('scroll-locked'); // Grab the fancybox element that is being clicked

          var $fancyboxImageElement = $(this.opts.$orig);
          var $gallery = $('.' + $fancyboxImageElement.data('gallery')); // Find videos in gallery
          // Find IDs and match against player
          // If videos are playing, pause them

          var $videosInGallery = $gallery.find('.product-gallery__image[data-media-type="video"], .product-gallery__image[data-media-type="external_video"]');
          $videosInGallery.each(function (index, video) {
            var $iframeVideo = $(video).find('iframe');
            var iframeID = $iframeVideo.attr('id');
            var $html5Video = $(video).find('[data-html5-video]');
            var videoID = $html5Video.find('video').data('plyr-video-id'); // Pause videos if IDs match

            if ($html5Video.length || $iframeVideo.length) {
              $.each(globalPlayersArray, function (index, player) {
                if (videoID) {
                  if (player.id == videoID && player.playing) {
                    player.pause();
                  }
                } else if (iframeID) {
                  if (player.media.id == iframeID && player.playing) {
                    player.pause();
                  }
                }
              });
            }
          });
          document.removeEventListener('lazyloaded', window.product.enableZoom);
        }
      });
    }

    if ($('[data-faceted-filters]').length) {
      facetedFiltering.init();
    }

    $('#sort-by').val($('#sort-by').data('default-sort'));
    $('body').on('change', '#sort-by', function () {
      var sortValue = $('#sort-by').val();
      var newQuery;

      if (location.search.length) {
        var currentQueryArray = location.search.replace('?', '').split('&');
        var newQueryArray = [];

        if (!location.search.includes('sort_by')) {
          newQueryArray.push("sort_by=".concat(sortValue));
        }

        currentQueryArray.forEach(function (query) {
          var splitQuery = query.split('=');
          var queryKey = splitQuery[0];
          var queryValue = splitQuery[1];

          if (queryKey === 'sort_by') {
            queryValue = sortValue;
          }

          newQueryArray.push("".concat(queryKey, "=").concat(queryValue));
        });
        newQuery = newQueryArray.join('&');
      } else {
        newQuery = "sort_by=".concat(sortValue);
      }

      window.location = "?".concat(newQuery);
    });

    if (window.PXUTheme.theme_settings.collection_secondary_image) {
      window.collection.showSecondaryImage();
    }
  },
  showSecondaryImage: function showSecondaryImage() {
    // Will be enabled on non-touch devices and screen sizes larger than 960px
    if (!window.PXUTheme.device.hasTouch.matches && window.PXUTheme.media_queries.larger.matches) {
      // Load Plyr for videos as secondary media
      var secondaryMediaVideos;
      secondaryMediaVideos = $('.thumbnail').find('[data-html5-video] video, [data-youtube-video]').get(); // If recommended products available, check for data-plyr-loaded attribute

      var plyrLoaded = $('.shopify-section--recommended-products').find('.products').data('plyr-loaded');
      var galleryObject = null;
      var showSecondaryMedia = true;

      if (!plyrLoaded) {
        window.product.loadPlyr(galleryObject, secondaryMediaVideos, showSecondaryMedia);
      }

      $('.has-secondary-media-swap').off().on('mouseenter', function () {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        window.product.enableVideoOnHover($(this));
      });
      $('.has-secondary-media-swap').on('mouseleave', function () {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        window.product.disableVideoOnHover($(this));
      });
    }
  },
  unload: function unload($target) {
    $target.find('.thumbnail').off('mouseenter mouseleave');
    $('body').off('change', '#tag_filter, #sort-by');
    $target.find('.quick_shop, .quick_shop--list').off('click.fb');
    $target.find('[data-filter-modal-open]').off('click');
    $(window).off('resize.filtering');
  }
};
/*============================================================================
  Faceted Filtering
==============================================================================*/

var facetedFiltering = {
  init: function init() {
    var filterRange = document.querySelectorAll('[data-filter-range]');
    var filterCheckboxes = document.querySelectorAll('[data-filter-input]');
    var rangeNames = [];
    filterCheckboxes.forEach(function (checkbox) {
      $(checkbox).on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var target = e.currentTarget;
        if (target.hasAttribute('data-disabled')) return; // Toggle checked state

        target.querySelector('[data-filter-checkbox]').toggleAttribute('data-filter-checked');
        window.location = target.dataset.url;
      });
    });
    /* For range input */

    filterRange.forEach(function (filter) {
      rangeNames.push(filter.name);
    });
    $('[data-range-filter-button]').on('click', function (e) {
      facetedFiltering.getFilteredResults(e.currentTarget, rangeNames);
    });
    $('[data-filter-modal-open]').on('click', function (e) {
      e.preventDefault();
      $.fancybox.open($('[data-filter-modal]'), {
        baseClass: 'faceted-filter-modal',
        hash: false,
        infobar: false,
        toolbar: false,
        loop: true,
        smallBtn: true,
        touch: false,
        mobile: {
          preventCaptionOverlap: false,
          toolbar: true,
          buttons: ["close"]
        },
        afterShow: function afterShow() {
          $(document.documentElement).addClass('scroll-locked');
        },
        afterClose: function afterClose() {
          $(document.documentElement).removeClass('scroll-locked');
        }
      });
    });
    $(window).on('resize.filtering', function (e) {
      if (window.innerWidth >= 799) {
        $('[data-filter-modal]').removeAttr('style');
      }
    });
  },
  getFilteredResults: function getFilteredResults(element, rangeNames) {
    var searchParameters;
    var currentSearch = window.location.search.replace('?', '');
    var formData = new FormData(element.closest('form'));
    var newSearch = new URLSearchParams(formData).toString(); // Filter through current search string to see if price range input already exists,
    // if it does, create new string without current price range parameters

    var splitCurrentSearch = currentSearch.split('&');
    var filteredCurrentSearch = splitCurrentSearch.filter(function (search) {
      if (search.includes(rangeNames[0]) || search.includes(rangeNames[1])) {
        return false;
      }

      return true;
    });
    filteredCurrentSearch = filteredCurrentSearch.join('&'); // If current search parameters exist, append new search parameters
    // on to existing parameters

    if (filteredCurrentSearch.length > 0) {
      searchParameters = "".concat(filteredCurrentSearch, "&").concat(newSearch);
    } else {
      searchParameters = "".concat(newSearch);
    }

    var urlQueryString = '';

    if (searchParameters) {
      urlQueryString = "?".concat(searchParameters);
    } else if (searchParameters) {
      urlQueryString = "?".concat(searchParameters);
    }

    window.location.search = urlQueryString;
  }
};
/*============================================================================
  Map
==============================================================================*/

window.map = {
  init: function init() {
    if ($(".shopify-section--map .map, .shopify-section--page-contact-template .map").hasClass('js-api-map')) {
      var mapsToLoad = []; //Create map settings array

      $('.map').each(function (i, obj) {
        mapsToLoad.push(this);
        mapsToLoad[i].sectionid = $(this).data('id');
        mapsToLoad[i].address = $(this).data('address');
        mapsToLoad[i].directions = $(this).data('directions-address');
        mapsToLoad[i].zoom = $(this).data('zoom');
        mapsToLoad[i].mapstyle = $(this).data('style');
        mapsToLoad[i].showpin = $(this).data('pin');
        mapsToLoad[i].apikey = $(this).data('api-key');
      });
      $.each(mapsToLoad, function (i, instance) {
        //Enable caching to avoid duplicate google maps files
        $.ajaxSetup({
          cache: true
        }); //Load maps script and find location coordinates

        $.getScript('https://maps.googleapis.com/maps/api/js?key=' + mapsToLoad[i].apikey).then(function () {
          window.map.findLocation(mapsToLoad[i]);
          $.ajaxSetup({
            cache: false
          });
        });
      });
    }
  },
  findLocation: function findLocation(mapArray) {
    var geoLat;
    var geoLng;
    var geocoder = new google.maps.Geocoder(); //Find and set coordinates

    geocoder.geocode({
      'address': mapArray.address
    }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        geoLat = results[0].geometry.location.lat();
        geoLng = results[0].geometry.location.lng(); //Create map

        window.map.initMap(geoLat, geoLng, mapArray);
      }
    });
  },
  initMap: function initMap(lat, lng, mapArray) {
    var location = {
      lat: lat,
      lng: lng
    };
    var styleJson = []; //Set style JSON

    if (mapArray.mapstyle == 'aubergine') {
      styleJson = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8ec3b9"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1a3646"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#64779e"
        }]
      }, {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#4b6878"
        }]
      }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#334e87"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#283d6a"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6f9ba5"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3C7680"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#304a7d"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2c6675"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#255763"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#b0d5ce"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#023e58"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#98a5be"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1d2c4d"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#283d6a"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3a4762"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#0e1626"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#4e6d70"
        }]
      }];
    } else if (mapArray.mapstyle == 'retro') {
      styleJson = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#523735"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#c9b2a6"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#dcd2be"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#ae9e90"
        }]
      }, {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#93817c"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#a5b076"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#447530"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f1e6"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#fdfcf8"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f8c967"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#e9bc62"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e98d58"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#db8555"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#806b63"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8f7d77"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#ebe3cd"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dfd2ae"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#b9d3c2"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#92998d"
        }]
      }];
    } else if (mapArray.mapstyle == 'silver') {
      styleJson = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#f5f5f5"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dadada"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e5e5e5"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{
          "color": "#eeeeee"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#c9c9c9"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }];
    } else if (mapArray.mapstyle == 'night') {
      styleJson = [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#242f3e"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#746855"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#242f3e"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      }, {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }];
    } else {
      styleJson = [];
    } //Create google maps link


    $('.js-map-link').attr('href', 'https://www.google.com/maps/place/' + mapArray.directions + '/@' + lat + ',' + lng); //Set map options

    var mapOptions = {
      zoom: mapArray.zoom,
      center: location,
      styles: styleJson,
      disableDefaultUI: false
    }; //Create map

    var map = new google.maps.Map(document.getElementById(mapArray.sectionid), mapOptions); //Show pin

    if (mapArray.showpin == true) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }
};
/*============================================================================
  Article
==============================================================================*/

window.article = {
  init: function init() {
    window.banner_image.init();
    window.banner.init();

    if (window.location.pathname.indexOf('/comments') != -1) {
      $('html,body').animate({
        scrollTop: $("#new-comment").offset().top - 140
      }, 'slow');
    }
  },
  unload: function unload($target) {}
};
/*============================================================================
  Utilities
==============================================================================*/

var plyrUtils = {
  playButtonIcon: '<button type="button" class="plyr__control plyr__control--overlaid" aria-label="Play, {title}" data-plyr="play"><svg class="play-icon-button-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 20V40L39 29.4248L23 20Z" fill="#323232"/></svg><span class="plyr__sr-only">Play</span></button>',
  playButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
  muteButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
  progressInput: '<div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div></div>',
  volume: '<div class="plyr__controls__item plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
  fullscreen: '<button type="button" class="plyr__controls__item plyr__control" data-plyr="fullscreen"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span></button>'
};
var controls = plyrUtils.playButtonIcon + '<div class="plyr__controls">' + plyrUtils.playButton + plyrUtils.progressInput + plyrUtils.muteButton + plyrUtils.volume + plyrUtils.fullscreen + '</div';
var globalPlayersArray = [];
var secondaryMediaPlayers;
var utilities = {
  listenForResize: function listenForResize() {
    window.addEventListener('orientationchange', function (event) {
      setTimeout(function () {
        window.banner.init();
      }, 100);
    }); // Setup a timer

    var resizeTimeout; // Listen for resize events

    window.addEventListener('resize', function (event) {
      // If timer is null, reset it to 66ms and run your functions.
      // Otherwise, wait until timer is cleared
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          // Reset timeout
          resizeTimeout = null; // Run our resize functions

          announcement_bar.setPadding();
          window.animate_content.init();
          window.header.setHeaderPosition();
          window.banner_image.resetPadding();
          window.banner_image.init();
          window.banner.init();
          window.header.dynamicDropdown();
          window.header.setPadding();
        }, 66);
      }
    }, false);
  },
  launchVideoPlayer: function launchVideoPlayer(Plyr, galleryObject, videos, showSecondaryMedia) {
    if (galleryObject != null) {
      galleryObject.videoPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      }); // Going through galleries array and pushing players into master array

      $.each(galleryObject.videoPlayers, function (index, player) {
        globalPlayersArray.push(player);
      });
    } else if (showSecondaryMedia == true) {
      // Collection page/Recommended Products secondary media
      secondaryMediaPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      }); // Add data-attribute 'plyr-loaded="true"' to videos container

      $('.shopify-section--recommended-products').find('.products').attr('data-plyr-loaded', 'true');
      $.each(secondaryMediaPlayers, function (index, player) {
        globalPlayersArray.push(player);
      }); // Adds plyr video id to video wrapper

      $.each(globalPlayersArray, function (index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;

        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      });
      return secondaryMediaPlayers;
    }
  },
  enableDisclosure: function enableDisclosure() {
    var $disclosure = $('[data-disclosure]');
    var $toggle = $('[data-disclosure-toggle]');
    var $disclosureWrap = $('.disclosure__list-wrap'); //Check if current opened menu is offscreen

    function checkOffScreen($openedToggle) {
      if ($openedToggle.siblings('.disclosure__list-wrap').is(':off-right')) {
        $openedToggle.siblings('.disclosure__list-wrap').addClass('disclosure--left');
      }
    }

    function closeDisclosures(ignoreTarget, currentTarget) {
      if (ignoreTarget === true) {
        $toggle.not(currentTarget).removeClass('is-clicked');
        $toggle.not(currentTarget).attr('aria-expanded', 'false');
      } else {
        $toggle.removeClass('is-clicked');
        $toggle.attr('aria-expanded', 'false');
      }

      $disclosureWrap.removeClass('disclosure--left');
    } //Close menus on ESC


    $('body').on('keyup', function (e) {
      if (e.which == '27') {
        closeDisclosures();
      }
    }); //Close menus on hoverout

    $disclosure.on('mouseleave', function (e) {
      closeDisclosures();
    }); //On click/focus event for toggling options

    $toggle.on('mouseenter', function (e) {
      //Close all other menus
      closeDisclosures(true, this);
      var $target = $(e.currentTarget);
      $target.attr('aria-expanded', 'true').addClass('is-clicked');
      checkOffScreen($target);
    });
    $toggle.on('keyup', function (e) {
      if (e.which === 13) {
        var $target = $(e.currentTarget);
        $target.attr('aria-expanded', 'true').addClass('is-clicked');
        checkOffScreen($target);
      }
    });
    $disclosure.on('focusout', function (e) {
      var list = e.currentTarget;
      var nextEl = e.relatedTarget; // The element that would receive focus.
      // If the nextEl is within the list (a list item), don't close the list

      if (!list.contains(nextEl)) {
        closeDisclosures(false, this);
      }
    }); //Mobile toggle logic

    $toggle.on('touchstart', function (e) {
      if (window.PXUTheme.media_queries.medium.matches || !window.PXUTheme.device.hasTouch.matches) {
        var $target = $(e.currentTarget);
        closeDisclosures(true, this);

        if (!$target.hasClass('is-clicked')) {
          $target.attr('aria-expanded', 'true').addClass('is-clicked');
          checkOffScreen($target);
        } else {
          $target.attr('aria-expanded', 'false').removeClass('is-clicked');
          $disclosureWrap.removeClass('disclosure--left');
        }
      }
    });
  },
  addImageDimension: function addImageDimension(imageUrl, size) {
    var insertPosition = imageUrl.lastIndexOf(".");
    return imageUrl.substring(0, insertPosition) + size + imageUrl.substring(insertPosition);
  },
  unload: function unload() {
    $('[data-disclosure]').off();
    $('[data-disclosure-toggle]').off();
    $('.disclosure__list-wrap').off();
  }
};

var toggleSidebarBlocks = function toggleSidebarBlocks($toggle) {
  if ($toggle.parent().next('ul').is(':visible')) {
    $toggle.parent().next('ul').hide();
    $toggle.html('+');
    $toggle.attr('aria-expanded', false);
  } else {
    $toggle.parent().next('ul').show();
    $toggle.html('-');
    $toggle.attr('aria-expanded', true);
  }
};

var toggleSidebarMenus = function toggleSidebarMenus($toggle) {
  var $content = $toggle.next('ul');
  $content.slideToggle();
  $toggle.toggleClass('active');
  $toggle.attr('aria-expanded', $toggle.attr('aria-expanded') == 'true' ? 'false' : 'true');
};

window.animate_content = {
  init: function init() {
    // added to the listenForResize method
    if (window.PXUTheme.media_queries.large.matches || $(window).width() == 0) {
      $(".animate_right").waypoint(function () {
        $(this.element).addClass("animated fadeInRight");
      }, {
        offset: '80%'
      });
      $(".animate_left").waypoint(function () {
        $(this.element).addClass("animated fadeInLeft");
      }, {
        offset: '80%'
      });
      $(".animate_up").waypoint(function () {
        $(this.element).addClass("animated fadeInUp");
      }, {
        offset: '80%'
      });
      $(".animate_in").waypoint(function () {
        $(this.element).addClass("animated fadeIn");
      }, {
        offset: '80%'
      });
      $(".animate_down").waypoint(function () {
        $(this.element).addClass("animated fadeInDown");
      }, {
        offset: '80%'
      });
    }
  }
};
/*============================================================================
  Cart
==============================================================================*/

window.cart = {
  init: function init() {
    $("#address_country").val($("#address_country").data("default")).change();
  },
  unload: function unload() {}
};
/*============================================================================
  Search autocomplete
==============================================================================*/

window.searchAutocomplete = {
  vars: {
    term: '',
    searchPath: window.PXUTheme.routes.search_url,
    displayTimer: ''
  },
  init: function init() {
    this.unload(); // Move mobile search out of mm-slider content for proper overlay display

    $('.mobile-search').appendTo('body'); // Focus state to display search results

    $('[data-autocomplete-true]').on('focus', function () {
      $(this).parents('[data-autocomplete-true]').find('.search__results-wrapper').show();
    }); // Clicking outside makes the results disappear.

    $(document).on('click focusout', function (e) {
      if (window.PXUTheme.media_queries.large.matches) {
        var searchForm = $(e.target).parents('.search__form');

        if (searchForm.length === 0) {
          $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
        }
      }
    });
    $('[data-dropdown-rel="search"], [data-autocomplete-true] input').on('click touchstart', function (e) {
      if (window.PXUTheme.media_queries.medium.matches) {
        var formType = $(this).closest('form').find('[name="type"]').val();
        var position = $(document).scrollTop();
        window.searchAutocomplete.showMobileSearch(formType, position);
      }
    });
    $('.search-close').on('click touchstart', function () {
      $('body').removeClass('is-active');
      $('.dropdown_link').removeClass('active_link');
      $('.dropdown_container').hide();
      $('.mobile_nav').find('div').removeClass('open');
      $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
    }); // Submit wildcard searches

    if (window.PXUTheme.media_queries.large.matches) {
      $('[data-autocomplete-true] form').on('submit', function (e) {
        e.preventDefault();
        var formValue = $(this).find('input[name="q"]').val();
        var cleanFormValue = encodeURI(formValue);

        if ($(this).find('[name="type"]').length > 0) {
          var searchType = $(this).find('[name="type"]').val();
        } else {
          var searchType = window.PXUTheme.theme_settings.search_option;
        }

        if (cleanFormValue == null) {
          window.location.href = window.PXUTheme.routes.search_url + '?type=' + searchType;
        } else {
          window.location.href = window.searchAutocomplete.vars.searchPath + '?type=' + searchType + '&q=' + cleanFormValue + '*';
        }
      });
    }

    $('[data-autocomplete-true] form').each(function () {
      var $this = $(this);
      var input = $this.find('input[name="q"]'); // Adding a list for showing search results.

      $('<div class="search__results-wrapper"><ul class="search__results"></ul></div>').appendTo($this);
      input.attr('autocomplete', 'off').on('input', function () {
        clearTimeout(window.searchAutocomplete.vars.displayTimer);

        if ($(this).val().length > 3) {
          window.searchAutocomplete.vars.term = $(this).val();
          window.searchAutocomplete.getResults(window.searchAutocomplete.vars.term, $this);
        } else {
          $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
        }
      });
    });
  },
  getResults: function getResults(term, $this) {
    if ($this.find('[name="type"]').length > 0) {
      var searchType = $this.find('[name="type"]').val();
    } else {
      var searchType = window.PXUTheme.theme_settings.search_option;
    }

    jQuery.getJSON("/search/suggest.json", {
      "q": term,
      "resources": {
        "type": searchType,
        "limit": window.PXUTheme.theme_settings.search_items_to_display,
        "options": {
          "unavailable_products": "last",
          "fields": "title,body,variants.title,vendor,product_type,tag"
        }
      }
    }).done(function (response) {
      var suggestions = [response.resources.results.products, response.resources.results.pages, response.resources.results.articles];
      var filteredResults = []; // Store results in array

      $.each(suggestions, function (index, suggestion) {
        if (suggestion !== undefined && suggestion.length > 0) {
          // Ensure suggestion exists
          filteredResults.push(suggestion);
        }
      }); // Display results

      window.searchAutocomplete.vars.displayTimer = setTimeout(function () {
        window.searchAutocomplete.displayResults(filteredResults[0], $this);
      }, 500);
    });
  },
  displayResults: function displayResults(results, $this) {
    var $resultsWrapper = $this.find('.search__results-wrapper');
    var $resultsList = $this.find('.search__results');
    $resultsWrapper.show();
    $resultsList.empty();

    if ($this.find('[name="type"]').length > 0) {
      var searchType = $this.find('[name="type"]').val();
    } else {
      var searchType = window.PXUTheme.theme_settings.search_option;
    }

    if (results && results.length > 0) {
      $.each(results, function (index, result) {
        var link = $('<a tabindex="0"></a>').attr('href', result.url);

        if (window.PXUTheme.routes.root_url !== '/') {
          window.PXUTheme;
          link = $('<a tabindex="0"></a>').attr('href', window.PXUTheme.routes.root_url + result.url);
        } // If result is a product


        if (result['price']) {
          function formatPrice(price) {
            if (window.PXUTheme.currency.display_format === 'money_with_currency_format') {
              return "<span class=\"money\">".concat(window.PXUTheme.currency.symbol).concat(price, " ").concat(window.PXUTheme.currency.iso_code, "</span>");
            } else {
              return "<span class=\"money\">".concat(window.PXUTheme.currency.symbol).concat(price, "</span>");
            }
          }

          if (result.available === true) {
            if (result.compare_at_price_max > result.price_max || result.compare_at_price_min > result.price_min) {
              var itemPrice = formatPrice(result.price) + ' <span class="was_price">' + formatPrice(result.compare_at_price_min) + '</span>';
            } else {
              if (result.price > 0) {
                if (result.price_min != result.price_max) {
                  var itemPrice = window.PXUTheme.translation.product_from + ' ' + formatPrice(result.price);
                } else {
                  var itemPrice = formatPrice(result.price);
                }
              } else {
                var itemPrice = window.PXUTheme.theme_settings.free_price_text;
              }
            }
          } else {
            var itemPrice = window.PXUTheme.translation.product_sold_out;
          } // if result has an image


          if (result['image']) {
            link.append('<div class="thumbnail"><img class="lazyload lazyload--fade-in" src="' + utilities.addImageDimension(result['image'], '_300x') + '" /></div>');
          }

          link.append('<div class="title">' + result.title + '<br><span class="item-pricing price">' + itemPrice + '</span></div>'); // If result is an article
        } else if (result['summary_html']) {
          if (result.image != 'NULL') {
            link.append('<div class="thumbnail"><img class="lazyload lazyload--fade-in" src="' + utilities.addImageDimension(result['image'], '_300x') + '" /></div>');
          }

          link.append('<div class="title">' + result.title + '<br><span class="item-description">' + result.summary_html.replace(/(<([^>]+)>)/ig, "").slice(0, 25) + ' </span></div>'); // If result is a page
        } else if (result['published_at']) {
          link.append('<div class="title">' + result.title + '<br><span class="item-description">' + result.body.replace(/(<([^>]+)>)/ig, "").slice(0, 25) + ' </span></div>');
        } // Wrap link and append to list


        link.wrap('<li class="item-result"></li>');
        $resultsList.append(link.parent());
      });
      $resultsList.parents('.search__results-wrapper').addClass('results-found');
      $resultsList.prepend('<li class="all-results"><span class="title see-all"><a href="' + this.vars.searchPath + '?type=' + searchType + '&q=' + this.vars.term + '*">' + window.PXUTheme.translation.all_results + '<span class="icon-arrow-right"></span></a></span></li>');
    } else {
      // if no results
      var noResults = '<li class="item-result"><span class="no-results title">' + window.PXUTheme.translation.no_results + '</span></li>';
      $resultsList.append(noResults);
      $resultsList.parents('.search__results-wrapper').removeClass('results-found');
    }

    $resultsList.show();
  },
  showMobileSearch: function showMobileSearch(formType, position) {
    $('body').css('max-height', window.innerHeight);
    $('.mobile-search').fadeIn(200);

    if (/iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
      $('.mobile-search .mobile-search-bar__input').focus();
    } else {
      //Set delay to ensure focus triggers on android
      setTimeout(function () {
        $('.mobile-search .mobile-search-bar__input').focus();
      }, 205);
    }

    document.body.style.position = 'fixed';
    document.body.style.top = '-' + position + 'px';
    $('.mobile-search').css('top', position);
    var searchHeight = window.innerHeight - 60; //Full screen height - form height

    $('.mobile-search .search__results-wrapper').css('max-height', searchHeight);

    if (formType) {
      $('.mobile-search [name="type"]').val(formType);
    } else {
      $('.mobile-search [name="type"]').val(window.PXUTheme.theme_settings.search_option);
    }

    $('.search-form .search-close').on('click touchstart', function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.searchAutocomplete.hideMobileSearch(position);
      $('[data-autocomplete-true] .search__results-wrapper').hide().removeClass('results-found');
    });
  },
  hideMobileSearch: function hideMobileSearch(position) {
    $('body').css('max-height', 'none');
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, position);
    $('.mobile-search').fadeOut(200);
    $('.mobile-search [name="q"]').val('');
    $('body').off('focus', '.search-form .close-search');
    $('body').off('focus', '.search-form .submit-search');
  },
  unload: function unload() {
    $('body').off('focus', '[data-autocomplete-true] input');
    $('input[name="q"]').off();
    $('[data-dropdown-rel="search"], [data-autocomplete-true] input').off();
    $('.search__results-wrapper').remove();
  }
};
/*============================================================================
  Responsive media
==============================================================================*/

function enableResponsiveVideoWrapper() {
  // Wraps YouTube and Vimeo iframes in Plyr wrapper
  // Does not target iframes already embedded in Plyr wrapper (video sections and product galleries)
  $('iframe[src*="youtube.com"]:not(.plyr__video-wrapper iframe[src*="youtube.com"])').wrap('<div class="plyr__video-embed"></div>');
  $('iframe[src*="vimeo.com"]:not(.plyr__video-wrapper iframe[src*="vimeo.com"])').wrap('<div class="plyr__video-embed"></div>');
}
/*============================================================================
  Start of cart-related functionality
==============================================================================*/


function ajaxSubmitCart() {
  var $cart = $("#cart");
  $.ajax({
    url: '/cart/update.js',
    dataType: 'json',
    cache: false,
    type: 'post',
    data: $cart.serialize(),
    success: function success(data) {
      refreshCart(data);
    }
  });
}

function ajaxUpdateCart(lineID, quantity, parent) {
  $.ajax({
    url: '/cart/change.js',
    dataType: 'json',
    cache: false,
    type: 'post',
    data: {
      quantity: quantity,
      line: lineID
    },
    success: function success(data) {
      refreshCart(data);
      var lineIDIndex = lineID - 1;
      var $input = parent.find("input[data-line-id='" + lineID + "']"); //check to see if there are correct amount of products in array

      if (typeof data.items[lineIDIndex] === "undefined") {
        var updated_quantity = 0;
      } else {
        var updated_quantity = data.items[lineIDIndex].quantity;
      }

      if (quantity > 0 && quantity != updated_quantity) {
        if (updated_quantity == 1) {
          var items_left_text = window.PXUTheme.translation.items_left_count_one;
        } else {
          var items_left_text = window.PXUTheme.translation.items_left_count_other;
        }

        $('.warning--quantity').remove();
        var warning = "\n            <div\n              class=\"\n                warning\n                warning--quantity\n                animated\n                bounceIn\n              \"\n            >\n              ".concat(updated_quantity, " ").concat(items_left_text, "\n            </div>\n          ");
        $input.parent().next().append(warning);
        $input.val(updated_quantity);
      }
    }
  });
}

function refreshCart(cart) {
  var $cartBtn = $(".cart-button span");

  if ($cartBtn && $cartBtn.length) {
    var value = $cartBtn.text() || '0';
    var cart_items_html = "";
    var $cart = $("#cart ul");
    $cartBtn.text(value.replace(/[0-9]+/, cart.item_count));
    $cart.find('li:not(:first)').remove();

    if (cart.item_count == 0) {
      $cart.append('<li class="empty_cart">' + window.PXUTheme.translation.empty_cart + '</li>');
    } else {
      $.each(cart.items, function (index, item) {
        var line_id = index + 1;
        var discountMessage = '';
        var unitPricingOutput = '';

        if (item.unit_price_measurement) {
          unitPricingOutput = window.product.unitPricing(item);
        } // Discounts logic


        if (item.discounts.length) {
          var discountAmount = Shopify.formatMoney(item.discounts[0].amount, $('body').data('money-format'));
          var title = item.discounts[0].title;
          discountMessage = "\n              <span class=\"notification-discount\">\n                ".concat(window.PXUTheme.translation.cart_discount, ": ").concat(title, " (-<span class=\"money\">").concat(discountAmount, "</span>)\n              </span>\n            ");
        }

        cart_items_html += "\n            <li class=\"mm-listitem\">\n              <a class=\"cart__item\" href=\"".concat(item.url, "\">\n          ");

        if (item.image) {
          cart_items_html += "\n              <div class=\"cart__image\">\n                <img src=\"".concat(item.image.replace(/(\.[^.]*)$/, "_medium$1").replace('http:', ''), "\" alt=\"").concat(htmlEncode(item.title), "\"/>\n              </div>\n            ");
        }

        cart_items_html += "\n            <div class=\"cart__info\">\n              <div class=\"cart__description\">\n              ".concat(item.title, "\n          ");

        if (item.selling_plan_allocation && item.selling_plan_allocation.selling_plan) {
          cart_items_html += "\n              <br>\n              <span class=\"line-item selling-plan\">\n                ".concat(item.selling_plan_allocation.selling_plan.name, "\n              </span>\n            ");
        }

        if (item.price > item.final_price) {
          cart_items_html += "\n              <div class=\"cart__price\">\n                <span class=\"money\">\n                  ".concat(Shopify.formatMoney(item.final_line_price, $('body').data('money-format')), "\n                </span>\n\n                <span class=\"was_price money\">\n                  ").concat(Shopify.formatMoney(item.original_line_price, $('body').data('money-format')), "\n                </span>\n              </div>\n\n              <div class=\"cart__unit-price\">\n                ").concat(unitPricingOutput, "\n              </div>\n\n              <div class=\"cart__discount\">\n                ").concat(discountMessage, "\n              </div>\n\n              </div>\n            ");
        } else {
          cart_items_html += "\n              <div class=\"cart__price\">\n                <span class=\"money\">\n                  ".concat(Shopify.formatMoney(item.price, $('body').data('money-format')), "\n                </span>\n              </div>\n\n              <div class=\"cart__unit-price\">\n                ").concat(unitPricingOutput, "\n              </div>\n\n              </div>\n            ");
        }

        cart_items_html += "\n            <div class=\"cart__quantity\">\n              <span class=\"icon-minus minus\"></span>\n              <input type=\"number\" min=\"0\" class=\"quantity\" name=\"updates[]\" id=\"updates_".concat(item.id, "\" value=\"").concat(item.quantity, "\"  data-line-id=\"").concat(line_id, "\" />\n              <span class=\"icon-plus plus\"></span>\n              </div>\n            </div>\n\n            </div>\n            </a>\n          ");

        if (item.properties) {
          $.each(item.properties, function (title, value) {
            if (value) {
              cart_items_html += "\n                  <div class=\"line-item\">\n                    ".concat(title, ": ").concat(value, "\n                  </div>\n                ");
            }
          });
        }
      });
      var cartDiscounts = cart.cart_level_discount_applications;
      var cartDiscountMessage = "";

      for (var i = 0; i < cartDiscounts.length; i++) {
        var amount = Shopify.formatMoney(cartDiscounts[i].total_allocated_amount, $('body').data('money-format'));
        var title = cartDiscounts[i].title;
        cartDiscountMessage = '<p class="mm-counter price mm-discount-label mm-listitem__text">' + title + '<span>' + '(- <span class="money">' + amount + '</span>)' + '</span>' + '</p>';
      }

      if (cart.cart_level_discount_applications.length > 0) {
        cart_items_html += '<li class="mm-label mm-listitem">' + cartDiscountMessage + '</li>';
      }

      cart_items_html += "\n          <li class=\"mm-label mm-listitem\">\n            <a href=\"/cart\" class=\"cart__item-subtotal\">\n              <span>\n                ".concat(window.PXUTheme.translation.subtotal, "\n              </span>\n\n              <span class=\"mm-counter price\">\n                <span class=\"money\">\n                  ").concat(Shopify.formatMoney(cart.total_price, $('body').data('money-format')), "\n                </span>\n              </span>\n            </a>\n          </li>\n\n          <li class=\"mm-subtitle mm-listitem\">\n        ");

      if (window.PXUTheme.theme_settings.display_special_instructions) {
        var cart_note = cart.note ? cart.note : '';
        cart_items_html += '<textarea id="cart-note" name="note" rows="2" placeholder="' + window.PXUTheme.translation.cart_notes + '" class="clearfix">' + cart_note + '</textarea>';
      }

      ;

      if (window.PXUTheme.theme_settings.display_tos_checkbox) {
        cart_items_html += '<aside class="tos tos_checkbox"><input type="checkbox" class="tos_agree" id="sliding_agree" required /><label class="tos_label" for="sliding_agree"> ' + window.PXUTheme.theme_settings.tos_richtext + '</label></aside>';
      }

      ;
      cart_items_html += '<span class="mm-action_buttons mm-listitem__text"><a href="' + window.PXUTheme.theme_settings.cart_url + '" class="action_button edit_cart left">' + window.PXUTheme.translation.edit_cart + '</a>' + '<input type="submit" class="action_button right" value="' + window.PXUTheme.translation.checkout + '"/>' + '</span>' + '</li>';
      $cart.append(cart_items_html);
      $cart.find('li.cart_item:last').addClass('last_cart_item');
    }
  }
} // Document ready


$(function () {
  utilities.listenForResize();
  utilities.enableDisclosure();
  window.lazySizesConfig = window.lazySizesConfig || {};
  lazySizesConfig.expand = 300;
  lazySizesConfig.loadHidden = false;
  $("body").on("click", '.continue', function () {
    var cart = $("#cart").data("mmenu");
    cart.close();
    var nav = $("#nav").data("mmenu");
    nav.close();
  }); // Search submit trigger event

  $('.search-form .submit-search').on('click touchstart', function (e) {
    $(this).parents('form').submit();
  }); // Offscreen check for dropdown menus

  $('.sub-menu').on('mouseenter', function () {
    if ($(this).find('.dropdown').is(':off-right')) {
      $(this).find('.dropdown').addClass("dropdown--align");
    }
  });
  $('.sub-menu').on('mouseleave', function () {
    if ($(this).find('.dropdown').hasClass('dropdown--align')) {
      $(this).find('.dropdown').removeClass("dropdown--align");
    }
  }); // Accessibility tabbing

  window.header.openDropdown(); // Load Accordions

  var allPanels = $('.accordion > dd');

  for (var i = 0; i < allPanels.length; i++) {
    $(allPanels[i]).css('height', $(allPanels[i]).outerHeight());
  }

  allPanels.hide();
  $('.accordion > dt > a').click(function () {
    if (!$(this).parent().next().is(':visible')) {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      $('.accordion small.right').html('&#9668;');
      $(this).find('small.right').html('&#9660;');
    }

    return false;
  });
  $('.accordion dd:first-of-type').show(); //Load sections

  window.banner_image.init();
  window.header.init();
  window.banner.init();
  window.map.init();
  window.videoTheme.init();
  window.product.init();
  window.collection.init();
  window.cart.init();
  window.productFormListeners.init();
  window.featured_promotions.init();
  window.animate_content.init();

  if (window.PXUTheme.theme_settings.enable_autocomplete) {
    window.searchAutocomplete.init();
  }

  var $jsSections = $('.shopify-section[class*=js]'); // Loop through sections with js classes and load them in

  var $jsSectionNames = $jsSections.each(function () {
    for (var i = 0; i < this.classList.length; i++) {
      if (this.classList[i].substring(0, 2) === "js") {
        var triggerClass = this.classList[i];

        if (window.PXUTheme[triggerClass]) {
          //console.log('Section: ' + triggerClass + ' has been loaded.')
          window.PXUTheme[triggerClass].init($(this));
        } else {//console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and window.PXUTheme.' + triggerClass + '.init() function exists.');
        }
      }
    }
  });
  objectFitImages();

  if (window.PXUTheme.currency.shipping_calculator && document.querySelector('[data-cart-shipping]')) {
    var shippingCalculator = new _helpers_ShippingCalculator__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z({
      el: document.querySelector('[data-cart-shipping]')
    });
  } // Initialize Responsive Videos


  enableResponsiveVideoWrapper();
  var $header = $(".feature_image .header");
  $(document).on('click', '.search__submit', function (e) {
    $(this).parent('form').submit();
  });
  $(document).on('click', '#search-toggle, .search__close', function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('.search__form').css('padding-top', $('.header').height() + 50 + 'px');

    if ($('#search').is(":visible") && $(window).scrollTop() == 0) {
      if (window.PXUTheme.theme_settings.header_background == false) {
        $header.removeClass('header-background--true');
      }
    } else {
      $header.addClass('header-background--true');
    }

    if ($('#search').hasClass("fadeIn")) {
      $('#search').removeClass("fadeIn").hide();
    } else {
      $('#search').show().addClass("fadeIn").find('input').focus();
    }

    $(document).on('click', function (e) {
      var searchForm = $(e.target).parents('.search__form');

      if (searchForm.length === 0) {
        $('#search').removeClass("fadeIn").hide();
        $(this).off();
      }
    });
  }); // Backwards compatibility with flexslider

  $('.slider, .flexslider:not(.homepage_slider)').find('li').unwrap();
  $('.slider, .flexslider:not(.homepage_slider)').flickity({
    pageDots: false,
    autoPlay: 6000,
    imagesLoaded: true,
    lazyLoad: 2
  });
  var arrowShape = '<svg class="flickity-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.46 24.09"><title>flickity-arrow</title><polygon points="1.41 24.09 0 22.68 10.63 12.05 0 1.41 1.41 0 13.46 12.05 1.41 24.09"/></svg>';
  $('.slider, .flexslider').find('.flickity-prev-next-button.next .flickity-button-icon').replaceWith(arrowShape);
  $('.slider, .flexslider').find('.flickity-prev-next-button.previous').addClass('arrow-is-inverse').find('.flickity-button-icon').replaceWith(arrowShape);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches == false) {
    //Lightbox default options
    //https://fancyapps.com/fancybox/3/docs/#options
    $.fancybox.defaults.animationEffect = 'fade';
    $.fancybox.defaults.transitionEffect = 'slide';
    $.fancybox.defaults.hash = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.toolbar = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.smallBtn = true;
    $.fancybox.defaults.wheel = false;
    $.fancybox.defaults.live = false;
    $.fancybox.defaults.zoom = false;
    $.fancybox.defaults.btnTpl['smallBtn'] = '<a title="Close" data-fancybox-close class="fancybox-item fancybox-close" href="javascript:;"></a>';
    $.fancybox.defaults.mobile.preventCaptionOverlap = false;
    $.fancybox.defaults.mobile.toolbar = true;
    $.fancybox.defaults.mobile.buttons = ['close'];
    $.fancybox.defaults.mobile.clickSlide = 'close';
    $.fancybox.defaults.mobile.clickContent = 'zoom';

    $.fancybox.defaults.afterLoad = function (instance, slide) {
      if (instance.current.type == 'image') {
        slide.$content.wrapInner("<div class='fancybox-image-wrap'></div>");
      }

      if (instance.group.length > 1) {
        slide.$content.find('.fancybox-image-wrap').append('<a title="Previous" class="fancybox-item fancybox-nav fancybox-prev ss-icon" href="javascript:;" data-fancybox-prev><span class="icon-circle-left"></span></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next ss-icon" href="javascript:;" data-fancybox-next><span class="icon-circle-right"></span></a>');
      }
    }; // Lightbox effect enabled if reduce motion is not enabled


    $('.lightbox').fancybox(); // Gallery fancybox initialization

    $('[rel="gallery"]').fancybox({
      baseClass: "gallery-section__lightbox",
      clickContent: "nextOrClose"
    }); // // Trigger fancybox flickity product gallery images

    $('.product-gallery__main .product-gallery__image .fancybox').fancybox({
      baseClass: 'product-section__lightbox',
      clickContent: "nextOrClose",
      beforeShow: function beforeShow() {
        // Grab the fancybox element that is being clicked
        var $fancyboxImageElement = $(this.opts.$orig); // Add alt to fancybox image

        var imageAlt = $fancyboxImageElement.data('alt');
        $('.fancybox-image').attr('alt', imageAlt);
      }
    });
  }

  if (window.PXUTheme.theme_settings.newsletter_popup) {
    newsletter_popup.init();
  }

  if (window.PXUTheme.theme_settings.collection_swatches) {
    window.PXUTheme;

    if (window.PXUTheme.media_queries.large.matches) {
      $('.thumbnail').hover(function () {
        $('.swatch span', $(this)).each(function () {
          if ($(this).data("image").indexOf("no-image") == -1) {
            $('<img/>')[0].src = $(this).data("image");
          }
        });
      });
      $('.swatch span').hover(function () {
        if ($(this).data("image").indexOf("no-image") == -1) {
          $(this).parents('.thumbnail').find('img').attr('src', $(this).data("image"));
        }
      });
    }
  }

  var tabs = $('ul.tabs');
  tabs.each(function (i) {
    var tab = $(this).find('> li > a');
    tab.click(function (e) {
      var contentLocation = $(this).attr('href');

      if (contentLocation.charAt(0) == "#") {
        e.preventDefault();
        tab.removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({
          'display': 'block'
        }).addClass('active').siblings().hide().removeClass('active');
      }
    });
  }); //Sidebar toggle

  $(document).on('click', '.menu-toggle', function (e) {
    toggleSidebarMenus($(this));
  });
  var sidebarTouched = false;
  $(document).on('touchend', '.toggle span', function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (window.PXUTheme.media_queries.medium.matches || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);
      toggleSidebarBlocks($toggle);
      sidebarTouched = true;
      return false;
    }
  });
  $(document).on('click', '.toggle span', function (e) {
    e.stopPropagation();
    e.preventDefault();

    if (window.PXUTheme.media_queries.medium.matches || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);

      if (!sidebarTouched) {
        toggleSidebarBlocks($toggle);
        return false;
      }
    }
  });
  $(document).on('keyup', '.toggle span', function (e) {
    if (!$('body').hasClass('user-is-tabbing')) return;

    if (e.key === 'Enter') {
      e.stopPropagation();
      e.preventDefault();

      if (window.PXUTheme.media_queries.medium.matches || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
        var $toggle = $(this);

        if (!sidebarTouched) {
          toggleSidebarBlocks($toggle);
          return false;
        }
      }
    }
  });

  if ($("#contact_form").length) {
    var contactFormResponse = url('?customer_posted');

    if (contactFormResponse) {
      $('html,body').animate({
        scrollTop: $("#contact_form").offset().top
      });
    }
  }

  if (window.PXUTheme.theme_settings.product_form_style == 'swatches') {
    $('.swatch :radio').change(function () {
      var optionIndex = $(this).closest('.swatch').attr('data-option-index');
      var optionValue = $(this).val();
      $(this).closest('form').find('.single-option-selector').eq(optionIndex).val(optionValue).trigger('change');
    });
  }

  $('body').on("change", "#cart input.quantity", function () {
    ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('#cart'));
  });
  $('body').on("change", "#cart #cart-note", function () {
    ajaxSubmitCart();
  });

  if (window.PXUTheme.theme_settings.cart_action == 'ajax') {
    $(document).on('click', '.ajax-submit', function (e) {
      e.preventDefault();
      var $addToCartForm = $(this).closest('form');
      var $addToCartBtn = $addToCartForm.find('.add_to_cart');
      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        type: 'post',
        cache: false,
        data: $addToCartForm.serialize(),
        beforeSend: function beforeSend() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass("zoomIn").addClass('animated zoomOut');
        },
        success: function success(itemData) {
          $addToCartBtn.find('span').text(window.PXUTheme.translation.product_add_to_cart_success).removeClass('zoomOut').addClass('fadeIn');
          window.setTimeout(function () {
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('span').addClass("fadeOut").text($addToCartBtn.data('label')).removeClass('fadeIn').removeClass("fadeOut").addClass('zoomIn');
          }, 1000);
          $.ajax({
            url: '/cart.js',
            dataType: "json",
            cache: false,
            success: function success(cart) {
              refreshCart(cart);
              window.setTimeout(function () {
                $.fancybox.close();
                $('.cart-button').click();
              }, 500);
            }
          });
        },
        error: function error(XMLHttpRequest) {
          var response = eval('(' + XMLHttpRequest.responseText + ')');
          response = response.description;
          $('.warning').remove();
          var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
          $addToCartForm.after(warning);
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text(window.PXUTheme.translation.product_add_to_cart).removeClass('zoomOut').addClass('zoomIn');
        }
      });
      return false;
    });
  } // Variable returns true/false if reduced motion is enabled


  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; // Find instances of flexslider and pause slideshow

  if (reducedMotion) {
    $('.flexslider').flexslider('pause');
  }
});

window.selectCallback = function (variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');
  var $notifyFormInputs = $('.notify_form__inputs');
  var notifyEmail = "Enter your email address...";
  var notifyEmailValue = "";
  var notifySend = "Send";

  if (variant) {
    if (variant.name != null) {
      var notifyMessage = $notifyFormInputs.data('notify-message') + ' - ' + variant.name;
    } else {
      var notifyMessage = $notifyFormInputs.data('notify-message');
    }
  }

  if ($notifyFormInputs.hasClass('customer--true')) {
    var notifyCustomerEmail = $notifyFormInputs.data('customer-email');
    var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" value="' + notifyCustomerEmail + '" />';
  } else {
    var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" placeholder="' + notifyEmail + '" value="' + notifyEmailValue + '" />';
  }

  var notifyFormHTML = notifyEmailInput + '<input type="hidden" name="challenge" value="false" /><input type="hidden" name="contact[body]" class="notify_form_message" data-body="' + notifyMessage + '" value="' + notifyMessage + '" /><input class="action_button" type="submit" value="' + notifySend + '" style="margin-bottom:0px" />'; // Image variant feature

  if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product-gallery__main', $product);
    $sliders.each(function () {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);

      if ($slider.is(":visible") && $sliderInstance != undefined) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select(index, false, true);
      }
    });
  }

  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function (v) {
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }

    $('.sku span', $product).text(variant.sku);

    if (window.PXUTheme.theme_settings.product_form_style == 'swatches') {
      for (var i = 0, length = variant.options.length; i < length; i++) {
        var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g, '\\"') + '"]');

        if (radioButton.length) {
          radioButton.get(0).checked = true;
        }
      }
    }
  }

  var $unitPrice = $('.product-details__unit-price', $product);
  $unitPrice.removeClass('product-details__unit-price--hidden');

  if (variant && variant.available == true) {
    if (variant.price < variant.compare_at_price) {
      $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
      $('.current_price', $product).parent().addClass('sale');
    } else {
      $('.was_price', $product).html('');
      $('.current_price', $product).parent().removeClass('sale');
    }

    if (variant.inventory_management && variant.inventory_quantity > 0) {
      if (window.PXUTheme.theme_settings.display_inventory_left) {
        if (variant.inventory_quantity == 1) {
          var items_left_text = window.PXUTheme.translation.items_left_count_one;
        } else {
          var items_left_text = window.PXUTheme.translation.items_left_count_other;
        }

        var inventoryThreshold = window.PXUTheme.theme_settings.inventory_threshold;

        if (variant.inventory_quantity <= inventoryThreshold) {
          $('.items_left', $product).html("<p><em>" + variant.inventory_quantity + " " + items_left_text + "</em></p>");
        } else {
          $('.items_left', $product).html("");
        }
      }

      if (window.PXUTheme.theme_settings.limit_quantity) {
        if (variant.inventory_policy == "deny") {
          $('.quantity', $product).attr('max', variant.inventory_quantity);
        }
      }
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    } // Empty sold out text


    $('.sold_out', $product).text(''); // Show price, otherwise, show free price text

    if (variant.price > 0) {
      $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');

      if (window.product.unitPricing(variant) !== undefined) {
        $unitPrice.html(window.product.unitPricing(variant));
      } else {
        $unitPrice.addClass('product-details__unit-price--hidden');
      }
    } else {
      $('.current_price', $product).html(window.PXUTheme.theme_settings.free_price_text);
      $unitPrice.addClass('product-details__unit-price--hidden');
    }

    $('.modal_price', $product).removeClass('modal_price--sold-out');
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
    $('.current_price').show();
    $('.was_price').show(); // Hide the back in stock notification form

    $notify_form.hide(); // Show the quantity field

    $('.purchase-details__quantity', $product).show(); // Remove disable from action buttons

    $('.atc-btn-container', $product).removeClass('disabled');
  } else {
    var message = variant ? window.PXUTheme.translation.product_sold_out : window.PXUTheme.translation.product_unavailable; // Hide the quantity field

    $('.purchase-details__quantity', $product).hide(); // Show the price and change the add to cart and sold out text

    $('.modal_price', $product).addClass('modal_price--sold-out');
    $('.was_price', $product).html('');
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold_out', $product).text(' - ' + message); // Disable the add to cart button and Shopify payment button when a variant is sold out

    $('.atc-btn-container', $product).addClass('disabled');
    $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message); //Hide the back in stock notification form

    $notify_form.hide();
    $notifyFormInputs.empty();

    if (variant && !variant.available) {
      $('.current_price').show();
      $('.was_price').show(); // Show the variant price, otherwise, show the free price text

      if (variant.price > 0) {
        $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');

        if (window.product.unitPricing(variant) !== undefined) {
          $unitPrice.html(window.product.unitPricing(variant));
        } else {
          $unitPrice.addClass('product-details__unit-price--hidden');
        }
      } else {
        $('.current_price', $product).html(window.PXUTheme.theme_settings.free_price_text);
        $unitPrice.addClass('product-details__unit-price--hidden');
      } // When a variant is sold out but on sale


      if (variant.price < variant.compare_at_price) {
        $('.was_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
        $('.current_price', $product).parent().addClass('sale');
      } else {
        $('.was_price', $product).html('');
        $('.current_price', $product).parent().removeClass('sale');
      } // Show the back in stock notification form


      $notify_form.fadeIn();
      $notifyFormInputs.empty();
      $notifyFormInputs.append(notifyFormHTML);
    } else {
      $('.sold_out', $product).text(message);
      $unitPrice.addClass('product-details__unit-price--hidden'); // When a variant is specifically unavailable

      $('.current_price').hide();
      $('.was_price').hide();
    }
  }

  $productForm.removeClass("init");
};

function htmlEncode(value) {
  if (value) {
    return $('<div/>').text(value).html();
  } else {
    return '';
  }
}

window.Shopify.updateOptionsInSelector = function (selectorIndex, parent) {
  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = $(parent + ' .single-option-selector:eq(0)');
      break;

    case 1:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      var selector = $(parent + ' .single-option-selector:eq(1)');
      break;

    case 2:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
      var selector = $(parent + ' .single-option-selector:eq(2)');
  }

  var availableOptions = Shopify.optionsMap[key];
  $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function () {
    if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').find(':radio').removeAttr('disabled', 'disabled').removeAttr('checked');
    } else {
      $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled', 'disabled');
    }
  });
  selector.trigger('change');
};
/* Linked Option Selectors */


Shopify.linkOptionSelectors = function (product, parent) {
  // Building our mapping object.
  Shopify.optionsMap = {};

  for (var i = 0; i < product.variants.length; i++) {
    var variant = product.variants[i];

    if (variant.available) {
      // Gathering values for the 1st drop-down.
      Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
      Shopify.optionsMap['root'].push(variant.option1);
      Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']); // Gathering values for the 2nd drop-down.

      if (product.options.length > 1) {
        var key = variant.option1;
        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
        Shopify.optionsMap[key].push(variant.option2);
        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
      } // Gathering values for the 3rd drop-down.


      if (product.options.length === 3) {
        var key = variant.option1 + ' / ' + variant.option2;
        Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
        Shopify.optionsMap[key].push(variant.option3);
        Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
      }
    }
  } // Update options right away.


  window.Shopify.updateOptionsInSelector(0, parent);
  if (product.options.length > 1) window.Shopify.updateOptionsInSelector(1, parent);
  if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent); // When there is an update in the first dropdown.

  $(parent + " .single-option-selector:eq(0)").change(function () {
    window.Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent);
    return true;
  }); // When there is an update in the second dropdown.

  $(parent + " .single-option-selector:eq(1)").change(function () {
    if (product.options.length === 3) window.Shopify.updateOptionsInSelector(2, parent);
    return true;
  });
}; // Loads in script when called


var loadScript = function loadScript(name, url, callback) {
  if (window.PXUTheme[name]) {
    callback;
  } else {
    $.ajax({
      url: url,
      dataType: 'script',
      success: callback,
      async: false
    });
  }
};

$(document).on('shopify:block:select', function (e) {
  var blockId = e.detail.blockId;
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);

  if ($parentSection.hasClass('shopify-section--slideshow')) {
    window.PXUTheme.jsSlideshow.blockSelect(blockId, $parentSection);
  }

  if ($parentSection.find('.map--container').length) {
    window.map.init();
  }

  if ($parentSection.find('.parallax-banner')) {
    $(this).find('.parallax__container > .parallax').unwrap();
    new universalParallax().init();
  }
});
$(document).on('shopify:block:deselect', function (e) {
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);

  if ($parentSection.hasClass('shopify-section--slideshow')) {
    window.PXUTheme.jsSlideshow.blockDeselect($parentSection);
  }
});
$(document).on('shopify:section:load', function (e) {
  // Shopify section as jQuery object
  var $section = $(e.target); // Vanilla js selection of Shopify section

  var section = document.getElementById('shopify-section-' + e.detail.sectionId);
  var sectionObjectUrl = $section.find('[data-theme-editor-load-script]').attr('src'); // Check classes on schema and look for js (eg. jsMap)

  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js") {
      var triggerClass = section.classList[i]; // Check to see if section script exists

      if (typeof window.PXUTheme[triggerClass] == 'undefined') {
        // make AJAX call to load script
        loadScript(triggerClass, sectionObjectUrl, function () {
          window.PXUTheme[triggerClass].init($(section));
        });
      } else {
        if (window.PXUTheme[triggerClass]) {
          //console.log('Section: ' + triggerClass + ' has been loaded.')
          window.PXUTheme[triggerClass].init($(section));
        } else {//console.warn('Uh oh, ' + triggerClass + ' is referenced in section schema class, but can not be found. Make sure "z__' + triggerClass + '.js" and window.PXUTheme.' + triggerClass + '.init() function exists.');
        }
      }
    }
  }

  utilities.enableDisclosure(); // Call methods based on section classes

  var $parentSection = $('#shopify-section-' + e.detail.sectionId);

  if (window.PXUTheme.theme_settings.newsletter_popup) {
    newsletter_popup.init();
  }

  if ($parentSection.hasClass('shopify-section--recommended-products')) {
    window.product.loadProductRecommendations();
  }

  if (window.PXUTheme.theme_settings.enable_autocomplete) {
    window.searchAutocomplete.init();
  }

  if ($parentSection.hasClass('shopify-section--cart-template')) {
    window.productFormListeners.init();
    window.cart.init();
  }

  if ($parentSection.hasClass('shopify-section--image-with-text-overlay')) {
    window.banner_image.init();
    window.banner.init();
  }

  if ($parentSection.hasClass('shopify-section--map') || $parentSection.hasClass('shopify-section--page-contact-template')) {
    window.map.init();
  }

  if ($parentSection.hasClass('shopify-section--featured-product')) {
    window.product.init();
  }

  if ($parentSection.hasClass('shopify-section--featured-collection')) {
    window.collection.init();
    window.product.init();
    window.banner.init();
  }

  if ($parentSection.hasClass('shopify-section--featured-promotions')) {
    window.featured_promotions.init();
  }

  if ($parentSection.hasClass('shopify-section--image-with-text')) {
    window.animate_content.init();
  }

  if ($parentSection.hasClass('shopify-section--video')) {
    window.videoTheme.init();
    window.banner.init();
  }

  if ($parentSection.hasClass('shopify-section--product-template') || $parentSection.hasClass('shopify-section--quick-shop')) {
    window.collection.init();
    window.product.init();
  }

  if ($parentSection.hasClass('shopify-section--collection-template')) {
    window.banner_image.init();
    window.collection.init();
    window.product.init();
  }

  if ($parentSection.hasClass('shopify-section--page-contact-template')) {
    window.banner_image.init();
    window.banner.init();
  }

  if ($parentSection.hasClass('shopify-section--article-template')) {
    window.article.init();
  }

  if ($parentSection.hasClass('shopify-section--search-template')) {
    window.collection.init();
  }

  if ($parentSection.hasClass('shopify-section--blog-template')) {
    window.banner_image.init();
    window.banner.init();
  }

  if ($parentSection.hasClass('shopify-section--header')) {
    window.banner_image.init();
    window.header.init();
  }

  if ($parentSection.hasClass('parallax-banner')) {
    $(this).find('.parallax__container > .parallax').unwrap();
    new universalParallax().init();
  }
});
$(document).on('shopify:section:unload', function (e) {
  utilities.unload();
  var $target = $(e.target);
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);

  if ($parentSection.hasClass('shopify-section--image-with-text-overlay')) {
    window.banner.unload($target);
  }

  if ($parentSection.hasClass('shopify-section--slideshow')) {
    window.PXUTheme.jsSlideshow.unload($target);
  }

  if ($parentSection.hasClass('shopify-section--featured-product')) {
    window.product.unload($target);
  }

  if ($parentSection.hasClass('shopify-section--featured-collection')) {
    window.collection.unload($target);
  }

  if ($parentSection.hasClass('shopify-section--product-template')) {
    window.product.unload($target);
  }

  if ($parentSection.hasClass('shopify-section--collection-template')) {
    window.collection.unload($target);
  }
});
$(document).on('shopify:section:select', function (e) {
  // Shopify section as jQuery object
  var $section = $(e.target); // Vanilla js selection of Shopify section

  var section = document.getElementById('shopify-section-' + e.detail.sectionId); // Force show state when section is selected in theme editor

  for (var i = 0; i < section.classList.length; i++) {
    if (section.classList[i].substring(0, 2) === "js") {
      var triggerClass = section.classList[i];

      if (window.PXUTheme[triggerClass].showThemeEditorState) {
        window.PXUTheme;
        window.PXUTheme[triggerClass].showThemeEditorState(e.detail.sectionId, $section);
      }
    }
  }

  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  window.header.init();
  window.banner_image.init();
  window.banner.init();
  $('.lightbox').fancybox();
});
$(document).on('shopify:section:deselect', function (e) {
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  window.banner_image.init();
});
$(document).on('shopify:section:reorder', function (e) {
  var $parentSection = $('#shopify-section-' + e.detail.sectionId);
  window.header.init();
  window.banner_image.init();
});
}();
/******/ })()
;

$(document).ready(function(){

$( ".first_featured" ).wrap( "<div class='wrap_first_blog'></div>" );
$( ".artical_blog_all" ).wrapAll( "<div class='wrap_all_blog'></div>" );
  
  var maxHeight = 0;

$(".blog-inner").each(function(){
   if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
});

$(".blog-inner").height(maxHeight);
  
});