"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useFetch2 = _interopRequireDefault(require("./Hooks/useFetch"));
var _IWinner = require("./Interfaces/IWinner");
var _usePagination2 = _interopRequireDefault(require("./Hooks/usePagination"));
var _Pagination = _interopRequireDefault(require("./Pages/Pagination"));
var _DataLinksVariables = require("./Variables/DataLinksVariables");
var _FilterByID = _interopRequireDefault(require("./API/WinnersView/FilterByID"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var contentPerPage = 10;
var WinnerList = function WinnerList(_ref) {
  var winners = _ref.winners;
  var _usePagination = (0, _usePagination2.default)({
      contentPerPage: contentPerPage,
      count: winners.length
    }),
    firstContentIndex = _usePagination.firstContentIndex,
    lastContentIndex = _usePagination.lastContentIndex,
    nextPage = _usePagination.nextPage,
    prevPage = _usePagination.prevPage,
    page = _usePagination.page,
    totalPages = _usePagination.totalPages;
  var _useFetch = (0, _useFetch2.default)(_DataLinksVariables.garageViewLink),
    carsData = _useFetch.data;
  var isCarsDataLoaded = false;
  try {
    if (carsData === null) {
      console.log('cars data is null');
    } else {
      isCarsDataLoaded = true;
    }
  } catch (err) {
    console.log(err);
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "winners-list-content"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: "winners-tb"
  }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "\u2116"), /*#__PURE__*/_react.default.createElement("th", null, "CAR"), /*#__PURE__*/_react.default.createElement("th", null, "NAME"), /*#__PURE__*/_react.default.createElement("th", null, "WINS"), /*#__PURE__*/_react.default.createElement("th", null, "BEST TIME (SECONDS)")), winners.slice(firstContentIndex, lastContentIndex).map(function (winner) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: winner.id
    }, /*#__PURE__*/_react.default.createElement("td", null, winner.id), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-car-side",
      style: {
        'color': isCarsDataLoaded ? (0, _FilterByID.default)(carsData, winner.id)['color'] : '#CBCBCB'
      }
    })), /*#__PURE__*/_react.default.createElement("td", null, isCarsDataLoaded ? (0, _FilterByID.default)(carsData, winner.id)['name'] : ''), /*#__PURE__*/_react.default.createElement("td", null, winner.wins), /*#__PURE__*/_react.default.createElement("td", null, winner.time, " seconds"));
  })), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    paginatedBlockName: "winners",
    dataArray: winners,
    page: page,
    prevPage: prevPage,
    nextPage: nextPage,
    totalPages: totalPages
  }));
};
var _default = exports.default = WinnerList;