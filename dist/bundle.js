/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/sunnyWeather.jpg */ \"./src/images/sunnyWeather.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Mouser.otf */ \"./src/Mouser.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat fixed center;\\r\\n    background-size: 100%;\\r\\n    font-family: Mouser, sans-serif;\\r\\n    margin: 0px;\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n    font-family: 'Mouser';\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n\\r\\nheader {\\r\\n    background-color: lightblue;\\r\\n    opacity: .75;\\r\\n    margin: 0;\\r\\n    display: block;\\r\\n    color: rgb(23, 23, 114);\\r\\n    text-align: center;\\r\\n    padding: 10px;\\r\\n    position: relative;\\r\\n    border-bottom: 5px solid white;\\r\\n}\\r\\n\\r\\nh1{\\r\\n    font-size: 26px;\\r\\n\\r\\n}\\r\\n\\r\\nh2{\\r\\n    padding: 5px 0px;\\r\\n    font-size: 20px;\\r\\n    color: rgb(41, 95, 143);\\r\\n    background-color: rgb(238, 249, 253, 0.8);\\r\\n}\\r\\n\\r\\nh3{\\r\\n    font-size: 50px;\\r\\n    font-weight: 100;\\r\\n    color: rgb(11, 57, 83);\\r\\n    display: inline;\\r\\n}\\r\\n\\r\\nh4{\\r\\n    color: rgb(32, 111, 138);\\r\\n    font-size: 20px;\\r\\n    padding: 0px;\\r\\n    display: inline;\\r\\n}\\r\\n\\r\\nh5{\\r\\n    color: rgb(13, 75, 95);\\r\\n    font-size: 28px;\\r\\n    padding: 0px;\\r\\n    margin:5px;\\r\\n}\\r\\n\\r\\nh6{\\r\\n    color: rgb(29, 102, 126);\\r\\n    font-size: 25px;\\r\\n    font-weight: lighter;\\r\\n    margin: 5px;\\r\\n}\\r\\n\\r\\ninput{\\r\\n    width: 250px;\\r\\n    height: 30px;\\r\\n    border: none;\\r\\n    cursor: pointer;\\r\\n    background-color: white;\\r\\n    border-bottom: 1px solid rgb(50, 50, 218);\\r\\n\\r\\n}\\r\\n\\r\\ninput:focus{\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.input{\\r\\n    border-radius: 10px;\\r\\n    padding: 10px;\\r\\n    position: absolute;\\r\\n    width: 250px;\\r\\n    background-color: white;\\r\\n    border: 1px solid rgb(132, 209, 253);\\r\\n    display: block;\\r\\n    left: 500px;\\r\\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;}\\r\\n\\r\\n.flex-container{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.flexBoxes {\\r\\n    flex: 1;\\r\\n}\\r\\n\\r\\n#city{\\r\\n    background-color: rgb(238, 249, 253, 0.1);\\r\\n    color: rgb(179, 224, 245);\\r\\n    text-align: center;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    font-size: 29px;\\r\\n}\\r\\n\\r\\n.weatherBox{\\r\\n    position: absolute;\\r\\n    top: 250px;\\r\\n    left: 50px;\\r\\n    width: 90%;\\r\\n}\\r\\n\\r\\n.today, .forecast{\\r\\n    border: 2px solid lightblue;\\r\\n    background-color: rgba(154, 202, 241, 0.7);\\r\\n    border-radius: 7px;\\r\\n    margin: 10px;\\r\\n    text-align: center;\\r\\n    padding: 10px;\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.forecast{\\r\\n    flex-grow: 1.8;\\r\\n    \\r\\n}\\r\\n\\r\\n.todayImg{\\r\\n    padding-top: 15px;;\\r\\n}\\r\\n\\r\\n.todayImg img{\\r\\n    width: 100px;\\r\\n}\\r\\n\\r\\n.todayTemp{\\r\\n    font-size: 70px;\\r\\n    color: rgb(13, 14, 73);\\r\\n    padding-top: 10px;\\r\\n    flex-grow: 1.4;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\ndiv.today div.flex-container{\\r\\n    padding-top: 15px;\\r\\n}\\r\\n\\r\\ndiv.todayTemp div{\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\n#description{\\r\\n    font-size: 30px;\\r\\n}\\r\\n\\r\\ndiv.forecast div.flexBoxes{\\r\\n    font-size: 23px;\\r\\n    border-right: 1px solid rgb(133, 202, 224, 0.8);\\r\\n    border-left: 1px solid rgb(133, 202, 224, 0.8);\\r\\n    color: rgb(11, 57, 83);\\r\\n\\r\\n}\\r\\n\\r\\n\\r\\ndiv.forecast div.flex-container{\\r\\n    padding-top: 25px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toInteger)\n/* harmony export */ });\nfunction toInteger(dirtyNumber) {\n  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {\n    return NaN;\n  }\n\n  var number = Number(dirtyNumber);\n\n  if (isNaN(number)) {\n    return number;\n  }\n\n  return number < 0 ? Math.ceil(number) : Math.floor(number);\n}\n\n//# sourceURL=webpack:///./node_modules/date-fns/esm/_lib/toInteger/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/fromUnixTime/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fromUnixTime)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ \"./node_modules/date-fns/esm/_lib/toInteger/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n\n/**\n * @name fromUnixTime\n * @category Timestamp Helpers\n * @summary Create a date from a Unix timestamp.\n *\n * @description\n * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * @param {Number} unixTime - the given Unix timestamp (in seconds)\n * @returns {Date} the date\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Create the date 29 February 2012 11:45:05:\n * const result = fromUnixTime(1330515905)\n * //=> Wed Feb 29 2012 11:45:05\n */\n\nfunction fromUnixTime(dirtyUnixTime) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var unixTime = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dirtyUnixTime);\n  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(unixTime * 1000);\n}\n\n//# sourceURL=webpack:///./node_modules/date-fns/esm/fromUnixTime/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertDay\": () => (/* binding */ convertDay),\n/* harmony export */   \"toMonth\": () => (/* binding */ toMonth)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n\r\n\r\n\r\n//convert date to day\r\nfunction convertDay(time){\r\n    let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(time);\r\n    date = date.getDay();\r\n    if(date === 1){\r\n      return 'Monday';\r\n    }\r\n    else if(date === 2){\r\n      return 'Tuesday';\r\n    }\r\n    else if(date === 3){\r\n      return 'Wednesday';\r\n    }\r\n    else if(date === 4){\r\n      return 'Thursday';\r\n    }\r\n    else if(date === 5){\r\n      return 'Friday';\r\n    }\r\n    else if(date === 6){\r\n      return 'Saturday';\r\n    }\r\n    else if(date === 0){\r\n      return 'Sunday';\r\n    }\r\n  }\r\n  \r\n\r\n//function that converts numbers to months\r\nfunction toMonth(string){\r\n    if(string === 0){\r\n        return 'January';\r\n    }\r\n    else if(string === 1){\r\n        return 'February';\r\n    }\r\n    else if(string === 2){\r\n        return 'March';\r\n    }\r\n    else if(string === 3){\r\n        return 'April';\r\n    }\r\n    else if(string === 4){\r\n        return 'May';\r\n    }\r\n    else if(string === 5){\r\n        return 'June';\r\n    }\r\n    else if(string === 6){\r\n        return 'July';\r\n    }\r\n    else if(string === 7){\r\n        return 'August';\r\n    }\r\n    else if(string === 8){\r\n        return 'September';\r\n    }\r\n    else if(string === 9){\r\n        return 'October';\r\n    }\r\n    else if(string === 10){\r\n        return 'November';\r\n    }\r\n    else if(string === 11){\r\n        return 'December';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/date.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/fromUnixTime/index.js\");\n/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ \"./src/date.js\");\n/* harmony import */ var _images_freezing_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/freezing.png */ \"./src/images/freezing.png\");\n/* harmony import */ var _images_clear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/clear.png */ \"./src/images/clear.png\");\n/* harmony import */ var _images_cloundysnow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cloundysnow.png */ \"./src/images/cloundysnow.png\");\n/* harmony import */ var _images_partlycloudy_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/partlycloudy.png */ \"./src/images/partlycloudy.png\");\n/* harmony import */ var _images_flurries_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/flurries.png */ \"./src/images/flurries.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet longitude;\r\nlet latitude;\r\n\r\ndocument.querySelector(\"input\").addEventListener(\"keyup\", (e) => {\r\n  if (e.keyCode === 13) {\r\n    let city = document.querySelector(\"input\").value;\r\n    retrieveCoordinates(city);\r\n  }\r\n});\r\n\r\nasync function retrieveCoordinates(city) {\r\n  let geoApiKey =\r\n    \"http://api.openweathermap.org/geo/1.0/direct?q=\" +\r\n    city +\r\n    \"&limit=5&appid=a510ae9d79be3d3a8ea17325ebe47871\";\r\n  let response = await fetch(geoApiKey, { mode: \"cors\" });\r\n  response = await response.json();\r\n  console.log(response);\r\n  longitude = response[0].lon;\r\n  latitude = response[0].lat;\r\n  city = response[0].name;\r\n  let weather = await retrieveWeather();\r\n  weather.city = city;\r\n  weather.longitude = longitude;\r\n  weather.latitude = latitude;\r\n  displayToday(weather);\r\n  displayForecast(weather);\r\n}\r\nretrieveCoordinates('Los Angeles')\r\n\r\nasync function retrieveWeather() {\r\n  let weatherApiKey1 = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a510ae9d79be3d3a8ea17325ebe47871`;\r\n  let weatherApiKey2 = `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=a510ae9d79be3d3a8ea17325ebe47871`;\r\n  let response = await fetch(weatherApiKey1, { mode: \"cors\" });\r\n  response = await response.json();\r\n  \r\n  let weatherDetails = {\r\n    date: response.dt,\r\n    description: response.weather[0].description,\r\n    temp: response.main.temp,\r\n    tempHigh: response.main.temp_max,\r\n    tempLow: response.main.temp_min,\r\n  };\r\n  assignImage(weatherDetails);\r\n  let response2 = await fetch(weatherApiKey2, { mode: 'cors'});\r\n  response2 = await response2.json();\r\n  console.log(response);\r\n  get5day(weatherDetails, response2);\r\n  return weatherDetails;\r\n}\r\n\r\nfunction Temperature() {\r\n  return {\r\n    convertKtoF(temperature) {\r\n      let newTemperature = (temperature - 273.15) * (9 / 5) + 32;\r\n      return Math.round(newTemperature);\r\n    },\r\n    convertKtoC(temperature) {\r\n      let newTemperature = temperature - 273.15;\r\n      return Math.round(newTemperature);\r\n    },\r\n  };\r\n}\r\n\r\n//call Temp Function to convert the temperature to celsius or Fahrenheit\r\nlet tempFunction = Temperature();\r\n\r\n//create a function that assigns an image based on description\r\nfunction assignImage(object) {\r\n    let img = document.createElement('img');\r\n    let temp = tempFunction.convertKtoF(object.temp);\r\n    \r\n    if(object.description.includes('rain') || object.description.includes('showers')){\r\n        img.src = _images_flurries_png__WEBPACK_IMPORTED_MODULE_6__;\r\n        object.image = img;\r\n    }\r\n    else if(object.description.includes('snow') || object.description.includes('hail')){\r\n        img.src = _images_cloundysnow_png__WEBPACK_IMPORTED_MODULE_4__;\r\n        object.image = img;\r\n    }\r\n    else if(temp < 55){\r\n        img.src = _images_freezing_png__WEBPACK_IMPORTED_MODULE_2__;\r\n        object.image = img;\r\n    }\r\n    else if(object.description.includes('cloud')){\r\n        img.src = _images_partlycloudy_png__WEBPACK_IMPORTED_MODULE_5__;\r\n        object.image = img;\r\n    }\r\n    else{\r\n        img.src = _images_clear_png__WEBPACK_IMPORTED_MODULE_3__;\r\n        object.image = img;\r\n    }\r\n    \r\n}\r\n\r\n//create a function that makes first letter of each word uppercase\r\nfunction firstLetterUpperCase(string){\r\n    let array = string.split('');\r\n    array[0] = array[0].toUpperCase();\r\n    for(let i = 0; i < array.length; i++){\r\n        if(typeof array[i + 1] === 'undefined'){\r\n            break;\r\n        }\r\n        else if(array[i] === ' '){\r\n            array[i + 1] = array[i + 1].toUpperCase(); \r\n        }      \r\n    }  \r\n    let phrase = array.join('');\r\n    return phrase;\r\n}\r\n\r\n//get 5 day forecast\r\nfunction get5day(object, apiData){\r\n    object.fiveDay = [];\r\n    object.fiveDay.push({temp: apiData.daily[1].temp.day, lowtemp: apiData.daily[1].temp.min, date: apiData.daily[1].dt, description: apiData.daily[1].weather[0].description});\r\n    object.fiveDay.push({temp: apiData.daily[2].temp.day, lowtemp: apiData.daily[2].temp.min, date: apiData.daily[2].dt, description: apiData.daily[2].weather[0].description});\r\n    object.fiveDay.push({temp: apiData.daily[3].temp.day, lowtemp: apiData.daily[3].temp.min, date: apiData.daily[3].dt, description: apiData.daily[3].weather[0].description});\r\n    object.fiveDay.push({temp: apiData.daily[4].temp.day, lowtemp: apiData.daily[4].temp.min, date: apiData.daily[4].dt, description: apiData.daily[4].weather[0].description});\r\n    object.fiveDay.push({temp: apiData.daily[5].temp.day, lowtemp: apiData.daily[5].temp.min, date: apiData.daily[5].dt, description: apiData.daily[5].weather[0].description});\r\n\r\n}\r\n\r\n\r\n\r\n//display correct temperature and images in Today Box\r\n\r\nfunction displayToday(object) {\r\n  //convert all temps to Fahrenheit\r\n  let temp = tempFunction.convertKtoF(object.temp);\r\n  let highTemp = tempFunction.convertKtoF(object.tempHigh);\r\n  let lowTemp = tempFunction.convertKtoF(object.tempLow);\r\n \r\n  //change today's date\r\n  let day = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.date);\r\n  let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(object.date);\r\n  let month = (0,_date__WEBPACK_IMPORTED_MODULE_1__.toMonth)(date.getMonth());\r\n  let dayOfMonth = date.getDate();\r\n  document.querySelector('div.today h4').innerHTML = `${day}, ${month} ${dayOfMonth}`;\r\n\r\n  //change city title\r\n  document.getElementById('city').innerHTML = object.city;\r\n\r\n  //change main temp on app\r\n  document.getElementById(\"todayTemp\").innerHTML = temp + \"\\u00B0\";\r\n\r\n//change description\r\n  let description = document.createElement('div');\r\n  description.id = 'description';\r\n  let updated = firstLetterUpperCase(object.description);\r\n  description.innerHTML = updated;\r\n  document.getElementById('todayTemp').appendChild(description);\r\n\r\n  //change high and low temps\r\n  let HighLow = document.createElement('div');\r\n  HighLow.id = 'HighLow'\r\n  HighLow.innerHTML = `L: ${lowTemp}\\u00B0    H: ${highTemp}\\u00B0`;\r\n  document.getElementById('todayTemp').appendChild(HighLow)\r\n\r\n  //display correct image\r\n  document.getElementById('todayImg').innerHTML = '';\r\n  document.getElementById('todayImg').appendChild(object.image);\r\n \r\n}\r\n\r\nfunction displayForecast(object){\r\n    let day1temp = tempFunction.convertKtoF(object.fiveDay[0].temp);\r\n    let day1low = tempFunction.convertKtoF(object.fiveDay[0].lowtemp);\r\n    let day2temp = tempFunction.convertKtoF(object.fiveDay[1].temp);\r\n    let day2low = tempFunction.convertKtoF(object.fiveDay[1].lowtemp);\r\n    let day3temp = tempFunction.convertKtoF(object.fiveDay[2].temp);\r\n    let day3low = tempFunction.convertKtoF(object.fiveDay[2].lowtemp);\r\n    let day4temp = tempFunction.convertKtoF(object.fiveDay[3].temp);\r\n    let day4low = tempFunction.convertKtoF(object.fiveDay[3].lowtemp);\r\n    let day5temp = tempFunction.convertKtoF(object.fiveDay[4].temp);\r\n    let day5low = tempFunction.convertKtoF(object.fiveDay[4].lowtemp);\r\n    let days = [day1temp, day2temp, day3temp, day4temp, day5temp];\r\n\r\n    //update day of week\r\n    document.querySelector('#day1 span').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.fiveDay[0].date);\r\n    document.querySelector('#day2 span').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.fiveDay[1].date);\r\n    document.querySelector('#day3 span').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.fiveDay[2].date);\r\n    document.querySelector('#day4 span').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.fiveDay[3].date);\r\n    document.querySelector('#day5 span').innerHTML = (0,_date__WEBPACK_IMPORTED_MODULE_1__.convertDay)(object.fiveDay[4].date);\r\n\r\n\r\n\r\n    //update temps\r\n    document.querySelector('#day1 h5').innerHTML = day1temp;\r\n    document.querySelector('#day1 h6').innerHTML = day1low;\r\n    document.querySelector('#day2 h5').innerHTML = day2temp;\r\n    document.querySelector('#day2 h6').innerHTML = day2low;\r\n    document.querySelector('#day3 h5').innerHTML = day3temp;\r\n    document.querySelector('#day3 h6').innerHTML = day3low;\r\n    document.querySelector('#day4 h5').innerHTML = day4temp;\r\n    document.querySelector('#day4 h6').innerHTML = day4low;\r\n    document.querySelector('#day5 h5').innerHTML = day5temp;\r\n    document.querySelector('#day5 h6').innerHTML = day5low;\r\n\r\n    //add icons to object\r\n    for(let i = 0; i < 5; i++){\r\n        assignImage(object.fiveDay[i])\r\n    }\r\n    \r\n    //update icons\r\n    document.querySelector('#day1 img').src = object.fiveDay[0].image.src;\r\n    document.querySelector('#day2 img').src = object.fiveDay[1].image.src;\r\n    document.querySelector('#day3 img').src = object.fiveDay[2].image.src;\r\n    document.querySelector('#day4 img').src = object.fiveDay[3].image.src;\r\n    document.querySelector('#day5 img').src = object.fiveDay[4].image.src;\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/Mouser.otf":
/*!************************!*\
  !*** ./src/Mouser.otf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"99dda4a947da59aebe28.otf\";\n\n//# sourceURL=webpack:///./src/Mouser.otf?");

/***/ }),

/***/ "./src/images/clear.png":
/*!******************************!*\
  !*** ./src/images/clear.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f343aa39e0793980d2d3.png\";\n\n//# sourceURL=webpack:///./src/images/clear.png?");

/***/ }),

/***/ "./src/images/cloundysnow.png":
/*!************************************!*\
  !*** ./src/images/cloundysnow.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fd75e5158681fd9c8bf7.png\";\n\n//# sourceURL=webpack:///./src/images/cloundysnow.png?");

/***/ }),

/***/ "./src/images/flurries.png":
/*!*********************************!*\
  !*** ./src/images/flurries.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9d10cff828d19608860b.png\";\n\n//# sourceURL=webpack:///./src/images/flurries.png?");

/***/ }),

/***/ "./src/images/freezing.png":
/*!*********************************!*\
  !*** ./src/images/freezing.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e560e2b26dfa8ea2e68.png\";\n\n//# sourceURL=webpack:///./src/images/freezing.png?");

/***/ }),

/***/ "./src/images/partlycloudy.png":
/*!*************************************!*\
  !*** ./src/images/partlycloudy.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d87fafed8e84df06290a.png\";\n\n//# sourceURL=webpack:///./src/images/partlycloudy.png?");

/***/ }),

/***/ "./src/images/sunnyWeather.jpg":
/*!*************************************!*\
  !*** ./src/images/sunnyWeather.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"300b2097bbcfb7e79314.jpg\";\n\n//# sourceURL=webpack:///./src/images/sunnyWeather.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;