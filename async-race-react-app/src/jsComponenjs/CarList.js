"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ICar = _interopRequireDefault(require("./ICar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CarList = function CarList(_ref) {
  var cars = _ref.cars;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cars-list"
  }, cars.map(function (car) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "car"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "car-sets"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "car-race-btns"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "orange-btn md-padding sm-btn"
    }, "Select"), /*#__PURE__*/_react.default.createElement("button", {
      className: "light-blue-btn md-padding sm-btn"
    }, "Remove")), /*#__PURE__*/_react.default.createElement("div", {
      className: "start-stop-btns"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "green-btn sm-padding sm-btn"
    }, "A"), /*#__PURE__*/_react.default.createElement("button", {
      className: "gray-btn sm-padding sm-btn"
    }, "B")), /*#__PURE__*/_react.default.createElement("div", {
      className: "car-ico"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-car-side",
      color: car.color
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "car-name"
    }, /*#__PURE__*/_react.default.createElement("p", null, car.name))), /*#__PURE__*/_react.default.createElement("div", {
      className: "finish-block"
    }), /*#__PURE__*/_react.default.createElement("hr", null));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "garage-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "garage-count"
  }, /*#__PURE__*/_react.default.createElement("p", null, "GARAGE (", cars.length, ")")), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "orange-btn sm-padding"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-caret-left"
  })), /*#__PURE__*/_react.default.createElement("p", null, "PAGE #1"), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange-btn sm-padding"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-caret-right"
  })))));
};
var _default = exports.default = CarList;