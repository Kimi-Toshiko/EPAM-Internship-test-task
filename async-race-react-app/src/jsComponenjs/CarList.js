"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ICar = require("./Interfaces/ICar");
var _usePagination2 = _interopRequireDefault(require("./Hooks/usePagination"));
var _useFetch2 = _interopRequireDefault(require("./Hooks/useFetch"));
require("animate.css");
var _DataLinksVariables = require("./Variables/DataLinksVariables");
var _StartRace = _interopRequireDefault(require("./API/GarageView/StartRace"));
var _ResetRace = _interopRequireDefault(require("./API/GarageView/ResetRace"));
var _StopSingleCar = _interopRequireDefault(require("./API/GarageView/StopSingleCar"));
var _StartSingleCar = _interopRequireDefault(require("./API/GarageView/StartSingleCar"));
var _RemoveCar = _interopRequireDefault(require("./API/GarageView/RemoveCar"));
var _SelectCar = _interopRequireDefault(require("./API/GarageView/SelectCar"));
var _Pagination = _interopRequireDefault(require("./Pages/Pagination"));
var _CarInteractionButtons = _interopRequireDefault(require("./Pages/CarListComponents/CarInteractionButtons"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var contentPerPage = 7;
var CarList = function CarList(_ref) {
  var cars = _ref.cars,
    isDataChanged = _ref.isDataChanged,
    isRaceClicked = _ref.isRaceClicked,
    isResetClicked = _ref.isResetClicked;
  var _usePagination = (0, _usePagination2.default)({
      contentPerPage: contentPerPage,
      count: cars.length
    }),
    firstContentIndex = _usePagination.firstContentIndex,
    lastContentIndex = _usePagination.lastContentIndex,
    nextPage = _usePagination.nextPage,
    prevPage = _usePagination.prevPage,
    page = _usePagination.page,
    totalPages = _usePagination.totalPages;
  var _useFetch = (0, _useFetch2.default)(_DataLinksVariables.winnersViewLink),
    winnersData = _useFetch.data;
  var _useState = (0, _react.useState)(cars.length + 1),
    _useState2 = _slicedToArray(_useState, 2),
    carContainerId = _useState2[0],
    setCarContainerId = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    btnSelectedAmount = _useState4[0],
    setBtnSelectedAmount = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    isRaceClickedCount = _useState6[0],
    setIsRaceClickedCount = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    isResetClickedCount = _useState8[0],
    setIsResetClickedCount = _useState8[1];
  var handleIncreaseBtnSelectedAmount = function handleIncreaseBtnSelectedAmount() {
    setBtnSelectedAmount(btnSelectedAmount + 1);
  };
  var handleDecreaseBtnSelectedAmount = function handleDecreaseBtnSelectedAmount() {
    setBtnSelectedAmount(btnSelectedAmount + 1);
  };
  var handleChangeCarContainerIdToInvalid = function handleChangeCarContainerIdToInvalid() {
    setCarContainerId(cars.length + 1);
  };
  var handleChangeCarContainerIdToValid = function handleChangeCarContainerIdToValid(carId) {
    setCarContainerId(carId);
  };
  if (isRaceClicked > isRaceClickedCount) {
    setIsRaceClickedCount(isRaceClicked + 1);
    (0, _StartRace.default)(cars, winnersData, firstContentIndex, lastContentIndex, contentPerPage);
  }
  if (isResetClicked > isResetClickedCount) {
    setIsResetClickedCount(isResetClicked + 1);
    (0, _ResetRace.default)(cars, firstContentIndex, lastContentIndex);
  }

  // const handleRemoveCar = (carId: number) => {
  //   RemoveCar(carId, () => {
  //     isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
  //   });
  // }

  // const handleSelectCar = (carId: number) => {
  //   SelectCar(carId, btnSelectedAmount, () => {
  //     setBtnSelectedAmount(btnSelectedAmount - 1);
  //     setCarContainerId(cars.length + 1);
  //   }, () => {
  //     setCarContainerId(carId);
  //     setBtnSelectedAmount(btnSelectedAmount + 1);
  //   });
  // }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "class-list-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cars-list"
  }, cars.slice(firstContentIndex, lastContentIndex).map(function (car) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "car car-container",
      "data-selected": "".concat(carContainerId),
      key: car.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "car-sets"
    }, /*#__PURE__*/_react.default.createElement(_CarInteractionButtons.default, {
      carId: car.id,
      isDataChanged: isDataChanged,
      btnSelectedAmount: btnSelectedAmount,
      decreaseSelectedAmount: handleDecreaseBtnSelectedAmount,
      changeContainerToInvalid: handleChangeCarContainerIdToInvalid,
      changeContainerToValid: function changeContainerToValid() {
        handleChangeCarContainerToValid(car.id);
      }
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "start-stop-btns"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "green-btn sm-padding sm-btn engine-active-btn",
      id: "btn-start-engine-".concat(car.id),
      onClick: function onClick() {
        (0, _StartSingleCar.default)(car.id, car.name);
      }
    }, "A"), /*#__PURE__*/_react.default.createElement("button", {
      className: "gray-btn sm-padding sm-btn engine-inactive-btn",
      id: "btn-stop-engine-".concat(car.id),
      onClick: function onClick() {
        (0, _StopSingleCar.default)(car.id);
      }
    }, "B")), /*#__PURE__*/_react.default.createElement("div", {
      className: "car-ico",
      style: {
        'color': car.color
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-car-side",
      id: "animated-car-".concat(car.id),
      "is-participating": "false"
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "car-name"
    }, /*#__PURE__*/_react.default.createElement("p", null, car.name))), /*#__PURE__*/_react.default.createElement("div", {
      className: "finish-block"
    }), /*#__PURE__*/_react.default.createElement("hr", null));
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    paginatedBlockName: "garage",
    dataArray: cars,
    page: page,
    prevPage: prevPage,
    nextPage: nextPage,
    totalPages: totalPages
  })));
};
var _default = exports.default = CarList;