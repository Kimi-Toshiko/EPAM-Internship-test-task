"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../../navbar.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Navbar = function Navbar(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar nav"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "navbar-content"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Async ", /*#__PURE__*/_react.default.createElement("i", null, "Race"), " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: '/'
  }, "Garage")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    to: '/winners'
  }, "Winners"))))));
};
var _default = exports.default = Navbar;