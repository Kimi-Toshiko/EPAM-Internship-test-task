"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../../winners.css");
var _useFetch2 = _interopRequireDefault(require("../useFetch"));
var _WinnerList = _interopRequireDefault(require("../WinnerList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Winners = function Winners(props) {
  var _useFetch = (0, _useFetch2.default)('http://localhost:3000/winners'),
    winnersData = _useFetch.data,
    winnersIsPending = _useFetch.isPending,
    winnersError = _useFetch.error;
  return /*#__PURE__*/React.createElement("div", {
    className: "winners"
  }, /*#__PURE__*/React.createElement("div", {
    id: "winners-content"
  }, /*#__PURE__*/React.createElement("h2", null, "WINNERS"), /*#__PURE__*/React.createElement("section", null, winnersError && /*#__PURE__*/React.createElement("p", {
    className: "fetch-error"
  }, winnersError), winnersIsPending && /*#__PURE__*/React.createElement("p", {
    className: "fetch-loading"
  }, "Loading winners..."), winnersData && /*#__PURE__*/React.createElement(_WinnerList.default, {
    winners: winnersData
  }))));
};
var _default = exports.default = Winners;