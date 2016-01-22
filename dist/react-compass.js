(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactCompass"] = factory(require("React"));
	else
		root["ReactCompass"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ReactCompass - a carefully crafted Compass component for React.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Bohdan Shtepan
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * http://modern-dev.com/
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT license.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var ReactCompass = function (_React$Component) {
	    _inherits(ReactCompass, _React$Component);
	
	    function ReactCompass() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, ReactCompass);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ReactCompass)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.render = function () {
	            return _react2.default.createElement(
	                'div',
	                { className: 'compass' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'compass__windrose', style: { transform: 'rotate(-' + _this.direction + 'deg)' } },
	                    [].concat(_toConsumableArray(Array(10))).map(function (k, i) {
	                        return _react2.default.createElement('div', { className: 'compass__mark', key: i + 1 });
	                    }),
	                    _react2.default.createElement('div', { className: 'compass__mark--direction-h' }),
	                    _react2.default.createElement('div', { className: 'compass__mark--direction-v' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'compass__arrow-container' },
	                    _react2.default.createElement('div', { className: 'compass__arrow' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'compass__labels' },
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            _this.directionName
	                        ),
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            _this.direction,
	                            _react2.default.createElement(
	                                'sup',
	                                null,
	                                'o'
	                            )
	                        )
	                    )
	                )
	            );
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(ReactCompass, [{
	        key: 'direction',
	        get: function get() {
	            var d = this.props.direction;
	
	            while (d < 0) {
	                d += 360;
	            }
	
	            while (d > 360) {
	                d -= 360;
	            }
	
	            return d;
	        }
	    }, {
	        key: 'directionName',
	        get: function get() {
	            var sections = this.props.directionNames.length,
	                sect = 360 / sections,
	                x = Math.floor((this.direction + sect / 2) / sect);
	
	            x = x >= sections ? 0 : x;
	
	            return this.props.directionNames[x];
	        }
	    }]);
	
	    return ReactCompass;
	}(_react2.default.Component);
	
	ReactCompass.defaultProps = {
	    direction: 0,
	    directionNames: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
	};
	ReactCompass.propTypes = {
	    direction: _react2.default.PropTypes.number.isRequired,
	    directionNames: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string).isRequired
	};
	exports.default = ReactCompass;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-compass.js.map