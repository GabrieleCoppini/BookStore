/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/js/description.js":
      /*!*******************************!*\
  !*** ./src/js/description.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   backWindow: () => (/* binding */ backWindow),\n/* harmony export */   closeDescription: () => (/* binding */ closeDescription),\n/* harmony export */   openDescription: () => (/* binding */ openDescription)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }\n\nvar descriptionWindow = document.querySelector(".description-window");\nvar descriptionDiv = document.querySelector(".description-div");\nvar backWindow = document.querySelector(".back-window");\nvar bookTitle;\nvar bookDescription;\nvar openDescription = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {\n    var bookCard, bookKey, response, bookData;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          bookCard = event.target.closest(".book-display");\n          if (!bookCard) {\n            _context.next = 19;\n            break;\n          }\n          bookKey = bookCard.getAttribute("data-book-key");\n          _context.prev = 3;\n          _context.next = 6;\n          return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://openlibrary.org".concat(bookKey, ".json"));\n        case 6:\n          response = _context.sent;\n          bookData = response.data;\n          bookTitle = bookData.title;\n          bookDescription = bookData.description;\n          console.log(response);\n          if (_typeof(bookDescription) === "object" && "value" in bookDescription) {\n            bookDescription = bookDescription.value;\n          }\n          if (!bookDescription) {\n            bookDescription = "The description of the book \\"".concat(bookTitle, "\\" is not available");\n          }\n          displayDescription(bookTitle, bookDescription);\n          _context.next = 19;\n          break;\n        case 16:\n          _context.prev = 16;\n          _context.t0 = _context["catch"](3);\n          console.log(_context.t0);\n        case 19:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee, null, [[3, 16]]);\n  }));\n  return function openDescription(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar displayDescription = function displayDescription(title, description) {\n  descriptionWindow.classList.remove("hidden");\n  backWindow.classList.remove("hidden");\n  descriptionDiv.innerHTML = "\\n <h1>".concat(title, "</h1>\\n <p>").concat(description, "</p>");\n  descriptionWindow.scrollTop = 0;\n};\nvar closeDescription = function closeDescription() {\n  descriptionWindow.classList.add("hidden");\n  backWindow.classList.add("hidden");\n  document.body.style.overflow = "auto";\n  descriptionDiv.scrollTop = 0;\n  descriptionDiv.innerHTML = "";\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/js/description.js?'
        );

        /***/
      },

    /***/ "./src/js/elements.js":
      /*!****************************!*\
  !*** ./src/js/elements.js ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init),\n/* harmony export */   introText: () => (/* binding */ introText),\n/* harmony export */   logo: () => (/* binding */ logo),\n/* harmony export */   renderSpinner: () => (/* binding */ renderSpinner),\n/* harmony export */   restoreHome: () => (/* binding */ restoreHome),\n/* harmony export */   resultContainer: () => (/* binding */ resultContainer),\n/* harmony export */   searchContainer: () => (/* binding */ searchContainer)\n/* harmony export */ });\n/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/logo.png */ "./src/img/logo.png");\n\n\nvar header = document.querySelector(".header");\nvar resultContainer = document.querySelector(".book-list");\nvar searchContainer = document.querySelector(".search-container");\nvar introText = document.querySelector(".title");\nvar logo = new Image();\nlogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\nlogo.classList.add("logo-btn");\nvar init = function init() {\n  header.prepend(logo);\n  restoreHome();\n};\nvar restoreHome = function restoreHome() {\n  resultContainer.classList.add("hidden");\n  searchContainer.classList.remove("on-search");\n  introText.classList.remove("hidden");\n};\nvar renderSpinner = function renderSpinner(parentEl) {\n  var markup = "<span class=\\"spinner\\"></span>";\n  parentEl.innerHTML = "";\n  parentEl.insertAdjacentHTML("afterbegin", markup);\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/js/elements.js?'
        );

        /***/
      },

    /***/ "./src/js/index.js":
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/js/elements.js");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.js */ "./src/js/search.js");\n/* harmony import */ var _description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./description.js */ "./src/js/description.js");\n\n\n\n\nvar searchForm = document.querySelector(".search");\nvar closeDescriptionButton = document.querySelector(".close-description");\n(0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.init)();\n\n//search\nsearchForm.addEventListener("submit", _search_js__WEBPACK_IMPORTED_MODULE_2__.getGenre);\n_elements_js__WEBPACK_IMPORTED_MODULE_1__.logo.addEventListener("click", _elements_js__WEBPACK_IMPORTED_MODULE_1__.restoreHome);\n\n//description\n_elements_js__WEBPACK_IMPORTED_MODULE_1__.resultContainer.addEventListener("click", _description_js__WEBPACK_IMPORTED_MODULE_3__.openDescription);\n_description_js__WEBPACK_IMPORTED_MODULE_3__.backWindow.addEventListener("click", _description_js__WEBPACK_IMPORTED_MODULE_3__.closeDescription);\ncloseDescriptionButton.addEventListener("click", _description_js__WEBPACK_IMPORTED_MODULE_3__.closeDescription);\n\n//# sourceURL=webpack://my-webpack-project/./src/js/index.js?'
        );

        /***/
      },

    /***/ "./src/js/search.js":
      /*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDati: () => (/* binding */ getDati),\n/* harmony export */   getGenre: () => (/* binding */ getGenre)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _img_noCover_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/noCover.png */ "./src/img/noCover.png");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ "./src/js/elements.js");\nfunction _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }\nfunction _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a \'" + n + "\' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }\n\n\n\nvar searchResult = document.querySelector(".book-search");\nvar titleList = document.querySelector(".title-div");\nvar errorDiv = document.createElement("div");\nvar getGenre = function getGenre(event) {\n  event.preventDefault();\n  (0,_elements_js__WEBPACK_IMPORTED_MODULE_1__.renderSpinner)(searchResult);\n  var userInput = document.querySelector(".input-field").value.toLowerCase().trim();\n  if (userInput) {\n    titleList.textContent = "";\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.resultContainer.classList.remove("hidden");\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.introText.classList.add("hidden");\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.searchContainer.classList.add("on-search");\n    document.querySelector(".input-field").value = "";\n    getDati(userInput);\n  }\n};\nvar wrongGenre = function wrongGenre(genre) {\n  searchResult.append(errorDiv);\n  errorDiv.innerHTML = "<h3 class=\\"error\\">There is no ".concat(genre, " books</h3>");\n  errorDiv.classList.add("error-result");\n  errorDiv.classList.remove("hidden");\n};\nvar getDati = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(genre) {\n    var response, books, searchGenreTitle;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.prev = 0;\n          _context.next = 3;\n          return axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://openlibrary.org/subjects/".concat(genre, ".json?limit=100"));\n        case 3:\n          response = _context.sent;\n          console.log(response);\n          searchResult.innerHTML = "";\n          errorDiv.classList.add("hidden");\n          searchResult.classList.remove("error-results");\n          books = response.data.works;\n          if (books.length !== 0) {\n            searchGenreTitle = "<h3><strong>".concat(genre[0].toUpperCase()).concat(genre.slice(1), " books:</strong></h3>");\n            titleList.insertAdjacentHTML("beforeend", searchGenreTitle);\n            books.forEach(function (book) {\n              var card = "\\n            <button class=\\"book-display\\" data-book-key=".concat(book.key, ">\\n                  <img\\n                  class=\\"book-cover\\"\\n                  src=\\"https://covers.openlibrary.org/b/id/").concat(book.cover_id, ".jpg\\"\\n                  alt=\\"Book cover\\" \\n                  onerror=\\"this.onerror=null;this.src=\'").concat(_img_noCover_png__WEBPACK_IMPORTED_MODULE_0__, "\\"/>\\n                  <div class=\\"book-info\\">\\n                    <p class=\\"book-title\\"><strong>").concat(book.title, "</strong></p>\\n                    <p class=\\"book-author\\">").concat(book.authors[0].name, "</p>\\n                  </div>\\n                </button>");\n              searchResult.insertAdjacentHTML("beforeend", card);\n            });\n          } else wrongGenre(genre);\n          _context.next = 16;\n          break;\n        case 12:\n          _context.prev = 12;\n          _context.t0 = _context["catch"](0);\n          console.error(_context.t0);\n          searchResult.innerHTML = "Something went wrong (Error: ".concat(_context.t0, ")");\n        case 16:\n        case "end":\n          return _context.stop();\n      }\n    }, _callee, null, [[0, 12]]);\n  }));\n  return function getDati(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/js/search.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/description.css":
      /*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/description.css ***!
  \***********************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\n.description-window{\n    position: fixed; \n    top: 55%;\n    left: 50%; \n    max-height: 80%;\n    width: 80%; \n   \n   \n    background-color: #fbf6f1;\n    transform: translate(-50%, -50%);\n     border-radius: 20px;\n     box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);\n     padding: 30px;\n     padding-bottom: 0px;\n     overflow-y: auto;\n     z-index: 100;\n     word-wrap: break-word;\n   \n     \n   \n   \n     h1 {\n       font-size: 20px;\n       margin-bottom: 20px;\n       font-weight: bold;\n     }\n   \n     button {\n       margin: 10px;\n       padding: 15px;\n       border-radius: 25px;\n       border: none;\n       outline: none;\n       background: none;\n       font-size: 20px;\n       font-weight: bold;\n   }\n   \n   }\n    .close-description {\n     position: absolute;\n     top: 0;\n     right: 5px;\n     font-size: 10px;\n     color:black ;\n     cursor: pointer;\n     border: none;\n     background: none;\n     outline: none;\n     margin: 10px;\n   \n     &:active {\n       outline: none;\n     }\n   }\n   \n   .bottom-div{\n     padding: 30px;\n   }\n   \n   .back-window {\n     position: fixed;\n     top: 0;\n     left: 0;\n     width: 100%;\n     height: 100%;\n     background-color: rgba(255, 255, 255, 0.4);\n     backdrop-filter: blur(2px);\n     z-index: 50;\n   }\n\n   @media screen and (min-width: 768px) {\n    .description-window {\n      width: 50%;\n      top: 50%;\n    }\n  }`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/description.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
      /*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header{\n    width: 100%;\n    height: 60px;\n    padding: 50px 0px;\n    background-color: #ffff;\n    display: flex;\n    align-items: center;\n    z-index: 2;\n}\n\n\n.logo-btn{\n    width: auto;\n    height: 60px;\n    cursor: pointer;\n}\n`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/header.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/results.css":
      /*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/results.css ***!
  \*******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n.book-list{\n    display: flex;\n    flex-direction: column;\n    margin: 30px 20px;\n  \n\n}\n\n\n\n\n.book-search{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 30px;\n\n\n}\n\n@keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  } \n\n\n.book-display{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid rgb(188, 188, 188);\n    border-radius: 10px;\n    width: 150px;\n    margin: 20px;\n    overflow: hidden;\n    outline: none;\n    cursor: pointer;\n\n\n    .book-cover {\n      width: 100%;\n      height: 200px;\n    }\n\n    .book-info {\n      font-family: \'Times New Roman\', Times, serif;\n      text-align: center;\n      padding: 4px;\n      margin: auto;\n      color: black;\n\n      .book-title {\n        margin-bottom: 0;\n      }\n\n      .book-author {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  .title-div {\n    h3 {\n      font-size: 24px;\n    }\n  }\n\n\n.book-cover {\n    width: 100%;\n    height: 200px;\n}\n\n.on-search {\n    margin-bottom: 0px;\n    padding-top: 0;\n    height: 100px;\n    .intro{\n        padding:0 ;\n        margin: 0;\n    }\n\n}\n\n\n.spinner {\n    width: 48px;\n    height: 48px;\n    border: 6px solid ;\n    margin: auto;\n    color: #bc9f8e;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    display: inline-block;\n    box-sizing: border-box;\n    animation: rotation 1s linear infinite;\n    position: absolute;\n    top: 40%;\n    transform: translate(-50%, -50%);\n  }\n\n\n  .error-results {\n    border: 1px solid rgb(188, 188, 188);\n    border-radius: 10px;\n    margin: auto;\n    padding: 10px 20px;\n\n    p {\n      margin: 0;\n    }\n  }\n\n\n\n\n  @media screen and (min-width: 768px) {\n    .book-list {\n      .book-search{\n        .book-display {\n          margin: 4px;\n          width: 170px;\n  \n          .book-cover {\n            height: 220px;\n          }\n  \n          .book-info {\n            padding: 4px 10px;\n          }\n        }\n      }\n    }\n  }\n  \n  @media screen and (min-width: 1024px) {\n    .book-list {\n      .book-search {\n        .book-display {\n          margin: 20px;\n        }\n      }\n    }\n  }`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/results.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/search.css":
      /*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/search.css ***!
  \******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/background.png */ "./src/img/background.png"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.search-container{\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-repeat: no-repeat;\n    background-size: cover;\n\n    \n    \n}\n\n.intro{\n   \n        color: #ffffff;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        max-width: 700px;\n        padding: 0 40px;\n        padding-bottom: 50px;\n        \n        h1 {\n          font-size: 70px;\n          line-height: 50px;\n          margin-bottom: 20px;\n        }\n    \n        h2 {\n          font-weight: 300;\n          font-size: 30px;\n          margin-bottom: 40px;\n        }\n    \n}\n.search {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fff;\n    border-radius: 10rem;\n    padding: 0 10px;\n    transition: all 0.3s;\n    min-width: 250px;\n\n}\n\n.input-field {\n    border: none;\n    background: none;\n    border-radius: 50px;\n    width: 250px;\n    height: 60px;\n    padding-left: 10px;\n    font-family: \'Poppins\';\n    font-size: 16px;\n   \n    &:focus {\n        outline: none;\n      }\n\n    \n}\n\n.search-btn {\n    border: none;\n    background-color: #bc9f8e;\n    font-weight: 200;\n    padding: 10px 20px;\n    border-radius: 30px;\n    font-size: inherit;\n    color: white;\n    outline: none;\n    font-size: 15px;\n    font-family: \'Poppins\';\n    width: max-content;\n    cursor: pointer;\n\n    &:hover {\n      box-shadow: 0 0 8px rgba(black, 0.3);\n    }\n}\n\n\n\n\n\n.book-list{\n    display: flex;\n    flex-direction: column;\n    margin: 30px 20px;\n  \n\n}\n\n\n \n.book-search{\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 30px;\n\n\n}\n\n@keyframes rotation {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  } \n\n  @media screen and (max-width: 580px) {\n    .search-container {\n\n      .intro{\n        h1 {\n          font-size: 25px;\n        }\n  \n        h2 {\n          font-size: 15px;\n        }\n        .input-field{\n            max-width: 120px;\n        }\n        }\n      }\n    }\n\n  @media screen and (max-width: 768px) {\n    .search-container {\n\n      .intro{\n        h1 {\n          font-size: 45px;\n        }\n  \n        h2 {\n          font-size: 30px;\n        }\n        .input-field{\n            max-width: 200px;\n        }\n        }\n      }\n    }\n  \n  \n  @media screen and (min-width: 1024px) {\n    \n      .intro {\n        max-width: 780px;\n    }\n        .search {\n          width: 400px;\n          \n        }\n    \n    }\n  `, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/search.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
      /*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_description_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./description.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/description.css");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./search.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/search.css");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_results_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./results.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/results.css");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_description_css__WEBPACK_IMPORTED_MODULE_2__["default"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_search_css__WEBPACK_IMPORTED_MODULE_3__["default"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_4__["default"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_results_css__WEBPACK_IMPORTED_MODULE_5__["default"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    \n}\n\nhtml,\nbody {\n  font-family: \'Poppins\';\n  font-size: 16px;\n  height: 100%;\n  width: 100%;\n}\n\n.poppins-regular {\n  font-family: \'Poppins\', sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n\n.hidden {\n  display: none;\n\n}\n\n\n::-webkit-scrollbar {\n  width: 8px;\n  border-radius: 0.25rem;\n}\n\n::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n\n\n\n\n\n\n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n `, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./src/css/style.css":
      /*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/style.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/img/background.png":
      /*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "c6325eaf240bb53269b5.png";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/background.png?'
        );

        /***/
      },

    /***/ "./src/img/logo.png":
      /*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "caa8af589e9688901f8e.png";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/logo.png?'
        );

        /***/
      },

    /***/ "./src/img/noCover.png":
      /*!*****************************!*\
  !*** ./src/img/noCover.png ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "e7618e0e01945fb29ef1.png";\n\n//# sourceURL=webpack://my-webpack-project/./src/img/noCover.png?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/adapters/adapters.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");\n/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch.js */ "./node_modules/axios/lib/adapters/fetch.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n\n\n\n\n\nconst knownAdapters = {\n  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  fetch: _fetch_js__WEBPACK_IMPORTED_MODULE_2__["default"]\n};\n_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(knownAdapters, (fn, value) => {\n  if (fn) {\n    try {\n      Object.defineProperty(fn, \'name\', {\n        value\n      });\n    } catch (e) {\n      // eslint-disable-next-line no-empty\n    }\n    Object.defineProperty(fn, \'adapterName\', {\n      value\n    });\n  }\n});\nconst renderReason = reason => `- ${reason}`;\nconst isResolvedHandle = adapter => _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(adapter) || adapter === null || adapter === false;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getAdapter: adapters => {\n    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(adapters) ? adapters : [adapters];\n    const {\n      length\n    } = adapters;\n    let nameOrAdapter;\n    let adapter;\n    const rejectedReasons = {};\n    for (let i = 0; i < length; i++) {\n      nameOrAdapter = adapters[i];\n      let id;\n      adapter = nameOrAdapter;\n      if (!isResolvedHandle(nameOrAdapter)) {\n        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];\n        if (adapter === undefined) {\n          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](`Unknown adapter \'${id}\'`);\n        }\n      }\n      if (adapter) {\n        break;\n      }\n      rejectedReasons[id || \'#\' + i] = adapter;\n    }\n    if (!adapter) {\n      const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? \'is not supported by the environment\' : \'is not available in the build\'));\n      let s = length ? reasons.length > 1 ? \'since :\\n\' + reasons.map(renderReason).join(\'\\n\') : \' \' + renderReason(reasons[0]) : \'as no adapter specified\';\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](`There is no suitable adapter to dispatch the request ` + s, \'ERR_NOT_SUPPORT\');\n    }\n    return adapter;\n  },\n  adapters: knownAdapters\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/adapters/adapters.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/adapters/fetch.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/adapters/fetch.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/composeSignals.js */ "./node_modules/axios/lib/helpers/composeSignals.js");\n/* harmony import */ var _helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/trackStream.js */ "./node_modules/axios/lib/helpers/trackStream.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");\n/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");\n/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/settle.js */ "./node_modules/axios/lib/core/settle.js");\n\n\n\n\n\n\n\n\n\nconst fetchProgressDecorator = (total, fn) => {\n  const lengthComputable = total != null;\n  return loaded => setTimeout(() => fn({\n    lengthComputable,\n    total,\n    loaded\n  }));\n};\nconst isFetchSupported = typeof fetch === \'function\' && typeof Request === \'function\' && typeof Response === \'function\';\nconst isReadableStreamSupported = isFetchSupported && typeof ReadableStream === \'function\';\n\n// used only inside the fetch adapter\nconst encodeText = isFetchSupported && (typeof TextEncoder === \'function\' ? (encoder => str => encoder.encode(str))(new TextEncoder()) : async str => new Uint8Array(await new Response(str).arrayBuffer()));\nconst supportsRequestStream = isReadableStreamSupported && (() => {\n  let duplexAccessed = false;\n  const hasContentType = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {\n    body: new ReadableStream(),\n    method: \'POST\',\n    get duplex() {\n      duplexAccessed = true;\n      return \'half\';\n    }\n  }).headers.has(\'Content-Type\');\n  return duplexAccessed && !hasContentType;\n})();\nconst DEFAULT_CHUNK_SIZE = 64 * 1024;\nconst supportsResponseStream = isReadableStreamSupported && !!(() => {\n  try {\n    return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReadableStream(new Response(\'\').body);\n  } catch (err) {\n    // return undefined\n  }\n})();\nconst resolvers = {\n  stream: supportsResponseStream && (res => res.body)\n};\nisFetchSupported && (res => {\n  [\'text\', \'arrayBuffer\', \'blob\', \'formData\', \'stream\'].forEach(type => {\n    !resolvers[type] && (resolvers[type] = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(res[type]) ? res => res[type]() : (_, config) => {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](`Response type \'${type}\' is not supported`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NOT_SUPPORT, config);\n    });\n  });\n})(new Response());\nconst getBodyLength = async body => {\n  if (body == null) {\n    return 0;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBlob(body)) {\n    return body.size;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSpecCompliantForm(body)) {\n    return (await new Request(body).arrayBuffer()).byteLength;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBufferView(body)) {\n    return body.byteLength;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isURLSearchParams(body)) {\n    body = body + \'\';\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(body)) {\n    return (await encodeText(body)).byteLength;\n  }\n};\nconst resolveBodyLength = async (headers, body) => {\n  const length = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(headers.getContentLength());\n  return length == null ? getBodyLength(body) : length;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFetchSupported && (async config => {\n  let {\n    url,\n    method,\n    data,\n    signal,\n    cancelToken,\n    timeout,\n    onDownloadProgress,\n    onUploadProgress,\n    responseType,\n    headers,\n    withCredentials = \'same-origin\',\n    fetchOptions\n  } = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(config);\n  responseType = responseType ? (responseType + \'\').toLowerCase() : \'text\';\n  let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? (0,_helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__["default"])([signal, cancelToken], timeout) : [];\n  let finished, request;\n  const onFinish = () => {\n    !finished && setTimeout(() => {\n      composedSignal && composedSignal.unsubscribe();\n    });\n    finished = true;\n  };\n  let requestContentLength;\n  try {\n    if (onUploadProgress && supportsRequestStream && method !== \'get\' && method !== \'head\' && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {\n      let _request = new Request(url, {\n        method: \'POST\',\n        body: data,\n        duplex: "half"\n      });\n      let contentTypeHeader;\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get(\'content-type\'))) {\n        headers.setContentType(contentTypeHeader);\n      }\n      if (_request.body) {\n        data = (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_5__.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, fetchProgressDecorator(requestContentLength, (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(onUploadProgress)), null, encodeText);\n      }\n    }\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(withCredentials)) {\n      withCredentials = withCredentials ? \'cors\' : \'omit\';\n    }\n    request = new Request(url, {\n      ...fetchOptions,\n      signal: composedSignal,\n      method: method.toUpperCase(),\n      headers: headers.normalize().toJSON(),\n      body: data,\n      duplex: "half",\n      withCredentials\n    });\n    let response = await fetch(request);\n    const isStreamResponse = supportsResponseStream && (responseType === \'stream\' || responseType === \'response\');\n    if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {\n      const options = {};\n      [\'status\', \'statusText\', \'headers\'].forEach(prop => {\n        options[prop] = response[prop];\n      });\n      const responseContentLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(response.headers.get(\'content-length\'));\n      response = new Response((0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_5__.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onDownloadProgress && fetchProgressDecorator(responseContentLength, (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(onDownloadProgress, true)), isStreamResponse && onFinish, encodeText), options);\n    }\n    responseType = responseType || \'text\';\n    let responseData = await resolvers[_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].findKey(resolvers, responseType) || \'text\'](response, config);\n    !isStreamResponse && onFinish();\n    stopTimeout && stopTimeout();\n    return await new Promise((resolve, reject) => {\n      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_7__["default"])(resolve, reject, {\n        data: responseData,\n        headers: _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__["default"].from(response.headers),\n        status: response.status,\n        statusText: response.statusText,\n        config,\n        request\n      });\n    });\n  } catch (err) {\n    onFinish();\n    if (err && err.name === \'TypeError\' && /fetch/i.test(err.message)) {\n      throw Object.assign(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](\'Network Error\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NETWORK, config, request), {\n        cause: err.cause || err\n      });\n    }\n    throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(err, err && err.code, config, request);\n  }\n}));\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/adapters/fetch.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/adapters/xhr.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");\n/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");\n/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");\n\n\n\n\n\n\n\n\n\n\nconst isXHRAdapterSupported = typeof XMLHttpRequest !== \'undefined\';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    const _config = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])(config);\n    let requestData = _config.data;\n    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(_config.headers).normalize();\n    let {\n      responseType\n    } = _config;\n    let onCanceled;\n    function done() {\n      if (_config.cancelToken) {\n        _config.cancelToken.unsubscribe(onCanceled);\n      }\n      if (_config.signal) {\n        _config.signal.removeEventListener(\'abort\', onCanceled);\n      }\n    }\n    let request = new XMLHttpRequest();\n    request.open(_config.method.toUpperCase(), _config.url, true);\n\n    // Set the request timeout in MS\n    request.timeout = _config.timeout;\n    function onloadend() {\n      if (!request) {\n        return;\n      }\n      // Prepare the response\n      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(\'getAllResponseHeaders\' in request && request.getAllResponseHeaders());\n      const responseData = !responseType || responseType === \'text\' || responseType === \'json\' ? request.responseText : request.response;\n      const response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config,\n        request\n      };\n      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function _resolve(value) {\n        resolve(value);\n        done();\n      }, function _reject(err) {\n        reject(err);\n        done();\n      }, response);\n\n      // Clean up request\n      request = null;\n    }\n    if (\'onloadend\' in request) {\n      // Use onloadend if available\n      request.onloadend = onloadend;\n    } else {\n      // Listen for ready state to emulate onloadend\n      request.onreadystatechange = function handleLoad() {\n        if (!request || request.readyState !== 4) {\n          return;\n        }\n\n        // The request errored out and we didn\'t get a response, this will be\n        // handled by onerror instead\n        // With one exception: request that using file: protocol, most browsers\n        // will return status as 0 even though it\'s a successful request\n        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf(\'file:\') === 0)) {\n          return;\n        }\n        // readystate handler is calling before onerror or ontimeout handlers,\n        // so we should call onloadend on the next \'tick\'\n        setTimeout(onloadend);\n      };\n    }\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](\'Request aborted\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED, _config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it\'s a network error\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](\'Network Error\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_NETWORK, _config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      let timeoutErrorMessage = _config.timeout ? \'timeout of \' + _config.timeout + \'ms exceeded\' : \'timeout exceeded\';\n      const transitional = _config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__["default"];\n      if (_config.timeoutErrorMessage) {\n        timeoutErrorMessage = _config.timeoutErrorMessage;\n      }\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](timeoutErrorMessage, transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED, _config, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Remove Content-Type if data is undefined\n    requestData === undefined && requestHeaders.setContentType(null);\n\n    // Add headers to the request\n    if (\'setRequestHeader\' in request) {\n      _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {\n        request.setRequestHeader(key, val);\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].isUndefined(_config.withCredentials)) {\n      request.withCredentials = !!_config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (responseType && responseType !== \'json\') {\n      request.responseType = _config.responseType;\n    }\n\n    // Handle progress if needed\n    if (typeof _config.onDownloadProgress === \'function\') {\n      request.addEventListener(\'progress\', (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_config.onDownloadProgress, true));\n    }\n\n    // Not all browsers support upload events\n    if (typeof _config.onUploadProgress === \'function\' && request.upload) {\n      request.upload.addEventListener(\'progress\', (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_config.onUploadProgress));\n    }\n    if (_config.cancelToken || _config.signal) {\n      // Handle cancellation\n      // eslint-disable-next-line func-names\n      onCanceled = cancel => {\n        if (!request) {\n          return;\n        }\n        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__["default"](null, config, request) : cancel);\n        request.abort();\n        request = null;\n      };\n      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);\n      if (_config.signal) {\n        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener(\'abort\', onCanceled);\n      }\n    }\n    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_config.url);\n    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_9__["default"].protocols.indexOf(protocol) === -1) {\n      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](\'Unsupported protocol \' + protocol + \':\', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_BAD_REQUEST, config));\n      return;\n    }\n\n    // Send the request\n    request.send(requestData || null);\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/adapters/xhr.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/axios.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");\n/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");\n/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");\n/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");\n/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");\n/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");\n/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");\n/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n *\n * @returns {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);\n  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);\n\n  // Copy axios.prototype to instance\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {\n    allOwnKeys: true\n  });\n\n  // Copy context to instance\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {\n    allOwnKeys: true\n  });\n\n  // Factory for creating new instances\n  instance.create = function create(instanceConfig) {\n    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));\n  };\n  return instance;\n}\n\n// Create the default instance to be exported\nconst axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];\n\n// Expose Cancel & CancelToken\naxios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];\naxios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];\naxios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];\naxios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;\naxios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];\n\n// Expose AxiosError class\naxios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];\n\n// alias for CanceledError for backward compatibility\naxios.Cancel = axios.CanceledError;\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];\n\n// Expose isAxiosError\naxios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];\n\n// Expose mergeConfig\naxios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];\naxios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];\naxios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);\naxios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;\naxios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];\naxios.default = axios;\n\n// this module should only have a default export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/axios.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/CancelToken.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n\n\n\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @param {Function} executor The executor function.\n *\n * @returns {CancelToken}\n */\nclass CancelToken {\n  constructor(executor) {\n    if (typeof executor !== \'function\') {\n      throw new TypeError(\'executor must be a function.\');\n    }\n    let resolvePromise;\n    this.promise = new Promise(function promiseExecutor(resolve) {\n      resolvePromise = resolve;\n    });\n    const token = this;\n\n    // eslint-disable-next-line func-names\n    this.promise.then(cancel => {\n      if (!token._listeners) return;\n      let i = token._listeners.length;\n      while (i-- > 0) {\n        token._listeners[i](cancel);\n      }\n      token._listeners = null;\n    });\n\n    // eslint-disable-next-line func-names\n    this.promise.then = onfulfilled => {\n      let _resolve;\n      // eslint-disable-next-line func-names\n      const promise = new Promise(resolve => {\n        token.subscribe(resolve);\n        _resolve = resolve;\n      }).then(onfulfilled);\n      promise.cancel = function reject() {\n        token.unsubscribe(_resolve);\n      };\n      return promise;\n    };\n    executor(function cancel(message, config, request) {\n      if (token.reason) {\n        // Cancellation has already been requested\n        return;\n      }\n      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);\n      resolvePromise(token.reason);\n    });\n  }\n\n  /**\n   * Throws a `CanceledError` if cancellation has been requested.\n   */\n  throwIfRequested() {\n    if (this.reason) {\n      throw this.reason;\n    }\n  }\n\n  /**\n   * Subscribe to the cancel signal\n   */\n\n  subscribe(listener) {\n    if (this.reason) {\n      listener(this.reason);\n      return;\n    }\n    if (this._listeners) {\n      this._listeners.push(listener);\n    } else {\n      this._listeners = [listener];\n    }\n  }\n\n  /**\n   * Unsubscribe from the cancel signal\n   */\n\n  unsubscribe(listener) {\n    if (!this._listeners) {\n      return;\n    }\n    const index = this._listeners.indexOf(listener);\n    if (index !== -1) {\n      this._listeners.splice(index, 1);\n    }\n  }\n\n  /**\n   * Returns an object that contains a new `CancelToken` and a function that, when called,\n   * cancels the `CancelToken`.\n   */\n  static source() {\n    let cancel;\n    const token = new CancelToken(function executor(c) {\n      cancel = c;\n    });\n    return {\n      token,\n      cancel\n    };\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/cancel/CancelToken.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/CanceledError.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n\n/**\n * A `CanceledError` is an object that is thrown when an operation is canceled.\n *\n * @param {string=} message The message.\n * @param {Object=} config The config.\n * @param {Object=} request The request.\n *\n * @returns {CanceledError} The created error.\n */\nfunction CanceledError(message, config, request) {\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? \'canceled\' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);\n  this.name = \'CanceledError\';\n}\n_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {\n  __CANCEL__: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/cancel/CanceledError.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/cancel/isCancel.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isCancel)\n/* harmony export */ });\n\n\nfunction isCancel(value) {\n  return !!(value && value.__CANCEL__);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/cancel/isCancel.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/Axios.js":
      /*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");\n/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");\n/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");\n/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");\n/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");\n/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");\n/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\n\n\n\n\n\n\nconst validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n *\n * @return {Axios} A new instance of Axios\n */\nclass Axios {\n  constructor(instanceConfig) {\n    this.defaults = instanceConfig;\n    this.interceptors = {\n      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),\n      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()\n    };\n  }\n\n  /**\n   * Dispatch a request\n   *\n   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)\n   * @param {?Object} config\n   *\n   * @returns {Promise} The Promise to be fulfilled\n   */\n  async request(configOrUrl, config) {\n    try {\n      return await this._request(configOrUrl, config);\n    } catch (err) {\n      if (err instanceof Error) {\n        let dummy;\n        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();\n\n        // slice off the Error: ... line\n        const stack = dummy.stack ? dummy.stack.replace(/^.+\\n/, \'\') : \'\';\n        try {\n          if (!err.stack) {\n            err.stack = stack;\n            // match without the 2 top stack lines\n          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\\n.+\\n/, \'\'))) {\n            err.stack += \'\\n\' + stack;\n          }\n        } catch (e) {\n          // ignore the case where "stack" is an un-writable property\n        }\n      }\n      throw err;\n    }\n  }\n  _request(configOrUrl, config) {\n    /*eslint no-param-reassign:0*/\n    // Allow for axios(\'example/url\'[, config]) a la fetch API\n    if (typeof configOrUrl === \'string\') {\n      config = config || {};\n      config.url = configOrUrl;\n    } else {\n      config = configOrUrl || {};\n    }\n    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);\n    const {\n      transitional,\n      paramsSerializer,\n      headers\n    } = config;\n    if (transitional !== undefined) {\n      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {\n        silentJSONParsing: validators.transitional(validators.boolean),\n        forcedJSONParsing: validators.transitional(validators.boolean),\n        clarifyTimeoutError: validators.transitional(validators.boolean)\n      }, false);\n    }\n    if (paramsSerializer != null) {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {\n        config.paramsSerializer = {\n          serialize: paramsSerializer\n        };\n      } else {\n        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {\n          encode: validators.function,\n          serialize: validators.function\n        }, true);\n      }\n    }\n\n    // Set config.method\n    config.method = (config.method || this.defaults.method || \'get\').toLowerCase();\n\n    // Flatten headers\n    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(headers.common, headers[config.method]);\n    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach([\'delete\', \'get\', \'head\', \'post\', \'put\', \'patch\', \'common\'], method => {\n      delete headers[method];\n    });\n    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);\n\n    // filter out skipped interceptors\n    const requestInterceptorChain = [];\n    let synchronousRequestInterceptors = true;\n    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n      if (typeof interceptor.runWhen === \'function\' && interceptor.runWhen(config) === false) {\n        return;\n      }\n      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;\n      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);\n    });\n    const responseInterceptorChain = [];\n    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);\n    });\n    let promise;\n    let i = 0;\n    let len;\n    if (!synchronousRequestInterceptors) {\n      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];\n      chain.unshift.apply(chain, requestInterceptorChain);\n      chain.push.apply(chain, responseInterceptorChain);\n      len = chain.length;\n      promise = Promise.resolve(config);\n      while (i < len) {\n        promise = promise.then(chain[i++], chain[i++]);\n      }\n      return promise;\n    }\n    len = requestInterceptorChain.length;\n    let newConfig = config;\n    i = 0;\n    while (i < len) {\n      const onFulfilled = requestInterceptorChain[i++];\n      const onRejected = requestInterceptorChain[i++];\n      try {\n        newConfig = onFulfilled(newConfig);\n      } catch (error) {\n        onRejected.call(this, error);\n        break;\n      }\n    }\n    try {\n      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);\n    } catch (error) {\n      return Promise.reject(error);\n    }\n    i = 0;\n    len = responseInterceptorChain.length;\n    while (i < len) {\n      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);\n    }\n    return promise;\n  }\n  getUri(config) {\n    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);\n    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);\n    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);\n  }\n}\n\n// Provide aliases for supported request methods\n_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach([\'delete\', \'get\', \'head\', \'options\'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function (url, config) {\n    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {\n      method,\n      url,\n      data: (config || {}).data\n    }));\n  };\n});\n_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach([\'post\', \'put\', \'patch\'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n\n  function generateHTTPMethod(isForm) {\n    return function httpMethod(url, data, config) {\n      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {\n        method,\n        headers: isForm ? {\n          \'Content-Type\': \'multipart/form-data\'\n        } : {},\n        url,\n        data\n      }));\n    };\n  }\n  Axios.prototype[method] = generateHTTPMethod();\n  Axios.prototype[method + \'Form\'] = generateHTTPMethod(true);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/Axios.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/AxiosError.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./node_modules/axios/lib/utils.js\");\n\n\n\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [config] The config.\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n *\n * @returns {Error} The created error.\n */\nfunction AxiosError(message, code, config, request, response) {\n  Error.call(this);\n  if (Error.captureStackTrace) {\n    Error.captureStackTrace(this, this.constructor);\n  } else {\n    this.stack = new Error().stack;\n  }\n  this.message = message;\n  this.name = 'AxiosError';\n  code && (this.code = code);\n  config && (this.config = config);\n  request && (this.request = request);\n  response && (this.response = response);\n}\n_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].inherits(AxiosError, Error, {\n  toJSON: function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toJSONObject(this.config),\n      code: this.code,\n      status: this.response && this.response.status ? this.response.status : null\n    };\n  }\n});\nconst prototype = AxiosError.prototype;\nconst descriptors = {};\n['ERR_BAD_OPTION_VALUE', 'ERR_BAD_OPTION', 'ECONNABORTED', 'ETIMEDOUT', 'ERR_NETWORK', 'ERR_FR_TOO_MANY_REDIRECTS', 'ERR_DEPRECATED', 'ERR_BAD_RESPONSE', 'ERR_BAD_REQUEST', 'ERR_CANCELED', 'ERR_NOT_SUPPORT', 'ERR_INVALID_URL'\n// eslint-disable-next-line func-names\n].forEach(code => {\n  descriptors[code] = {\n    value: code\n  };\n});\nObject.defineProperties(AxiosError, descriptors);\nObject.defineProperty(prototype, 'isAxiosError', {\n  value: true\n});\n\n// eslint-disable-next-line func-names\nAxiosError.from = (error, code, config, request, response, customProps) => {\n  const axiosError = Object.create(prototype);\n  _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toFlatObject(error, axiosError, function filter(obj) {\n    return obj !== Error.prototype;\n  }, prop => {\n    return prop !== 'isAxiosError';\n  });\n  AxiosError.call(axiosError, error.message, code, config, request, response);\n  axiosError.cause = error;\n  axiosError.name = error.name;\n  customProps && Object.assign(axiosError, customProps);\n  return axiosError;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/AxiosError.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");\n\n\n\n\nconst $internals = Symbol(\'internals\');\nfunction normalizeHeader(header) {\n  return header && String(header).trim().toLowerCase();\n}\nfunction normalizeValue(value) {\n  if (value === false || value == null) {\n    return value;\n  }\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);\n}\nfunction parseTokens(str) {\n  const tokens = Object.create(null);\n  const tokensRE = /([^\\s,;=]+)\\s*(?:=\\s*([^,;]+))?/g;\n  let match;\n  while (match = tokensRE.exec(str)) {\n    tokens[match[1]] = match[2];\n  }\n  return tokens;\n}\nconst isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&\'*+.]+$/.test(str.trim());\nfunction matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {\n    return filter.call(this, value, header);\n  }\n  if (isHeaderNameFilter) {\n    value = header;\n  }\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {\n    return value.indexOf(filter) !== -1;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {\n    return filter.test(value);\n  }\n}\nfunction formatHeader(header) {\n  return header.trim().toLowerCase().replace(/([a-z\\d])(\\w*)/g, (w, char, str) => {\n    return char.toUpperCase() + str;\n  });\n}\nfunction buildAccessors(obj, header) {\n  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(\' \' + header);\n  [\'get\', \'set\', \'has\'].forEach(methodName => {\n    Object.defineProperty(obj, methodName + accessorName, {\n      value: function (arg1, arg2, arg3) {\n        return this[methodName].call(this, header, arg1, arg2, arg3);\n      },\n      configurable: true\n    });\n  });\n}\nclass AxiosHeaders {\n  constructor(headers) {\n    headers && this.set(headers);\n  }\n  set(header, valueOrRewrite, rewrite) {\n    const self = this;\n    function setHeader(_value, _header, _rewrite) {\n      const lHeader = normalizeHeader(_header);\n      if (!lHeader) {\n        throw new Error(\'header name must be a non-empty string\');\n      }\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);\n      if (!key || self[key] === undefined || _rewrite === true || _rewrite === undefined && self[key] !== false) {\n        self[key || _header] = normalizeValue(_value);\n      }\n    }\n    const setHeaders = (headers, _rewrite) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {\n      setHeaders(header, valueOrRewrite);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {\n      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHeaders(header)) {\n      for (const [key, value] of header.entries()) {\n        setHeader(value, key, rewrite);\n      }\n    } else {\n      header != null && setHeader(valueOrRewrite, header, rewrite);\n    }\n    return this;\n  }\n  get(header, parser) {\n    header = normalizeHeader(header);\n    if (header) {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);\n      if (key) {\n        const value = this[key];\n        if (!parser) {\n          return value;\n        }\n        if (parser === true) {\n          return parseTokens(value);\n        }\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {\n          return parser.call(this, value, key);\n        }\n        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {\n          return parser.exec(value);\n        }\n        throw new TypeError(\'parser must be boolean|regexp|function\');\n      }\n    }\n  }\n  has(header, matcher) {\n    header = normalizeHeader(header);\n    if (header) {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);\n      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));\n    }\n    return false;\n  }\n  delete(header, matcher) {\n    const self = this;\n    let deleted = false;\n    function deleteHeader(_header) {\n      _header = normalizeHeader(_header);\n      if (_header) {\n        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);\n        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {\n          delete self[key];\n          deleted = true;\n        }\n      }\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {\n      header.forEach(deleteHeader);\n    } else {\n      deleteHeader(header);\n    }\n    return deleted;\n  }\n  clear(matcher) {\n    const keys = Object.keys(this);\n    let i = keys.length;\n    let deleted = false;\n    while (i--) {\n      const key = keys[i];\n      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {\n        delete this[key];\n        deleted = true;\n      }\n    }\n    return deleted;\n  }\n  normalize(format) {\n    const self = this;\n    const headers = {};\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {\n      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);\n      if (key) {\n        self[key] = normalizeValue(value);\n        delete self[header];\n        return;\n      }\n      const normalized = format ? formatHeader(header) : String(header).trim();\n      if (normalized !== header) {\n        delete self[header];\n      }\n      self[normalized] = normalizeValue(value);\n      headers[normalized] = true;\n    });\n    return this;\n  }\n  concat(...targets) {\n    return this.constructor.concat(this, ...targets);\n  }\n  toJSON(asStrings) {\n    const obj = Object.create(null);\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {\n      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(\', \') : value);\n    });\n    return obj;\n  }\n  [Symbol.iterator]() {\n    return Object.entries(this.toJSON())[Symbol.iterator]();\n  }\n  toString() {\n    return Object.entries(this.toJSON()).map(([header, value]) => header + \': \' + value).join(\'\\n\');\n  }\n  get [Symbol.toStringTag]() {\n    return \'AxiosHeaders\';\n  }\n  static from(thing) {\n    return thing instanceof this ? thing : new this(thing);\n  }\n  static concat(first, ...targets) {\n    const computed = new this(first);\n    targets.forEach(target => computed.set(target));\n    return computed;\n  }\n  static accessor(header) {\n    const internals = this[$internals] = this[$internals] = {\n      accessors: {}\n    };\n    const accessors = internals.accessors;\n    const prototype = this.prototype;\n    function defineAccessor(_header) {\n      const lHeader = normalizeHeader(_header);\n      if (!accessors[lHeader]) {\n        buildAccessors(prototype, _header);\n        accessors[lHeader] = true;\n      }\n    }\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);\n    return this;\n  }\n}\nAxiosHeaders.accessor([\'Content-Type\', \'Content-Length\', \'Accept\', \'Accept-Encoding\', \'User-Agent\', \'Authorization\']);\n\n// reserved names hotfix\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({\n  value\n}, key) => {\n  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`\n  return {\n    get: () => value,\n    set(headerValue) {\n      this[mapped] = headerValue;\n    }\n  };\n});\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/AxiosHeaders.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/InterceptorManager.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\nclass InterceptorManager {\n  constructor() {\n    this.handlers = [];\n  }\n\n  /**\n   * Add a new interceptor to the stack\n   *\n   * @param {Function} fulfilled The function to handle `then` for a `Promise`\n   * @param {Function} rejected The function to handle `reject` for a `Promise`\n   *\n   * @return {Number} An ID used to remove interceptor later\n   */\n  use(fulfilled, rejected, options) {\n    this.handlers.push({\n      fulfilled,\n      rejected,\n      synchronous: options ? options.synchronous : false,\n      runWhen: options ? options.runWhen : null\n    });\n    return this.handlers.length - 1;\n  }\n\n  /**\n   * Remove an interceptor from the stack\n   *\n   * @param {Number} id The ID that was returned by `use`\n   *\n   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise\n   */\n  eject(id) {\n    if (this.handlers[id]) {\n      this.handlers[id] = null;\n    }\n  }\n\n  /**\n   * Clear all interceptors from the stack\n   *\n   * @returns {void}\n   */\n  clear() {\n    if (this.handlers) {\n      this.handlers = [];\n    }\n  }\n\n  /**\n   * Iterate over all the registered interceptors\n   *\n   * This method is particularly useful for skipping over any\n   * interceptors that may have become `null` calling `eject`.\n   *\n   * @param {Function} fn The function to call for each interceptor\n   *\n   * @returns {void}\n   */\n  forEach(fn) {\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {\n      if (h !== null) {\n        fn(h);\n      }\n    });\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/InterceptorManager.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/buildFullPath.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ buildFullPath)\n/* harmony export */ });\n/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");\n/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");\n\n\n\n\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n *\n * @returns {string} The combined full path\n */\nfunction buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {\n    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);\n  }\n  return requestedURL;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/buildFullPath.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/dispatchRequest.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ dispatchRequest)\n/* harmony export */ });\n/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");\n/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");\n\n\n\n\n\n\n\n\n\n/**\n * Throws a `CanceledError` if cancellation has been requested.\n *\n * @param {Object} config The config that is to be used for the request\n *\n * @returns {void}\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n  if (config.signal && config.signal.aborted) {\n    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n *\n * @returns {Promise} The Promise to be fulfilled\n */\nfunction dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);\n\n  // Transform request data\n  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformRequest);\n  if ([\'post\', \'put\', \'patch\'].indexOf(config.method) !== -1) {\n    config.headers.setContentType(\'application/x-www-form-urlencoded\', false);\n  }\n  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, response);\n    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(config, config.transformResponse, reason.response);\n        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);\n      }\n    }\n    return Promise.reject(reason);\n  });\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/dispatchRequest.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/mergeConfig.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ mergeConfig)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\nconst headersToObject = thing => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? {\n  ...thing\n} : thing;\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n *\n * @returns {Object} New object resulting from merging config2 to config1\n */\nfunction mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  const config = {};\n  function getMergedValue(target, source, caseless) {\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {\n      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({\n        caseless\n      }, target, source);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {\n      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);\n    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDeepProperties(a, b, caseless) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(a, b, caseless);\n    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {\n      return getMergedValue(undefined, a, caseless);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function valueFromConfig2(a, b) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(undefined, b);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function defaultToConfig2(a, b) {\n    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {\n      return getMergedValue(undefined, b);\n    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {\n      return getMergedValue(undefined, a);\n    }\n  }\n\n  // eslint-disable-next-line consistent-return\n  function mergeDirectKeys(a, b, prop) {\n    if (prop in config2) {\n      return getMergedValue(a, b);\n    } else if (prop in config1) {\n      return getMergedValue(undefined, a);\n    }\n  }\n  const mergeMap = {\n    url: valueFromConfig2,\n    method: valueFromConfig2,\n    data: valueFromConfig2,\n    baseURL: defaultToConfig2,\n    transformRequest: defaultToConfig2,\n    transformResponse: defaultToConfig2,\n    paramsSerializer: defaultToConfig2,\n    timeout: defaultToConfig2,\n    timeoutMessage: defaultToConfig2,\n    withCredentials: defaultToConfig2,\n    withXSRFToken: defaultToConfig2,\n    adapter: defaultToConfig2,\n    responseType: defaultToConfig2,\n    xsrfCookieName: defaultToConfig2,\n    xsrfHeaderName: defaultToConfig2,\n    onUploadProgress: defaultToConfig2,\n    onDownloadProgress: defaultToConfig2,\n    decompress: defaultToConfig2,\n    maxContentLength: defaultToConfig2,\n    maxBodyLength: defaultToConfig2,\n    beforeRedirect: defaultToConfig2,\n    transport: defaultToConfig2,\n    httpAgent: defaultToConfig2,\n    httpsAgent: defaultToConfig2,\n    cancelToken: defaultToConfig2,\n    socketPath: defaultToConfig2,\n    responseEncoding: defaultToConfig2,\n    validateStatus: mergeDirectKeys,\n    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)\n  };\n  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {\n    const merge = mergeMap[prop] || mergeDeepProperties;\n    const configValue = merge(config1[prop], config2[prop], prop);\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);\n  });\n  return config;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/mergeConfig.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/settle.js":
      /*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ settle)\n/* harmony export */ });\n/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n\n\n\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n *\n * @returns {object} The response.\n */\nfunction settle(resolve, reject, response) {\n  const validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](\'Request failed with status code \' + response.status, [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));\n  }\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/settle.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/core/transformData.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ transformData)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n\n\n\n\n\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Array|Function} fns A single function or Array of functions\n * @param {?Object} response The response object\n *\n * @returns {*} The resulting transformed data\n */\nfunction transformData(fns, response) {\n  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];\n  const context = response || config;\n  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);\n  let data = context.data;\n  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {\n    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);\n  });\n  headers.normalize();\n  return data;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/core/transformData.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/defaults/index.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");\n/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");\n/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");\n\n\n\n\n\n\n\n\n\n\n/**\n * It takes a string, tries to parse it, and if it fails, it returns the stringified version\n * of the input\n *\n * @param {any} rawValue - The value to be stringified.\n * @param {Function} parser - A function that parses a string into a JavaScript object.\n * @param {Function} encoder - A function that takes a value and returns a string.\n *\n * @returns {string} A stringified version of the rawValue.\n */\nfunction stringifySafely(rawValue, parser, encoder) {\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {\n    try {\n      (parser || JSON.parse)(rawValue);\n      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);\n    } catch (e) {\n      if (e.name !== \'SyntaxError\') {\n        throw e;\n      }\n    }\n  }\n  return (encoder || JSON.stringify)(rawValue);\n}\nconst defaults = {\n  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n  adapter: [\'xhr\', \'http\', \'fetch\'],\n  transformRequest: [function transformRequest(data, headers) {\n    const contentType = headers.getContentType() || \'\';\n    const hasJSONContentType = contentType.indexOf(\'application/json\') > -1;\n    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);\n    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {\n      data = new FormData(data);\n    }\n    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);\n    if (isFormData) {\n      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)) {\n      return data;\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {\n      headers.setContentType(\'application/x-www-form-urlencoded;charset=utf-8\', false);\n      return data.toString();\n    }\n    let isFileList;\n    if (isObjectPayload) {\n      if (contentType.indexOf(\'application/x-www-form-urlencoded\') > -1) {\n        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();\n      }\n      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf(\'multipart/form-data\') > -1) {\n        const _FormData = this.env && this.env.FormData;\n        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isFileList ? {\n          \'files[]\': data\n        } : data, _FormData && new _FormData(), this.formSerializer);\n      }\n    }\n    if (isObjectPayload || hasJSONContentType) {\n      headers.setContentType(\'application/json\', false);\n      return stringifySafely(data);\n    }\n    return data;\n  }],\n  transformResponse: [function transformResponse(data) {\n    const transitional = this.transitional || defaults.transitional;\n    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;\n    const JSONRequested = this.responseType === \'json\';\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isResponse(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)) {\n      return data;\n    }\n    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {\n      const silentJSONParsing = transitional && transitional.silentJSONParsing;\n      const strictJSONParsing = !silentJSONParsing && JSONRequested;\n      try {\n        return JSON.parse(data);\n      } catch (e) {\n        if (strictJSONParsing) {\n          if (e.name === \'SyntaxError\') {\n            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);\n          }\n          throw e;\n        }\n      }\n    }\n    return data;\n  }],\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n  xsrfCookieName: \'XSRF-TOKEN\',\n  xsrfHeaderName: \'X-XSRF-TOKEN\',\n  maxContentLength: -1,\n  maxBodyLength: -1,\n  env: {\n    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,\n    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob\n  },\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  },\n  headers: {\n    common: {\n      \'Accept\': \'application/json, text/plain, */*\',\n      \'Content-Type\': undefined\n    }\n  }\n};\n_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach([\'delete\', \'get\', \'head\', \'post\', \'put\', \'patch\'], method => {\n  defaults.headers[method] = {};\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/defaults/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/defaults/transitional.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  silentJSONParsing: true,\n  forcedJSONParsing: true,\n  clarifyTimeoutError: false\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/defaults/transitional.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/env/data.js":
      /*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   VERSION: () => (/* binding */ VERSION)\n/* harmony export */ });\nconst VERSION = "1.7.2";\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/env/data.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
      /*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ \"./node_modules/axios/lib/helpers/toFormData.js\");\n\n\n\n\n/**\n * It encodes a string by replacing all characters that are not in the unreserved set with\n * their percent-encoded equivalents\n *\n * @param {string} str - The string to encode.\n *\n * @returns {string} The encoded string.\n */\nfunction encode(str) {\n  const charMap = {\n    '!': '%21',\n    \"'\": '%27',\n    '(': '%28',\n    ')': '%29',\n    '~': '%7E',\n    '%20': '+',\n    '%00': '\\x00'\n  };\n  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {\n    return charMap[match];\n  });\n}\n\n/**\n * It takes a params object and converts it to a FormData object\n *\n * @param {Object<string, any>} params - The parameters to be converted to a FormData object.\n * @param {Object<string, any>} options - The options object passed to the Axios constructor.\n *\n * @returns {void}\n */\nfunction AxiosURLSearchParams(params, options) {\n  this._pairs = [];\n  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(params, this, options);\n}\nconst prototype = AxiosURLSearchParams.prototype;\nprototype.append = function append(name, value) {\n  this._pairs.push([name, value]);\n};\nprototype.toString = function toString(encoder) {\n  const _encode = encoder ? function (value) {\n    return encoder.call(this, value, encode);\n  } : encode;\n  return this._pairs.map(function each(pair) {\n    return _encode(pair[0]) + '=' + _encode(pair[1]);\n  }, '').join('&');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/AxiosURLSearchParams.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
      /*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HttpStatusCode = {\n  Continue: 100,\n  SwitchingProtocols: 101,\n  Processing: 102,\n  EarlyHints: 103,\n  Ok: 200,\n  Created: 201,\n  Accepted: 202,\n  NonAuthoritativeInformation: 203,\n  NoContent: 204,\n  ResetContent: 205,\n  PartialContent: 206,\n  MultiStatus: 207,\n  AlreadyReported: 208,\n  ImUsed: 226,\n  MultipleChoices: 300,\n  MovedPermanently: 301,\n  Found: 302,\n  SeeOther: 303,\n  NotModified: 304,\n  UseProxy: 305,\n  Unused: 306,\n  TemporaryRedirect: 307,\n  PermanentRedirect: 308,\n  BadRequest: 400,\n  Unauthorized: 401,\n  PaymentRequired: 402,\n  Forbidden: 403,\n  NotFound: 404,\n  MethodNotAllowed: 405,\n  NotAcceptable: 406,\n  ProxyAuthenticationRequired: 407,\n  RequestTimeout: 408,\n  Conflict: 409,\n  Gone: 410,\n  LengthRequired: 411,\n  PreconditionFailed: 412,\n  PayloadTooLarge: 413,\n  UriTooLong: 414,\n  UnsupportedMediaType: 415,\n  RangeNotSatisfiable: 416,\n  ExpectationFailed: 417,\n  ImATeapot: 418,\n  MisdirectedRequest: 421,\n  UnprocessableEntity: 422,\n  Locked: 423,\n  FailedDependency: 424,\n  TooEarly: 425,\n  UpgradeRequired: 426,\n  PreconditionRequired: 428,\n  TooManyRequests: 429,\n  RequestHeaderFieldsTooLarge: 431,\n  UnavailableForLegalReasons: 451,\n  InternalServerError: 500,\n  NotImplemented: 501,\n  BadGateway: 502,\n  ServiceUnavailable: 503,\n  GatewayTimeout: 504,\n  HttpVersionNotSupported: 505,\n  VariantAlsoNegotiates: 506,\n  InsufficientStorage: 507,\n  LoopDetected: 508,\n  NotExtended: 510,\n  NetworkAuthenticationRequired: 511\n};\nObject.entries(HttpStatusCode).forEach(([key, value]) => {\n  HttpStatusCode[value] = key;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/HttpStatusCode.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/bind.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ bind)\n/* harmony export */ });\n\n\nfunction bind(fn, thisArg) {\n  return function wrap() {\n    return fn.apply(thisArg, arguments);\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/bind.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/buildURL.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildURL)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ \"./node_modules/axios/lib/helpers/AxiosURLSearchParams.js\");\n\n\n\n\n\n/**\n * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their\n * URI encoded counterparts\n *\n * @param {string} val The value to be encoded.\n *\n * @returns {string} The encoded value.\n */\nfunction encode(val) {\n  return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @param {?object} options\n *\n * @returns {string} The formatted url\n */\nfunction buildURL(url, params, options) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n  const _encode = options && options.encode || encode;\n  const serializeFn = options && options.serialize;\n  let serializedParams;\n  if (serializeFn) {\n    serializedParams = serializeFn(params, options);\n  } else {\n    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isURLSearchParams(params) ? params.toString() : new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](params, options).toString(_encode);\n  }\n  if (serializedParams) {\n    const hashmarkIndex = url.indexOf(\"#\");\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n  return url;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/buildURL.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/combineURLs.js":
      /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ combineURLs)\n/* harmony export */ });\n\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n *\n * @returns {string} The combined URL\n */\nfunction combineURLs(baseURL, relativeURL) {\n  return relativeURL ? baseURL.replace(/\\/?\\/$/, '') + '/' + relativeURL.replace(/^\\/+/, '') : baseURL;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/combineURLs.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/composeSignals.js":
      /*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/composeSignals.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n\n\nconst composeSignals = (signals, timeout) => {\n  let controller = new AbortController();\n  let aborted;\n  const onabort = function (cancel) {\n    if (!aborted) {\n      aborted = true;\n      unsubscribe();\n      const err = cancel instanceof Error ? cancel : this.reason;\n      controller.abort(err instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? err : new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__["default"](err instanceof Error ? err.message : err));\n    }\n  };\n  let timer = timeout && setTimeout(() => {\n    onabort(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](`timeout ${timeout} of ms exceeded`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ETIMEDOUT));\n  }, timeout);\n  const unsubscribe = () => {\n    if (signals) {\n      timer && clearTimeout(timer);\n      timer = null;\n      signals.forEach(signal => {\n        signal && (signal.removeEventListener ? signal.removeEventListener(\'abort\', onabort) : signal.unsubscribe(onabort));\n      });\n      signals = null;\n    }\n  };\n  signals.forEach(signal => signal && signal.addEventListener && signal.addEventListener(\'abort\', onabort));\n  const {\n    signal\n  } = controller;\n  signal.unsubscribe = unsubscribe;\n  return [signal, () => {\n    timer && clearTimeout(timer);\n    timer = null;\n  }];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (composeSignals);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/composeSignals.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/cookies.js":
      /*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ \"./node_modules/axios/lib/platform/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasStandardBrowserEnv ?\n// Standard browser envs support document.cookie\n{\n  write(name, value, expires, path, domain, secure) {\n    const cookie = [name + '=' + encodeURIComponent(value)];\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(path) && cookie.push('path=' + path);\n    _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(domain) && cookie.push('domain=' + domain);\n    secure === true && cookie.push('secure');\n    document.cookie = cookie.join('; ');\n  },\n  read(name) {\n    const match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n    return match ? decodeURIComponent(match[3]) : null;\n  },\n  remove(name) {\n    this.write(name, '', Date.now() - 86400000);\n  }\n} :\n// Non-standard browser env (web workers, react-native) lack needed support.\n{\n  write() {},\n  read() {\n    return null;\n  },\n  remove() {}\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/cookies.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
      /*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n/**\n * It takes a string like `foo[x][y][z]` and returns an array like `[\'foo\', \'x\', \'y\', \'z\']\n *\n * @param {string} name - The name of the property to get.\n *\n * @returns An array of strings.\n */\nfunction parsePropPath(name) {\n  // foo[x][y][z]\n  // foo.x.y.z\n  // foo-x-y-z\n  // foo x y z\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\\w+|\\[(\\w*)]/g, name).map(match => {\n    return match[0] === \'[]\' ? \'\' : match[1] || match[0];\n  });\n}\n\n/**\n * Convert an array to an object.\n *\n * @param {Array<any>} arr - The array to convert to an object.\n *\n * @returns An object with the same keys and values as the array.\n */\nfunction arrayToObject(arr) {\n  const obj = {};\n  const keys = Object.keys(arr);\n  let i;\n  const len = keys.length;\n  let key;\n  for (i = 0; i < len; i++) {\n    key = keys[i];\n    obj[key] = arr[key];\n  }\n  return obj;\n}\n\n/**\n * It takes a FormData object and returns a JavaScript object\n *\n * @param {string} formData The FormData object to convert to JSON.\n *\n * @returns {Object<string, any> | null} The converted object.\n */\nfunction formDataToJSON(formData) {\n  function buildPath(path, value, target, index) {\n    let name = path[index++];\n    if (name === \'__proto__\') return true;\n    const isNumericKey = Number.isFinite(+name);\n    const isLast = index >= path.length;\n    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;\n    if (isLast) {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {\n        target[name] = [target[name], value];\n      } else {\n        target[name] = value;\n      }\n      return !isNumericKey;\n    }\n    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {\n      target[name] = [];\n    }\n    const result = buildPath(path, value, target[name], index);\n    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {\n      target[name] = arrayToObject(target[name]);\n    }\n    return !isNumericKey;\n  }\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {\n    const obj = {};\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {\n      buildPath(parsePropPath(name), value, obj, 0);\n    });\n    return obj;\n  }\n  return null;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/formDataToJSON.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)\n/* harmony export */ });\n\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n *\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nfunction isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d+\\-.]*:)?\\/\\//i.test(url);\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/isAbsoluteURL.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ isAxiosError)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");\n\n\n\n\n/**\n * Determines whether the payload is an error thrown by Axios\n *\n * @param {*} payload The value to test\n *\n * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false\n */\nfunction isAxiosError(payload) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && payload.isAxiosError === true;\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/isAxiosError.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
      /*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ \"./node_modules/axios/lib/platform/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].hasStandardBrowserEnv ?\n// Standard browser envs have full support of the APIs needed to test\n// whether the request URL is of the same origin as current location.\nfunction standardBrowserEnv() {\n  const msie = /(msie|trident)/i.test(navigator.userAgent);\n  const urlParsingNode = document.createElement('a');\n  let originURL;\n\n  /**\n  * Parse a URL to discover its components\n  *\n  * @param {String} url The URL to be parsed\n  * @returns {Object}\n  */\n  function resolveURL(url) {\n    let href = url;\n    if (msie) {\n      // IE needs attribute set twice to normalize properties\n      urlParsingNode.setAttribute('href', href);\n      href = urlParsingNode.href;\n    }\n    urlParsingNode.setAttribute('href', href);\n\n    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n    return {\n      href: urlParsingNode.href,\n      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n      host: urlParsingNode.host,\n      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n      hostname: urlParsingNode.hostname,\n      port: urlParsingNode.port,\n      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname\n    };\n  }\n  originURL = resolveURL(window.location.href);\n\n  /**\n  * Determine if a URL shares the same origin as the current location\n  *\n  * @param {String} requestURL The URL to test\n  * @returns {boolean} True if URL shares the same origin, otherwise false\n  */\n  return function isURLSameOrigin(requestURL) {\n    const parsed = _utils_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isString(requestURL) ? resolveURL(requestURL) : requestURL;\n    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;\n  };\n}() :\n// Non standard browser envs (web workers, react-native) lack needed support.\nfunction nonStandardBrowserEnv() {\n  return function isURLSameOrigin() {\n    return true;\n  };\n}());\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/isURLSameOrigin.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/null.js":
      /*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line strict\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/null.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
      /*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ \"./node_modules/axios/lib/utils.js\");\n\n\n\n\n// RawAxiosHeaders whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nconst ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toObjectSet(['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']);\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} rawHeaders Headers needing to be parsed\n *\n * @returns {Object} Headers parsed into an object\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {\n  const parsed = {};\n  let key;\n  let val;\n  let i;\n  rawHeaders && rawHeaders.split('\\n').forEach(function parser(line) {\n    i = line.indexOf(':');\n    key = line.substring(0, i).trim().toLowerCase();\n    val = line.substring(i + 1).trim();\n    if (!key || parsed[key] && ignoreDuplicateOf[key]) {\n      return;\n    }\n    if (key === 'set-cookie') {\n      if (parsed[key]) {\n        parsed[key].push(val);\n      } else {\n        parsed[key] = [val];\n      }\n    } else {\n      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n    }\n  });\n  return parsed;\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/parseHeaders.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ parseProtocol)\n/* harmony export */ });\n\n\nfunction parseProtocol(url) {\n  const match = /^([-+\\w]{1,25})(:?\\/\\/|:)/.exec(url);\n  return match && match[1] || '';\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/parseProtocol.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/progressEventReducer.js":
      /*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/progressEventReducer.js ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");\n/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/axios/lib/helpers/throttle.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((listener, isDownloadStream, freq = 3) => {\n  let bytesNotified = 0;\n  const _speedometer = (0,_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);\n  return (0,_throttle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {\n    const loaded = e.loaded;\n    const total = e.lengthComputable ? e.total : undefined;\n    const progressBytes = loaded - bytesNotified;\n    const rate = _speedometer(progressBytes);\n    const inRange = loaded <= total;\n    bytesNotified = loaded;\n    const data = {\n      loaded,\n      total,\n      progress: total ? loaded / total : undefined,\n      bytes: progressBytes,\n      rate: rate ? rate : undefined,\n      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,\n      event: e,\n      lengthComputable: total != null\n    };\n    data[isDownloadStream ? \'download\' : \'upload\'] = true;\n    listener(data);\n  }, freq);\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/progressEventReducer.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/resolveConfig.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/resolveConfig.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");\n/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");\n/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");\n/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");\n/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");\n/* harmony import */ var _buildURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config => {\n  const newConfig = (0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config);\n  let {\n    data,\n    withXSRFToken,\n    xsrfHeaderName,\n    xsrfCookieName,\n    headers,\n    auth\n  } = newConfig;\n  newConfig.headers = headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(headers);\n  newConfig.url = (0,_buildURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);\n\n  // HTTP basic authentication\n  if (auth) {\n    headers.set(\'Authorization\', \'Basic \' + btoa((auth.username || \'\') + \':\' + (auth.password ? unescape(encodeURIComponent(auth.password)) : \'\')));\n  }\n  let contentType;\n  if (_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFormData(data)) {\n    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserWebWorkerEnv) {\n      headers.setContentType(undefined); // Let the browser set it\n    } else if ((contentType = headers.getContentType()) !== false) {\n      // fix semicolon duplication issue for ReactNative FormData implementation\n      const [type, ...tokens] = contentType ? contentType.split(\';\').map(token => token.trim()).filter(Boolean) : [];\n      headers.setContentType([type || \'multipart/form-data\', ...tokens].join(\'; \'));\n    }\n  }\n\n  // Add xsrf header\n  // This is only done if running in a standard browser environment.\n  // Specifically not if we\'re in a web worker, or react-native.\n\n  if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv) {\n    withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));\n    if (withXSRFToken || withXSRFToken !== false && (0,_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__["default"])(newConfig.url)) {\n      // Add xsrf header\n      const xsrfValue = xsrfHeaderName && xsrfCookieName && _cookies_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(xsrfCookieName);\n      if (xsrfValue) {\n        headers.set(xsrfHeaderName, xsrfValue);\n      }\n    }\n  }\n  return newConfig;\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/resolveConfig.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/speedometer.js":
      /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/**\n * Calculate data maxRate\n * @param {Number} [samplesCount= 10]\n * @param {Number} [min= 1000]\n * @returns {Function}\n */\nfunction speedometer(samplesCount, min) {\n  samplesCount = samplesCount || 10;\n  const bytes = new Array(samplesCount);\n  const timestamps = new Array(samplesCount);\n  let head = 0;\n  let tail = 0;\n  let firstSampleTS;\n  min = min !== undefined ? min : 1000;\n  return function push(chunkLength) {\n    const now = Date.now();\n    const startedAt = timestamps[tail];\n    if (!firstSampleTS) {\n      firstSampleTS = now;\n    }\n    bytes[head] = chunkLength;\n    timestamps[head] = now;\n    let i = tail;\n    let bytesCount = 0;\n    while (i !== head) {\n      bytesCount += bytes[i++];\n      i = i % samplesCount;\n    }\n    head = (head + 1) % samplesCount;\n    if (head === tail) {\n      tail = (tail + 1) % samplesCount;\n    }\n    if (now - firstSampleTS < min) {\n      return;\n    }\n    const passed = startedAt && now - startedAt;\n    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/speedometer.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/spread.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ spread)\n/* harmony export */ });\n\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n *\n * @returns {Function}\n */\nfunction spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/spread.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/throttle.js":
      /*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/throttle.js ***!
  \****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/**\n * Throttle decorator\n * @param {Function} fn\n * @param {Number} freq\n * @return {Function}\n */\nfunction throttle(fn, freq) {\n  let timestamp = 0;\n  const threshold = 1000 / freq;\n  let timer = null;\n  return function throttled() {\n    const force = this === true;\n    const now = Date.now();\n    if (force || now - timestamp > threshold) {\n      if (timer) {\n        clearTimeout(timer);\n        timer = null;\n      }\n      timestamp = now;\n      return fn.apply(null, arguments);\n    }\n    if (!timer) {\n      timer = setTimeout(() => {\n        timer = null;\n        timestamp = Date.now();\n        return fn.apply(null, arguments);\n      }, threshold - (now - timestamp));\n    }\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/throttle.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/toFormData.js":
      /*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");\n/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");\n\n\n\n\n// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored\n\n\n/**\n * Determines if the given thing is a array or js object.\n *\n * @param {string} thing - The object or array to be visited.\n *\n * @returns {boolean}\n */\nfunction isVisitable(thing) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);\n}\n\n/**\n * It removes the brackets from the end of a string\n *\n * @param {string} key - The key of the parameter.\n *\n * @returns {string} the key without the brackets.\n */\nfunction removeBrackets(key) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'[]\') ? key.slice(0, -2) : key;\n}\n\n/**\n * It takes a path, a key, and a boolean, and returns a string\n *\n * @param {string} path - The path to the current key.\n * @param {string} key - The key of the current object being iterated over.\n * @param {string} dots - If true, the key will be rendered with dots instead of brackets.\n *\n * @returns {string} The path to the current key.\n */\nfunction renderKey(path, key, dots) {\n  if (!path) return key;\n  return path.concat(key).map(function each(token, i) {\n    // eslint-disable-next-line no-param-reassign\n    token = removeBrackets(token);\n    return !dots && i ? \'[\' + token + \']\' : token;\n  }).join(dots ? \'.\' : \'\');\n}\n\n/**\n * If the array is an array and none of its elements are visitable, then it\'s a flat array.\n *\n * @param {Array<any>} arr - The array to check\n *\n * @returns {boolean}\n */\nfunction isFlatArray(arr) {\n  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);\n}\nconst predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {\n  return /^is[A-Z]/.test(prop);\n});\n\n/**\n * Convert a data object to FormData\n *\n * @param {Object} obj\n * @param {?Object} [formData]\n * @param {?Object} [options]\n * @param {Function} [options.visitor]\n * @param {Boolean} [options.metaTokens = true]\n * @param {Boolean} [options.dots = false]\n * @param {?Boolean} [options.indexes = false]\n *\n * @returns {Object}\n **/\n\n/**\n * It converts an object into a FormData object\n *\n * @param {Object<any, any>} obj - The object to convert to form data.\n * @param {string} formData - The FormData object to append to.\n * @param {Object<string, any>} options\n *\n * @returns\n */\nfunction toFormData(obj, formData, options) {\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {\n    throw new TypeError(\'target must be an object\');\n  }\n\n  // eslint-disable-next-line no-param-reassign\n  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();\n\n  // eslint-disable-next-line no-param-reassign\n  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {\n    metaTokens: true,\n    dots: false,\n    indexes: false\n  }, false, function defined(option, source) {\n    // eslint-disable-next-line no-eq-null,eqeqeq\n    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);\n  });\n  const metaTokens = options.metaTokens;\n  // eslint-disable-next-line no-use-before-define\n  const visitor = options.visitor || defaultVisitor;\n  const dots = options.dots;\n  const indexes = options.indexes;\n  const _Blob = options.Blob || typeof Blob !== \'undefined\' && Blob;\n  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {\n    throw new TypeError(\'visitor must be a function\');\n  }\n  function convertValue(value) {\n    if (value === null) return \'\';\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {\n      return value.toISOString();\n    }\n    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](\'Blob is not supported. Use a Buffer instead.\');\n    }\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {\n      return useBlob && typeof Blob === \'function\' ? new Blob([value]) : Buffer.from(value);\n    }\n    return value;\n  }\n\n  /**\n   * Default visitor.\n   *\n   * @param {*} value\n   * @param {String|Number} key\n   * @param {Array<String|Number>} path\n   * @this {FormData}\n   *\n   * @returns {boolean} return true to visit the each prop of the value recursively\n   */\n  function defaultVisitor(value, key, path) {\n    let arr = value;\n    if (value && !path && typeof value === \'object\') {\n      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'{}\')) {\n        // eslint-disable-next-line no-param-reassign\n        key = metaTokens ? key : key.slice(0, -2);\n        // eslint-disable-next-line no-param-reassign\n        value = JSON.stringify(value);\n      } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value) || (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, \'[]\')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))) {\n        // eslint-disable-next-line no-param-reassign\n        key = removeBrackets(key);\n        arr.forEach(function each(el, index) {\n          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(\n          // eslint-disable-next-line no-nested-ternary\n          indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + \'[]\', convertValue(el));\n        });\n        return false;\n      }\n    }\n    if (isVisitable(value)) {\n      return true;\n    }\n    formData.append(renderKey(path, key, dots), convertValue(value));\n    return false;\n  }\n  const stack = [];\n  const exposedHelpers = Object.assign(predicates, {\n    defaultVisitor,\n    convertValue,\n    isVisitable\n  });\n  function build(value, path) {\n    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;\n    if (stack.indexOf(value) !== -1) {\n      throw Error(\'Circular reference detected in \' + path.join(\'.\'));\n    }\n    stack.push(value);\n    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {\n      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers);\n      if (result === true) {\n        build(el, path ? path.concat(key) : [key]);\n      }\n    });\n    stack.pop();\n  }\n  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {\n    throw new TypeError(\'data must be an object\');\n  }\n  build(obj);\n  return formData;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/toFormData.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
      /*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");\n/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");\n/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");\n\n\n\n\n\nfunction toURLEncodedForm(data, options) {\n  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({\n    visitor: function (value, key, path, helpers) {\n      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {\n        this.append(key, value.toString(\'base64\'));\n        return false;\n      }\n      return helpers.defaultVisitor.apply(this, arguments);\n    }\n  }, options));\n}\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/toURLEncodedForm.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/trackStream.js":
      /*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/trackStream.js ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   readBytes: () => (/* binding */ readBytes),\n/* harmony export */   streamChunk: () => (/* binding */ streamChunk),\n/* harmony export */   trackStream: () => (/* binding */ trackStream)\n/* harmony export */ });\nconst streamChunk = function* (chunk, chunkSize) {\n  let len = chunk.byteLength;\n  if (!chunkSize || len < chunkSize) {\n    yield chunk;\n    return;\n  }\n  let pos = 0;\n  let end;\n  while (pos < len) {\n    end = pos + chunkSize;\n    yield chunk.slice(pos, end);\n    pos = end;\n  }\n};\nconst readBytes = async function* (iterable, chunkSize, encode) {\n  for await (const chunk of iterable) {\n    yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode(String(chunk)), chunkSize);\n  }\n};\nconst trackStream = (stream, chunkSize, onProgress, onFinish, encode) => {\n  const iterator = readBytes(stream, chunkSize, encode);\n  let bytes = 0;\n  return new ReadableStream({\n    type: 'bytes',\n    async pull(controller) {\n      const {\n        done,\n        value\n      } = await iterator.next();\n      if (done) {\n        controller.close();\n        onFinish();\n        return;\n      }\n      let len = value.byteLength;\n      onProgress && onProgress(bytes += len);\n      controller.enqueue(new Uint8Array(value));\n    },\n    cancel(reason) {\n      onFinish(reason);\n      return iterator.return();\n    }\n  }, {\n    highWaterMark: 2\n  });\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/trackStream.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/helpers/validator.js":
      /*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ \"./node_modules/axios/lib/env/data.js\");\n/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ \"./node_modules/axios/lib/core/AxiosError.js\");\n\n\n\n\nconst validators = {};\n\n// eslint-disable-next-line func-names\n['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {\n  validators[type] = function validator(thing) {\n    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;\n  };\n});\nconst deprecatedWarnings = {};\n\n/**\n * Transitional option validator\n *\n * @param {function|boolean?} validator - set to false if the transitional option has been removed\n * @param {string?} version - deprecated version / removed since version\n * @param {string?} message - some message with additional info\n *\n * @returns {function}\n */\nvalidators.transitional = function transitional(validator, version, message) {\n  function formatMessage(opt, desc) {\n    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \\'' + opt + '\\'' + desc + (message ? '. ' + message : '');\n  }\n\n  // eslint-disable-next-line func-names\n  return (value, opt, opts) => {\n    if (validator === false) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')), _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_DEPRECATED);\n    }\n    if (version && !deprecatedWarnings[opt]) {\n      deprecatedWarnings[opt] = true;\n      // eslint-disable-next-line no-console\n      console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));\n    }\n    return validator ? validator(value, opt, opts) : true;\n  };\n};\n\n/**\n * Assert object's properties type\n *\n * @param {object} options\n * @param {object} schema\n * @param {boolean?} allowUnknown\n *\n * @returns {object}\n */\n\nfunction assertOptions(options, schema, allowUnknown) {\n  if (typeof options !== 'object') {\n    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION_VALUE);\n  }\n  const keys = Object.keys(options);\n  let i = keys.length;\n  while (i-- > 0) {\n    const opt = keys[i];\n    const validator = schema[opt];\n    if (validator) {\n      const value = options[opt];\n      const result = value === undefined || validator(value, opt, options);\n      if (result !== true) {\n        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION_VALUE);\n      }\n      continue;\n    }\n    if (allowUnknown !== true) {\n      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ERR_BAD_OPTION);\n    }\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  assertOptions,\n  validators\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/helpers/validator.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/browser/classes/Blob.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/browser/classes/FormData.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== \'undefined\' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/browser/index.js":
      /*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");\n/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");\n/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  isBrowser: true,\n  classes: {\n    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],\n    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],\n    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]\n  },\n  protocols: [\'http\', \'https\', \'file\', \'blob\', \'url\', \'data\']\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/browser/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/common/utils.js":
      /*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),\n/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),\n/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv),\n/* harmony export */   origin: () => (/* binding */ origin)\n/* harmony export */ });\nconst hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n *\n * @returns {boolean}\n */\nconst hasStandardBrowserEnv = (product => {\n  return hasBrowserEnv && ['ReactNative', 'NativeScript', 'NS'].indexOf(product) < 0;\n})(typeof navigator !== 'undefined' && navigator.product);\n\n/**\n * Determine if we're running in a standard browser webWorker environment\n *\n * Although the `isStandardBrowserEnv` method indicates that\n * `allows axios to run in a web worker`, the WebWorker will still be\n * filtered out due to its judgment standard\n * `typeof window !== 'undefined' && typeof document !== 'undefined'`.\n * This leads to a problem when axios post `FormData` in webWorker\n */\nconst hasStandardBrowserWebWorkerEnv = (() => {\n  return typeof WorkerGlobalScope !== 'undefined' &&\n  // eslint-disable-next-line no-undef\n  self instanceof WorkerGlobalScope && typeof self.importScripts === 'function';\n})();\nconst origin = hasBrowserEnv && window.location.href || 'http://localhost';\n\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/common/utils.js?"
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/platform/index.js":
      /*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");\n/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,\n  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/platform/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/axios/lib/utils.js":
      /*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ \"./node_modules/axios/lib/helpers/bind.js\");\n\n\n\n\n// utils is a library of generic helper functions non-specific to axios\n\nconst {\n  toString\n} = Object.prototype;\nconst {\n  getPrototypeOf\n} = Object;\nconst kindOf = (cache => thing => {\n  const str = toString.call(thing);\n  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());\n})(Object.create(null));\nconst kindOfTest = type => {\n  type = type.toLowerCase();\n  return thing => kindOf(thing) === type;\n};\nconst typeOfTest = type => thing => typeof thing === type;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n *\n * @returns {boolean} True if value is an Array, otherwise false\n */\nconst {\n  isArray\n} = Array;\n\n/**\n * Determine if a value is undefined\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nconst isUndefined = typeOfTest('undefined');\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nconst isArrayBuffer = kindOfTest('ArrayBuffer');\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  let result;\n  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = val && val.buffer && isArrayBuffer(val.buffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a String, otherwise false\n */\nconst isString = typeOfTest('string');\n\n/**\n * Determine if a value is a Function\n *\n * @param {*} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nconst isFunction = typeOfTest('function');\n\n/**\n * Determine if a value is a Number\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Number, otherwise false\n */\nconst isNumber = typeOfTest('number');\n\n/**\n * Determine if a value is an Object\n *\n * @param {*} thing The value to test\n *\n * @returns {boolean} True if value is an Object, otherwise false\n */\nconst isObject = thing => thing !== null && typeof thing === 'object';\n\n/**\n * Determine if a value is a Boolean\n *\n * @param {*} thing The value to test\n * @returns {boolean} True if value is a Boolean, otherwise false\n */\nconst isBoolean = thing => thing === true || thing === false;\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a plain Object, otherwise false\n */\nconst isPlainObject = val => {\n  if (kindOf(val) !== 'object') {\n    return false;\n  }\n  const prototype = getPrototypeOf(val);\n  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);\n};\n\n/**\n * Determine if a value is a Date\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Date, otherwise false\n */\nconst isDate = kindOfTest('Date');\n\n/**\n * Determine if a value is a File\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a File, otherwise false\n */\nconst isFile = kindOfTest('File');\n\n/**\n * Determine if a value is a Blob\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nconst isBlob = kindOfTest('Blob');\n\n/**\n * Determine if a value is a FileList\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a File, otherwise false\n */\nconst isFileList = kindOfTest('FileList');\n\n/**\n * Determine if a value is a Stream\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nconst isStream = val => isObject(val) && isFunction(val.pipe);\n\n/**\n * Determine if a value is a FormData\n *\n * @param {*} thing The value to test\n *\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nconst isFormData = thing => {\n  let kind;\n  return thing && (typeof FormData === 'function' && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === 'formdata' ||\n  // detect form-data instance\n  kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]'));\n};\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nconst isURLSearchParams = kindOfTest('URLSearchParams');\nconst [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n *\n * @returns {String} The String freed of excess whitespace\n */\nconst trim = str => str.trim ? str.trim() : str.replace(/^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g, '');\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n *\n * @param {Boolean} [allOwnKeys = false]\n * @returns {any}\n */\nfunction forEach(obj, fn, {\n  allOwnKeys = false\n} = {}) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n  let i;\n  let l;\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);\n    const len = keys.length;\n    let key;\n    for (i = 0; i < len; i++) {\n      key = keys[i];\n      fn.call(null, obj[key], key, obj);\n    }\n  }\n}\nfunction findKey(obj, key) {\n  key = key.toLowerCase();\n  const keys = Object.keys(obj);\n  let i = keys.length;\n  let _key;\n  while (i-- > 0) {\n    _key = keys[i];\n    if (key === _key.toLowerCase()) {\n      return _key;\n    }\n  }\n  return null;\n}\nconst _global = (() => {\n  /*eslint no-undef:0*/\n  if (typeof globalThis !== \"undefined\") return globalThis;\n  return typeof self !== \"undefined\" ? self : typeof window !== 'undefined' ? window : global;\n})();\nconst isContextDefined = context => !isUndefined(context) && context !== _global;\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n *\n * @returns {Object} Result of all merge properties\n */\nfunction merge( /* obj1, obj2, obj3, ... */\n) {\n  const {\n    caseless\n  } = isContextDefined(this) && this || {};\n  const result = {};\n  const assignValue = (val, key) => {\n    const targetKey = caseless && findKey(result, key) || key;\n    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {\n      result[targetKey] = merge(result[targetKey], val);\n    } else if (isPlainObject(val)) {\n      result[targetKey] = merge({}, val);\n    } else if (isArray(val)) {\n      result[targetKey] = val.slice();\n    } else {\n      result[targetKey] = val;\n    }\n  };\n  for (let i = 0, l = arguments.length; i < l; i++) {\n    arguments[i] && forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n *\n * @param {Boolean} [allOwnKeys]\n * @returns {Object} The resulting value of object a\n */\nconst extend = (a, b, thisArg, {\n  allOwnKeys\n} = {}) => {\n  forEach(b, (val, key) => {\n    if (thisArg && isFunction(val)) {\n      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  }, {\n    allOwnKeys\n  });\n  return a;\n};\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n *\n * @returns {string} content value without BOM\n */\nconst stripBOM = content => {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n};\n\n/**\n * Inherit the prototype methods from one constructor into another\n * @param {function} constructor\n * @param {function} superConstructor\n * @param {object} [props]\n * @param {object} [descriptors]\n *\n * @returns {void}\n */\nconst inherits = (constructor, superConstructor, props, descriptors) => {\n  constructor.prototype = Object.create(superConstructor.prototype, descriptors);\n  constructor.prototype.constructor = constructor;\n  Object.defineProperty(constructor, 'super', {\n    value: superConstructor.prototype\n  });\n  props && Object.assign(constructor.prototype, props);\n};\n\n/**\n * Resolve object with deep prototype chain to a flat object\n * @param {Object} sourceObj source object\n * @param {Object} [destObj]\n * @param {Function|Boolean} [filter]\n * @param {Function} [propFilter]\n *\n * @returns {Object}\n */\nconst toFlatObject = (sourceObj, destObj, filter, propFilter) => {\n  let props;\n  let i;\n  let prop;\n  const merged = {};\n  destObj = destObj || {};\n  // eslint-disable-next-line no-eq-null,eqeqeq\n  if (sourceObj == null) return destObj;\n  do {\n    props = Object.getOwnPropertyNames(sourceObj);\n    i = props.length;\n    while (i-- > 0) {\n      prop = props[i];\n      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {\n        destObj[prop] = sourceObj[prop];\n        merged[prop] = true;\n      }\n    }\n    sourceObj = filter !== false && getPrototypeOf(sourceObj);\n  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);\n  return destObj;\n};\n\n/**\n * Determines whether a string ends with the characters of a specified string\n *\n * @param {String} str\n * @param {String} searchString\n * @param {Number} [position= 0]\n *\n * @returns {boolean}\n */\nconst endsWith = (str, searchString, position) => {\n  str = String(str);\n  if (position === undefined || position > str.length) {\n    position = str.length;\n  }\n  position -= searchString.length;\n  const lastIndex = str.indexOf(searchString, position);\n  return lastIndex !== -1 && lastIndex === position;\n};\n\n/**\n * Returns new array from array like object or null if failed\n *\n * @param {*} [thing]\n *\n * @returns {?Array}\n */\nconst toArray = thing => {\n  if (!thing) return null;\n  if (isArray(thing)) return thing;\n  let i = thing.length;\n  if (!isNumber(i)) return null;\n  const arr = new Array(i);\n  while (i-- > 0) {\n    arr[i] = thing[i];\n  }\n  return arr;\n};\n\n/**\n * Checking if the Uint8Array exists and if it does, it returns a function that checks if the\n * thing passed in is an instance of Uint8Array\n *\n * @param {TypedArray}\n *\n * @returns {Array}\n */\n// eslint-disable-next-line func-names\nconst isTypedArray = (TypedArray => {\n  // eslint-disable-next-line func-names\n  return thing => {\n    return TypedArray && thing instanceof TypedArray;\n  };\n})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));\n\n/**\n * For each entry in the object, call the function with the key and value.\n *\n * @param {Object<any, any>} obj - The object to iterate over.\n * @param {Function} fn - The function to call for each entry.\n *\n * @returns {void}\n */\nconst forEachEntry = (obj, fn) => {\n  const generator = obj && obj[Symbol.iterator];\n  const iterator = generator.call(obj);\n  let result;\n  while ((result = iterator.next()) && !result.done) {\n    const pair = result.value;\n    fn.call(obj, pair[0], pair[1]);\n  }\n};\n\n/**\n * It takes a regular expression and a string, and returns an array of all the matches\n *\n * @param {string} regExp - The regular expression to match against.\n * @param {string} str - The string to search.\n *\n * @returns {Array<boolean>}\n */\nconst matchAll = (regExp, str) => {\n  let matches;\n  const arr = [];\n  while ((matches = regExp.exec(str)) !== null) {\n    arr.push(matches);\n  }\n  return arr;\n};\n\n/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */\nconst isHTMLForm = kindOfTest('HTMLFormElement');\nconst toCamelCase = str => {\n  return str.toLowerCase().replace(/[-_\\s]([a-z\\d])(\\w*)/g, function replacer(m, p1, p2) {\n    return p1.toUpperCase() + p2;\n  });\n};\n\n/* Creating a function that will check if an object has a property. */\nconst hasOwnProperty = (({\n  hasOwnProperty\n}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);\n\n/**\n * Determine if a value is a RegExp object\n *\n * @param {*} val The value to test\n *\n * @returns {boolean} True if value is a RegExp object, otherwise false\n */\nconst isRegExp = kindOfTest('RegExp');\nconst reduceDescriptors = (obj, reducer) => {\n  const descriptors = Object.getOwnPropertyDescriptors(obj);\n  const reducedDescriptors = {};\n  forEach(descriptors, (descriptor, name) => {\n    let ret;\n    if ((ret = reducer(descriptor, name, obj)) !== false) {\n      reducedDescriptors[name] = ret || descriptor;\n    }\n  });\n  Object.defineProperties(obj, reducedDescriptors);\n};\n\n/**\n * Makes all methods read-only\n * @param {Object} obj\n */\n\nconst freezeMethods = obj => {\n  reduceDescriptors(obj, (descriptor, name) => {\n    // skip restricted props in strict mode\n    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {\n      return false;\n    }\n    const value = obj[name];\n    if (!isFunction(value)) return;\n    descriptor.enumerable = false;\n    if ('writable' in descriptor) {\n      descriptor.writable = false;\n      return;\n    }\n    if (!descriptor.set) {\n      descriptor.set = () => {\n        throw Error('Can not rewrite read-only method \\'' + name + '\\'');\n      };\n    }\n  });\n};\nconst toObjectSet = (arrayOrString, delimiter) => {\n  const obj = {};\n  const define = arr => {\n    arr.forEach(value => {\n      obj[value] = true;\n    });\n  };\n  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));\n  return obj;\n};\nconst noop = () => {};\nconst toFiniteNumber = (value, defaultValue) => {\n  return value != null && Number.isFinite(value = +value) ? value : defaultValue;\n};\nconst ALPHA = 'abcdefghijklmnopqrstuvwxyz';\nconst DIGIT = '0123456789';\nconst ALPHABET = {\n  DIGIT,\n  ALPHA,\n  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT\n};\nconst generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {\n  let str = '';\n  const {\n    length\n  } = alphabet;\n  while (size--) {\n    str += alphabet[Math.random() * length | 0];\n  }\n  return str;\n};\n\n/**\n * If the thing is a FormData object, return true, otherwise return false.\n *\n * @param {unknown} thing - The thing to check.\n *\n * @returns {boolean}\n */\nfunction isSpecCompliantForm(thing) {\n  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);\n}\nconst toJSONObject = obj => {\n  const stack = new Array(10);\n  const visit = (source, i) => {\n    if (isObject(source)) {\n      if (stack.indexOf(source) >= 0) {\n        return;\n      }\n      if (!('toJSON' in source)) {\n        stack[i] = source;\n        const target = isArray(source) ? [] : {};\n        forEach(source, (value, key) => {\n          const reducedValue = visit(value, i + 1);\n          !isUndefined(reducedValue) && (target[key] = reducedValue);\n        });\n        stack[i] = undefined;\n        return target;\n      }\n    }\n    return source;\n  };\n  return visit(obj, 0);\n};\nconst isAsyncFn = kindOfTest('AsyncFunction');\nconst isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  isArray,\n  isArrayBuffer,\n  isBuffer,\n  isFormData,\n  isArrayBufferView,\n  isString,\n  isNumber,\n  isBoolean,\n  isObject,\n  isPlainObject,\n  isReadableStream,\n  isRequest,\n  isResponse,\n  isHeaders,\n  isUndefined,\n  isDate,\n  isFile,\n  isBlob,\n  isRegExp,\n  isFunction,\n  isStream,\n  isURLSearchParams,\n  isTypedArray,\n  isFileList,\n  forEach,\n  merge,\n  extend,\n  trim,\n  stripBOM,\n  inherits,\n  toFlatObject,\n  kindOf,\n  kindOfTest,\n  endsWith,\n  toArray,\n  forEachEntry,\n  matchAll,\n  isHTMLForm,\n  hasOwnProperty,\n  hasOwnProp: hasOwnProperty,\n  // an alias to avoid ESLint no-prototype-builtins detection\n  reduceDescriptors,\n  freezeMethods,\n  toObjectSet,\n  toCamelCase,\n  noop,\n  toFiniteNumber,\n  findKey,\n  global: _global,\n  isContextDefined,\n  ALPHABET,\n  generateString,\n  isSpecCompliantForm,\n  toJSONObject,\n  isAsyncFn,\n  isThenable\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/axios/lib/utils.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/js/index.js");
  /******/
  /******/
})();
