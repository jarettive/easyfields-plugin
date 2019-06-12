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

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".openedge-form {\\n  background: white;\\n  padding: 2em 3em 1.5em;\\n  font-family: sans-serif;\\n  font-weight: bold;\\n  font-size: .8em;\\n  border-radius: .5em;\\n  border: 2px solid #6cb9e7;\\n  color: #6d6d6d;\\n  -webkit-box-shadow: 0px 5px 17px black;\\n          box-shadow: 0px 5px 17px black;\\n}\\n\\n.openedge-field {\\n  margin: 1.8em 0;\\n}\\n\\n.openedge-field label {\\n  text-transform: uppercase;\\n}\\n\\n.openedge-field > * {\\n  display: block;\\n}\\n\\n.openedge-field label {\\n  margin: .2em 0;\\n}\\n\\n.openedge-field iframe {\\n  border-width: 0px;\\n  height: 2em;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/UI/Form.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/field.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/field.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"button {\\n  color: white;\\n  border-radius: 4px;\\n  border: 0px;\\n  font-size: 18px;\\n  height: 50px;\\n  width: 155px;\\n  outline: none;\\n  cursor: pointer;\\n  background: #9bc768;\\n}\\n\\nbutton:active {\\n  background: #acd182;\\n}\\n\\ninput {\\n  padding: 7px 18px;\\n  font-size: 18px;\\n  letter-spacing: 4px;\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/UI/field.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.css */ \"./src/UI/Form.css\");\n/* harmony import */ var _Form_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Form_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _IFrameField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IFrameField */ \"./src/UI/IFrameField.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Form =\n/*#__PURE__*/\nfunction () {\n  function Form(fields, formOptions) {\n    var _this = this;\n\n    _classCallCheck(this, Form);\n\n    this.iFrameFields = [];\n\n    this.windowMsgHandler = function (event) {\n      var fieldEventType = event.data.type && event.data.type.replace(_IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventID, '');\n\n      switch (fieldEventType) {\n        case 'register':\n          // this.unregisteredFields = this.unregisteredFields.filter(item => item !== event.data);\n          break;\n\n        case 'submitClick':\n          _this.requestDataFromFields();\n\n          break;\n\n        case 'passData':\n          _this.passData(event.data);\n\n        default:\n          break;\n      }\n    };\n\n    formOptions = formOptions || {};\n    this.fields = fields;\n\n    if (formOptions.defaultStyle !== false) {\n      _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addStyleSheet(_Form_css__WEBPACK_IMPORTED_MODULE_0___default.a);\n    }\n  }\n\n  _createClass(Form, [{\n    key: \"renderTo\",\n    value: function renderTo(target) {\n      var _this2 = this;\n\n      var fields = this.fields;\n      var el = document.createElement('div');\n      el.classList.add(\"openedge-form\");\n      Object.keys(fields).map(function (type) {\n        var fieldData = fields[type];\n        var target = fieldData.target;\n        var iframeField = new _IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"](type, fieldData);\n        iframeField.renderTo(target || el);\n\n        _this2.iFrameFields.push(iframeField);\n      });\n      target.appendChild(el); // self.unregisteredFields = Array.from(self.props.fields, x => x.name.replace(/\\s/g, ''));\n\n      window.addEventListener('message', this.windowMsgHandler, false);\n    }\n  }, {\n    key: \"requestDataFromFields\",\n    value: function requestDataFromFields() {\n      var fieldTypes = Object.keys(this.fields);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.iFrameFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var field = _step.value;\n          field.requestFieldData({\n            fieldTypes: fieldTypes\n          });\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"passData\",\n    value: function passData(fieldData) {\n      var targetField = this.iFrameFields.find(function (iFrameField) {\n        return iFrameField.name === 'card-number';\n      });\n      targetField.iframe.contentWindow.postMessage({\n        name: fieldData.name,\n        value: fieldData.value,\n        type: _IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"].eventID + 'accumulateData'\n      }, _IFrameField__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fieldURL);\n    }\n  }]);\n\n  return Form;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/UI/Form.js?");

/***/ }),

/***/ "./src/UI/IFrameField.js":
/*!*******************************!*\
  !*** ./src/UI/IFrameField.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ \"./src/util.js\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field.css */ \"./src/UI/field.css\");\n/* harmony import */ var _field_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_field_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar IFrameField =\n/*#__PURE__*/\nfunction () {\n  function IFrameField(name, data) {\n    _classCallCheck(this, IFrameField);\n\n    this.data = data;\n    this.name = name;\n    this.attachOriginWindowListener();\n    this.id = btoa(_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].guidGenerator());\n  }\n\n  _createClass(IFrameField, [{\n    key: \"renderTo\",\n    value: function renderTo(target) {\n      if (typeof target === 'string') {\n        target = document.querySelector(target);\n      }\n\n      var el = document.createElement('div');\n      var name = this.name.replace(/\\s/g, '');\n      el.id = 'openedge-' + name;\n      el.classList.add('openedge-field');\n      this.iframe = this.createIFrameElement(name);\n      el.appendChild(this.iframe);\n\n      if (target instanceof HTMLElement) {\n        target.appendChild(el);\n      }\n    }\n  }, {\n    key: \"createIFrameElement\",\n    value: function createIFrameElement(name) {\n      var iframe = document.createElement('iframe');\n      var src = IFrameField.fieldURL + '#' + btoa(JSON.stringify({\n        originURL: window.location.href,\n        id: this.id,\n        name: name\n      }));\n      iframe.name = name;\n      iframe.src = src;\n      return iframe;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return React.createElement(\"div\", {\n        id: 'openedge-' + name,\n        className: \"openedge-field\"\n      }, props.label && React.createElement(\"label\", null, props.label), React.createElement(\"iframe\", {\n        ref: function ref(el) {\n          _this.iframe = el;\n        },\n        title: name,\n        name: name,\n        src: src\n      }));\n    }\n  }, {\n    key: \"postToChild\",\n    value: function postToChild(data, eventType) {\n      var type = IFrameField.eventID + eventType;\n      data.type = type;\n      this.iframe.contentWindow.postMessage(data, '*' // TODO: change this to the location that field.html will be hosted at\n      );\n    }\n  }, {\n    key: \"requestFieldData\",\n    value: function requestFieldData(queryData) {\n      this.postToChild(queryData, 'requestData');\n    }\n  }, {\n    key: \"attachOriginWindowListener\",\n    value: function attachOriginWindowListener() {\n      var self = this;\n      window.addEventListener('message', function (event) {\n        var fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');\n\n        if (event.data.id === self.id) {\n          if (fieldEventType === 'register') {\n            self.onRegister();\n          }\n\n          if (fieldEventType === 'resize') {\n            self.iframe.style.height = event.data.height + 'px';\n          }\n        }\n      }, false);\n    }\n  }, {\n    key: \"onRegister\",\n    value: function onRegister() {\n      this.postToChild(this.data, 'setUpPaymentField');\n    }\n  }], [{\n    key: \"register\",\n    value: function register(name) {\n      var self = IFrameField;\n      var query = window.location.hash.replace('#', '');\n      var iframeData = JSON.parse(atob(query));\n      iframeData.name = name;\n      IFrameField.data = iframeData; //Create and render the input field\n\n      self.createField(iframeData);\n      window.addEventListener('message', this.handleChildWindowEvent, false);\n      IFrameField.postToParent({\n        name: name,\n        id: iframeData.id\n      }, 'register');\n    }\n  }, {\n    key: \"setUpPaymentField\",\n    value: function setUpPaymentField(data) {\n      var field = document.getElementById(IFrameField.paymentFieldID);\n      field.setAttribute('placeholder', data.placeholder || '');\n      field.setAttribute('value', data.value || '');\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addStyleSheet(data.style || !data.defaultStyle && _field_css__WEBPACK_IMPORTED_MODULE_1___default.a || '');\n      IFrameField.triggerResize();\n    }\n  }, {\n    key: \"triggerResize\",\n    value: function triggerResize() {\n      IFrameField.postToParent({\n        name: name,\n        id: IFrameField.data.id,\n        height: document.body.scrollHeight + 1\n      }, 'resize');\n    }\n  }, {\n    key: \"createField\",\n    value: function createField(iframeData) {\n      var isSubmit = _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].strEquals(iframeData.name, 'submit');\n      this.input = isSubmit ? IFrameField.createButton(iframeData) : IFrameField.createInput(iframeData);\n      this.input.id = this.paymentFieldID;\n      this.input.name = iframeData.name;\n      var body = document.getElementsByTagName('body')[0];\n      body.appendChild(this.input);\n    }\n  }, {\n    key: \"createButton\",\n    value: function createButton(iframeData) {\n      var button = document.createElement('button');\n      button.appendChild(document.createTextNode('Submit'));\n      button.addEventListener('click', function () {\n        IFrameField.postToParent({\n          name: iframeData.name\n        }, 'submitClick');\n      });\n      return button;\n    }\n  }, {\n    key: \"createInput\",\n    value: function createInput() {\n      return document.createElement('input');\n    }\n  }, {\n    key: \"handleChildWindowEvent\",\n    value: function handleChildWindowEvent(event) {\n      var fieldEventType = event.data.type && event.data.type.replace(IFrameField.eventID, '');\n      var eventFunc = IFrameField[fieldEventType];\n\n      if (typeof eventFunc == 'function') {\n        eventFunc(event.data);\n      }\n    }\n  }, {\n    key: \"requestData\",\n    value: function requestData(queryData) {\n      var field = document.getElementById(IFrameField.paymentFieldID);\n      var value = field && field.value ? field.value : '';\n\n      if (IFrameField.data.name === 'card-number') {\n        value = '';\n        window.fieldTypes = queryData.fieldTypes;\n      }\n\n      IFrameField.postToParent({\n        name: window.name,\n        value: value\n      }, 'passData');\n    } //This is the method for receiving data in the card-number/account-number window. Once the data from all the other windows \n    // is accumulated it will be tokenized and the token will be returned to the parent window \n\n  }, {\n    key: \"accumulateData\",\n    value: function accumulateData(data) {\n      window.receivedFields = window.receivedFields || {};\n      window.receivedFields[data.name] = data.value;\n      var receivedTypes = Object.keys(receivedFields);\n\n      if (JSON.stringify(receivedTypes.sort()) === JSON.stringify(window.fieldTypes.sort())) {\n        console.dir(window.receivedFields);\n        window.receivedFields = {};\n      }\n    }\n  }, {\n    key: \"postToParent\",\n    value: function postToParent(data, eventType) {\n      var type = IFrameField.eventID + eventType;\n      data.type = type;\n      window.parent.postMessage(data, IFrameField.data.originURL);\n    }\n  }]);\n\n  return IFrameField;\n}();\n\nIFrameField.eventID = 'openedge:field:';\nIFrameField.paymentFieldID = 'openedge-payment-field';\nIFrameField.fieldURL = 'http://127.0.0.1:5501/field.html';\n/* harmony default export */ __webpack_exports__[\"default\"] = (IFrameField);\n\n//# sourceURL=webpack:///./src/UI/IFrameField.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/UI */ \"./src/UI/UI.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _UI_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/Form */ \"./src/UI/Form.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n(function () {\n  var OpenPayPlugin = function OpenPayPlugin() {\n    _classCallCheck(this, OpenPayPlugin);\n\n    this.defaultFields = {\n      \"card-holder-name\": {\n        placeholder: \"John Doe\",\n        label: \"Card Holder Name\"\n      },\n      \"card-number\": {\n        placeholder: \"•••• •••• •••• ••••\",\n        label: \"Card Number\"\n      },\n      \"card-expiration\": {\n        placeholder: \"MM / YYYY\",\n        label: \"Card Expiration\"\n      },\n      \"card-cvv\": {\n        placeholder: \"•••\",\n        label: \"Card Cvv\"\n      },\n      \"submit\": {\n        value: \"Submit\"\n      }\n    };\n\n    this.makeForm = function (target, formOptions) {\n      if (typeof target === \"string\") {\n        var el = document.querySelector(target);\n\n        if (!el) {\n          throw new Error(\"Form target does not exist\");\n        }\n\n        target = el;\n      }\n\n      var fields = this.defaultFields;\n\n      if (formOptions && formOptions.fields) {\n        fields = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mergeDeep(fields, formOptions.fields);\n      }\n\n      var form = new _UI_Form__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fields, formOptions);\n      form.renderTo(target);\n      return form;\n    };\n\n    this.UI = _UI_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  };\n\n  ;\n  window.OpenPayPlugin = new OpenPayPlugin();\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Util =\n/*#__PURE__*/\nfunction () {\n  function Util() {\n    _classCallCheck(this, Util);\n  }\n\n  _createClass(Util, null, [{\n    key: \"guidGenerator\",\n    value: function guidGenerator() {\n      var S4 = function S4() {\n        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);\n      };\n\n      return S4() + S4() + \"-\" + S4() + \"-\" + S4() + \"-\" + S4() + \"-\" + S4() + S4() + S4();\n    }\n  }, {\n    key: \"strEquals\",\n    value: function strEquals(a, b) {\n      return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b, undefined, {\n        sensitivity: 'accent'\n      }) === 0 : a === b;\n    }\n  }, {\n    key: \"addStyleSheet\",\n    value: function addStyleSheet(styleString) {\n      var el = document.createElement('style');\n      el.type = 'text/css';\n      var head = document.getElementsByTagName('HEAD')[0];\n      el.innerHTML = styleString;\n      head.appendChild(el);\n    }\n  }, {\n    key: \"isObject\",\n    value: function isObject(item) {\n      return item && _typeof(item) === 'object' && !Array.isArray(item);\n    }\n  }, {\n    key: \"mergeDeep\",\n    value: function mergeDeep(target) {\n      for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        sources[_key - 1] = arguments[_key];\n      }\n\n      if (!sources.length) return target;\n      var source = sources.shift();\n\n      if (Util.isObject(target) && Util.isObject(source)) {\n        for (var key in source) {\n          if (Util.isObject(source[key])) {\n            if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));\n            this.mergeDeep(target[key], source[key]);\n          } else {\n            Object.assign(target, _defineProperty({}, key, source[key]));\n          }\n        }\n      }\n\n      return this.mergeDeep.apply(this, [target].concat(sources));\n    }\n  }]);\n\n  return Util;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });