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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --text: #050505;\r\n  --bg: #fafafa;\r\n  --primary: #fe7a7d;\r\n  --primarylight: #ff9fa1;\r\n  --secondary: #fece71;\r\n  --secondarylight: #fcdea2;\r\n  --accent: #11cdee;\r\n  --accentlight: #98EAF9;\r\n  --primarysection: #999999;\r\n  --primarycontrast: #64d97b;\r\n  --primarycontrastlight: #98f1aa;\r\n  --accentcontrast: #ff8f8f;\r\n\r\n  --h1: 3rem;\r\n  --h2: 2rem;\r\n  --subtitle: 1.5rem;\r\n  --p: 18px;\r\n  --sub: 1rem;\r\n  --small: 14px;\r\n}\r\n\r\nh1 {\r\n  font-size: var(--h1);\r\n}\r\n\r\nh2 {\r\n  font-size: var(--h2);\r\n}\r\n\r\np {\r\n  font-size: var(--p);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  font-family: \"Inter\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--text);\r\n}\r\n\r\na:hover,\r\na:active {\r\n  color: var(--text);\r\n}\r\n\r\nbody {\r\n  position: relative;\r\n  width: auto !important;\r\n  background-color: var(--bg);\r\n  color: var(--text);\r\n  margin: 0 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n::selection {\r\n  background: var(--accent);\r\n  color: var(--bg);\r\n}\r\n\r\n.color-effect::selection {\r\n  -webkit-text-fill-color: var(--bg);\r\n}\r\n\r\n/* nav bar */\r\n\r\nnav {\r\n  position: fixed;\r\n  z-index: 100;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100px;\r\n  padding: 20px 5%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--bg);\r\n  box-shadow: 0px 0px 10px #99999930;\r\n}\r\n\r\nnav .logo {\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.color-effect {\r\n  background: linear-gradient(120deg, var(--primary), var(--secondary));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\nnav .menu {\r\n  gap: 2rem;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.menu-item {\r\n  position: relative;\r\n  font-size: var(--sub);\r\n  width: 100%;\r\n  padding: 0.8rem 1.2rem;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.menu-item:hover {\r\n  scale: 1.2;\r\n  box-shadow: 1px 1px 5px #99999950,\r\n  -1px -1px 5px #fff;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.underline::after {\r\n  transition: 0.3s ease-in-out;\r\n  position: absolute;\r\n  z-index: 1;\r\n  top: 100%;\r\n  left: 50%;\r\n  translate: -50%;\r\n  content: \"\";\r\n  width: 80%;\r\n  height: 2px;\r\n  border-radius: 2px;\r\n  background: var(--text);\r\n}\r\n\r\n.underline::before {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  z-index: 2;\r\n  top: 100%;\r\n  left: 50%;\r\n  translate: -50% -40%;\r\n  content: \"\";\r\n  border: 2px solid var(--text);\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.circle::before {\r\n  border-radius: 100%;\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.diamond::before {\r\n  translate: -50% calc(-50% + 1px);\r\n  rotate: 45deg;\r\n  border-radius: 2px;\r\n  background-color: var(--primary);\r\n}\r\n\r\n.square::before {\r\n  border-radius: 3px;\r\n  background-color: var(--accent);\r\n}\r\n\r\n.rectangle::before {\r\n  width: 14px;\r\n  border-radius: 3px;\r\n  background-color: var(--primarycontrast);\r\n}\r\n\r\n.circle::after,\r\n.square::after {\r\n  width: 16px;\r\n}\r\n\r\n.diamond::after {\r\n  width: 18px;\r\n}\r\n\r\n.rectangle::after {\r\n  width: 20px;\r\n}\r\n\r\n.menu-item:hover:before {\r\n  transition: 0.5s ease-in-out;\r\n}\r\n\r\n.menu-item:hover::after {\r\n  width: 80%;\r\n}\r\n\r\n/* Mobile menu */\r\n\r\n.hamburger-menu {\r\n  display: none;\r\n}\r\n\r\n.hamburger-icon {\r\n  width: 32px;\r\n  height: 24px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  cursor: pointer;\r\n}\r\n\r\n.hamburger-icon > span {\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: var(--text);\r\n}\r\n\r\n.hamburger-icon.open span:nth-child(1) {\r\n  rotate: 45deg;\r\n  translate: 0 10px;\r\n}\r\n\r\n.hamburger-icon.open span:nth-child(2) {\r\n  display: none;\r\n}\r\n\r\n.hamburger-icon.open span:nth-child(3) {\r\n  rotate: -45deg;\r\n  translate: 0 -10px;\r\n}\r\n\r\n.hamburger-items {\r\n  position: fixed;\r\n  z-index: 99;\r\n  top: 100px;\r\n  right: 0;\r\n  width: 0;\r\n  height: calc(100vh - 100px);\r\n  padding: 1em 0 1em 0.5em;\r\n  overflow: hidden;\r\n  transition: 0.3s ease;\r\n  background: var(--bg);\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 1em;\r\n  box-shadow: -1px 0px 10px #99999930;\r\n}\r\n\r\n.hamburger-items > a {\r\n  position: relative;\r\n  border-top-left-radius: 6px;\r\n  border-bottom-left-radius: 6px;\r\n  padding: 0.5rem 2rem;\r\n  transition: 0.2s ease-in;\r\n  font-size: var(--p);\r\n  font-weight: 500;\r\n  display: flex;\r\n}\r\n\r\n.side-line::before {\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  align-self: center;\r\n  z-index: 2;\r\n  left: 0.4rem;\r\n  translate: 50%;\r\n  content: \"\";\r\n  border: 2px solid var(--text);\r\n  width: 10px;\r\n  height: 10px;\r\n}\r\n\r\n.side-line::after {\r\n  transition: 0.3s ease-in-out;\r\n  position: absolute;\r\n  align-self: center;\r\n  z-index: 1;\r\n  left: 1rem;\r\n  rotate: 90deg;\r\n  translate: -50%;\r\n  content: \"\";\r\n  height: 2px;\r\n  border-radius: 2px;\r\n  background: var(--text);\r\n}\r\n\r\n.hamburger-items > .side-line:hover::after {\r\n  scale: 1.1;\r\n}\r\n\r\n.hamburger-items > .circle:hover {\r\n  background-color: var(--secondarylight);\r\n}\r\n\r\n.hamburger-items > .square:hover {\r\n  background-color: var(--accentlight);\r\n}\r\n\r\n.hamburger-items > .diamond:hover {\r\n  background-color: var(--primarylight);\r\n}\r\n\r\n.hamburger-items > .rectangle:hover {\r\n  background-color: var(--primarycontrastlight);\r\n}\r\n\r\n.hamburger-items > a:active {\r\n  box-shadow: inset 1px 1px 3px #05050550,\r\n  -1px -1px 3px #f7f7f750;\r\n  translate: 2px 2px;\r\n}\r\n\r\n.hamburger-items.open {\r\n  width: 200px;\r\n}\r\n\r\n@media (max-width: 60em) {\r\n  #menu {\r\n    display: none;\r\n  }\r\n\r\n  #hamburger-menu {\r\n    display: block;\r\n    position: relative;\r\n  }\r\n  \r\n  .hamburger-items {\r\n    display: flex;\r\n  }\r\n}\r\n\r\n/* hero */\r\n\r\n.hero {\r\n  padding-top: calc(3rem + 100px);\r\n  padding-bottom: 2rem;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  gap: 2rem;\r\n  justify-content: space-between;\r\n}\r\n\r\n.hero-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 45rem;\r\n  justify-content: center;\r\n}\r\n\r\n.subtitles {\r\n  font-size: var(--subtitle);\r\n  color: var(--text);\r\n  margin: 1.5rem 0 3rem 0;\r\n}\r\n\r\n.hero-img {\r\n  align-self: center;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.hero-img > img {\r\n  width: 100%;\r\n}\r\n\r\n.hero-buttons {\r\n  display: flex;\r\n  gap: 2rem;\r\n}\r\n\r\n.hero-buttons a {\r\n  padding: 1rem 2rem;\r\n  border-radius: 6px;\r\n  font-size: var(--p);\r\n  color: var(--text);\r\n}\r\n\r\n.hero-buttons .primary-button {\r\n  background-color: var(--primary);\r\n  color: var(--bg);\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.secondary-button {\r\n  transition: 0.3s ease;\r\n  background-color: var(--secondary);\r\n}\r\n\r\n.primary-button:hover,\r\n.secondary-button:hover {\r\n  transform: translate(0, -3px);\r\n}\r\n\r\n@media (max-width: 70em) {\r\n  .hero-text > h1 {\r\n    font-size: 42px;\r\n  }\r\n\r\n  .subtitles {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media (max-width: 60em) {\r\n  .hero {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .hero-text > h1 {\r\n    font-size: 48px;\r\n  }\r\n\r\n  .hero-text {\r\n    justify-self: center;\r\n    text-align: center;\r\n  }\r\n\r\n  .hero-buttons {\r\n    align-self: center;\r\n  }\r\n\r\n  .hero-img {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 40em) {\r\n  #hero {\r\n    padding-top: calc(2.5rem + 100px);\r\n    padding-bottom: 0.5rem;\r\n    min-height: 100vh;\r\n  }\r\n\r\n  .hero-text > h1 {\r\n    font-size: 32px;\r\n  }\r\n\r\n  .header > .hide {\r\n    display: none;\r\n  }\r\n\r\n  .hero-buttons {\r\n    display: flex;\r\n    gap: 0.8rem;\r\n  }\r\n\r\n  .hero-buttons a {\r\n    padding: 0.8rem 1.6rem;\r\n    border-radius: 4px;\r\n    font-size: var(--small);\r\n  }\r\n\r\n  .subtitles {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n/* topics section */\r\n\r\n.topics {\r\n  padding-top: calc(5rem + 100px);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\n\r\n.topics h1 {\r\n  position: relative;\r\n  padding: 0.5rem 1rem;\r\n  padding-bottom: 1rem;\r\n  transition: 0.5s ease;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.topics h1::after {\r\n  height: 3px;\r\n  border-radius: 3px;\r\n  width: 80%;\r\n}\r\n\r\n.topics h1::before {\r\n  translate: -50% calc(-50% + 2px);\r\n  width: 20px;\r\n  height: 20px;\r\n  border-width: 4px;\r\n}\r\n\r\n/*\r\n.topics > h2 {\r\n  transform: translate(-8px, 4px);\r\n  box-shadow: 12px -8px var(--accent);\r\n  background-color: rgba(254, 206, 113, 0.8);\r\n}\r\n*/\r\n\r\n.topics-container {\r\n  margin-top: 3rem;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.topics-items {\r\n  background-color: rgba(254, 206, 113, 0.8);\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  gap: 2rem;\r\n  align-items: center;\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.topic-type {\r\n  text-align: center;\r\n  font-size: var(--p);\r\n}\r\n\r\n.topics-items:hover {\r\n  background-color: rgba(254, 122, 125, 0.6);\r\n  transform: translate(0, -10px);\r\n}\r\n\r\n/* Coming Soon */\r\n\r\n.topics-items.coming-soon > img {\r\n  opacity: 0.4;\r\n  filter: blur(4px);\r\n}\r\n\r\n.coming-soon {\r\n  scale: 0.95;\r\n  position: relative;\r\n  background-color: rgba(254, 206, 113, 0.1);\r\n}\r\n\r\n\r\n.coming-soon::before {\r\n  translate: 0 -1rem;\r\n  position: absolute;\r\n  content: \"Coming Soon!\";\r\n  width: 100%;\r\n  height: 100%;\r\n  color: var(--primary);\r\n  border-radius: 10px;\r\n  background: rgba(254, 206, 113, 0.5);\r\n  font-size: var(--h1);\r\n  text-align: center;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 10;\r\n}\r\n\r\n.coming-soon:hover {\r\n  background-color: rgba(254, 206, 113, 0.3);\r\n  transform: translate(0, -5px);\r\n}\r\n\r\n/* footer */\r\n\r\n.footer *::selection {\r\n  background: var(--bg);\r\n  color: var(--text);\r\n}\r\n\r\n.footer .color-effect::selection {\r\n  -webkit-text-fill-color: var(--text);\r\n}\r\n\r\n.footer {\r\n  margin-top: 5rem;\r\n  margin-bottom: 5rem;\r\n  padding: 3rem 5rem;\r\n  border-radius: 10px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  background: var(--text);\r\n  color: var(--bg);\r\n}\r\n\r\n.footer-upper {\r\n  width: 100%;\r\n  min-height: 10rem;\r\n  display: grid;\r\n  grid-template-columns: 4fr 3fr 3fr;\r\n  gap: 1rem;\r\n}\r\n\r\n.footer h3 {\r\n  font-size: var(--subtitle);\r\n}\r\n\r\n.footer p {\r\n  font-size: var(--small);\r\n}\r\n\r\n.footer-upper .logo {\r\n  grid-column-start: 3;\r\n  justify-self: flex-end;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.footer-upper .logo a {\r\n  font-size: var(--h2);\r\n  color: var(--bg);\r\n}\r\n\r\n.color-effect.contrast,\r\n.color-effect.contrast i {\r\n  background: linear-gradient(120deg, var(--primarycontrast), var(--accent));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.footer .container {\r\n  padding: 0.5rem;\r\n  grid-row: 1 / span 2;\r\n}\r\n\r\n.icons .fa {\r\n  font-size: var(--p);\r\n  transition: 0.5s;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.icons .fa:hover {\r\n  transform: translate(-6px, 3px);\r\n  box-shadow: 6px -3px var(--accent);\r\n}\r\n\r\n.attribution {\r\n  grid-column: 2 / span 2;\r\n  padding-right: 0.5rem;\r\n  margin-top: 2rem;\r\n  align-self: flex-end;\r\n  opacity: 0.6;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.footer .attribution p {\r\n  font-size: 10px;\r\n}\r\n\r\n.attribution a {\r\n  color: var(--primarycontrast);\r\n}\r\n\r\n.separator {\r\n  margin-top: 1rem;\r\n  width: 95%;\r\n  height: 1px;\r\n  background-color: var(--bg);\r\n  opacity: 0.3;\r\n}\r\n\r\n.footer-box {\r\n  padding: 0 0.5rem;\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 60em) {\r\n  .footer .feedback {\r\n    width: 100%;\r\n    grid-column: 1 / span 2;\r\n    grid-row: 1;\r\n  }\r\n  .footer .connect {\r\n    grid-row-start: 2;\r\n    grid-column: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 50em) {\r\n  .footer-upper {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .footer-upper .logo {\r\n    justify-self: flex-start;\r\n  }\r\n\r\n  .footer .footer-upper div {\r\n    grid-column: 1;\r\n    grid-row: auto;\r\n  }\r\n  .footer-box {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 40em) {\r\n  .footer {\r\n    padding: 2rem 10%;\r\n  }\r\n\r\n  .footer h3 {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\n.global-Container {\r\n  margin-top: 100px;\r\n  padding-top: 10rem;\r\n  height: calc(100vh - 100px);\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n  overflow-x: auto;\r\n}\r\n\r\n.illustration {\r\n  width: 250px;\r\n  height: 500px;\r\n  flex-shrink: 0;\r\n  border: 4px solid var(--secondary);\r\n  border-radius: 1rem;\r\n  border-bottom-left-radius: 1rem;\r\n}\r\n\r\n.animation-box {\r\n  width: 500px;\r\n  height: 500px;\r\n  flex-shrink: 0;\r\n  aspect-ratio: 1 / 1;\r\n  overflow: hidden;\r\n  border: 4px solid var(--text);\r\n  border-radius: 1rem;\r\n}\r\n\r\n.animation-area {\r\n  display: grid;\r\n}\r\n\r\n.controls {\r\n  background-color: var(--secondarylight);\r\n  width: 250px;\r\n  height: 500px;\r\n  flex-shrink: 0;\r\n  border: 4px solid var(--secondary);\r\n  border-radius: 1rem;\r\n}\r\n\r\n.controls input[type=\"radio\"] + label {\r\n  cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://CodeGraph/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://CodeGraph/./src/css/styles.css?");

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

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\r\n\r\nconst hamburgerIcon = document.getElementById(\"hamburger-icon\");\r\nconst humburgerItems = document.querySelectorAll(\"#hamburger-items a\");\r\n\r\ndocument.getElementById(\"hamburger-icon\").addEventListener(\"click\", toggleMenu);\r\ndocument.querySelectorAll(\"#hamburger-items a\").forEach((item) => {\r\n  item.addEventListener(\"click\", toggleMenu);\r\n});\r\n\r\nfunction toggleMenu() {\r\n  const icon = document.querySelector(\".hamburger-icon\");\r\n  const items = document.querySelector(\".hamburger-items\");\r\n  icon.classList.toggle(\"open\");\r\n  items.classList.toggle(\"open\");\r\n}\r\n\n\n//# sourceURL=webpack://CodeGraph/./src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;