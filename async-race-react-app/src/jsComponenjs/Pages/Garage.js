"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../../garage.css");
var _CarList = _interopRequireDefault(require("../CarList"));
var _useFetch2 = _interopRequireDefault(require("../useFetch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Garage = function Garage(props) {
  var carsUrl = 'http://localhost:3000/garage';
  var _useFetch = (0, _useFetch2.default)(carsUrl),
    cars = _useFetch.data,
    isPending = _useFetch.isPending,
    error = _useFetch.error;
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
  }, /*#__PURE__*/React.createElement("input", {
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    type: "color"
  }), /*#__PURE__*/React.createElement("button", {
    className: "orange-btn"
  }, "Create")), /*#__PURE__*/React.createElement("div", {
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
    className: "light-blue-btn"
  }, "Generate cars"))), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("section", null, error && /*#__PURE__*/React.createElement("p", {
    className: "fetch-error"
  }, error), isPending && /*#__PURE__*/React.createElement("p", {
    className: "fetch-loading"
  }, "Loading cars..."), cars && /*#__PURE__*/React.createElement(_CarList.default, {
    cars: cars
  }))));
};
var _default = exports.default = Garage;