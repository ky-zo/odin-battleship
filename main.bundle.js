(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@100;200;300;400;500;600;700;800;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: 'Inconsolata', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.grid {\n    display: grid;\n    /* height: 300px; */\n    /* width: 300px; */\n    grid-template-columns: repeat(10, 1fr);\n    gap: 0px;\n}\n.cell {\n    border: 0.1px solid black;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.screenplay {\n    display: flex;\n    gap: 50px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.p1,\n.p2 {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.available {\n    background-color: #eee;\n    cursor: pointer;\n}\n\n.ships {\n    display: flex;\n    max-width: 300px;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.boat {\n    background-color: #eee;\n    height: 20px;\n    border-radius: 4px;\n}\n\n.size-5 {\n    width: 150px;\n}\n\n.size-4 {\n    width: 120px;\n}\n\n.size-3 {\n    width: 90px;\n}\n\n.size-2 {\n    width: 60px;\n}\n.size-1 {\n    width: 30px;\n}\n\n.myships {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nli {\n    list-style: none;\n}\n\n.hit {\n    background-color: lightcoral;\n    cursor: default;\n}\n\n.miss {\n    background-color: lightblue;\n    cursor: default;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,sCAAsC;IACtC,QAAQ;AACZ;AACA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\nbody {\n    font-family: 'Inconsolata', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.grid {\n    display: grid;\n    /* height: 300px; */\n    /* width: 300px; */\n    grid-template-columns: repeat(10, 1fr);\n    gap: 0px;\n}\n.cell {\n    border: 0.1px solid black;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.screenplay {\n    display: flex;\n    gap: 50px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.p1,\n.p2 {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.available {\n    background-color: #eee;\n    cursor: pointer;\n}\n\n.ships {\n    display: flex;\n    max-width: 300px;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.boat {\n    background-color: #eee;\n    height: 20px;\n    border-radius: 4px;\n}\n\n.size-5 {\n    width: 150px;\n}\n\n.size-4 {\n    width: 120px;\n}\n\n.size-3 {\n    width: 90px;\n}\n\n.size-2 {\n    width: 60px;\n}\n.size-1 {\n    width: 30px;\n}\n\n.myships {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nli {\n    list-style: none;\n}\n\n.hit {\n    background-color: lightcoral;\n    cursor: default;\n}\n\n.miss {\n    background-color: lightblue;\n    cursor: default;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/game */ "./src/js/game.js");
/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/dom */ "./src/js/dom.js");
/* harmony import */ var _js_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_dom__WEBPACK_IMPORTED_MODULE_2__);




const theGame = new _js_game__WEBPACK_IMPORTED_MODULE_1__["default"]('User', 'Computer')

theGame.gameStart()

console.log(theGame)
// theGame.gameLoop()


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ (() => {

// const ships = document.querySelector('.ships')
// const flipButton = document.querySelector('#flip-boat')

// let angle = 0

// function flip() {
//     const myShips = Array.from(ships.children)
//     angle = angle === 0 ? (angle = 90) : (angle = 0)

//     myShips.forEach((ship) => (ship.style.transform = `rotate(${angle}deg)`))
// }

// flipButton.addEventListener('click', flip)


/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/player.js");


class Game {
    constructor(player1, player2) {
        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](player1)
        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](player2, true)
        this.currentPlayer = this.player1
        this.opponent = this.player2
    }

    gameStart() {
        this.shipsSetup() // Sample ships. To be deleted later.
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
        const gameGrid1 = document.querySelector('.player1>.grid')
        const gameGrid2 = document.querySelector('.player2>.grid')
        gameGrid1.textContent = ''
        gameGrid2.textContent = ''

        for (let i = 0; i < this.player1.gameboard.board.length; i++) {
            for (let j = 0; j < this.player1.gameboard.board[i].length; j++) {
                const cell = document.createElement('div')
                const cell2 = document.createElement('div')
                cell.className = `cell r${i} c${j}`
                cell2.className = `cell r${i} c${j}`

                cell2.addEventListener(
                    'click',
                    () => {
                        this.gameLoop(i, j)
                    },
                    { once: true }
                )
                cell2.addEventListener('mouseover', () => {
                    cell2.classList.add('available')
                })
                cell2.addEventListener('mouseleave', () => {
                    cell2.classList.remove('available')
                })

                gameGrid1.appendChild(cell)
                gameGrid2.appendChild(cell2)
            }
        }
        this.updateShips()
        this.boardsUpdate()
    }

    boardsUpdate() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.querySelector(`#player1 > .cell.r${i}.c${j}`)
                cell.textContent = this.translateGridValue(this.player1.gameboard.board[i][j])
                if (cell.textContent === '🔥') {
                    cell.classList.add('hit')
                } else if (cell.textContent === '💧') {
                    cell.classList.add('miss')
                }
            }
        }

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const cell = document.querySelector(`#player2 > .cell.r${i}.c${j}`)
                cell.textContent = this.translateGridValue(this.player2.gameboard.board[i][j])
                switch (cell.textContent) {
                    case '🔥':
                        cell.classList.add('hit')
                        break
                    case '💧':
                        cell.classList.add('miss')
                        break
                    case '🚢':
                        cell.textContent = ''
                        break
                    case '💦':
                        cell.textContent = ''
                        break
                    default:
                        break
                }
            }
        }
    }

    isGameOver() {
        const player1Lost = this.player1.gameboard.isFinished()
        const player2Lost = this.player2.gameboard.isFinished()

        if (player1Lost || player2Lost) {
            const winner = player1Lost ? this.player2.name : this.player1.name
            const info = document.querySelector('#info')
            info.textContent = `The Winner is: ${winner}`
            return true
        }
        return false
    }

    gameLoop(i, j) {
        // this.currentPlayer.nextMove(i, j) ????
        if (this.isGameOver()) return
        this.switchPlayers()
        this.currentPlayer.gameboard.receiveAttack(i, j)
        this.updateShips()
        this.boardsUpdate()
        setTimeout(() => {
            if (this.currentPlayer.ai) {
                const [aiMoveI, aiMoveJ] = this.generateAIMove() // Implement this function to generate AI moves
                this.gameLoop(aiMoveI, aiMoveJ)
            }
        }, 250)
    }

    switchPlayers() {
        ;[this.currentPlayer, this.opponent] = [this.opponent, this.currentPlayer]
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
    }

    shipsSetup() {
        // To be killed later
        this.player1.gameboard.place(2, 3, 4, true)
        this.player1.gameboard.place(7, 2, 3, false)
        this.player1.gameboard.place(0, 9, 2, true)
        this.player1.gameboard.place(6, 6, 1, true)

        const shipsData = [
            { length: 5, count: 1 },
            { length: 4, count: 1 },
            { length: 3, count: 1 },
            { length: 2, count: 1 },
            { length: 1, count: 1 },
        ]

        this.placeRandomShips(this.player2.gameboard, shipsData)
    }

    generateAIMove() {
        let moveI
        let moveJ
        do {
            moveI = Math.floor(Math.random() * this.opponent.gameboard.board.length)
            moveJ = Math.floor(Math.random() * this.opponent.gameboard.board.length)
        } while (this.opponent.gameboard.board[moveI][moveJ] === 'M' || this.opponent.gameboard.board[moveI][moveJ] === 'X')

        return [moveI, moveJ]
    }

    updateShips() {
        const shipList1 = document.querySelector('.player1>.ships')
        const shipList2 = document.querySelector('.player2>.ships')

        shipList1.textContent = ''
        shipList2.textContent = ''

        this.player1.gameboard.ships.forEach((ship, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `Ship ${index + 1}: Length ${ship.length}, Hits ${ship.hitCount}, Sunk ${ship.sunk}`
            shipList1.appendChild(listItem)
        })
        this.player2.gameboard.ships.forEach((ship, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `Ship ${index + 1}: Length ${ship.length}, Hits ${ship.hitCount}, Sunk ${ship.sunk}`
            shipList2.appendChild(listItem)
        })
    }

    translateGridValue(value) {
        if (value.constructor.name === 'Ship') {
            return '🚢'
        }
        switch (value) {
            case 0:
                return ''
            case 'P':
                return '💧'
            case 'M':
                return '💧'
            case 'X':
                return '🔥'
            case 'B':
                return '💦'
            default:
                return 'ERR'
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    placeRandomShips(gameboard, shipsData) {
        for (const shipData of shipsData) {
            let placed = false

            while (!placed) {
                const x = this.getRandomInt(0, this.player2.gameboard.board.length - 1)
                const y = this.getRandomInt(0, this.player2.gameboard.board.length - 1)
                const directionVertical = Math.random() < 0.5

                const shipLength = shipData.length
                const shipCount = shipData.count

                for (let i = 0; i < shipCount; i++) {
                    if (this.player2.gameboard.place(x, y, shipLength, directionVertical)) {
                        placed = true
                    }
                }
            }
        }
    }
}


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


class Gameboard {
    constructor(size, ships = []) {
        this.board = Array.from({ length: size }, () => Array(size).fill(0))
        this.ships = ships
    }

    place(x, y, length, directionVertical) {
        for (let i = 0; i < length; i++) {
            if (directionVertical) {
                if (x + length > this.board.length || this.board[x + i][y] !== 0) {
                    return false
                }
                // Check for adjacent cells
                if (
                    (y > 0 && this.board[x + i][y - 1] !== 0) ||
                    (y < this.board.length - 1 && this.board[x + i][y + 1] !== 0) ||
                    (i > 0 && this.board[x + i - 1][y] !== 0) ||
                    (i < length - 1 && this.board[x + i + 1][y] !== 0)
                ) {
                    return false
                }
            } else {
                if (y + length > this.board.length || this.board[x][y + i] !== 0) {
                    return false
                }
                // Check for adjacent cells
                if (
                    (x > 0 && this.board[x - 1][y + i] !== 0) ||
                    (x < this.board.length - 1 && this.board[x + 1][y + i] !== 0) ||
                    (i > 0 && this.board[x][y + i - 1] !== 0) ||
                    (i < length - 1 && this.board[x][y + i + 1] !== 0)
                ) {
                    return false
                }
            }
        }
        this.board[x][y] = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length)
        this.blockAdjacentCells(x, y, length, directionVertical)
        this.ships.push(this.board[x][y])
        for (let i = 1; i < length; i++) {
            if (directionVertical) {
                this.board[x + i][y] = this.board[x][y]
            } else {
                this.board[x][y + i] = this.board[x][y]
            }
        }
        return true
    }

    blockAdjacentCells(x, y, length, directionVertical) {
        const startRow = Math.max(x - 1, 0)
        const startCol = Math.max(y - 1, 0)
        const endRow = directionVertical ? Math.min(x + length, this.board.length - 1) : Math.min(x + 1, this.board.length - 1)
        const endCol = directionVertical ? Math.min(y + 1, this.board.length - 1) : Math.min(y + length, this.board.length - 1)

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (this.board[row][col] === 0) {
                    this.board[row][col] = 'B' // Blocking with -1
                }
            }
        }
    }

    receiveAttack(x, y) {
        if (this.board[x][y].constructor.name === 'Ship') {
            console.log('test')
            this.board[x][y].hit()
            const sunkStatus = this.board[x][y].sunk
            this.board[x][y] = 'X'
            return sunkStatus
        }
        this.board[x][y] = 'M'
    }

    isFinished() {
        return this.ships.every((ship) => ship.sunk === true)
    }
}


/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


class Player {
    constructor(name, ai = false) {
        this.name = name
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](10)
        this.ai = ai
    }

    // updateGame() {
    //     let gameGrid = ''
    //     if (this.ai === true) {
    //         gameGrid = document.getElementById('game-grid-ai')
    //     } else {
    //         gameGrid = document.getElementById('game-grid')
    //     }
    //     gameGrid.textContent = ''

    //     for (let i = 0; i < this.gameboard.board.length; i++) {
    //         for (let j = 0; j < this.gameboard.board[i].length; j++) {
    //             const cell = document.createElement('div')
    //             cell.className = 'cell'
    //             cell.textContent = this.updateCell(i, j)
    //             if (this.ai === true && cell.textContent === '') {
    // cell.addEventListener('click', () => {
    //     this.gameLoop(i, j)
    // })
    // cell.addEventListener('mouseover', () => {
    //     cell.classList.add('available')
    // })
    // cell.addEventListener('mouseleave', () => {
    //     cell.classList.remove('available')
    // })
    //             }
    //             gameGrid.appendChild(cell)
    //         }
    //     }
    //     this.updateShips()
    // }

    // updateCell(i, j) {
    //     if (this.gameboard.board[i][j].constructor.name === 'Ship') {
    //         if (this.ai !== true) return '🚢'
    //     } else {
    //         switch (this.gameboard.board[i][j]) {
    //             case 0:
    //                 return ''
    //             case 'P':
    //                 return '💧'
    //             case 'M':
    //                 return '💧'
    //             case 'X':
    //                 return '🔥'
    //             default:
    //                 return 'ERR'
    //         }
    //     }
    // }

    // nextMove(i, j) {
    //     this.gameboard.receiveAttack(i, j)
    //     this.updateGame()
    // }
}


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length, hitCount = 0, sunk = false) {
        this.length = length // number
        this.hitCount = hitCount // number
        this.sunk = sunk // boolean
    }

    hit() {
        this.hitCount += 1
        this.sunk = this.hitCount >= this.length
    }

    isSunk() {
        return this.sunk
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2pzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbmNvbnNvbGF0YTp3Z2h0QDEwMDsyMDA7MzAwOzQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0luY29uc29sYXRhJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGhlaWdodDogMzAwcHg7ICovXFxuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdhcDogMHB4O1xcbn1cXG4uY2VsbCB7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2NyZWVucGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNTBweDtcXG59XFxuXFxuaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wMSxcXG4ucDIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5hdmFpbGFibGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uYm9hdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uc2l6ZS01IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5cXG4uc2l6ZS00IHtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbn1cXG5cXG4uc2l6ZS0zIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxufVxcblxcbi5zaXplLTIge1xcbiAgICB3aWR0aDogNjBweDtcXG59XFxuLnNpemUtMSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4ubXlzaGlwcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFFBQVE7QUFDWjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDBweDtcXG59XFxuLmNlbGwge1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNjcmVlbnBsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucDEsXFxuLnAyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJvYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNpemUtNSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNpemUtNCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLnNpemUtMyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uc2l6ZS0yIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcbi5zaXplLTEge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm15c2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnXG5pbXBvcnQgJy4vanMvZG9tJ1xuXG5jb25zdCB0aGVHYW1lID0gbmV3IEdhbWUoJ1VzZXInLCAnQ29tcHV0ZXInKVxuXG50aGVHYW1lLmdhbWVTdGFydCgpXG5cbmNvbnNvbGUubG9nKHRoZUdhbWUpXG4vLyB0aGVHYW1lLmdhbWVMb29wKClcbiIsIi8vIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXBzJylcbi8vIGNvbnN0IGZsaXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmxpcC1ib2F0JylcblxuLy8gbGV0IGFuZ2xlID0gMFxuXG4vLyBmdW5jdGlvbiBmbGlwKCkge1xuLy8gICAgIGNvbnN0IG15U2hpcHMgPSBBcnJheS5mcm9tKHNoaXBzLmNoaWxkcmVuKVxuLy8gICAgIGFuZ2xlID0gYW5nbGUgPT09IDAgPyAoYW5nbGUgPSA5MCkgOiAoYW5nbGUgPSAwKVxuXG4vLyAgICAgbXlTaGlwcy5mb3JFYWNoKChzaGlwKSA9PiAoc2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7YW5nbGV9ZGVnKWApKVxuLy8gfVxuXG4vLyBmbGlwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcClcbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcihwbGF5ZXIxKVxuICAgICAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKHBsYXllcjIsIHRydWUpXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyMVxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gdGhpcy5wbGF5ZXIyXG4gICAgfVxuXG4gICAgZ2FtZVN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNoaXBzU2V0dXAoKSAvLyBTYW1wbGUgc2hpcHMuIFRvIGJlIGRlbGV0ZWQgbGF0ZXIuXG4gICAgICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHVybi1kaXNwbGF5JylcbiAgICAgICAgdHVybi50ZXh0Q29udGVudCA9IGBUdXJuOiAke3RoaXMuY3VycmVudFBsYXllci5uYW1lfWBcbiAgICAgICAgY29uc3QgZ2FtZUdyaWQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjE+LmdyaWQnKVxuICAgICAgICBjb25zdCBnYW1lR3JpZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMj4uZ3JpZCcpXG4gICAgICAgIGdhbWVHcmlkMS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIGdhbWVHcmlkMi50ZXh0Q29udGVudCA9ICcnXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucGxheWVyMS5nYW1lYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbCByJHtpfSBjJHtqfWBcbiAgICAgICAgICAgICAgICBjZWxsMi5jbGFzc05hbWUgPSBgY2VsbCByJHtpfSBjJHtqfWBcblxuICAgICAgICAgICAgICAgIGNlbGwyLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUxvb3AoaSwgailcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY2VsbDIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QuYWRkKCdhdmFpbGFibGUnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgY2VsbDIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbDIuY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJylcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgZ2FtZUdyaWQxLmFwcGVuZENoaWxkKGNlbGwpXG4gICAgICAgICAgICAgICAgZ2FtZUdyaWQyLmFwcGVuZENoaWxkKGNlbGwyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2hpcHMoKVxuICAgICAgICB0aGlzLmJvYXJkc1VwZGF0ZSgpXG4gICAgfVxuXG4gICAgYm9hcmRzVXBkYXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyMSA+IC5jZWxsLnIke2l9LmMke2p9YClcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdGhpcy50cmFuc2xhdGVHcmlkVmFsdWUodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXSlcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ/CflKUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICfwn5KnJykge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIyID4gLmNlbGwuciR7aX0uYyR7an1gKVxuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0aGlzLnRyYW5zbGF0ZUdyaWRWYWx1ZSh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdKVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2VsbC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICfwn5SlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ/CfkqcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ/CfmqInOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICfwn5KmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc3QgcGxheWVyMUxvc3QgPSB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmlzRmluaXNoZWQoKVxuICAgICAgICBjb25zdCBwbGF5ZXIyTG9zdCA9IHRoaXMucGxheWVyMi5nYW1lYm9hcmQuaXNGaW5pc2hlZCgpXG5cbiAgICAgICAgaWYgKHBsYXllcjFMb3N0IHx8IHBsYXllcjJMb3N0KSB7XG4gICAgICAgICAgICBjb25zdCB3aW5uZXIgPSBwbGF5ZXIxTG9zdCA/IHRoaXMucGxheWVyMi5uYW1lIDogdGhpcy5wbGF5ZXIxLm5hbWVcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mbycpXG4gICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gYFRoZSBXaW5uZXIgaXM6ICR7d2lubmVyfWBcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZ2FtZUxvb3AoaSwgaikge1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRQbGF5ZXIubmV4dE1vdmUoaSwgaikgPz8/P1xuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKCkpIHJldHVyblxuICAgICAgICB0aGlzLnN3aXRjaFBsYXllcnMoKVxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgailcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcygpXG4gICAgICAgIHRoaXMuYm9hcmRzVXBkYXRlKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyLmFpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2FpTW92ZUksIGFpTW92ZUpdID0gdGhpcy5nZW5lcmF0ZUFJTW92ZSgpIC8vIEltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIEFJIG1vdmVzXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTG9vcChhaU1vdmVJLCBhaU1vdmVKKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApXG4gICAgfVxuXG4gICAgc3dpdGNoUGxheWVycygpIHtcbiAgICAgICAgO1t0aGlzLmN1cnJlbnRQbGF5ZXIsIHRoaXMub3Bwb25lbnRdID0gW3RoaXMub3Bwb25lbnQsIHRoaXMuY3VycmVudFBsYXllcl1cbiAgICAgICAgY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuLWRpc3BsYXknKVxuICAgICAgICB0dXJuLnRleHRDb250ZW50ID0gYFR1cm46ICR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9YFxuICAgIH1cblxuICAgIHNoaXBzU2V0dXAoKSB7XG4gICAgICAgIC8vIFRvIGJlIGtpbGxlZCBsYXRlclxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnBsYWNlKDIsIDMsIDQsIHRydWUpXG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2UoNywgMiwgMywgZmFsc2UpXG4gICAgICAgIHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2UoMCwgOSwgMiwgdHJ1ZSlcbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5wbGFjZSg2LCA2LCAxLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IHNoaXBzRGF0YSA9IFtcbiAgICAgICAgICAgIHsgbGVuZ3RoOiA1LCBjb3VudDogMSB9LFxuICAgICAgICAgICAgeyBsZW5ndGg6IDQsIGNvdW50OiAxIH0sXG4gICAgICAgICAgICB7IGxlbmd0aDogMywgY291bnQ6IDEgfSxcbiAgICAgICAgICAgIHsgbGVuZ3RoOiAyLCBjb3VudDogMSB9LFxuICAgICAgICAgICAgeyBsZW5ndGg6IDEsIGNvdW50OiAxIH0sXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnBsYWNlUmFuZG9tU2hpcHModGhpcy5wbGF5ZXIyLmdhbWVib2FyZCwgc2hpcHNEYXRhKVxuICAgIH1cblxuICAgIGdlbmVyYXRlQUlNb3ZlKCkge1xuICAgICAgICBsZXQgbW92ZUlcbiAgICAgICAgbGV0IG1vdmVKXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIG1vdmVJID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoKVxuICAgICAgICAgICAgbW92ZUogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5ib2FyZC5sZW5ndGgpXG4gICAgICAgIH0gd2hpbGUgKHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmJvYXJkW21vdmVJXVttb3ZlSl0gPT09ICdNJyB8fCB0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5ib2FyZFttb3ZlSV1bbW92ZUpdID09PSAnWCcpXG5cbiAgICAgICAgcmV0dXJuIFttb3ZlSSwgbW92ZUpdXG4gICAgfVxuXG4gICAgdXBkYXRlU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBMaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxPi5zaGlwcycpXG4gICAgICAgIGNvbnN0IHNoaXBMaXN0MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIyPi5zaGlwcycpXG5cbiAgICAgICAgc2hpcExpc3QxLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgc2hpcExpc3QyLnRleHRDb250ZW50ID0gJydcblxuICAgICAgICB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYFNoaXAgJHtpbmRleCArIDF9OiBMZW5ndGggJHtzaGlwLmxlbmd0aH0sIEhpdHMgJHtzaGlwLmhpdENvdW50fSwgU3VuayAke3NoaXAuc3Vua31gXG4gICAgICAgICAgICBzaGlwTGlzdDEuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucGxheWVyMi5nYW1lYm9hcmQuc2hpcHMuZm9yRWFjaCgoc2hpcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBgU2hpcCAke2luZGV4ICsgMX06IExlbmd0aCAke3NoaXAubGVuZ3RofSwgSGl0cyAke3NoaXAuaGl0Q291bnR9LCBTdW5rICR7c2hpcC5zdW5rfWBcbiAgICAgICAgICAgIHNoaXBMaXN0Mi5hcHBlbmRDaGlsZChsaXN0SXRlbSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0cmFuc2xhdGVHcmlkVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTaGlwJykge1xuICAgICAgICAgICAgcmV0dXJuICfwn5qiJ1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgIGNhc2UgJ1AnOlxuICAgICAgICAgICAgICAgIHJldHVybiAn8J+SpydcbiAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIHJldHVybiAn8J+SpydcbiAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAn8J+UpSdcbiAgICAgICAgICAgIGNhc2UgJ0InOlxuICAgICAgICAgICAgICAgIHJldHVybiAn8J+SpidcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdFUlInXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cbiAgICB9XG5cbiAgICBwbGFjZVJhbmRvbVNoaXBzKGdhbWVib2FyZCwgc2hpcHNEYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcERhdGEgb2Ygc2hpcHNEYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2VcblxuICAgICAgICAgICAgd2hpbGUgKCFwbGFjZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgdGhpcy5wbGF5ZXIyLmdhbWVib2FyZC5ib2FyZC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFJhbmRvbUludCgwLCB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uVmVydGljYWwgPSBNYXRoLnJhbmRvbSgpIDwgMC41XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcERhdGEubGVuZ3RoXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcENvdW50ID0gc2hpcERhdGEuY291bnRcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMi5nYW1lYm9hcmQucGxhY2UoeCwgeSwgc2hpcExlbmd0aCwgZGlyZWN0aW9uVmVydGljYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgc2hpcHMgPSBbXSkge1xuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBBcnJheShzaXplKS5maWxsKDApKVxuICAgICAgICB0aGlzLnNoaXBzID0gc2hpcHNcbiAgICB9XG5cbiAgICBwbGFjZSh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvblZlcnRpY2FsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25WZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICh4ICsgbGVuZ3RoID4gdGhpcy5ib2FyZC5sZW5ndGggfHwgdGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBhZGphY2VudCBjZWxsc1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHkgPiAwICYmIHRoaXMuYm9hcmRbeCArIGldW3kgLSAxXSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHkgPCB0aGlzLmJvYXJkLmxlbmd0aCAtIDEgJiYgdGhpcy5ib2FyZFt4ICsgaV1beSArIDFdICE9PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoaSA+IDAgJiYgdGhpcy5ib2FyZFt4ICsgaSAtIDFdW3ldICE9PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoaSA8IGxlbmd0aCAtIDEgJiYgdGhpcy5ib2FyZFt4ICsgaSArIDFdW3ldICE9PSAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh5ICsgbGVuZ3RoID4gdGhpcy5ib2FyZC5sZW5ndGggfHwgdGhpcy5ib2FyZFt4XVt5ICsgaV0gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBhZGphY2VudCBjZWxsc1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKHggPiAwICYmIHRoaXMuYm9hcmRbeCAtIDFdW3kgKyBpXSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKHggPCB0aGlzLmJvYXJkLmxlbmd0aCAtIDEgJiYgdGhpcy5ib2FyZFt4ICsgMV1beSArIGldICE9PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoaSA+IDAgJiYgdGhpcy5ib2FyZFt4XVt5ICsgaSAtIDFdICE9PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAoaSA8IGxlbmd0aCAtIDEgJiYgdGhpcy5ib2FyZFt4XVt5ICsgaSArIDFdICE9PSAwKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IG5ldyBTaGlwKGxlbmd0aClcbiAgICAgICAgdGhpcy5ibG9ja0FkamFjZW50Q2VsbHMoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb25WZXJ0aWNhbClcbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHRoaXMuYm9hcmRbeF1beV0pXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25WZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gdGhpcy5ib2FyZFt4XVt5XVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHRoaXMuYm9hcmRbeF1beV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGJsb2NrQWRqYWNlbnRDZWxscyh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvblZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5tYXgoeCAtIDEsIDApXG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5tYXgoeSAtIDEsIDApXG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IGRpcmVjdGlvblZlcnRpY2FsID8gTWF0aC5taW4oeCArIGxlbmd0aCwgdGhpcy5ib2FyZC5sZW5ndGggLSAxKSA6IE1hdGgubWluKHggKyAxLCB0aGlzLmJvYXJkLmxlbmd0aCAtIDEpXG4gICAgICAgIGNvbnN0IGVuZENvbCA9IGRpcmVjdGlvblZlcnRpY2FsID8gTWF0aC5taW4oeSArIDEsIHRoaXMuYm9hcmQubGVuZ3RoIC0gMSkgOiBNYXRoLm1pbih5ICsgbGVuZ3RoLCB0aGlzLmJvYXJkLmxlbmd0aCAtIDEpXG5cbiAgICAgICAgZm9yIChsZXQgcm93ID0gc3RhcnRSb3c7IHJvdyA8PSBlbmRSb3c7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSBzdGFydENvbDsgY29sIDw9IGVuZENvbDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbF0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSAnQicgLy8gQmxvY2tpbmcgd2l0aCAtMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU2hpcCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KClcbiAgICAgICAgICAgIGNvbnN0IHN1bmtTdGF0dXMgPSB0aGlzLmJvYXJkW3hdW3ldLnN1bmtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnWCdcbiAgICAgICAgICAgIHJldHVybiBzdW5rU3RhdHVzXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9ICdNJ1xuICAgIH1cblxuICAgIGlzRmluaXNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpXG4gICAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhaSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKDEwKVxuICAgICAgICB0aGlzLmFpID0gYWlcbiAgICB9XG5cbiAgICAvLyB1cGRhdGVHYW1lKCkge1xuICAgIC8vICAgICBsZXQgZ2FtZUdyaWQgPSAnJ1xuICAgIC8vICAgICBpZiAodGhpcy5haSA9PT0gdHJ1ZSkge1xuICAgIC8vICAgICAgICAgZ2FtZUdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1ncmlkLWFpJylcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIGdhbWVHcmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZ3JpZCcpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZ2FtZUdyaWQudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5nYW1lYm9hcmQuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAvLyAgICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJ1xuICAgIC8vICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0aGlzLnVwZGF0ZUNlbGwoaSwgailcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5haSA9PT0gdHJ1ZSAmJiBjZWxsLnRleHRDb250ZW50ID09PSAnJykge1xuICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuZ2FtZUxvb3AoaSwgailcbiAgICAvLyB9KVxuICAgIC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgIC8vICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpXG4gICAgLy8gfSlcbiAgICAvLyBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgLy8gICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYXZhaWxhYmxlJylcbiAgICAvLyB9KVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBnYW1lR3JpZC5hcHBlbmRDaGlsZChjZWxsKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMudXBkYXRlU2hpcHMoKVxuICAgIC8vIH1cblxuICAgIC8vIHVwZGF0ZUNlbGwoaSwgaikge1xuICAgIC8vICAgICBpZiAodGhpcy5nYW1lYm9hcmQuYm9hcmRbaV1bal0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1NoaXAnKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5haSAhPT0gdHJ1ZSkgcmV0dXJuICfwn5qiJ1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgc3dpdGNoICh0aGlzLmdhbWVib2FyZC5ib2FyZFtpXVtqXSkge1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnUCc6XG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiAn8J+SpydcbiAgICAvLyAgICAgICAgICAgICBjYXNlICdNJzpcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuICfwn5KnJ1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgJ1gnOlxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gJ/CflKUnXG4gICAgLy8gICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuICdFUlInXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBuZXh0TW92ZShpLCBqKSB7XG4gICAgLy8gICAgIHRoaXMuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgailcbiAgICAvLyAgICAgdGhpcy51cGRhdGVHYW1lKClcbiAgICAvLyB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGhpdENvdW50ID0gMCwgc3VuayA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoIC8vIG51bWJlclxuICAgICAgICB0aGlzLmhpdENvdW50ID0gaGl0Q291bnQgLy8gbnVtYmVyXG4gICAgICAgIHRoaXMuc3VuayA9IHN1bmsgLy8gYm9vbGVhblxuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRDb3VudCArPSAxXG4gICAgICAgIHRoaXMuc3VuayA9IHRoaXMuaGl0Q291bnQgPj0gdGhpcy5sZW5ndGhcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bmtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=