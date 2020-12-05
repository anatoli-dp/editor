/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/$Component.js":
/*!*******************************!*\
  !*** ./src/DOM/$Component.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ $Component\n/* harmony export */ });\n/* harmony import */ var _functions_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/build */ \"./src/DOM/functions/build.js\");\n\r\n\r\nfunction $Component (struct) {\r\n    let temp = (0,_functions_build__WEBPACK_IMPORTED_MODULE_0__.default)(struct)\r\n\r\n    this[0] = temp[0]\r\n    this[1] = temp[1]\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/$Component.js?");

/***/ }),

/***/ "./src/DOM/$Element.js":
/*!*****************************!*\
  !*** ./src/DOM/$Element.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ $Element\n/* harmony export */ });\n/* harmony import */ var _functions_append__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/append */ \"./src/DOM/functions/append.js\");\n\r\n\r\nfunction $Element (node) {\r\n    this[0] = node\r\n}\r\n\r\n$Element.prototype = {\r\n    append: function (node) {\r\n        (0,_functions_append__WEBPACK_IMPORTED_MODULE_0__.default)(this, node)\r\n    },\r\n\r\n    content: function (content) {\r\n        this[0].innerHTML = content\r\n    },\r\n\r\n    show: function () {\r\n        this[0].style.display = 'block'\r\n    },\r\n\r\n    hide: function () {\r\n        this[0].style.display = 'none'\r\n    }\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/$Element.js?");

/***/ }),

/***/ "./src/DOM/functions/append.js":
/*!*************************************!*\
  !*** ./src/DOM/functions/append.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _$Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../$Element */ \"./src/DOM/$Element.js\");\n/* harmony import */ var _$Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../$Component */ \"./src/DOM/$Component.js\");\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root, node) {\r\n    if (node instanceof _$Element__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n        root[0].appendChild(node[0])\r\n    } else if (node instanceof _$Component__WEBPACK_IMPORTED_MODULE_1__.default) {\r\n        appendParts(root, node[0])\r\n    }\r\n}\r\n\r\nfunction appendParts (root, parts) {\r\n    let eop = false\r\n    let count = 0\r\n\r\n    while (!eop) {\r\n        let part = parts[count]\r\n        let nextPart = parts[count + 1]\r\n\r\n        if (part) {\r\n            if (part instanceof _$Element__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n                root.append(part)\r\n\r\n                if (nextPart instanceof Array) {\r\n                    appendParts(part, nextPart)\r\n                    count++\r\n                }\r\n            }\r\n        } else {\r\n            eop = true\r\n        }\r\n\r\n        count++\r\n    }\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/functions/append.js?");

/***/ }),

/***/ "./src/DOM/functions/build.js":
/*!************************************!*\
  !*** ./src/DOM/functions/build.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/DOM/index.js\");\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(struct) {\r\n    return build(struct)\r\n}\r\n\r\nfunction build (struct) {\r\n    let eos = false\r\n    let count = 0\r\n    let com = []\r\n    let css = []\r\n\r\n    while (!eos) {\r\n        let temp = null\r\n        let part = struct[count]\r\n\r\n        if (part) {\r\n            if (typeof part === 'string') {\r\n                temp = _index__WEBPACK_IMPORTED_MODULE_0__.default.make(part)\r\n                com.push(temp)\r\n            } else if (typeof part === 'object') {\r\n                if (part instanceof Array) {\r\n                    let newPart = build(part)\r\n                    com.push(newPart[0])\r\n\r\n                    if (newPart[1].length > 0) {\r\n                        //\r\n                    }\r\n                } else {\r\n                    //\r\n                }\r\n            }\r\n        } else {\r\n            eos = true\r\n        }\r\n\r\n        count++\r\n    }\r\n\r\n    return [com, css]\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/functions/build.js?");

/***/ }),

/***/ "./src/DOM/functions/find.js":
/*!***********************************!*\
  !*** ./src/DOM/functions/find.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root, selector) {\r\n    return root.querySelector(selector)\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/functions/find.js?");

/***/ }),

/***/ "./src/DOM/functions/make.js":
/*!***********************************!*\
  !*** ./src/DOM/functions/make.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\r\n    let selectors = selector.split('.')\r\n    let el = null\r\n\r\n    for (let i = 0; i < selectors.length; i++) {\r\n        if (i === 0) {\r\n            if (selectors[i].includes('#')) {\r\n                let split = selectors[i].split('#')\r\n\r\n                el = document.createElement(split[0])\r\n                el.id = split[1]\r\n            } else {\r\n                el = document.createElement(selectors[i])\r\n            }\r\n        } else {\r\n            el.classList.add(selectors[i])\r\n        }\r\n    }\r\n\r\n    return el\r\n}\n\n//# sourceURL=webpack://editor/./src/DOM/functions/make.js?");

/***/ }),

/***/ "./src/DOM/index.js":
/*!**************************!*\
  !*** ./src/DOM/index.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _$Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./$Element */ \"./src/DOM/$Element.js\");\n/* harmony import */ var _$Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./$Component */ \"./src/DOM/$Component.js\");\n/* harmony import */ var _functions_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/find */ \"./src/DOM/functions/find.js\");\n/* harmony import */ var _functions_make__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/make */ \"./src/DOM/functions/make.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    find: function (selector) {\r\n        return new _$Element__WEBPACK_IMPORTED_MODULE_0__.default((0,_functions_find__WEBPACK_IMPORTED_MODULE_2__.default)(document, selector))\r\n    },\r\n\r\n    build: function (struct) {\r\n        return new _$Component__WEBPACK_IMPORTED_MODULE_1__.default(struct)\r\n    },\r\n\r\n    make: function (selector) {\r\n        return new _$Element__WEBPACK_IMPORTED_MODULE_0__.default((0,_functions_make__WEBPACK_IMPORTED_MODULE_3__.default)(selector))\r\n    }\r\n});\n\n//# sourceURL=webpack://editor/./src/DOM/index.js?");

/***/ }),

/***/ "./src/Panels/Editor/Editor/frame.js":
/*!*******************************************!*\
  !*** ./src/Panels/Editor/Editor/frame.js ***!
  \*******************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../DOM */ \"./src/DOM/index.js\");\n\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('.eds-body-left').append(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.build([\r\n    'div.eds-editor-frame',\r\n    [\r\n        'div.eds-frame-control',\r\n        'div.eds-frame-canvas'\r\n    ]\r\n]))\n\n//# sourceURL=webpack://editor/./src/Panels/Editor/Editor/frame.js?");

/***/ }),

/***/ "./src/Panels/Editor/viewBar.js":
/*!**************************************!*\
  !*** ./src/Panels/Editor/viewBar.js ***!
  \**************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ \"./src/DOM/index.js\");\n\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('.eds-body-left').append(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.make('div.eds-editor-viewbar'))\n\n//# sourceURL=webpack://editor/./src/Panels/Editor/viewBar.js?");

/***/ }),

/***/ "./src/Panels/Selectors/Tabs/layers.js":
/*!*********************************************!*\
  !*** ./src/Panels/Selectors/Tabs/layers.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dom, editor, container) {\r\n    container.hide()\r\n    dom.find('#eds-layerManager').show()\r\n}\n\n//# sourceURL=webpack://editor/./src/Panels/Selectors/Tabs/layers.js?");

/***/ }),

/***/ "./src/Panels/Selectors/Tabs/styles.js":
/*!*********************************************!*\
  !*** ./src/Panels/Selectors/Tabs/styles.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dom, editor, container) {\r\n    container.hide()\r\n    dom.find('#eds-styleManager').show()\r\n}\n\n//# sourceURL=webpack://editor/./src/Panels/Selectors/Tabs/styles.js?");

/***/ }),

/***/ "./src/Panels/Selectors/selectors.js":
/*!*******************************************!*\
  !*** ./src/Panels/Selectors/selectors.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ \"./src/DOM/index.js\");\n/* harmony import */ var _Tabs_layers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs/layers */ \"./src/Panels/Selectors/Tabs/layers.js\");\n/* harmony import */ var _Tabs_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs/styles */ \"./src/Panels/Selectors/Tabs/styles.js\");\n\r\n\r\n\r\n\r\nfunction empty () {\r\n    //\r\n}\r\n\r\nlet tabs = {\r\n    layers: {\r\n        icon: 'fas fa-stream',\r\n        run: _Tabs_layers__WEBPACK_IMPORTED_MODULE_1__.default,\r\n    },\r\n    styles: {\r\n        icon: 'fas fa-paint-brush',\r\n        run: _Tabs_styles__WEBPACK_IMPORTED_MODULE_2__.default,\r\n    },\r\n    tab3: {\r\n        icon: 'fas fa-dice-d6',\r\n        run: empty,\r\n    },\r\n    tab4: {\r\n        icon: 'fas fa-dice-d6',\r\n        run: empty,\r\n    },\r\n    tab5: {\r\n        icon: 'fas fa-dice-d6',\r\n        run: empty,\r\n    },\r\n}\r\nlet activeTab = ''\r\n\r\n_DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('.eds-body-right').append(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.build([\r\n    'div.eds-selectors-title',\r\n    'div.eds-selectors-body',\r\n    [\r\n        'div#eds-layerManager.eds-selTab',\r\n        'div#eds-styleManager.eds-selTab',\r\n        'div#eds-selectors-body.eds-selTab'\r\n    ],\r\n    'div.eds-selectors-tabs'\r\n]))\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(editor) {\r\n    const cmd = editor.Commands\r\n\r\n    Object.keys(tabs).forEach(function (tab) {\r\n        let active = ''\r\n        if (tab === activeTab) {\r\n            active = '.active'\r\n            _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('.eds-selectors-title').content(tab)\r\n        }\r\n    \r\n        _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('div.eds-selectors-tabs').append(_DOM__WEBPACK_IMPORTED_MODULE_0__.default.build([\r\n            'div#eds-selTab-' + tab + '.tab' + active,\r\n            ['i.' + tabs[tab].icon.replace(' ', '.')]\r\n        ]))\r\n    \r\n        _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('div#eds-selTab-' + tab + '.tab')[0].addEventListener('click', function (e) {\r\n            let tab = e.target.id.replace('eds-selTab-', '')\r\n            cmd.run('selectors:set', tab)\r\n        })\r\n    })\r\n\r\n    cmd.add('selectors:set', function (e, s, tab) {\r\n        if (tab != activeTab) {\r\n            let container = _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('#eds-selectors-body')\r\n\r\n            if (activeTab != '') _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('#eds-selTab-' + activeTab)[0].classList.toggle('active')\r\n            _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('#eds-selTab-' + tab)[0].classList.toggle('active')\r\n\r\n            _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('#eds-layerManager').hide()\r\n            _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('#eds-styleManager').hide()\r\n\r\n            container.show()\r\n            container.content('')\r\n\r\n            tabs[tab].run(_DOM__WEBPACK_IMPORTED_MODULE_0__.default, editor, container)\r\n    \r\n            _DOM__WEBPACK_IMPORTED_MODULE_0__.default.find('.eds-selectors-title').content(tab)\r\n            activeTab = tab\r\n        }\r\n    })\r\n\r\n    cmd.run('selectors:set', 'tab3')\r\n}\n\n//# sourceURL=webpack://editor/./src/Panels/Selectors/selectors.js?");

/***/ }),

/***/ "./src/Panels/base.js":
/*!****************************!*\
  !*** ./src/Panels/base.js ***!
  \****************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ \"./src/dom/index.js\");\n\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_0__.default.find('editor-base').append(_dom__WEBPACK_IMPORTED_MODULE_0__.default.build([\r\n    'div.eds-taskbar',\r\n    'div.eds-body',\r\n    [\r\n        'div.eds-body-left',\r\n        'div.eds-body-right'\r\n    ]\r\n]))\n\n//# sourceURL=webpack://editor/./src/Panels/base.js?");

/***/ }),

/***/ "./src/Panels/index.js":
/*!*****************************!*\
  !*** ./src/Panels/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/Panels/base.js\");\n/* harmony import */ var _Selectors_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selectors/selectors */ \"./src/Panels/Selectors/selectors.js\");\n/* harmony import */ var _Editor_Editor_frame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Editor/Editor/frame */ \"./src/Panels/Editor/Editor/frame.js\");\n/* harmony import */ var _Editor_viewBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor/viewBar */ \"./src/Panels/Editor/viewBar.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(editor) {\r\n    ;(0,_Selectors_selectors__WEBPACK_IMPORTED_MODULE_1__.default)(editor)\r\n}\n\n//# sourceURL=webpack://editor/./src/Panels/index.js?");

/***/ }),

/***/ "./src/dom/$Component.js":
/*!*******************************!*\
  !*** ./src/dom/$Component.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ $Component\n/* harmony export */ });\n/* harmony import */ var _functions_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/build */ \"./src/dom/functions/build.js\");\n\r\n\r\nfunction $Component (struct) {\r\n    let temp = (0,_functions_build__WEBPACK_IMPORTED_MODULE_0__.default)(struct)\r\n\r\n    this[0] = temp[0]\r\n    this[1] = temp[1]\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/$Component.js?");

/***/ }),

/***/ "./src/dom/$Element.js":
/*!*****************************!*\
  !*** ./src/dom/$Element.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ $Element\n/* harmony export */ });\n/* harmony import */ var _functions_append__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/append */ \"./src/dom/functions/append.js\");\n\r\n\r\nfunction $Element (node) {\r\n    this[0] = node\r\n}\r\n\r\n$Element.prototype = {\r\n    append: function (node) {\r\n        (0,_functions_append__WEBPACK_IMPORTED_MODULE_0__.default)(this, node)\r\n    },\r\n\r\n    content: function (content) {\r\n        this[0].innerHTML = content\r\n    },\r\n\r\n    show: function () {\r\n        this[0].style.display = 'block'\r\n    },\r\n\r\n    hide: function () {\r\n        this[0].style.display = 'none'\r\n    }\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/$Element.js?");

/***/ }),

/***/ "./src/dom/functions/append.js":
/*!*************************************!*\
  !*** ./src/dom/functions/append.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _$Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../$Element */ \"./src/dom/$Element.js\");\n/* harmony import */ var _$Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../$Component */ \"./src/dom/$Component.js\");\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root, node) {\r\n    if (node instanceof _$Element__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n        root[0].appendChild(node[0])\r\n    } else if (node instanceof _$Component__WEBPACK_IMPORTED_MODULE_1__.default) {\r\n        appendParts(root, node[0])\r\n    }\r\n}\r\n\r\nfunction appendParts (root, parts) {\r\n    let eop = false\r\n    let count = 0\r\n\r\n    while (!eop) {\r\n        let part = parts[count]\r\n        let nextPart = parts[count + 1]\r\n\r\n        if (part) {\r\n            if (part instanceof _$Element__WEBPACK_IMPORTED_MODULE_0__.default) {\r\n                root.append(part)\r\n\r\n                if (nextPart instanceof Array) {\r\n                    appendParts(part, nextPart)\r\n                    count++\r\n                }\r\n            }\r\n        } else {\r\n            eop = true\r\n        }\r\n\r\n        count++\r\n    }\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/functions/append.js?");

/***/ }),

/***/ "./src/dom/functions/build.js":
/*!************************************!*\
  !*** ./src/dom/functions/build.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/dom/index.js\");\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(struct) {\r\n    return build(struct)\r\n}\r\n\r\nfunction build (struct) {\r\n    let eos = false\r\n    let count = 0\r\n    let com = []\r\n    let css = []\r\n\r\n    while (!eos) {\r\n        let temp = null\r\n        let part = struct[count]\r\n\r\n        if (part) {\r\n            if (typeof part === 'string') {\r\n                temp = _index__WEBPACK_IMPORTED_MODULE_0__.default.make(part)\r\n                com.push(temp)\r\n            } else if (typeof part === 'object') {\r\n                if (part instanceof Array) {\r\n                    let newPart = build(part)\r\n                    com.push(newPart[0])\r\n\r\n                    if (newPart[1].length > 0) {\r\n                        //\r\n                    }\r\n                } else {\r\n                    //\r\n                }\r\n            }\r\n        } else {\r\n            eos = true\r\n        }\r\n\r\n        count++\r\n    }\r\n\r\n    return [com, css]\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/functions/build.js?");

/***/ }),

/***/ "./src/dom/functions/find.js":
/*!***********************************!*\
  !*** ./src/dom/functions/find.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(root, selector) {\r\n    return root.querySelector(selector)\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/functions/find.js?");

/***/ }),

/***/ "./src/dom/functions/make.js":
/*!***********************************!*\
  !*** ./src/dom/functions/make.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(selector) {\r\n    let selectors = selector.split('.')\r\n    let el = null\r\n\r\n    for (let i = 0; i < selectors.length; i++) {\r\n        if (i === 0) {\r\n            if (selectors[i].includes('#')) {\r\n                let split = selectors[i].split('#')\r\n\r\n                el = document.createElement(split[0])\r\n                el.id = split[1]\r\n            } else {\r\n                el = document.createElement(selectors[i])\r\n            }\r\n        } else {\r\n            el.classList.add(selectors[i])\r\n        }\r\n    }\r\n\r\n    return el\r\n}\n\n//# sourceURL=webpack://editor/./src/dom/functions/make.js?");

/***/ }),

/***/ "./src/dom/index.js":
/*!**************************!*\
  !*** ./src/dom/index.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _$Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./$Element */ \"./src/dom/$Element.js\");\n/* harmony import */ var _$Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./$Component */ \"./src/dom/$Component.js\");\n/* harmony import */ var _functions_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/find */ \"./src/dom/functions/find.js\");\n/* harmony import */ var _functions_make__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/make */ \"./src/dom/functions/make.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    find: function (selector) {\r\n        return new _$Element__WEBPACK_IMPORTED_MODULE_0__.default((0,_functions_find__WEBPACK_IMPORTED_MODULE_2__.default)(document, selector))\r\n    },\r\n\r\n    build: function (struct) {\r\n        return new _$Component__WEBPACK_IMPORTED_MODULE_1__.default(struct)\r\n    },\r\n\r\n    make: function (selector) {\r\n        return new _$Element__WEBPACK_IMPORTED_MODULE_0__.default((0,_functions_make__WEBPACK_IMPORTED_MODULE_3__.default)(selector))\r\n    }\r\n});\n\n//# sourceURL=webpack://editor/./src/dom/index.js?");

/***/ }),

/***/ "./src/grapesjs/grapes.js":
/*!********************************!*\
  !*** ./src/grapesjs/grapes.js ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:2-16 */
/***/ ((module) => {


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Panels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panels */ \"./src/Panels/index.js\");\n/* harmony import */ var _grapesjs_grapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grapesjs/grapes */ \"./src/grapesjs/grapes.js\");\n/* harmony import */ var _grapesjs_grapes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grapesjs_grapes__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\n\r\nconst editor = _grapesjs_grapes__WEBPACK_IMPORTED_MODULE_1___default().init({\r\n    container: '.eds-frame-canvas',\r\n    fromElement: false,\r\n    height: '100%',\r\n    width: 'auto',\r\n    storageManager: false,\r\n    panels: {defaults: []},\r\n\r\n    layerManager: {\r\n        appendTo: '#eds-layerManager'\r\n    },\r\n\r\n    styleManager: {\r\n        appendTo: '#eds-styleManager',\r\n        sectors: [{\r\n            name: 'General',\r\n            open: false,\r\n            buildProps: ['float', 'display', 'position', 'top', 'right', 'left', 'bottom']\r\n        },{\r\n            name: 'Dimension',\r\n            open: false,\r\n            buildProps: [ 'width', 'height', 'max-width', 'min-height', 'margin', 'padding']\r\n        },{\r\n            name: 'Typography',\r\n            open: false,\r\n            buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align', 'text-shadow']\r\n        },{\r\n            name: 'Decorations',\r\n            open: false,\r\n            buildProps: ['border-radius-c', 'background-color', 'border-radius', 'border', 'box-shadow', 'background'],\r\n        },{\r\n            name: 'Extra',\r\n            open: false,\r\n            buildProps: ['opacity', 'transition', 'perspective', 'transform'],\r\n            properties: [{\r\n                type: 'slider',\r\n                property: 'opacity',\r\n                defaults: 1,\r\n                step: 0.01,\r\n                max: 1,\r\n                min:0,\r\n            }]\r\n        }]\r\n    }\r\n})\r\ndocument.querySelector('.gjs-editor-cont').style.height = ''\r\n\r\n;(0,_Panels__WEBPACK_IMPORTED_MODULE_0__.default)(editor)\n\n//# sourceURL=webpack://editor/./src/index.js?");

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;