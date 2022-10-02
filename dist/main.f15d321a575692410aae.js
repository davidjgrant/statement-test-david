/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/closeCart.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/closeCart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var closeCart = function closeCart(cart) {
  cart.classList.remove('open');
  document.body.style.overflow = 'auto';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeCart);

/***/ }),

/***/ "./src/scripts/components/loadingBtn.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/loadingBtn.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var loadingBtn = function loadingBtn(btn) {
  btn.classList.add('loading');
  btn.innerText = 'loading';
  setTimeout(function () {
    btn.classList.remove('loading');
    btn.innerText = 'Added To Bag!';
  }, 1000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadingBtn);

/***/ }),

/***/ "./src/scripts/components/openCart.js":
/*!********************************************!*\
  !*** ./src/scripts/components/openCart.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var openCart = function openCart(cart) {
  cart.classList.add('open');
  document.body.style.overflow = 'hidden';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openCart);

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_closeCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/closeCart */ "./src/scripts/components/closeCart.js");
/* harmony import */ var _components_loadingBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loadingBtn */ "./src/scripts/components/loadingBtn.js");
/* harmony import */ var _components_openCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/openCart */ "./src/scripts/components/openCart.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");




var cart = document.querySelector('[data-cart]');
var addToCartBtn = document.querySelector('[data-add-to-cart]');
var openCartBtns = document.querySelectorAll('[data-open-cart]');
var closeCartBtns = document.querySelectorAll('[data-close-cart]');
closeCartBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    (0,_components_closeCart__WEBPACK_IMPORTED_MODULE_0__["default"])(cart);
  });
});
openCartBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    (0,_components_openCart__WEBPACK_IMPORTED_MODULE_2__["default"])(cart);
  });
});
addToCartBtn.addEventListener('click', function () {
  (0,_components_loadingBtn__WEBPACK_IMPORTED_MODULE_1__["default"])(addToCartBtn);
  setTimeout(function () {
    (0,_components_openCart__WEBPACK_IMPORTED_MODULE_2__["default"])(cart);
  }, 1000);
});
})();

/******/ })()
;
//# sourceMappingURL=main.f15d321a575692410aae.js.map