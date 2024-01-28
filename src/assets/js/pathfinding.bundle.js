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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pathfinding.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pathfinding.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\r\n\r\n@media (max-width: 70em)\r\n{\r\n  .global-Container {\r\n    padding-top: 3rem;\r\n    overflow-x: auto;\r\n  }\r\n}\r\n\r\n/* PathFinding */\r\n.cell {\r\n  position: relative;\r\n  height: auto;\r\n  aspect-ratio: 1 / 1;\r\n  \r\n}\r\n\r\n.cell:not(.wall) {\r\n  border: 0.5px solid #05050520;\r\n}\r\n\r\n.cell::before {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  content: \"\";\r\n}\r\n\r\n.cell:hover::before {\r\n  background: #05050520;\r\n}\r\n\r\n.start {\r\n  background-color: var(--primarycontrast);\r\n  border-right: 2px solid #7a7a7a;\r\n  border-left: 2px solid #cacaca;\r\n  border-bottom: 2px solid #cacaca;\r\n  border-top: 2px solid #7a7a7a;\r\n}\r\n\r\n.end {\r\n  background-color: var(--primary);\r\n  border-right: 2px solid #7a7a7a;\r\n  border-left: 2px solid #cacaca;\r\n  border-bottom: 2px solid #cacaca;\r\n  border-top: 2px solid #7a7a7a;\r\n}\r\n\r\n.pass{\r\n  border: 2px solid var(--accent);\r\n  background-color: var(--accentlight);\r\n  box-shadow: inset 2px -4px 4px #d0e6e9,\r\n  inset -2px 4px 4px #296181;\r\n}\r\n\r\n.top {\r\n  border-top: none;\r\n}\r\n\r\n.bottom {\r\n  border-bottom: none;\r\n}\r\n\r\n.left {\r\n  border-left: none;\r\n}\r\n\r\n.right {\r\n  border-right: none;\r\n}\r\n\r\n/*\r\nWall\r\n*/\r\n\r\n.wall {\r\n  background-color: #05050560;\r\n}\r\n\r\n.wall.top {\r\n  border-top: 3px solid var(--text);\r\n}\r\n\r\n.wall.bottom {\r\n  border-bottom: 3px solid var(--text);\r\n}\r\n\r\n.wall.left {\r\n  border-left: 3px solid var(--text);\r\n}\r\n\r\n.wall.right {\r\n  border-right: 3px solid var(--text);\r\n}\r\n\r\n.wall.bottom.right {\r\n  border-bottom-right-radius: 20%;\r\n}\r\n\r\n.wall.bottom.left {\r\n  border-bottom-left-radius: 20%;\r\n}\r\n\r\n.wall.top.right {\r\n  border-top-right-radius: 20%;\r\n}\r\n\r\n.wall.top.left {\r\n  border-top-left-radius: 20%;\r\n}\r\n\r\n.start,\r\n.end.path {\r\n  background-color: var(--primarycontrast);\r\n}\r\n\r\n.end {\r\n  background-color: var(--primary);\r\n}\r\n\r\n.check {\r\n  background-color: var(--accentlight);\r\n  box-shadow: inset 1px 1px 3px #cacaca,\r\n  inset -1px -1px 1px #05050520;\r\n}\r\n\r\n.visited {\r\n  background-color: var(--accent);\r\n}\r\n\r\n.path {\r\n  background-color: var(--primarycontrastlight);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://CodeGraph/./src/css/pathfinding.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://CodeGraph/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://CodeGraph/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/pathfinding.css":
/*!*********************************!*\
  !*** ./src/css/pathfinding.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pathfinding_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./pathfinding.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/pathfinding.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pathfinding_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pathfinding_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_pathfinding_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_pathfinding_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://CodeGraph/./src/css/pathfinding.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://CodeGraph/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/algorithms/cell.js":
/*!***********************************!*\
  !*** ./src/js/algorithms/cell.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\n/* harmony import */ var _css_pathfinding_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/pathfinding.css */ \"./src/css/pathfinding.css\");\n\r\n\r\nclass Cell {\r\n  #role;\r\n  #position;\r\n  element;\r\n  #parentPosition\r\n  constructor(row, col) {\r\n    this.#role = \"empty\";\r\n    this.#position = { x: col, y: row };\r\n    this.#createCellElement();\r\n  }\r\n\r\n  set type(type) {\r\n    this.#role = type;\r\n  }\r\n\r\n  get type() {\r\n    return this.#role;\r\n  }\r\n\r\n  set parent(parent) {\r\n    this.#parentPosition = parent;\r\n  }\r\n\r\n  get parent() {\r\n    return this.#parentPosition;\r\n  }\r\n  \r\n  #createCellElement() {\r\n    const block = document.createElement(\"div\");\r\n    block.classList.add(\"cell\");\r\n    this.element = block;\r\n  }\r\n\r\n  /**\r\n   * @returns {Object} The coordinates of the cell.\r\n   */\r\n  getCellPosition() {\r\n    return this.#position;\r\n  }\r\n\r\n  checkCell() {\r\n    if ([\"start\", \"end\"].includes(this.type)) return;\r\n    this.element.classList.add('check');\r\n  }\r\n\r\n  visitCell() {\r\n    if ([\"start\", \"end\"].includes(this.type)) return;\r\n    this.element.classList.remove('check');\r\n    this.element.classList.add('visited');\r\n  }\r\n\r\n  setPath(cells) {\r\n    if (this.#parentPosition === undefined) return;\r\n    this.element.classList.remove('visited');\r\n    this.element.classList.add('path');\r\n    cells[this.#parentPosition.y][this.#parentPosition.x].setPath(cells);\r\n  }\r\n\r\n  updateBorder(cells) {\r\n    const x = this.#position.x;\r\n    const y = this.#position.y;\r\n    // Top\r\n    if (y > 0) {\r\n      const similar = this.type === cells[y - 1][x].type;\r\n      this.#updateBorderSide(\"top\", similar);\r\n      cells[y - 1][x].#updateBorderSide(\"bottom\", similar);\r\n    }\r\n\r\n    // Bottom\r\n    if (y < cells.length - 1) {\r\n      const similar = this.type === cells[y + 1][x].type;\r\n      this.#updateBorderSide(\"bottom\", similar);\r\n      cells[y + 1][x].#updateBorderSide(\"top\", similar);\r\n    }\r\n\r\n    // Left\r\n    if (x > 0) {\r\n      const similar = this.type === cells[y][x - 1].type;\r\n      this.#updateBorderSide(\"left\", similar);\r\n      cells[y][x - 1].#updateBorderSide(\"right\", similar);\r\n    }\r\n\r\n    // Right\r\n    if (x < cells.length - 1) {\r\n      const similar = this.type === cells[y][x + 1].type;\r\n      this.#updateBorderSide(\"right\", similar);\r\n      cells[y][x + 1].#updateBorderSide(\"left\", similar);\r\n    }\r\n  }\r\n\r\n  #updateBorderSide(side, similar) {\r\n    if (similar)\r\n      this.element.classList.remove(side);\r\n    else\r\n      this.element.classList.add(side);\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://CodeGraph/./src/js/algorithms/cell.js?");

/***/ }),

/***/ "./src/js/algorithms/grid.js":
/*!***********************************!*\
  !*** ./src/js/algorithms/grid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Grid: () => (/* binding */ Grid)\n/* harmony export */ });\n/* harmony import */ var _cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell.js */ \"./src/js/algorithms/cell.js\");\n\r\n\r\nconst NORMAL_SPEED = 100;\r\n\r\nconst Grid = (() => {\r\n  const grid = document.getElementById(\"grid\");\r\n  let cells = [];\r\n  let visited = [];\r\n  let startPosition = undefined;\r\n  let gridSize;\r\n  let simulationSpeed;\r\n  let mouseDown = false;\r\n  let selectedCellType = document\r\n    .querySelector('input[type=\"radio\"][name=\"cell-type\"]:checked')\r\n    .getAttribute(\"id\");\r\n  let remove = false;\r\n  grid.addEventListener(\"mousedown\", () => {\r\n    mouseDown = true;\r\n  });\r\n  grid.addEventListener(\"mouseup\", () => {\r\n    mouseDown = false;\r\n  });\r\n  grid.addEventListener(\"mousedown\", editGrid);\r\n  grid.addEventListener(\"mouseover\", editGrid);\r\n\r\n  const delay = (ms) => new Promise((res) => setTimeout(res, ms));\r\n\r\n  function setSpeed(speed) {\r\n    simulationSpeed = NORMAL_SPEED / speed;\r\n    console.log(`Ruler value: ${speed} Simulation Speed: ${simulationSpeed}`);\r\n  }\r\n\r\n  function setSelectedMode() {\r\n    selectedCellType = document\r\n      .querySelector('input[type=\"radio\"][name=\"cell-type\"]:checked')\r\n      .getAttribute(\"id\");\r\n  }\r\n\r\n  /**\r\n   * Create the grid cells.\r\n   * @param {Number} size The size of the nxn grid\r\n   */\r\n  async function setGrid(size) {\r\n    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;\r\n    grid.innerHTML = \"\";\r\n    for (let i = 0; i < size; i++) {\r\n      cells[i] = [];\r\n      for (let j = 0; j < size; j++) {\r\n        const cell = new _cell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i, j);\r\n        cells[i][j] = cell;\r\n        grid.appendChild(cell.element);\r\n      }\r\n    }\r\n    gridSize = size;\r\n  }\r\n\r\n  /**\r\n   * Handle mouse input on grid.\r\n   * @param {*} event\r\n   */\r\n  function editGrid(event) {\r\n    if (!mouseDown) return;\r\n    setSelectedMode();\r\n    const position = getCellPosition(event);\r\n    const cellType = selectedCellType.substring(\r\n      selectedCellType.indexOf(\"-\") + 1\r\n    );\r\n    if ([\"start\", \"end\"].includes(cellType)) {\r\n      cells.forEach((row) => {\r\n        row.forEach((cell) => {\r\n          if (cell.type === cellType)\r\n            cell.type = \"empty\";\r\n            cell.element.classList.remove(`${cellType}`);\r\n        });\r\n      });\r\n      if (cellType === \"start\") {\r\n        if (startPosition != undefined)\r\n          cells[startPosition.y][startPosition.x].updateBorder(cells);\r\n        startPosition = position;\r\n      }\r\n    }\r\n    setCellType(position, cellType, event.type === \"mousedown\");\r\n    cells[position.y][position.x].updateBorder(cells);\r\n  }\r\n\r\n  function getCellPosition(event) {\r\n    const rect = grid.getBoundingClientRect();\r\n    const size = gridSize;\r\n    const gridX = Math.floor(\r\n      ((event.clientX - rect.left) * size) / grid.offsetWidth\r\n    );\r\n    const gridY = Math.floor(\r\n      ((event.clientY - rect.top) * size) / grid.offsetWidth\r\n    );\r\n    console.log(gridX, gridY); // log the values of gridX and gridY\r\n    return { x: gridX, y: gridY };\r\n  }\r\n\r\n  function setCellType(point, type, clicked) {\r\n    const x = point.x;\r\n    const y = point.y;\r\n    if (clicked) remove = cells[y][x].element.classList.contains(type);\r\n    if (remove) {\r\n      cells[y][x].element.classList = \"cell\";\r\n      cells[y][x].type = \"empty\";\r\n    } else {\r\n      cells[y][x].element.classList = `cell ${type}`;\r\n      cells[y][x].type = type;\r\n    }\r\n  }\r\n\r\n  const startSimulation = async () => {\r\n    visited = [];\r\n    for (let i = 0; i < gridSize; i++) {\r\n      visited[i] = [];\r\n      for (let j = 0; j < gridSize; j++) {\r\n        visited[i][j] = cells[i][j].type === \"wall\";\r\n      }\r\n    }\r\n    console.log(`Starting simulation with speed of ${simulationSpeed}`);\r\n    return BFS();\r\n  };\r\n\r\n  const BFS = async () => {\r\n    const queue = [];\r\n    queue.push(startPosition);\r\n    visited[startPosition.y][startPosition.x] = true;\r\n    cells[startPosition.y][startPosition.x].parent = undefined;\r\n    const dx = [1, 0, -1, 0, 1, 1, -1, -1];\r\n    const dy = [0, 1, 0, -1, -1, 1, 1, -1];\r\n    let found = false;\r\n    let position;\r\n    while (queue.length > 0) {\r\n      position = queue.shift();\r\n      const X = position.x;\r\n      const Y = position.y;\r\n      cells[Y][X].visitCell();\r\n      console.log(`checking (${X}, ${Y})`);\r\n\r\n      // Found the end.\r\n      if (cells[Y][X].type === \"end\") {\r\n        found = true;\r\n        break;\r\n      }\r\n      // Add adjacent cells.\r\n      for (let i = 0; i < dx.length; i++) {\r\n        const x = X + dx[i];\r\n        const y = Y + dy[i];\r\n        // Out of borders\r\n        if (x < 0 || y < 0 || x >= gridSize || y >= gridSize) continue;\r\n        // Wall or visited\r\n        if (visited[y][x] === true || cells[y][x].type === \"wall\") continue;\r\n        // Can't cut walls diagonally\r\n        if (\r\n          i === 4 &&\r\n          (cells[Y + dy[3]][X + dx[3]].type === \"wall\" && cells[Y + dy[0]][X + dx[0]].type === \"wall\")\r\n        )\r\n          continue;\r\n        if (\r\n          i === 5 &&\r\n          (cells[Y + dy[0]][X + dx[0]].type === \"wall\" && cells[Y + dy[1]][X + dx[1]].type === \"wall\")\r\n        )\r\n          continue;\r\n        if (\r\n          i === 6 &&\r\n          (cells[Y + dy[2]][X + dx[2]].type === \"wall\" && cells[Y + dy[1]][X + dx[1]].type === \"wall\")\r\n        )\r\n          continue;\r\n        if (\r\n          i === 7 &&\r\n          (cells[Y + dy[2]][X + dx[2]].type === \"wall\" && cells[Y + dy[3]][X + dx[3]].type === \"wall\")\r\n        )\r\n          continue;\r\n        cells[y][x].checkCell();\r\n        cells[y][x].parent = position;\r\n        visited[y][x] = true;\r\n        queue.push({ x, y });\r\n        await delay(simulationSpeed);\r\n      }\r\n    }\r\n\r\n    if (found) cells[position.y][position.x].setPath(cells);\r\n    console.log(`found ${found}`);\r\n  };\r\n\r\n  return {\r\n    setGrid,\r\n    setSpeed,\r\n    setSelectedMode,\r\n    startSimulation,\r\n  };\r\n})();\r\n\n\n//# sourceURL=webpack://CodeGraph/./src/js/algorithms/grid.js?");

/***/ }),

/***/ "./src/js/algorithms/pathfinding.js":
/*!******************************************!*\
  !*** ./src/js/algorithms/pathfinding.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid.js */ \"./src/js/algorithms/grid.js\");\n\r\n\r\nlet startedSimulation = false;\r\nconst sizeSlider = document.getElementById(\"size-range\");\r\nconst speedSlider = document.getElementById(\"speed-range\");\r\n_grid_js__WEBPACK_IMPORTED_MODULE_0__.Grid.setGrid(sizeSlider.value);\r\n_grid_js__WEBPACK_IMPORTED_MODULE_0__.Grid.setSpeed(speedSlider.value);\r\nsizeSlider.addEventListener('change', () => {_grid_js__WEBPACK_IMPORTED_MODULE_0__.Grid.setGrid(sizeSlider.value);});\r\nspeedSlider.addEventListener('change', () => {_grid_js__WEBPACK_IMPORTED_MODULE_0__.Grid.setSpeed(speedSlider.value);});\r\nlet animationSpeed = 1000 / speedSlider.value;\r\n\r\ndocument.getElementById('start-simulation').addEventListener('click', _grid_js__WEBPACK_IMPORTED_MODULE_0__.Grid.startSimulation);\n\n//# sourceURL=webpack://CodeGraph/./src/js/algorithms/pathfinding.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/algorithms/pathfinding.js");
/******/ 	
/******/ })()
;