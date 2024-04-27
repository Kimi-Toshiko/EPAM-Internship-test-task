"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _Winners = _interopRequireDefault(require("./TSComponents/Winners"));
var _Navbar = _interopRequireDefault(require("./TSComponents/Navbar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import Garage from './TSComponents/Garage';

function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_Winners.default, null));
}
var _default = exports.default = App;