"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _Garage = _interopRequireDefault(require("./TSComponents/Garage"));
var _Navbar = _interopRequireDefault(require("./TSComponents/Navbar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Winners from './TSComponents/Winners';

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Garage.default, null));
}
var _default = exports.default = App;