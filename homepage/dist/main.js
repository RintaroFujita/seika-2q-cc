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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

const validator = new JustValidate('#basic_form');

validator
    .addField('#basic_name', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: '3文字以上で入力してください',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: '15文字以上で入力してください'
        },
    ])
    .addField('#basic_email', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'email',
            errorMessage: 'メールアドレスの形式で入力してください'
        },
    ])
    .addField('#basic_password', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'password',
            errorMessage: 'アルファベットと数字で8文字以上で設定してください'
        },
    ])
    .addField('#basic_age', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'number',
            errorMessage: '数字のみで入力してください'
        },
        {
            rule: 'minNumber',
            value: 18,
            errorMessage: '18以上で入力してください'
        },
        {
            rule: 'maxNumber',
            value: 150,
            errorMessage: '150以下で入力してください'
        },
    ])
    .addField('#basic_address', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
    ]);
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

let Ge = new Swiper(".swiper-1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination-1"
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1"
    },
});

let Ye = document.getElementById("swiper-title-1");
let Ne = document.createTextNode("スライド " + (Ge.realIndex + 1) + " を表示しています。");
Ye.appendChild(Ne);

Ge.on("slideChange", function () {
    console.log(Ge.realIndex);
    Ne.remove();
    Ne = document.createTextNode("スライド " + (Ge.realIndex + 1) + " を表示しています。");
    Ye.appendChild(Ne);
});



const Ve = new Swiper(".swiper-2", {
    loop: true,
    pagination: {
        el: ".swiper-pagination-2"
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2"
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let je = ["被害者1", "被害者2", "被害者3"];
let Re = document.getElementById("swiper-title-2");
let qe = document.createTextNode(je[Ve.realIndex]);
Re.appendChild(qe);

Ve.on("slideChange", function () {
    console.log(Ve.realIndex);
    qe.remove();
    qe = document.createTextNode(je[Ve.realIndex]);
    Re.appendChild(qe);
});


window.addEventListener("resize", function () {
    VANTA.HALO.resize();
  });
  
  VANTA.HALO({
    el: "#haloBlock",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    amplitudeFactor: 1,
    size: 0.8,
  });
  

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCB2YWxpZGF0b3IgPSBuZXcgSnVzdFZhbGlkYXRlKCcjYmFzaWNfZm9ybScpO1xuXG52YWxpZGF0b3JcbiAgICAuYWRkRmllbGQoJyNiYXNpY19uYW1lJywgW1xuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAn5b+F6aCI6aCF55uu44Gn44GZJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAnbWluTGVuZ3RoJyxcbiAgICAgICAgICAgIHZhbHVlOiAzLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnM+aWh+Wtl+S7peS4iuOBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxuICAgICAgICAgICAgdmFsdWU6IDE1LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnMTXmloflrZfku6XkuIrjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnXG4gICAgICAgIH0sXG4gICAgXSlcbiAgICAuYWRkRmllbGQoJyNiYXNpY19lbWFpbCcsIFtcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ+W/hemgiOmgheebruOBp+OBmSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ2VtYWlsJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ+ODoeODvOODq+OCouODieODrOOCueOBruW9ouW8j+OBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCdcbiAgICAgICAgfSxcbiAgICBdKVxuICAgIC5hZGRGaWVsZCgnI2Jhc2ljX3Bhc3N3b3JkJywgW1xuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAn5b+F6aCI6aCF55uu44Gn44GZJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBydWxlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAn44Ki44Or44OV44Kh44OZ44OD44OI44Go5pWw5a2X44GnOOaWh+Wtl+S7peS4iuOBp+ioreWumuOBl+OBpuOBj+OBoOOBleOBhCdcbiAgICAgICAgfSxcbiAgICBdKVxuICAgIC5hZGRGaWVsZCgnI2Jhc2ljX2FnZScsIFtcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ+W/hemgiOmgheebruOBp+OBmSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcnVsZTogJ251bWJlcicsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfmlbDlrZfjga7jgb/jgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJ1bGU6ICdtaW5OdW1iZXInLFxuICAgICAgICAgICAgdmFsdWU6IDE4LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnMTjku6XkuIrjgaflhaXlipvjgZfjgabjgY/jgaDjgZXjgYQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJ1bGU6ICdtYXhOdW1iZXInLFxuICAgICAgICAgICAgdmFsdWU6IDE1MCxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJzE1MOS7peS4i+OBp+WFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCdcbiAgICAgICAgfSxcbiAgICBdKVxuICAgIC5hZGRGaWVsZCgnI2Jhc2ljX2FkZHJlc3MnLCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICflv4XpoIjpoIXnm67jgafjgZknXG4gICAgICAgIH0sXG4gICAgXSk7XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyJywge1xuICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcblxuICAgIGxvb3A6IHRydWUsXG5cbiAgICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICB9LFxuXG4gICAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcbiAgICB9LFxuXG59KTtcblxubGV0IEdlID0gbmV3IFN3aXBlcihcIi5zd2lwZXItMVwiLCB7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvbi0xXCJcbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHQtMVwiLFxuICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldi0xXCJcbiAgICB9LFxufSk7XG5cbmxldCBZZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpcGVyLXRpdGxlLTFcIik7XG5sZXQgTmUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIuOCueODqeOCpOODiSBcIiArIChHZS5yZWFsSW5kZXggKyAxKSArIFwiIOOCkuihqOekuuOBl+OBpuOBhOOBvuOBmeOAglwiKTtcblllLmFwcGVuZENoaWxkKE5lKTtcblxuR2Uub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coR2UucmVhbEluZGV4KTtcbiAgICBOZS5yZW1vdmUoKTtcbiAgICBOZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwi44K544Op44Kk44OJIFwiICsgKEdlLnJlYWxJbmRleCArIDEpICsgXCIg44KS6KGo56S644GX44Gm44GE44G+44GZ44CCXCIpO1xuICAgIFllLmFwcGVuZENoaWxkKE5lKTtcbn0pO1xuXG5cblxuY29uc3QgVmUgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci0yXCIsIHtcbiAgICBsb29wOiB0cnVlLFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uLTJcIlxuICAgIH0sXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dC0yXCIsXG4gICAgICAgIHByZXZFbDogXCIuc3dpcGVyLWJ1dHRvbi1wcmV2LTJcIlxuICAgIH0sXG4gICAgc2Nyb2xsYmFyOiB7XG4gICAgICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxuICAgIH0sXG59KTtcblxubGV0IGplID0gW1wi6KKr5a6z6ICFMVwiLCBcIuiiq+Wus+iAhTJcIiwgXCLooqvlrrPogIUzXCJdO1xubGV0IFJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2lwZXItdGl0bGUtMlwiKTtcbmxldCBxZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGplW1ZlLnJlYWxJbmRleF0pO1xuUmUuYXBwZW5kQ2hpbGQocWUpO1xuXG5WZS5vbihcInNsaWRlQ2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhWZS5yZWFsSW5kZXgpO1xuICAgIHFlLnJlbW92ZSgpO1xuICAgIHFlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoamVbVmUucmVhbEluZGV4XSk7XG4gICAgUmUuYXBwZW5kQ2hpbGQocWUpO1xufSk7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIFZBTlRBLkhBTE8ucmVzaXplKCk7XG4gIH0pO1xuICBcbiAgVkFOVEEuSEFMTyh7XG4gICAgZWw6IFwiI2hhbG9CbG9ja1wiLFxuICAgIG1vdXNlQ29udHJvbHM6IHRydWUsXG4gICAgdG91Y2hDb250cm9sczogdHJ1ZSxcbiAgICBneXJvQ29udHJvbHM6IGZhbHNlLFxuICAgIG1pbkhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIG1pbldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBhbXBsaXR1ZGVGYWN0b3I6IDEsXG4gICAgc2l6ZTogMC44LFxuICB9KTtcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==