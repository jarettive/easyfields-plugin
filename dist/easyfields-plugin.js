/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/Form.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/Form.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".openedge-form {\\n  background: white;\\n  padding: 1em 1.5em .6em;\\n  font-weight: bold;\\n  font-size: .8em;\\n  border-radius: .5em;\\n  border: 2px solid #6cb9e7;\\n  color: #6d6d6d;\\n  -webkit-box-shadow: 0px 5px 17px black;\\n          box-shadow: 0px 5px 17px black;\\n}\\n\\n.openedge-field {\\n  margin: 1.4rem 0;\\n  font-family: sans-serif;\\n}\\n\\n.openedge-field label {\\n  text-transform: uppercase;\\n}\\n\\n.openedge-field > * {\\n  display: block;\\n}\\n\\n.openedge-field label {\\n  margin: .2em 0;\\n}\\n\\n.openedge-field iframe {\\n  border-width: 0px;\\n  height: 2em;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/UI/Form.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/field.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/field.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"button {\\n  color: white;\\n  border-radius: 4px;\\n  border: 0px;\\n  font-size: 18px;\\n  height: 50px;\\n  width: 155px;\\n  outline: none;\\n  cursor: pointer;\\n  background: #9bc768;\\n}\\n\\nbutton:active {\\n  background: #acd182;\\n}\\n\\ninput {\\n  padding: 7px 18px;\\n  font-size: 18px;\\n  letter-spacing: 5px;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/UI/field.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/UI/EventEmitter.js":
/*!********************************!*\
  !*** ./src/UI/EventEmitter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EventEmitter = function EventEmitter() {\n  var _this = this;\n\n  _classCallCheck(this, EventEmitter);\n\n  this.emit = function (event) {\n    var listeners = _this.events[event];\n\n    if (Array.isArray(listeners)) {\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      for (var i = 0; i < listeners.length; i++) {\n        listeners[i].apply(_this, args);\n      }\n    }\n  };\n\n  this.on = function (event, listener) {\n    if (_typeof(_this.events[event]) !== 'object') {\n      _this.events[event] = [];\n    }\n\n    _this.events[event].push(listener);\n  };\n\n  this.off = function (event, listener) {\n    if (listener == undefined) {\n      delete _this.events[event];\n    } else {\n      var listeners = _this.events[event];\n\n      if (_typeof(listeners) === 'object') {\n        var idx = listeners.indexOf(listener);\n\n        if (idx >= 0) {\n          listeners.splice(idx, 1);\n        }\n      }\n    }\n  };\n\n  this.events = {};\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventEmitter);\n\n//# sourceURL=webpack:///./src/UI/EventEmitter.js?");

/***/ }),

/***/ "./src/UI/Form.css":
/*!*************************!*\
  !*** ./src/UI/Form.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Form.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/Form.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/UI/Form.css?");

/***/ }),

/***/ "./src/UI/Form.js":
/*!************************!*\
  !*** ./src/UI/Form.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.css */ \"./src/UI/Form.css\");\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Form_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IFrameField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IFrameField */ \"./src/UI/IFrameField.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventEmitter */ \"./src/UI/EventEmitter.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Form =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(Form, _EventEmitter);\n\n  function Form(fields, formOptions) {\n    var _this;\n\n    _classCallCheck(this, Form);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this));\n    _this.iFrameFields = [];\n\n    _this.handleWindowMsg = function (msg) {\n      var fieldEventType = msg.data.type && msg.data.type.replace(_IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventID, '') || '';\n\n      switch (fieldEventType) {\n        case 'register':\n          _this.onFieldRegister(msg.data.name);\n\n          break;\n\n        case 'submitClick':\n          _this.requestDataFromFields();\n\n          break;\n\n        default:\n          break;\n      }\n    };\n\n    _this.onFieldRegister = function (fieldName) {\n      _this.unregisteredFields = _this.unregisteredFields.filter(function (item) {\n        return item !== fieldName;\n      });\n\n      if (_this.unregisteredFields === undefined || _this.unregisteredFields.length === 0) {\n        _this.emit('ready');\n      }\n    };\n\n    formOptions = formOptions || {};\n    _this.fields = fields;\n\n    if (formOptions.defaultStyle !== false) {\n      _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addStyleSheet(_Form_css__WEBPACK_IMPORTED_MODULE_0___default.a);\n    }\n\n    _this.unregisteredFields = Object.keys(_this.fields);\n    window.addEventListener('message', _this.handleWindowMsg, false);\n    return _this;\n  }\n\n  _createClass(Form, [{\n    key: \"render\",\n    value: function render(target) {\n      var el = this.createMainElement();\n\n      if (target instanceof HTMLElement) {\n        target.appendChild(el);\n      }\n    }\n  }, {\n    key: \"createMainElement\",\n    value: function createMainElement() {\n      var _this2 = this;\n\n      var el = document.createElement('div');\n      el.classList.add('openedge-form');\n      var fields = this.fields;\n      Object.keys(fields).map(function (name) {\n        var fieldData = fields[name];\n        var iframeField = new _IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, fieldData);\n        iframeField.render(fieldData.target || el);\n\n        _this2.iFrameFields.push(iframeField);\n      });\n      return el;\n    }\n  }, {\n    key: \"requestDataFromFields\",\n    value: function requestDataFromFields() {\n      var fieldTypes = Object.keys(this.fields);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.iFrameFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var field = _step.value;\n          field.requestFieldData({\n            fieldTypes: fieldTypes\n          });\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }]);\n\n  return Form;\n}(_EventEmitter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/UI/Form.js?");

/***/ }),

/***/ "./src/UI/IFrameField.js":
/*!*******************************!*\
  !*** ./src/UI/IFrameField.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.css */ \"./src/UI/field.css\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_field_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar IFrameField =\n/*#__PURE__*/\nfunction () {\n  // static fieldURL = 'http://htmlpreview.github.io/?https://raw.githubusercontent.com/jarettive/easyfields-plugin/master/dist/field.html';\n  function IFrameField(name, _data) {\n    var _this = this;\n\n    _classCallCheck(this, IFrameField);\n\n    this.handleEventFromChild = function (event) {\n      var data = event.data;\n      var self = _this;\n\n      if (!data.id || data.id !== self.id) {\n        return;\n      }\n\n      var fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');\n\n      if (fieldEventType === 'register') {\n        self.onRegister();\n      }\n\n      if (fieldEventType === 'resize') {\n        self.iframe.style.height = data.height + 'px';\n      }\n    };\n\n    this.data = _data;\n    this.name = name;\n    this.id = btoa(_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].guidGenerator());\n    window.addEventListener('message', this.handleEventFromChild, false);\n  }\n\n  _createClass(IFrameField, [{\n    key: \"render\",\n    value: function render(target) {\n      if (typeof target === 'string') {\n        target = document.querySelector(target);\n      }\n\n      var el = this.createMainElement();\n\n      if (target instanceof HTMLElement) {\n        while (target.firstChild) {\n          target.removeChild(target.firstChild);\n        }\n\n        target.appendChild(el);\n      }\n    }\n  }, {\n    key: \"createMainElement\",\n    value: function createMainElement() {\n      var el = document.createElement('div');\n      var name = this.name.replace(/\\s/g, '');\n      el.id = 'openedge-' + name;\n      el.classList.add('openedge-field');\n      var label = this.createLabelElement();\n\n      if (label) {\n        el.appendChild(label);\n      }\n\n      this.iframe = this.createIFrameElement(name);\n      el.appendChild(this.iframe);\n      return el;\n    }\n  }, {\n    key: \"createLabelElement\",\n    value: function createLabelElement() {\n      var label = null;\n\n      if (this.data.label) {\n        label = document.createElement('label');\n        label.innerText = this.data.label;\n      }\n\n      return label;\n    }\n  }, {\n    key: \"createIFrameElement\",\n    value: function createIFrameElement(name) {\n      var iframe = document.createElement('iframe');\n      var src = IFrameField.fieldURL + '#' + btoa(JSON.stringify({\n        originURL: window.location.href,\n        id: this.id,\n        name: name\n      }));\n      iframe.name = name;\n      iframe.src = src;\n      iframe.scrolling = 'no';\n      iframe.setAttribute('allowtransparency', 'true');\n      return iframe;\n    }\n  }, {\n    key: \"postToChild\",\n    value: function postToChild(data, eventType) {\n      var type = IFrameField.eventID + eventType;\n      data.type = type;\n      this.iframe.contentWindow.postMessage(data, IFrameField.fieldURL);\n    }\n  }, {\n    key: \"requestFieldData\",\n    value: function requestFieldData(queryData) {\n      this.postToChild(queryData, 'requestData');\n    }\n  }, {\n    key: \"onRegister\",\n    value: function onRegister() {\n      this.postToChild(Object.assign({}, this.data), 'initializePaymentField'); // this.emit('register');\n    }\n  }], [{\n    key: \"register\",\n    value: function register(name) {\n      var query = window.location.hash.replace('#', '');\n      var iframeData = JSON.parse(atob(query));\n      iframeData.name = name;\n      IFrameField.data = iframeData; //Create and render the input field\n\n      IFrameField.createField(iframeData);\n      window.addEventListener('message', this.handleEventFromParent, false);\n      IFrameField.postToParent({\n        name: name,\n        id: iframeData.id\n      }, 'register');\n    }\n  }, {\n    key: \"initializePaymentField\",\n    value: function initializePaymentField(fieldAttrs) {\n      var field = document.getElementById(IFrameField.paymentFieldID);\n      IFrameField.setPlaceholder(field, fieldAttrs.placeholder);\n      field.setAttribute('value', _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].encodeEntities(fieldAttrs.value) || '');\n\n      if (IFrameField.data.name === 'submit') {\n        field.textContent = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].encodeEntities(fieldAttrs.value);\n      }\n\n      fieldAttrs.style && _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addStyleSheet(fieldAttrs.style);\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addStyleSheet(!fieldAttrs.defaultStyle && _field_css__WEBPACK_IMPORTED_MODULE_1___default.a);\n      IFrameField.triggerResize();\n    }\n  }, {\n    key: \"setPlaceholder\",\n    value: function setPlaceholder(field, placeholder) {\n      placeholder = placeholder || '';\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = placeholder[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var ch = _step.value;\n\n          if (ch !== '·' && ch !== '•' && ch !== '*' && ch !== ' ') {\n            placeholder = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].encodeEntities(placeholder);\n            break;\n          }\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n\n      field.setAttribute('placeholder', placeholder);\n    } //Tell the parent window the height of this window's content so it can resize the iframe appropriately\n\n  }, {\n    key: \"triggerResize\",\n    value: function triggerResize() {\n      IFrameField.postToParent({\n        name: name,\n        id: IFrameField.data.id,\n        height: document.body.scrollHeight + 1\n      }, 'resize');\n    }\n  }, {\n    key: \"createField\",\n    value: function createField(iframeData) {\n      var isSubmit = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].strEquals(iframeData.name, 'submit');\n      this.input = isSubmit ? IFrameField.createButton(iframeData) : document.createElement('input');\n      this.input.id = this.paymentFieldID;\n      this.input.name = iframeData.name;\n      var body = document.getElementsByTagName('body')[0];\n      body.appendChild(this.input);\n    }\n  }, {\n    key: \"createButton\",\n    value: function createButton(iframeData) {\n      var button = document.createElement('button');\n      button.addEventListener('click', function () {\n        IFrameField.postToParent({\n          name: iframeData.name,\n          id: IFrameField.data.id\n        }, 'submitClick');\n      });\n      return button;\n    }\n  }, {\n    key: \"handleEventFromParent\",\n    value: function handleEventFromParent(event) {\n      var fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');\n      var eventFunc = IFrameField[fieldEventType];\n\n      if (typeof eventFunc == 'function') {\n        eventFunc(event.data);\n      }\n    }\n  }, {\n    key: \"requestData\",\n    value: function requestData(queryData) {\n      var field = document.getElementById(IFrameField.paymentFieldID);\n      var value = field && field.value ? field.value : '';\n\n      if (IFrameField.isAccumulator(window)) {\n        window.fieldTypes = queryData.fieldTypes;\n        window.receivedFields = window.receivedFields || {};\n        window.receivedFields['card-number'] = value;\n      } else {\n        IFrameField.passToAccumulatorWindow(value);\n      }\n    }\n  }, {\n    key: \"isAccumulator\",\n    value: function isAccumulator(window) {\n      return window.name === 'card-number';\n    } // One of the windows -- in this case the 'card-number' window -- is the accumulator. This method finds that accumulator window and passes\n    // the value from this window's input field to it.\n\n  }, {\n    key: \"passToAccumulatorWindow\",\n    value: function passToAccumulatorWindow(value) {\n      for (var i = 0; i < window.parent.frames.length; i++) {\n        var siblingWindow = window.parent.frames[i];\n\n        if (IFrameField.isAccumulator(siblingWindow)) {\n          siblingWindow.postMessage({\n            name: window.name,\n            value: value,\n            type: IFrameField.eventID + 'accumulateData'\n          }, IFrameField.fieldURL);\n        }\n      }\n    } //Receive field data from another window into the card-number/account-number window. Once all other field data\n    //is accumulated it will be tokenized and the token will be returned to the parent window \n\n  }, {\n    key: \"accumulateData\",\n    value: function accumulateData(data) {\n      window.receivedFields = window.receivedFields || {};\n      window.receivedFields[data.name] = data.value;\n      window.fieldTypes = window.fieldTypes || {};\n      var receivedTypes = Object.keys(window.receivedFields);\n\n      if (JSON.stringify(receivedTypes.sort()) === JSON.stringify(window.fieldTypes.sort())) {\n        console.dir(window.receivedFields); // TODO: Implement tokenization here \n        // TODO: Trigger a 'token-success' event for the Form to catch \n\n        window.receivedFields = {};\n      }\n    }\n  }, {\n    key: \"postToParent\",\n    value: function postToParent(data, eventType) {\n      var type = IFrameField.eventID + eventType;\n      data.type = type;\n      window.parent.postMessage(data, IFrameField.data.originURL);\n    }\n  }]);\n\n  return IFrameField;\n}();\n\nIFrameField.eventID = 'openedge:field:';\nIFrameField.paymentFieldID = 'openedge-payment-field';\nIFrameField.fieldURL = 'http://127.0.0.1:5501/field.html';\n/* harmony default export */ __webpack_exports__[\"default\"] = (IFrameField);\n\n//# sourceURL=webpack:///./src/UI/IFrameField.js?");

/***/ }),

/***/ "./src/UI/UI.js":
/*!**********************!*\
  !*** ./src/UI/UI.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _IFrameField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IFrameField */ \"./src/UI/IFrameField.js\");\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ \"./src/UI/Form.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Form: _Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  IFrameField: _IFrameField__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/UI/UI.js?");

/***/ }),

/***/ "./src/UI/field.css":
/*!**************************!*\
  !*** ./src/UI/field.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./field.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/field.css\");\n\n        if (typeof result === \"string\") {\n            module.exports = result;\n        } else {\n            module.exports = result.toString();\n        }\n    \n\n//# sourceURL=webpack:///./src/UI/field.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/UI */ \"./src/UI/UI.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _UI_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Form */ \"./src/UI/Form.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n(function () {\n  var OpenEdgePlugin =\n  /*#__PURE__*/\n  function () {\n    function OpenEdgePlugin() {\n      _classCallCheck(this, OpenEdgePlugin);\n\n      this.defaultFields = {\n        'card-holder-name': {\n          placeholder: 'John Doe',\n          label: 'Card Holder Name'\n        },\n        'card-number': {\n          placeholder: '•••• •••• •••• ••••',\n          label: 'Card Number'\n        },\n        'card-expiration': {\n          placeholder: 'MM / YYYY',\n          label: 'Card Expiration'\n        },\n        'card-cvv': {\n          placeholder: '•••',\n          label: 'Card Cvv'\n        },\n        'submit': {\n          value: 'Submit'\n        }\n      };\n\n      this.makeForm = function (target, formOptions) {\n        if (typeof target === 'string') {\n          var el = document.querySelector(target);\n\n          if (!el) {\n            throw new Error('Form target does not exist');\n          }\n\n          target = el;\n        }\n\n        var fields = this.configureFormFields(target, formOptions);\n        var form = new _UI_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields, formOptions);\n        form.render(target);\n        return form;\n      };\n\n      this.UI = _UI_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    }\n\n    _createClass(OpenEdgePlugin, [{\n      key: \"configureFormFields\",\n      value: function configureFormFields(target, formOptions) {\n        var fields = this.defaultFields;\n\n        if (formOptions && formOptions.fields) {\n          if (target) {\n            fields = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeDeep(fields, formOptions.fields);\n          } else {\n            fields = formOptions.fields;\n            var fieldTypes = Object.keys(fields);\n\n            for (var _i = 0, _fieldTypes = fieldTypes; _i < _fieldTypes.length; _i++) {\n              var type = _fieldTypes[_i];\n              fields[type] = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeDeep(this.defaultFields[type], fields[type]);\n            }\n          }\n        }\n\n        return fields;\n      }\n    }]);\n\n    return OpenEdgePlugin;\n  }();\n\n  ;\n  window.OpenEdgePlugin = new OpenEdgePlugin();\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"guidGenerator\",\n    value: function guidGenerator() {\n      var S4 = function S4() {\n        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);\n      };\n\n      return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();\n    }\n  }, {\n    key: \"strEquals\",\n    value: function strEquals(a, b) {\n      return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b, undefined, {\n        sensitivity: 'accent'\n      }) === 0 : a === b;\n    }\n  }, {\n    key: \"encodeEntities\",\n    value: function encodeEntities(value) {\n      if (value) {\n        return value.replace(/&/g, '&amp;').replace(/[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]/g, function (v) {\n          var hi = v.charCodeAt(0);\n          var low = v.charCodeAt(1);\n          return '&#' + ((hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000) + ';';\n        }).replace(/([^\\#-~| |!])/g, function (v) {\n          return '&#' + v.charCodeAt(0) + ';';\n        }).replace(/</g, '&lt;').replace(/>/g, '&gt;');\n      }\n    }\n  }, {\n    key: \"addStyleSheet\",\n    value: function addStyleSheet(css) {\n      var el = document.createElement('style');\n      el.type = 'text/css';\n\n      if (el.styleSheet) {\n        // for IE\n        el.styleSheet.cssText = css;\n      } else {\n        el.appendChild(document.createTextNode(css));\n      }\n\n      var elements = document.getElementsByTagName('HEAD');\n\n      if (elements && elements[0]) {\n        elements[0].appendChild(el);\n      }\n    }\n  }, {\n    key: \"isObject\",\n    value: function isObject(item) {\n      return item && _typeof(item) === 'object' && !Array.isArray(item);\n    }\n  }, {\n    key: \"mergeDeep\",\n    value: function mergeDeep(target) {\n      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        sources[_key - 1] = arguments[_key];\n      }\n\n      if (!sources.length) return target;\n      var source = sources.shift();\n\n      if (Util.isObject(target) && Util.isObject(source)) {\n        for (var key in source) {\n          if (Util.isObject(source[key])) {\n            if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));\n            this.mergeDeep(target[key], source[key]);\n          } else {\n            Object.assign(target, _defineProperty({}, key, source[key]));\n          }\n        }\n      }\n\n      return this.mergeDeep.apply(this, [target].concat(sources));\n    }\n  }]);\n\n  return Util;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });