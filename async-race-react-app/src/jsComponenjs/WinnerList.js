"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useFetch2 = _interopRequireDefault(require("./useFetch"));
var _IWinner = _interopRequireDefault(require("./Interfaces/IWinner"));
var _usePagination2 = _interopRequireDefault(require("./usePagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var WinnerList = function WinnerList(_ref) {
  var winners = _ref.winners;
  var _usePagination = (0, _usePagination2.default)({
      contentPerPage: 10,
      count: winners.length
    }),
    firstContentIndex = _usePagination.firstContentIndex,
    lastContentIndex = _usePagination.lastContentIndex,
    nextPage = _usePagination.nextPage,
    prevPage = _usePagination.prevPage,
    page = _usePagination.page,
    totalPages = _usePagination.totalPages;
  var carsUrl = 'http://localhost:3000/garage';
  var _useFetch = (0, _useFetch2.default)(carsUrl),
    carsData = _useFetch.data;
  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject['id'] === id;
    })[0];
  }
  ;
  var isCarsDataLoaded = false;
  try {
    if (carsData === null) {
      console.log('cars data is null');
    } else {
      console.log('cars data is loaded');
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
        'color': isCarsDataLoaded ? filterById(carsData, winner.id)['color'] : '#CBCBCB'
      }
    })), /*#__PURE__*/_react.default.createElement("td", null, isCarsDataLoaded ? filterById(carsData, winner.id)['name'] : ''), /*#__PURE__*/_react.default.createElement("td", null, winner.wins), /*#__PURE__*/_react.default.createElement("td", null, winner.time, " seconds"));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "winners-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "winners-count"
  }, /*#__PURE__*/_react.default.createElement("p", null, "WINNERS (", winners.length, ")")), /*#__PURE__*/_react.default.createElement("div", {
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
var _default = exports.default = WinnerList;