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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

var slider;
var sliderFlag = false;
var breakpoint = 751;

function sliderSet() {
  var windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint && !sliderFlag) {
    slider = $(".slider").bxSlider({
      touchEnabled: false,
      mode: "vertical",
      controls: false,
      auto: "true",
      pager: false,
    });
    sliderFlag = true;
  } else if (windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider();
    sliderFlag = false;
  }
}

$(window).on("load", function () {
  sliderSet();
});

$(window).on("resize", function () {
  if (slider) {
    slider.destroySlider();
    sliderFlag = false;
  }
  sliderSet();
});

var haloInstance;

function initializeHalo() {
  if (haloInstance) {
    haloInstance.destroy();
  }

  var options = {
    el: "#haloBlock",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    amplitudeFactor: 1,
    size: 0.7,
    baseColor: 0xffffff,
    baseColorSpread: 0,
    backgroundColor: 0x1c1344,
  };

  haloInstance = VANTA.HALO(options);
}

window.addEventListener("resize", function () {
  if (haloInstance) {
    haloInstance.resize();
  }
});

initializeHalo();

$("#mouseControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ mouseControls: isChecked });
});

$("#touchControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ touchControls: isChecked });
});

$("#gyroControls").change(function () {
  var isChecked = $(this).is(":checked");
  haloInstance.setOptions({ gyroControls: isChecked });
});

$("#amplitudeFactor").on("input", function () {
  var value = parseFloat($(this).val());
  var adjustedValue = Math.pow(value, 1.5);
  haloInstance.setOptions({ amplitudeFactor: adjustedValue});
});

$("#size").on("input", function () {
  var value = parseFloat($(this).val());
  haloInstance.setOptions({ size: value });
});

$("#color").on("input", function () {
  var colorHex = $(this).val();
  var colorRGB = parseInt(colorHex.replace("#", "0x"));
  haloInstance.setOptions({ baseColor: colorRGB });
});
$("#background").on("input", function () {
  var colorHex = $(this).val();
  var colorRGB = parseInt(colorHex.replace("#", "0x"));
  haloInstance.setOptions({ backgroundColor: colorRGB });
});
$("#saveButton").click(function () {
  html2canvas(document.body).then(function (canvas) {
    var link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "screenshot.png";
    link.click();
  });
});
html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsMkJBQTJCO0FBQ3RELENBQUM7O0FBRUQ7QUFDQTtBQUNBLDJCQUEyQiwyQkFBMkI7QUFDdEQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnQ0FBZ0M7QUFDM0QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMkJBQTJCLGNBQWM7QUFDekMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwidmFyIHNsaWRlcjtcbnZhciBzbGlkZXJGbGFnID0gZmFsc2U7XG52YXIgYnJlYWtwb2ludCA9IDc1MTtcblxuZnVuY3Rpb24gc2xpZGVyU2V0KCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgaWYgKHdpbmRvd1dpZHRoID49IGJyZWFrcG9pbnQgJiYgIXNsaWRlckZsYWcpIHtcbiAgICBzbGlkZXIgPSAkKFwiLnNsaWRlclwiKS5ieFNsaWRlcih7XG4gICAgICB0b3VjaEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgbW9kZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgYXV0bzogXCJ0cnVlXCIsXG4gICAgICBwYWdlcjogZmFsc2UsXG4gICAgfSk7XG4gICAgc2xpZGVyRmxhZyA9IHRydWU7XG4gIH0gZWxzZSBpZiAod2luZG93V2lkdGggPCBicmVha3BvaW50ICYmIHNsaWRlckZsYWcpIHtcbiAgICBzbGlkZXIuZGVzdHJveVNsaWRlcigpO1xuICAgIHNsaWRlckZsYWcgPSBmYWxzZTtcbiAgfVxufVxuXG4kKHdpbmRvdykub24oXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgc2xpZGVyU2V0KCk7XG59KTtcblxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHNsaWRlcikge1xuICAgIHNsaWRlci5kZXN0cm95U2xpZGVyKCk7XG4gICAgc2xpZGVyRmxhZyA9IGZhbHNlO1xuICB9XG4gIHNsaWRlclNldCgpO1xufSk7XG5cbnZhciBoYWxvSW5zdGFuY2U7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVIYWxvKCkge1xuICBpZiAoaGFsb0luc3RhbmNlKSB7XG4gICAgaGFsb0luc3RhbmNlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0ge1xuICAgIGVsOiBcIiNoYWxvQmxvY2tcIixcbiAgICBtb3VzZUNvbnRyb2xzOiB0cnVlLFxuICAgIHRvdWNoQ29udHJvbHM6IHRydWUsXG4gICAgZ3lyb0NvbnRyb2xzOiB0cnVlLFxuICAgIG1pbkhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIG1pbldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBhbXBsaXR1ZGVGYWN0b3I6IDEsXG4gICAgc2l6ZTogMC43LFxuICAgIGJhc2VDb2xvcjogMHhmZmZmZmYsXG4gICAgYmFzZUNvbG9yU3ByZWFkOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogMHgxYzEzNDQsXG4gIH07XG5cbiAgaGFsb0luc3RhbmNlID0gVkFOVEEuSEFMTyhvcHRpb25zKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICBpZiAoaGFsb0luc3RhbmNlKSB7XG4gICAgaGFsb0luc3RhbmNlLnJlc2l6ZSgpO1xuICB9XG59KTtcblxuaW5pdGlhbGl6ZUhhbG8oKTtcblxuJChcIiNtb3VzZUNvbnRyb2xzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gIHZhciBpc0NoZWNrZWQgPSAkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIik7XG4gIGhhbG9JbnN0YW5jZS5zZXRPcHRpb25zKHsgbW91c2VDb250cm9sczogaXNDaGVja2VkIH0pO1xufSk7XG5cbiQoXCIjdG91Y2hDb250cm9sc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNDaGVja2VkID0gJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xuICBoYWxvSW5zdGFuY2Uuc2V0T3B0aW9ucyh7IHRvdWNoQ29udHJvbHM6IGlzQ2hlY2tlZCB9KTtcbn0pO1xuXG4kKFwiI2d5cm9Db250cm9sc1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNDaGVja2VkID0gJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpO1xuICBoYWxvSW5zdGFuY2Uuc2V0T3B0aW9ucyh7IGd5cm9Db250cm9sczogaXNDaGVja2VkIH0pO1xufSk7XG5cbiQoXCIjYW1wbGl0dWRlRmFjdG9yXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KCQodGhpcykudmFsKCkpO1xuICB2YXIgYWRqdXN0ZWRWYWx1ZSA9IE1hdGgucG93KHZhbHVlLCAxLjUpO1xuICBoYWxvSW5zdGFuY2Uuc2V0T3B0aW9ucyh7IGFtcGxpdHVkZUZhY3RvcjogYWRqdXN0ZWRWYWx1ZX0pO1xufSk7XG5cbiQoXCIjc2l6ZVwiKS5vbihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnZhbCgpKTtcbiAgaGFsb0luc3RhbmNlLnNldE9wdGlvbnMoeyBzaXplOiB2YWx1ZSB9KTtcbn0pO1xuXG4kKFwiI2NvbG9yXCIpLm9uKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICB2YXIgY29sb3JIZXggPSAkKHRoaXMpLnZhbCgpO1xuICB2YXIgY29sb3JSR0IgPSBwYXJzZUludChjb2xvckhleC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgaGFsb0luc3RhbmNlLnNldE9wdGlvbnMoeyBiYXNlQ29sb3I6IGNvbG9yUkdCIH0pO1xufSk7XG4kKFwiI2JhY2tncm91bmRcIikub24oXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb2xvckhleCA9ICQodGhpcykudmFsKCk7XG4gIHZhciBjb2xvclJHQiA9IHBhcnNlSW50KGNvbG9ySGV4LnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuICBoYWxvSW5zdGFuY2Uuc2V0T3B0aW9ucyh7IGJhY2tncm91bmRDb2xvcjogY29sb3JSR0IgfSk7XG59KTtcbiQoXCIjc2F2ZUJ1dHRvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gIGh0bWwyY2FudmFzKGRvY3VtZW50LmJvZHkpLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5ocmVmID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgIGxpbmsuZG93bmxvYWQgPSBcInNjcmVlbnNob3QucG5nXCI7XG4gICAgbGluay5jbGljaygpO1xuICB9KTtcbn0pO1xuaHRtbDJjYW52YXMoZG9jdW1lbnQuYm9keSkudGhlbihmdW5jdGlvbihjYW52YXMpIHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==