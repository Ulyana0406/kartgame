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

/***/ "./components/first-page-of-game.js":
/*!******************************************!*\
  !*** ./components/first-page-of-game.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFirstPageComponent: () => (/* binding */ renderFirstPageComponent)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./main.js\");\n/* harmony import */ var _modules_routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/routes.js */ \"./modules/routes.js\");\n/* harmony import */ var _game_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-page.js */ \"./components/game-page.js\");\n\r\n\r\n\r\n\r\n\r\nfunction renderFirstPageComponent(appEl) {\r\n    let firstPageHtml = `\r\n    <div id=\"choose__complexity__window\" class=\"choose__complexity__window\">\r\n    <div class=\"choose__complexity prompt__center\">\r\n    <h1 class=\"popup__windox__text\">Выбери <br> сложность</h1>\r\n    <section class=\"radio-toolbar\">\r\n        <input type=\"radio\" class=\"radio\" id=\"easyBtn\" name=\"radios\" value=\"Легкий\">\r\n    <label for=\"easyBtn\">1</label>\r\n    \r\n    <input type=\"radio\" id=\"mediumBtn\" name=\"radios\" value=\"Средний\">\r\n    <label for=\"mediumBtn\">2</label>\r\n    \r\n    <input type=\"radio\" id=\"hardBtn\" name=\"radios\" value=\"Сложный\">\r\n    <label for=\"hardBtn\">3</label>\r\n    </section>\r\n  <button class=\"play__button\" id=\"startBtn\">\r\n    Старт\r\n </button>\r\n</div> \r\n</div> \r\n    `\r\n    appEl.innerHTML = firstPageHtml\r\n\r\n    const easyBtn = document.getElementById('easyBtn')\r\n    const mediumBtn = document.getElementById('mediumBtn')\r\n    const hardBtn = document.getElementById('hardBtn')\r\n    const startBtn = document.getElementById('startBtn')\r\n    const btnCollection = [easyBtn, mediumBtn, hardBtn]\r\n\r\n    btnCollection.forEach((el) => {\r\n        el.addEventListener('click', () => {\r\n            btnCollection.forEach((el) => {\r\n                el.removeAttribute('checked')\r\n            })\r\n            el.setAttribute('checked', '')\r\n        })\r\n    })\r\n\r\n    startBtn.addEventListener('click', () => {\r\n        if (easyBtn.hasAttribute('checked')) {\r\n            (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.setPage)(_modules_routes_js__WEBPACK_IMPORTED_MODULE_1__.EASY_PAGE)\r\n            ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_main_js__WEBPACK_IMPORTED_MODULE_0__.page)\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.int)()\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.hideFirstPage)()\r\n        }\r\n        if (mediumBtn.hasAttribute('checked')) {\r\n            (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.setPage)(_modules_routes_js__WEBPACK_IMPORTED_MODULE_1__.MEDIUM_PAGE)\r\n            ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_main_js__WEBPACK_IMPORTED_MODULE_0__.page)\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.int)()\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.hideFirstPage)()\r\n        }\r\n        if (hardBtn.hasAttribute('checked')) {\r\n            (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.setPage)(_modules_routes_js__WEBPACK_IMPORTED_MODULE_1__.HARD_PAGE)\r\n            ;(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_main_js__WEBPACK_IMPORTED_MODULE_0__.page)\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.int)()\r\n            ;(0,_game_page_js__WEBPACK_IMPORTED_MODULE_2__.hideFirstPage)()\r\n        }\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://kartgame/./components/first-page-of-game.js?");

/***/ }),

/***/ "./components/game-page.js":
/*!*********************************!*\
  !*** ./components/game-page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideFirstPage: () => (/* binding */ hideFirstPage),\n/* harmony export */   int: () => (/* binding */ int),\n/* harmony export */   renderGame: () => (/* binding */ renderGame),\n/* harmony export */   renderLevel: () => (/* binding */ renderLevel),\n/* harmony export */   showFirstPage: () => (/* binding */ showFirstPage)\n/* harmony export */ });\n/* harmony import */ var _first_page_of_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./first-page-of-game.js */ \"./components/first-page-of-game.js\");\n\r\nfunction renderLevel(difficulty) {\r\n    let numCards = 6\r\n    if (difficulty === 'easy') {\r\n        numCards = 6\r\n        hideFirstPage()\r\n    } else if (difficulty === 'medium') {\r\n        numCards = 12\r\n        hideFirstPage()\r\n    } else if (difficulty === 'hard') {\r\n        numCards = 18\r\n        hideFirstPage()\r\n    }\r\n    console.log('Кол-во карт :', numCards)\r\n\r\n    arr = arr\r\n        .map((i) => [Math.random(), i])\r\n        .sort()\r\n        .map((i) => i[1])\r\n    arr = arr.slice(0, numCards / 2)\r\n    let arrB = Array.from(arr)\r\n    let arrC = [...arr, ...arrB]\r\n    arr = arrC\r\n        .map((i) => [Math.random(), i])\r\n        .sort()\r\n        .map((i) => i[1])\r\n    console.log(arr)\r\n}\r\n\r\nlet arr = [\r\n    'AceSpades',\r\n    'KingSpades',\r\n    'QueenSpades',\r\n    'JackSpades',\r\n    '10Spades',\r\n    '9Spades',\r\n    '8Spades',\r\n    '7Spades',\r\n    '6Spades',\r\n    'AceHeart',\r\n    'KingHeart',\r\n    'QueenHeart',\r\n    'JackHeart',\r\n    '10Heart',\r\n    '9Heart',\r\n    '8Heart',\r\n    '7Heart',\r\n    '6Heart',\r\n    'AceDiamonds',\r\n    'KingDiamonds',\r\n    'QueenDiamonds',\r\n    'JackDiamonds',\r\n    '10Diamonds',\r\n    '9Diamonds',\r\n    '8Diamonds',\r\n    '7Diamonds',\r\n    '6Diamonds',\r\n    'AceClubs',\r\n    'KingClubs',\r\n    'QueenClubs',\r\n    'JackClubs',\r\n    '10Clubs',\r\n    '9Clubs',\r\n    '8Clubs',\r\n    '7Clubs',\r\n    '6Clubs',\r\n]\r\n\r\nlet a = []\r\nlet score = 0\r\nconsole.log('Счет :', score)\r\n\r\nfunction renderGame(isAct) {\r\n    startTimer()\r\n    hideFirstPage()\r\n    let cardsHtml = arr\r\n        .map((back) => {\r\n            return `<div id=\"back\" class=\"back\"><img class=\"playingFieldCard\" id=\"back\" data-name=\"${back}\" src=\"./cards/back.jpg\" alt=\"\"></div>`\r\n        })\r\n        .join('')\r\n    let cardsBackHtml = arr\r\n        .map((back) => {\r\n            return `<div id=\"back\" class=\"back\"><img class=\"playingFieldCard\" id=\"back\" data-name=\"${back}\" src=\"./cards/${back}.jpg\" alt=\"\"></div>`\r\n        })\r\n        .join('')\r\n    let appElGame = document.getElementById('appGame')\r\n    let gameHtml = `\r\n  <div class=\"playingField center\">\r\n      <div class=\"playingFieldHeader\">\r\n          <div class=\"time\">\r\n          <span class=\"time\" id=\"timer\">00:00</span>\r\n          </div>\r\n          <div>\r\n              <button id=\"restart\" class=\"play__button returnButton\">Начать заново</button>\r\n          </div>\r\n      </div>\r\n      <div class=\"playingFieldCards\">\r\n          ${isAct ? cardsHtml : cardsBackHtml}\r\n      </div>\r\n  </div>`\r\n    appElGame.innerHTML = gameHtml\r\n\r\n    const returnButton = document.querySelector('#restart')\r\n\r\n    returnButton.addEventListener('click', () => {\r\n        ;(0,_first_page_of_game_js__WEBPACK_IMPORTED_MODULE_0__.renderFirstPageComponent)(appElGame)\r\n        score = 0\r\n        console.log('Играть заново')\r\n    })\r\n\r\n    const playingFieldCard = document.querySelectorAll('.playingFieldCard')\r\n    playingFieldCard.forEach((playingFieldCard) => {\r\n        playingFieldCard.addEventListener('click', () => {\r\n            let card = playingFieldCard.dataset.name\r\n            playingFieldCard.setAttribute('src', `../cards/${card}.jpg`)\r\n            console.log(playingFieldCard.dataset.name)\r\n            a.push(card)\r\n            console.log(a)\r\n            console.log(a.length)\r\n\r\n            if (a.length === 2) {\r\n                if (a[0] === a[1]) {\r\n                    score = score + 1\r\n                    a = []\r\n                    alert('Вы победили!')\r\n                    console.log('=', 'Счет :', score, a)\r\n                } else {\r\n                    a = []\r\n                    console.log('!=', 'Счет :', score, a)\r\n                    alert('Вы проиграли!')\r\n                }\r\n            }\r\n        })\r\n    })\r\n}\r\nfunction showFirstPage() {\r\n    const loader = document.querySelector('.choose__complexity__window')\r\n    loader.classList.remove('hidden')\r\n}\r\nfunction hideFirstPage() {\r\n    const loader = document.querySelector('.choose__complexity__window')\r\n    loader.classList.add('hidden')\r\n}\r\n// Показать и скрытие карточек через 5 сек в начале игры\r\nfunction int() {\r\n    renderGame(false)\r\n    setTimeout(() => {\r\n        renderGame(true)\r\n    }, 5000)\r\n}\r\nfunction startTimer() {\r\n    let minutes = 0\r\n    let seconds = 0\r\n\r\n    const timerElement = document.getElementById('timer')\r\n\r\n    setInterval(() => {\r\n        seconds++\r\n        if (seconds >= 60) {\r\n            minutes++\r\n            seconds = 0\r\n        }\r\n\r\n        // Форматируем время для вывода\r\n        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes\r\n        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds\r\n\r\n        // Выводим время в элемент разметки\r\n        timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`\r\n    }, 1000)\r\n}\r\n//document.getElementById(\"timeData\").textContent = \"11.11\";\r\n\n\n//# sourceURL=webpack://kartgame/./components/game-page.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   renderApp: () => (/* binding */ renderApp),\n/* harmony export */   setPage: () => (/* binding */ setPage),\n/* harmony export */   userSettings: () => (/* binding */ userSettings)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _components_game_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/game-page.js */ \"./components/game-page.js\");\n/* harmony import */ var _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/routes.js */ \"./modules/routes.js\");\n/* harmony import */ var _components_first_page_of_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/first-page-of-game.js */ \"./components/first-page-of-game.js\");\n\r\n\r\n\r\n\r\n\r\nlet page = _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.FIRST_PAGE\r\n\r\nlet userSettings = {\r\n    time: 0,\r\n    gameStatus: null,\r\n    difficalty: null,\r\n}\r\n\r\nconst setPage = (newPage) => {\r\n    page = newPage\r\n}\r\n\r\nconst goToPage = (page) => {\r\n    if ([_modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.EASY_PAGE, _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.FIRST_PAGE, _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.HARD_PAGE, _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.MEDIUM_PAGE].includes(page)) {\r\n        if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.FIRST_PAGE) {\r\n            userSettings.gameStatus = 'choose difficulty level'\r\n            renderApp()\r\n        }\r\n        if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.EASY_PAGE) {\r\n            userSettings.difficalty = 'easy'\r\n            userSettings.gameStatus = 'in game'\r\n            console.log(userSettings)\r\n            renderApp()\r\n            ;(0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.hideFirstPage)()\r\n        }\r\n        if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.MEDIUM_PAGE) {\r\n            userSettings.difficalty = 'medium'\r\n            userSettings.gameStatus = 'in game'\r\n            console.log(userSettings)\r\n            renderApp()\r\n            ;(0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.hideFirstPage)()\r\n        }\r\n        if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.HARD_PAGE) {\r\n            userSettings.difficalty = 'hard'\r\n            userSettings.gameStatus = 'in game'\r\n            console.log(userSettings)\r\n            renderApp()\r\n            ;(0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.hideFirstPage)()\r\n        }\r\n    }\r\n}\r\nlet appEl = document.getElementById('app')\r\n\r\nconst renderApp = () => {\r\n    if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.EASY_PAGE) {\r\n        return (0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLevel)('easy')\r\n    }\r\n    if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.MEDIUM_PAGE) {\r\n        return (0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLevel)('medium')\r\n    }\r\n    if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.HARD_PAGE) {\r\n        return (0,_components_game_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLevel)('hard')\r\n    }\r\n    if (page === _modules_routes_js__WEBPACK_IMPORTED_MODULE_2__.FIRST_PAGE) {\r\n        return (0,_components_first_page_of_game_js__WEBPACK_IMPORTED_MODULE_3__.renderFirstPageComponent)(appEl)\r\n    }\r\n}\r\ngoToPage(page)\r\n\n\n//# sourceURL=webpack://kartgame/./main.js?");

/***/ }),

/***/ "./modules/routes.js":
/*!***************************!*\
  !*** ./modules/routes.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EASY_PAGE: () => (/* binding */ EASY_PAGE),\n/* harmony export */   FIRST_PAGE: () => (/* binding */ FIRST_PAGE),\n/* harmony export */   HARD_PAGE: () => (/* binding */ HARD_PAGE),\n/* harmony export */   MEDIUM_PAGE: () => (/* binding */ MEDIUM_PAGE)\n/* harmony export */ });\nconst EASY_PAGE = 'easy-page'\r\nconst MEDIUM_PAGE = 'medium-page'\r\nconst HARD_PAGE = 'hard-page'\r\nconst FIRST_PAGE = 'first-page'\r\n\n\n//# sourceURL=webpack://kartgame/./modules/routes.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://kartgame/./style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;