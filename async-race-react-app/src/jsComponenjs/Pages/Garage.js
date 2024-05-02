"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../../garage.css");
var _CarList = _interopRequireDefault(require("../CarList"));
var _useFetch2 = _interopRequireDefault(require("../useFetch"));
var _axios = _interopRequireDefault(require("axios"));
var _CarBrandList = _interopRequireDefault(require("../Data/CarBrandList"));
var _CarModelList = _interopRequireDefault(require("../Data/CarModelList"));
var _HexAlphabetList = _interopRequireDefault(require("../Data/HexAlphabetList"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Garage = function Garage(props) {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    _isDataChanged = _useState2[0],
    setIsDataChanged = _useState2[1];
  var carsUrl = 'http://localhost:3000/garage';
  var _useFetch = (0, _useFetch2.default)(carsUrl, _isDataChanged),
    cars = _useFetch.data,
    isPending = _useFetch.isPending,
    error = _useFetch.error;
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    inputName = _useState4[0],
    setInputName = _useState4[1];
  var _useState5 = (0, _react.useState)('#000000'),
    _useState6 = _slicedToArray(_useState5, 2),
    inputColor = _useState6[0],
    setInputColor = _useState6[1];
  var createCarName = document.getElementById('create-car-name');
  var handleGenerateRandomCars = function handleGenerateRandomCars() {
    for (var i = cars.length; i < cars.length + 100; i++) {
      var newCar = {
        "name": "".concat(_CarBrandList.default[Math.round(Math.random() * (_CarBrandList.default.length - 1))], " ").concat(_CarModelList.default[Math.round(Math.random() * (_CarModelList.default.length - 1))]),
        "color": "#".concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))]).concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))]).concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))]).concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))]).concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))]).concat(_HexAlphabetList.default[Math.round(Math.random() * (_HexAlphabetList.default.length - 1))])
      };
      _axios.default.post(carsUrl, newCar);
    }
    setIsDataChanged(_isDataChanged + 1);
  };
  var handleNameInputChange = function handleNameInputChange(el) {
    setInputName(el.target.value);
    if (createCarName !== null && createCarName !== void 0 && createCarName.classList.contains('invalid-form-input')) {
      createCarName === null || createCarName === void 0 || createCarName.classList.remove('invalid-form-input');
    }
  };
  var handleColorInputChange = function handleColorInputChange(el) {
    setInputColor(el.target.value);
  };
  var handleCreateCar = function handleCreateCar(el) {
    el.preventDefault();
    var newCar = {
      'name': inputName,
      'color': inputColor
    };
    if (inputName === '') {
      console.log('name is empty');
      createCarName === null || createCarName === void 0 || createCarName.setAttribute('placeholder', 'Enter car name...');
      createCarName === null || createCarName === void 0 || createCarName.classList.add('invalid-form-input');
    } else {
      _axios.default.post(carsUrl, newCar);
      setIsDataChanged(_isDataChanged + 1);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "garage"
  }, /*#__PURE__*/React.createElement("div", {
    id: "garage-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "btns-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "race-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "orange-btn"
  }, "Race ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-play"
  })), /*#__PURE__*/React.createElement("button", {
    className: "light-blue-btn"
  }, "Reset ", /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-rotate-left"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cu-btns"
  }, /*#__PURE__*/React.createElement("div", {
    className: "create"
  }, /*#__PURE__*/React.createElement("form", {
    action: "http://localhost:3000/garage",
    method: "POST"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "create-car-name",
    onChange: handleNameInputChange
  }), /*#__PURE__*/React.createElement("input", {
    type: "color",
    id: "create-car-color",
    onChange: handleColorInputChange
  }), /*#__PURE__*/React.createElement("button", {
    className: "orange-btn",
    type: "submit",
    onClick: handleCreateCar
  }, "Create"))), /*#__PURE__*/React.createElement("div", {
    className: "update"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    type: "color"
  }), /*#__PURE__*/React.createElement("button", {
    className: "orange-btn"
  }, "Update"))), /*#__PURE__*/React.createElement("div", {
    className: "generate-cars-btn"
  }, /*#__PURE__*/React.createElement("button", {
    className: "light-blue-btn",
    onClick: handleGenerateRandomCars
  }, "Generate cars"))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("section", null, error && /*#__PURE__*/React.createElement("p", {
    className: "fetch-error"
  }, error), isPending && /*#__PURE__*/React.createElement("p", {
    className: "fetch-loading"
  }, "Loading cars..."), cars && /*#__PURE__*/React.createElement(_CarList.default, {
    cars: cars,
    isDataChanged: function isDataChanged() {
      setIsDataChanged(_isDataChanged + 1);
    }
  }))));
};
var _default = exports.default = Garage;