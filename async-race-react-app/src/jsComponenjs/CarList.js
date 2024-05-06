"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ICar = _interopRequireDefault(require("./Interfaces/ICar"));
var _usePagination2 = _interopRequireDefault(require("./usePagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CarList = function CarList(_ref) {
  var cars = _ref.cars;
  var _usePagination = (0, _usePagination2.default)({
      contentPerPage: 7,
      count: cars.length
    }),
    firstContentIndex = _usePagination.firstContentIndex,
    lastContentIndex = _usePagination.lastContentIndex,
    nextPage = _usePagination.nextPage,
    prevPage = _usePagination.prevPage,
    page = _usePagination.page,
    totalPages = _usePagination.totalPages;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cars-list"
  }, cars.slice(firstContentIndex, lastContentIndex).map(function (car) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "car",
      key: car.id
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
      style: {
        'color': car.color
      }
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
    className: "orange-btn sm-padding ".concat(page === 1 ? 'btn-disabled' : 'btn-enabled'),
    disabled: page === 1 ? true : false,
    onClick: prevPage
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-caret-left"
  })), /*#__PURE__*/_react.default.createElement("p", null, "PAGE \u2116", page, "/", totalPages), /*#__PURE__*/_react.default.createElement("button", {
    className: "orange-btn sm-padding ".concat(page === totalPages ? 'btn-disabled' : 'btn-enabled'),
    disabled: page === totalPages ? true : false,
    onClick: nextPage
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa-solid fa-caret-right"
  })))));
};
var _default = exports.default = CarList;