/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ImageLoader = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Loader2 = __webpack_require__(1);
	
	var _Loader3 = _interopRequireDefault(_Loader2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ImageLoader = exports.ImageLoader = function (_Loader) {
	  _inherits(ImageLoader, _Loader);
	
	  function ImageLoader() {
	    _classCallCheck(this, ImageLoader);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageLoader).call(this));
	
	    _this._store = {};
	    console.log('enter ImageLoader');
	    return _this;
	  }
	
	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(images) {
	      var _this2 = this;
	
	      return new Promise(function (resolve, reject) {
	        var total = 0;
	        var counter = 0;
	        var loadFinish = function loadFinish() {
	          return total === counter;
	        };
	        Object.getOwnPropertyNames(images).forEach(function (key) {
	          total++;
	          var img = new Image();
	          img.src = images[key];
	          img.onload = function () {
	            _this2._store[key] = img;
	            counter++;
	            console.log(counter + '-' + 'image:' + key + '-' + ' load finish.');
	            /*   document.getElementById("img").appendChild(img.src);*/
	
	            var line = document.createElement("p");
	            line.innerHTML = "<img src=" + img.src + '>';
	            document.getElementById("img").appendChild(line);
	
	            if (loadFinish()) {
	              resolve();
	            }
	          };
	        });
	      });
	    }
	  }]);
	
	  return ImageLoader;
	}(_Loader3.default);
	
	var images = {
	  "pig": "http://i3.ytimg.com/vi/ReiY77HXPrs/mqdefault.jpg",
	  "apple": "http://maxcdn.thedesigninspiration.com/wp-content/uploads/2009/09/cute-animals/02.jpg",
	  "BlahBlah": "http://petupon.com/wp-content/uploads/2014/05/259758xcitefun-cute-animals-0.jpg",
	  "Test": "https://s-media-cache-ak0.pinimg.com/236x/c0/14/23/c014230dec32c2eeb133b7b8da072317.jpg"
	};
	
	var loader = new ImageLoader();
	loader.load(images).then(function () {
	  console.log('load finish.');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Loader = function () {
	  function Loader() {
	    _classCallCheck(this, Loader);
	  }
	
	  _createClass(Loader, [{
	    key: "load",
	    value: function load(url) {}
	  }]);
	
	  return Loader;
	}();
	
	exports.default = Loader;

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map