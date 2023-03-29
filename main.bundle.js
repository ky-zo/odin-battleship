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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    font-family: 'Inconsolata', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.grid {\n    display: grid;\n    /* height: 300px; */\n    /* width: 300px; */\n    grid-template-columns: repeat(10, 1fr);\n    gap: 0px;\n}\n.cell {\n    border: 0.1px solid black;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.screenplay {\n    display: flex;\n    gap: 50px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.p1,\n.p2 {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.available {\n    background-color: #eee;\n    cursor: pointer;\n}\n\n.ships {\n    display: flex;\n    max-width: 300px;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.boat {\n    background-color: #eee;\n    height: 20px;\n    border-radius: 4px;\n}\n\n.size-5 {\n    width: 150px;\n}\n\n.size-4 {\n    width: 120px;\n}\n\n.size-3 {\n    width: 90px;\n}\n\n.size-2 {\n    width: 60px;\n}\n.size-1 {\n    width: 30px;\n}\n\n.myships {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nli {\n    list-style: none;\n}\n\n.hit {\n    background-color: lightcoral;\n    cursor: default;\n}\n\n.miss {\n    background-color: lightblue;\n    cursor: default;\n}\n\n#info {\n    font-size: 1.8rem;\n    font-weight: 600;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,sCAAsC;IACtC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,sCAAsC;IACtC,QAAQ;AACZ;AACA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@100;200;300;400;500;600;700;800;900&display=swap');\n\nbody {\n    font-family: 'Inconsolata', sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n}\n\n.grid {\n    display: grid;\n    /* height: 300px; */\n    /* width: 300px; */\n    grid-template-columns: repeat(10, 1fr);\n    gap: 0px;\n}\n.cell {\n    border: 0.1px solid black;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.screenplay {\n    display: flex;\n    gap: 50px;\n}\n\nh2 {\n    text-align: center;\n}\n\n.p1,\n.p2 {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.available {\n    background-color: #eee;\n    cursor: pointer;\n}\n\n.ships {\n    display: flex;\n    max-width: 300px;\n    flex-wrap: wrap;\n    gap: 10px;\n}\n\n.boat {\n    background-color: #eee;\n    height: 20px;\n    border-radius: 4px;\n}\n\n.size-5 {\n    width: 150px;\n}\n\n.size-4 {\n    width: 120px;\n}\n\n.size-3 {\n    width: 90px;\n}\n\n.size-2 {\n    width: 60px;\n}\n.size-1 {\n    width: 30px;\n}\n\n.myships {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nli {\n    list-style: none;\n}\n\n.hit {\n    background-color: lightcoral;\n    cursor: default;\n}\n\n.miss {\n    background-color: lightblue;\n    cursor: default;\n}\n\n#info {\n    font-size: 1.8rem;\n    font-weight: 600;\n}\n"],"sourceRoot":""}]);
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
;(function flipbutton() {
    const orientation = document.querySelector('#orientation')
    const button = document.querySelector('#flip')
    button.addEventListener('click', () => {
        if (orientation.textContent === 'Horizontally') {
            orientation.textContent = 'Vertically'
        } else {
            orientation.textContent = 'Horizontally'
        }
    })
})()


/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ (() => {



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


const shipsData = [
    { length: 5, count: 1 },
    { length: 4, count: 1 },
    { length: 3, count: 1 },
    { length: 2, count: 1 },
    { length: 1, count: 1 },
]

class Game {
    constructor(player1, player2) {
        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](player1)
        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](player2, true)
        this.currentPlayer = this.player1
        this.opponent = this.player2
    }

    gameStart() {
        this.shipsSetup() // AI ship setup
        const turn = document.querySelector('#turn-display')
        turn.textContent = `Turn: ${this.currentPlayer.name}`
        const gameGrid1 = document.querySelector('.player1>.grid')
        const gameGrid2 = document.querySelector('.player2>.grid')
        gameGrid1.textContent = ''
        gameGrid2.textContent = ''

        for (let i = 0; i < this.player1.gameboard.board.length; i++) {
            for (let j = 0; j < this.player1.gameboard.board[i].length; j++) {
                const cell = document.createElement('div')
                cell.className = `cell r${i} c${j}`
                cell.addEventListener(
                    'click',
                    () => {
                        this.placeShip(i, j)
                    },
                    { once: true }
                )

                gameGrid1.appendChild(cell)

                const cell2 = document.createElement('div')
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
            info.textContent = `🙌 ${winner} won the game!🙌`
            return true
        }
        return false
    }

    gameLoop(i, j) {
        // this.currentPlayer.nextMove(i, j) ????
        if (this.player1.gameboard.ships.length < 5) return
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

    placeShip(i, j) {
        if (this.player1.gameboard.ships.length === 5) return

        const firstNotPlacedIndex = shipsData.findIndex((ship) => !ship.placed)
        let direction = ''

        const orientation = document.querySelector('#orientation')
        if (orientation.textContent === 'Horizontally') {
            direction = false
        } else {
            direction = true
        }

        shipsData[firstNotPlacedIndex].placed = this.player1.gameboard.place(i, j, shipsData[firstNotPlacedIndex].length, direction)

        this.updateShips()
        this.boardsUpdate()
        if (this.player1.gameboard.ships.length === 5) {
            const info = document.querySelector('#info')
            info.textContent = '🚀 Play the game! 🚀'
            const placing = document.querySelector('.placing')
            placing.textContent = ''
        }
    }

    shipsSetup() {
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
            listItem.textContent = `🚢 ${index + 1}: Size: ${ship.length}, Hit: ${ship.hitCount}, Dead: ${ship.sunk}`
            shipList1.appendChild(listItem)
        })
        this.player2.gameboard.ships.forEach((ship, index) => {
            const listItem = document.createElement('li')
            listItem.textContent = `🚢 ${index + 1}: Size: ${ship.length}, Hit: ${ship.hitCount}, Dead: ${ship.sunk}`
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
                const x = this.getRandomInt(0, gameboard.board.length - 1)
                const y = this.getRandomInt(0, gameboard.board.length - 1)
                const directionVertical = Math.random() < 0.5

                const shipLength = shipData.length
                const shipCount = shipData.count

                for (let i = 0; i < shipCount; i++) {
                    if (gameboard.place(x, y, shipLength, directionVertical)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQ1JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvanMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUluY29uc29sYXRhOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW5jb25zb2xhdGEnLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogaGVpZ2h0OiAzMDBweDsgKi9cXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ2FwOiAwcHg7XFxufVxcbi5jZWxsIHtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zY3JlZW5wbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnAxLFxcbi5wMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmF2YWlsYWJsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5ib2F0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5zaXplLTUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi5zaXplLTQge1xcbiAgICB3aWR0aDogMTIwcHg7XFxufVxcblxcbi5zaXplLTMge1xcbiAgICB3aWR0aDogOTBweDtcXG59XFxuXFxuLnNpemUtMiB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbn1cXG4uc2l6ZS0xIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5teXNoaXBzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGNvcmFsO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbiNpbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsUUFBUTtBQUNaO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW5jb25zb2xhdGE6d2dodEAxMDA7MjAwOzMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbmNvbnNvbGF0YScsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBoZWlnaHQ6IDMwMHB4OyAqL1xcbiAgICAvKiB3aWR0aDogMzAwcHg7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBnYXA6IDBweDtcXG59XFxuLmNlbGwge1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNjcmVlbnBsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxufVxcblxcbmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucDEsXFxuLnAyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uYXZhaWxhYmxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmJvYXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnNpemUtNSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG59XFxuXFxuLnNpemUtNCB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG59XFxuXFxuLnNpemUtMyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbn1cXG5cXG4uc2l6ZS0yIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxufVxcbi5zaXplLTEge1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm15c2hpcHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuI2luZm8ge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5pbXBvcnQgR2FtZSBmcm9tICcuL2pzL2dhbWUnXG5pbXBvcnQgJy4vanMvZG9tJ1xuXG5jb25zdCB0aGVHYW1lID0gbmV3IEdhbWUoJ1VzZXInLCAnQ29tcHV0ZXInKVxuXG50aGVHYW1lLmdhbWVTdGFydCgpXG47KGZ1bmN0aW9uIGZsaXBidXR0b24oKSB7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JpZW50YXRpb24nKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmbGlwJylcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChvcmllbnRhdGlvbi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWxseScpIHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsbHknXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsbHknXG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuIiwiIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcidcblxuY29uc3Qgc2hpcHNEYXRhID0gW1xuICAgIHsgbGVuZ3RoOiA1LCBjb3VudDogMSB9LFxuICAgIHsgbGVuZ3RoOiA0LCBjb3VudDogMSB9LFxuICAgIHsgbGVuZ3RoOiAzLCBjb3VudDogMSB9LFxuICAgIHsgbGVuZ3RoOiAyLCBjb3VudDogMSB9LFxuICAgIHsgbGVuZ3RoOiAxLCBjb3VudDogMSB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIocGxheWVyMSlcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcihwbGF5ZXIyLCB0cnVlKVxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcjFcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHRoaXMucGxheWVyMlxuICAgIH1cblxuICAgIGdhbWVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zaGlwc1NldHVwKCkgLy8gQUkgc2hpcCBzZXR1cFxuICAgICAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R1cm4tZGlzcGxheScpXG4gICAgICAgIHR1cm4udGV4dENvbnRlbnQgPSBgVHVybjogJHt0aGlzLmN1cnJlbnRQbGF5ZXIubmFtZX1gXG4gICAgICAgIGNvbnN0IGdhbWVHcmlkMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxPi5ncmlkJylcbiAgICAgICAgY29uc3QgZ2FtZUdyaWQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjI+LmdyaWQnKVxuICAgICAgICBnYW1lR3JpZDEudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICBnYW1lR3JpZDIudGV4dENvbnRlbnQgPSAnJ1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSBgY2VsbCByJHtpfSBjJHtqfWBcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VTaGlwKGksIGopXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgZ2FtZUdyaWQxLmFwcGVuZENoaWxkKGNlbGwpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgY2VsbDIuY2xhc3NOYW1lID0gYGNlbGwgciR7aX0gYyR7an1gXG4gICAgICAgICAgICAgICAgY2VsbDIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTG9vcChpLCBqKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBjZWxsMi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwyLmNsYXNzTGlzdC5hZGQoJ2F2YWlsYWJsZScpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjZWxsMi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjZWxsMi5jbGFzc0xpc3QucmVtb3ZlKCdhdmFpbGFibGUnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZ2FtZUdyaWQyLmFwcGVuZENoaWxkKGNlbGwyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2hpcHMoKVxuICAgICAgICB0aGlzLmJvYXJkc1VwZGF0ZSgpXG4gICAgfVxuXG4gICAgYm9hcmRzVXBkYXRlKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcGxheWVyMSA+IC5jZWxsLnIke2l9LmMke2p9YClcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gdGhpcy50cmFuc2xhdGVHcmlkVmFsdWUodGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5ib2FyZFtpXVtqXSlcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC50ZXh0Q29udGVudCA9PT0gJ/CflKUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGwudGV4dENvbnRlbnQgPT09ICfwn5KnJykge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwbGF5ZXIyID4gLmNlbGwuciR7aX0uYyR7an1gKVxuICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSB0aGlzLnRyYW5zbGF0ZUdyaWRWYWx1ZSh0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdKVxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2VsbC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICfwn5SlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ/CfkqcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ/CfmqInOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICfwn5KmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNHYW1lT3ZlcigpIHtcbiAgICAgICAgY29uc3QgcGxheWVyMUxvc3QgPSB0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLmlzRmluaXNoZWQoKVxuICAgICAgICBjb25zdCBwbGF5ZXIyTG9zdCA9IHRoaXMucGxheWVyMi5nYW1lYm9hcmQuaXNGaW5pc2hlZCgpXG5cbiAgICAgICAgaWYgKHBsYXllcjFMb3N0IHx8IHBsYXllcjJMb3N0KSB7XG4gICAgICAgICAgICBjb25zdCB3aW5uZXIgPSBwbGF5ZXIxTG9zdCA/IHRoaXMucGxheWVyMi5uYW1lIDogdGhpcy5wbGF5ZXIxLm5hbWVcbiAgICAgICAgICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5mbycpXG4gICAgICAgICAgICBpbmZvLnRleHRDb250ZW50ID0gYPCfmYwgJHt3aW5uZXJ9IHdvbiB0aGUgZ2FtZSHwn5mMYFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBnYW1lTG9vcChpLCBqKSB7XG4gICAgICAgIC8vIHRoaXMuY3VycmVudFBsYXllci5uZXh0TW92ZShpLCBqKSA/Pz8/XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA8IDUpIHJldHVyblxuICAgICAgICBpZiAodGhpcy5pc0dhbWVPdmVyKCkpIHJldHVyblxuICAgICAgICB0aGlzLnN3aXRjaFBsYXllcnMoKVxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soaSwgailcbiAgICAgICAgdGhpcy51cGRhdGVTaGlwcygpXG4gICAgICAgIHRoaXMuYm9hcmRzVXBkYXRlKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyLmFpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2FpTW92ZUksIGFpTW92ZUpdID0gdGhpcy5nZW5lcmF0ZUFJTW92ZSgpIC8vIEltcGxlbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIEFJIG1vdmVzXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lTG9vcChhaU1vdmVJLCBhaU1vdmVKKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyNTApXG4gICAgfVxuXG4gICAgc3dpdGNoUGxheWVycygpIHtcbiAgICAgICAgO1t0aGlzLmN1cnJlbnRQbGF5ZXIsIHRoaXMub3Bwb25lbnRdID0gW3RoaXMub3Bwb25lbnQsIHRoaXMuY3VycmVudFBsYXllcl1cbiAgICAgICAgY29uc3QgdHVybiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0dXJuLWRpc3BsYXknKVxuICAgICAgICB0dXJuLnRleHRDb250ZW50ID0gYFR1cm46ICR7dGhpcy5jdXJyZW50UGxheWVyLm5hbWV9YFxuICAgIH1cblxuICAgIHBsYWNlU2hpcChpLCBqKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgZmlyc3ROb3RQbGFjZWRJbmRleCA9IHNoaXBzRGF0YS5maW5kSW5kZXgoKHNoaXApID0+ICFzaGlwLnBsYWNlZClcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9ICcnXG5cbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JpZW50YXRpb24nKVxuICAgICAgICBpZiAob3JpZW50YXRpb24udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsbHknKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyZWN0aW9uID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHNEYXRhW2ZpcnN0Tm90UGxhY2VkSW5kZXhdLnBsYWNlZCA9IHRoaXMucGxheWVyMS5nYW1lYm9hcmQucGxhY2UoaSwgaiwgc2hpcHNEYXRhW2ZpcnN0Tm90UGxhY2VkSW5kZXhdLmxlbmd0aCwgZGlyZWN0aW9uKVxuXG4gICAgICAgIHRoaXMudXBkYXRlU2hpcHMoKVxuICAgICAgICB0aGlzLmJvYXJkc1VwZGF0ZSgpXG4gICAgICAgIGlmICh0aGlzLnBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmZvJylcbiAgICAgICAgICAgIGluZm8udGV4dENvbnRlbnQgPSAn8J+agCBQbGF5IHRoZSBnYW1lISDwn5qAJ1xuICAgICAgICAgICAgY29uc3QgcGxhY2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjaW5nJylcbiAgICAgICAgICAgIHBsYWNpbmcudGV4dENvbnRlbnQgPSAnJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hpcHNTZXR1cCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZVJhbmRvbVNoaXBzKHRoaXMucGxheWVyMi5nYW1lYm9hcmQsIHNoaXBzRGF0YSlcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUFJTW92ZSgpIHtcbiAgICAgICAgbGV0IG1vdmVJXG4gICAgICAgIGxldCBtb3ZlSlxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBtb3ZlSSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMub3Bwb25lbnQuZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aClcbiAgICAgICAgICAgIG1vdmVKID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuYm9hcmQubGVuZ3RoKVxuICAgICAgICB9IHdoaWxlICh0aGlzLm9wcG9uZW50LmdhbWVib2FyZC5ib2FyZFttb3ZlSV1bbW92ZUpdID09PSAnTScgfHwgdGhpcy5vcHBvbmVudC5nYW1lYm9hcmQuYm9hcmRbbW92ZUldW21vdmVKXSA9PT0gJ1gnKVxuXG4gICAgICAgIHJldHVybiBbbW92ZUksIG1vdmVKXVxuICAgIH1cblxuICAgIHVwZGF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBzaGlwTGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMT4uc2hpcHMnKVxuICAgICAgICBjb25zdCBzaGlwTGlzdDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMj4uc2hpcHMnKVxuXG4gICAgICAgIHNoaXBMaXN0MS50ZXh0Q29udGVudCA9ICcnXG4gICAgICAgIHNoaXBMaXN0Mi50ZXh0Q29udGVudCA9ICcnXG5cbiAgICAgICAgdGhpcy5wbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5mb3JFYWNoKChzaGlwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IGDwn5qiICR7aW5kZXggKyAxfTogU2l6ZTogJHtzaGlwLmxlbmd0aH0sIEhpdDogJHtzaGlwLmhpdENvdW50fSwgRGVhZDogJHtzaGlwLnN1bmt9YFxuICAgICAgICAgICAgc2hpcExpc3QxLmFwcGVuZENoaWxkKGxpc3RJdGVtKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzLmZvckVhY2goKHNoaXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gYPCfmqIgJHtpbmRleCArIDF9OiBTaXplOiAke3NoaXAubGVuZ3RofSwgSGl0OiAke3NoaXAuaGl0Q291bnR9LCBEZWFkOiAke3NoaXAuc3Vua31gXG4gICAgICAgICAgICBzaGlwTGlzdDIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdHJhbnNsYXRlR3JpZFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU2hpcCcpIHtcbiAgICAgICAgICAgIHJldHVybiAn8J+aoidcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICBjYXNlICdQJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ/CfkqcnXG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ/CfkqcnXG4gICAgICAgICAgICBjYXNlICdYJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ/CflKUnXG4gICAgICAgICAgICBjYXNlICdCJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ/CfkqYnXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAnRVJSJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG4gICAgfVxuXG4gICAgcGxhY2VSYW5kb21TaGlwcyhnYW1lYm9hcmQsIHNoaXBzRGF0YSkge1xuICAgICAgICBmb3IgKGNvbnN0IHNoaXBEYXRhIG9mIHNoaXBzRGF0YSkge1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlXG5cbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuZ2V0UmFuZG9tSW50KDAsIGdhbWVib2FyZC5ib2FyZC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLmdldFJhbmRvbUludCgwLCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25WZXJ0aWNhbCA9IE1hdGgucmFuZG9tKCkgPCAwLjVcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwRGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwQ291bnQgPSBzaGlwRGF0YS5jb3VudFxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLnBsYWNlKHgsIHksIHNoaXBMZW5ndGgsIGRpcmVjdGlvblZlcnRpY2FsKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIHNoaXBzID0gW10pIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHNpemUgfSwgKCkgPT4gQXJyYXkoc2l6ZSkuZmlsbCgwKSlcbiAgICAgICAgdGhpcy5zaGlwcyA9IHNoaXBzXG4gICAgfVxuXG4gICAgcGxhY2UoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb25WZXJ0aWNhbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uVmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoeCArIGxlbmd0aCA+IHRoaXMuYm9hcmQubGVuZ3RoIHx8IHRoaXMuYm9hcmRbeCArIGldW3ldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh5ID4gMCAmJiB0aGlzLmJvYXJkW3ggKyBpXVt5IC0gMV0gIT09IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICh5IDwgdGhpcy5ib2FyZC5sZW5ndGggLSAxICYmIHRoaXMuYm9hcmRbeCArIGldW3kgKyAxXSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGkgPiAwICYmIHRoaXMuYm9hcmRbeCArIGkgLSAxXVt5XSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGkgPCBsZW5ndGggLSAxICYmIHRoaXMuYm9hcmRbeCArIGkgKyAxXVt5XSAhPT0gMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoeSArIGxlbmd0aCA+IHRoaXMuYm9hcmQubGVuZ3RoIHx8IHRoaXMuYm9hcmRbeF1beSArIGldICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3IgYWRqYWNlbnQgY2VsbHNcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICh4ID4gMCAmJiB0aGlzLmJvYXJkW3ggLSAxXVt5ICsgaV0gIT09IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICh4IDwgdGhpcy5ib2FyZC5sZW5ndGggLSAxICYmIHRoaXMuYm9hcmRbeCArIDFdW3kgKyBpXSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGkgPiAwICYmIHRoaXMuYm9hcmRbeF1beSArIGkgLSAxXSAhPT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGkgPCBsZW5ndGggLSAxICYmIHRoaXMuYm9hcmRbeF1beSArIGkgKyAxXSAhPT0gMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSBuZXcgU2hpcChsZW5ndGgpXG4gICAgICAgIHRoaXMuYmxvY2tBZGphY2VudENlbGxzKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uVmVydGljYWwpXG4gICAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLmJvYXJkW3hdW3ldKVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uVmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XSA9IHRoaXMuYm9hcmRbeF1beV1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4XVt5ICsgaV0gPSB0aGlzLmJvYXJkW3hdW3ldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBibG9ja0FkamFjZW50Q2VsbHMoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb25WZXJ0aWNhbCkge1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWF4KHggLSAxLCAwKVxuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWF4KHkgLSAxLCAwKVxuICAgICAgICBjb25zdCBlbmRSb3cgPSBkaXJlY3Rpb25WZXJ0aWNhbCA/IE1hdGgubWluKHggKyBsZW5ndGgsIHRoaXMuYm9hcmQubGVuZ3RoIC0gMSkgOiBNYXRoLm1pbih4ICsgMSwgdGhpcy5ib2FyZC5sZW5ndGggLSAxKVxuICAgICAgICBjb25zdCBlbmRDb2wgPSBkaXJlY3Rpb25WZXJ0aWNhbCA/IE1hdGgubWluKHkgKyAxLCB0aGlzLmJvYXJkLmxlbmd0aCAtIDEpIDogTWF0aC5taW4oeSArIGxlbmd0aCwgdGhpcy5ib2FyZC5sZW5ndGggLSAxKVxuXG4gICAgICAgIGZvciAobGV0IHJvdyA9IHN0YXJ0Um93OyByb3cgPD0gZW5kUm93OyByb3crKykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gc3RhcnRDb2w7IGNvbCA8PSBlbmRDb2w7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2xdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gJ0InIC8vIEJsb2NraW5nIHdpdGggLTFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0uY29uc3RydWN0b3IubmFtZSA9PT0gJ1NoaXAnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpXG4gICAgICAgICAgICBjb25zdCBzdW5rU3RhdHVzID0gdGhpcy5ib2FyZFt4XVt5XS5zdW5rXG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hdW3ldID0gJ1gnXG4gICAgICAgICAgICByZXR1cm4gc3Vua1N0YXR1c1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnTSdcbiAgICB9XG5cbiAgICBpc0ZpbmlzaGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKVxuICAgIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYWkgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgxMClcbiAgICAgICAgdGhpcy5haSA9IGFpXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBoaXRDb3VudCA9IDAsIHN1bmsgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aCAvLyBudW1iZXJcbiAgICAgICAgdGhpcy5oaXRDb3VudCA9IGhpdENvdW50IC8vIG51bWJlclxuICAgICAgICB0aGlzLnN1bmsgPSBzdW5rIC8vIGJvb2xlYW5cbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0Q291bnQgKz0gMVxuICAgICAgICB0aGlzLnN1bmsgPSB0aGlzLmhpdENvdW50ID49IHRoaXMubGVuZ3RoXG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9