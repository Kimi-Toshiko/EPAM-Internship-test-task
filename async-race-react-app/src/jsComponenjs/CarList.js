"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ICar = _interopRequireDefault(require("./Interfaces/ICar"));
var _usePagination2 = _interopRequireDefault(require("./usePagination"));
var _axios = _interopRequireDefault(require("axios"));
var _useFetch2 = _interopRequireDefault(require("./useFetch"));
var _sweetalert = _interopRequireDefault(require("sweetalert2"));
require("animate.css");
var _IWinner = _interopRequireDefault(require("./Interfaces/IWinner"));
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
  var winnersUrl = 'http://localhost:3000/winners';
  var _useFetch = (0, _useFetch2.default)(winnersUrl),
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
    singleCarTime = _useState6[0],
    setSingleCarTime = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isCarMoving = _useState8[0],
    setIsCarMoving = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    isRaceClickedCount = _useState10[0],
    setIsRaceClickedCount = _useState10[1];
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    isResetClickedCount = _useState12[0],
    setIsResetClickedCount = _useState12[1];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    bestRaceCarTime = _useState14[0],
    setBestRaceCarTime = _useState14[1];
  if (isRaceClicked > isRaceClickedCount) {
    setIsRaceClickedCount(isRaceClicked + 1);
    var timesArray = [99999];
    cars.slice(firstContentIndex, lastContentIndex).map(function (car) {
      fetch("http://localhost:3000/engine?id=".concat(car.id, "&status=started"), {
        method: 'PATCH'
      }).then(function (response) {
        return response.json().then(function (data) {
          return {
            data: data
          };
        }).then(function (res) {
          var animatedCar = document.getElementById("animated-car-".concat(car.id));
          var carTime = Math.round(res.data.distance / res.data.velocity / 10) / 100;
          var thisBtnStartEngine = document.getElementById("btn-start-engine-".concat(car.id));
          var thisBtnStopEngine = document.getElementById("btn-stop-engine-".concat(car.id));
          thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.remove('engine-active-btn');
          thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.add('engine-inactive-btn');
          thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.remove('engine-inactive-btn');
          thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.add('engine-active-btn');
          // animatedCar?.animate([{left: '0px'}, {left: '80vw'}], {duration: carTime*1000, iterations: 1, fill: "forwards"});
          animatedCar === null || animatedCar === void 0 || animatedCar.classList.add('animation-move-car');
          animatedCar === null || animatedCar === void 0 || animatedCar.setAttribute('animation-duration', "".concat(carTime));
          timesArray.push(carTime);
          console.log(timesArray.length);
        }).then(function () {
          if (cars.length <= contentPerPage && timesArray.length > cars.length || cars.length > contentPerPage && timesArray.length > contentPerPage) {
            setBestRaceCarTime(Math.min.apply(Math, timesArray));
            setTimeout(function () {
              _sweetalert.default.fire({
                title: "".concat(car.name, " won with the time ").concat(Math.min.apply(Math, timesArray), "s!"),
                showClass: {
                  popup: "\n                                    animate__animated\n                                    animate__fadeInUp\n                                    animate__faster\n                                  "
                },
                hideClass: {
                  popup: "\n                                    animate__animated\n                                    animate__fadeOutDown\n                                    animate__faster\n                                  "
                }
              });
              winnersData.map(function (winner) {
                if (car.id === winner.id) {
                  _axios.default.patch("".concat(winnersUrl, "/").concat(winner.id), {
                    "wins": winner.wins + 1
                  }).catch(function (err) {
                    console.log(err);
                  });
                  ;
                  if (winner.time > Math.min.apply(Math, timesArray)) {
                    _axios.default.patch("".concat(winnersUrl, "/").concat(winner.id), {
                      "time": Math.min.apply(Math, timesArray)
                    }).catch(function (err) {
                      console.log(err);
                    });
                  }
                } else {
                  var newWinner = {
                    'id': car.id,
                    'wins': 1,
                    'time': Math.min.apply(Math, timesArray)
                  };
                  _axios.default.post(winnersUrl, newWinner).catch(function (err) {
                    console.log(err);
                  });
                  ;
                }
              });
            }, Math.min.apply(Math, timesArray) * 1000);
          }
        });
      });
    });
  }
  if (isResetClicked > isResetClickedCount) {
    setIsResetClickedCount(isResetClicked + 1);
    cars.slice(firstContentIndex, lastContentIndex).map(function (car) {
      var animatedCar = document.getElementById("animated-car-".concat(car.id));
      var thisBtnStartEngine = document.getElementById("btn-start-engine-".concat(car.id));
      var thisBtnStopEngine = document.getElementById("btn-stop-engine-".concat(car.id));
      thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.remove('engine-inactive-btn');
      thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.add('engine-active-btn');
      thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.remove('engine-active-btn');
      thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.add('engine-inactive-btn');
      animatedCar === null || animatedCar === void 0 || animatedCar.classList.remove('animation-move-car');
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "class-list-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cars-list"
  }, cars.slice(firstContentIndex, lastContentIndex).map(function (car) {
    var _document$getElementB5, _document$getElementB6;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "car car-container",
      "data-selected": "".concat(carContainerId),
      key: car.id
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "car-sets"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "car-race-btns"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "orange-btn md-padding sm-btn",
      id: "select-btn-".concat(car.id),
      onClick: function onClick() {
        if (btnSelectedAmount >= 1) {
          var _document$getElementB;
          if ((_document$getElementB = document.getElementById("select-btn-".concat(car.id))) !== null && _document$getElementB !== void 0 && _document$getElementB.classList.contains('btn-selected-active')) {
            var _document$getElementB2;
            (_document$getElementB2 = document.getElementById("select-btn-".concat(car.id))) === null || _document$getElementB2 === void 0 || _document$getElementB2.classList.toggle('btn-selected-active');
            setBtnSelectedAmount(btnSelectedAmount - 1);
            setCarContainerId(cars.length + 1);
          } else {
            _sweetalert.default.fire({
              title: "Please, deselect the previous car!",
              showClass: {
                popup: "\n                                                            animate__animated\n                                                            animate__fadeInUp\n                                                            animate__faster\n                                                          "
              },
              hideClass: {
                popup: "\n                                                            animate__animated\n                                                            animate__fadeOutDown\n                                                            animate__faster\n                                                          "
              }
            });
          }
        } else {
          var _document$getElementB3;
          setCarContainerId(car.id);
          setBtnSelectedAmount(btnSelectedAmount + 1);
          (_document$getElementB3 = document.getElementById("select-btn-".concat(car.id))) === null || _document$getElementB3 === void 0 || _document$getElementB3.classList.toggle('btn-selected-active');
        }
      }
    }, "Select"), /*#__PURE__*/_react.default.createElement("button", {
      className: "light-blue-btn md-padding sm-btn",
      onClick: function onClick() {
        var _document$getElementB4;
        if ((_document$getElementB4 = document.getElementById("select-btn-".concat(car.id))) !== null && _document$getElementB4 !== void 0 && _document$getElementB4.classList.contains('btn-selected-active')) {
          _sweetalert.default.fire({
            title: "Please, deselect this car before deleting it!",
            showClass: {
              popup: "\n                                                        animate__animated\n                                                        animate__fadeInUp\n                                                        animate__faster\n                                                      "
            },
            hideClass: {
              popup: "\n                                                        animate__animated\n                                                        animate__fadeOutDown\n                                                        animate__faster\n                                                      "
            }
          });
        } else {
          _axios.default.delete("http://localhost:3000/garage/".concat(car.id));
          isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
          _axios.default.delete("http://localhost:3000/winners/".concat(car.id));
        }
      }
    }, "Remove")), /*#__PURE__*/_react.default.createElement("div", {
      className: "start-stop-btns"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "green-btn sm-padding sm-btn engine-active-btn",
      id: "btn-start-engine-".concat(car.id),
      onClick: function onClick() {
        setIsCarMoving(true);
        fetch("http://localhost:3000/engine?id=".concat(car.id, "&status=started"), {
          method: 'PATCH'
        }).then(function (response) {
          return response.json().then(function (data) {
            return {
              data: data
            };
          }).then(function (res) {
            var animatedCar = document.getElementById("animated-car-".concat(car.id));
            var carTime = Math.round(res.data.distance / res.data.velocity / 10) / 100;
            var thisBtnStartEngine = document.getElementById("btn-start-engine-".concat(car.id));
            var thisBtnStopEngine = document.getElementById("btn-stop-engine-".concat(car.id));
            thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.remove('engine-active-btn');
            thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.add('engine-inactive-btn');
            thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.remove('engine-inactive-btn');
            thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.add('engine-active-btn');
            setSingleCarTime(carTime);
            animatedCar === null || animatedCar === void 0 || animatedCar.classList.add('animation-move-car');
            animatedCar === null || animatedCar === void 0 || animatedCar.setAttribute('animation-duration', "".concat(carTime));
            animatedCar === null || animatedCar === void 0 || animatedCar.setAttribute('animation-fill', 'backwards');
            // animatedCar?.animate([{left: '0px'}, {left: '80vw'}], {duration: carTime*1000, iterations: 1, fill: "backwards"});
            animatedCar === null || animatedCar === void 0 || animatedCar.addEventListener('animationend', function () {
              if (animatedCar !== null && animatedCar !== void 0 && animatedCar.classList.contains('animation-move-car')) {
                var _thisBtnStartEngine = document.getElementById("btn-start-engine-".concat(car.id));
                var _thisBtnStopEngine = document.getElementById("btn-stop-engine-".concat(car.id));
                _thisBtnStartEngine === null || _thisBtnStartEngine === void 0 || _thisBtnStartEngine.classList.remove('engine-inactive-btn');
                _thisBtnStartEngine === null || _thisBtnStartEngine === void 0 || _thisBtnStartEngine.classList.add('engine-active-btn');
                _thisBtnStopEngine === null || _thisBtnStopEngine === void 0 || _thisBtnStopEngine.classList.remove('engine-active-btn');
                _thisBtnStopEngine === null || _thisBtnStopEngine === void 0 || _thisBtnStopEngine.classList.add('engine-inactive-btn');
                animatedCar === null || animatedCar === void 0 || animatedCar.classList.remove('animation-move-car');
                _sweetalert.default.fire({
                  title: "".concat(car.name, " had finished race in ").concat(carTime, "s!"),
                  showClass: {
                    popup: "\n                                      animate__animated\n                                      animate__fadeInUp\n                                      animate__faster\n                                    "
                  },
                  hideClass: {
                    popup: "\n                                      animate__animated\n                                      animate__fadeOutDown\n                                      animate__faster\n                                    "
                  }
                });
              }
            });
          });
        });
      }
    }, "A"), /*#__PURE__*/_react.default.createElement("button", {
      className: "gray-btn sm-padding sm-btn engine-inactive-btn",
      id: "btn-stop-engine-".concat(car.id),
      onClick: function onClick() {
        setIsCarMoving(false);
        fetch("http://localhost:3000/engine?id=".concat(car.id, "&status=stopped"), {
          method: 'PATCH'
        }).then(function (response) {
          return response.json().then(function (data) {
            return {
              data: data
            };
          }).then(function (res) {
            var animatedCar = document.getElementById("animated-car-".concat(car.id));
            var thisBtnStartEngine = document.getElementById("btn-start-engine-".concat(car.id));
            var thisBtnStopEngine = document.getElementById("btn-stop-engine-".concat(car.id));
            thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.remove('engine-inactive-btn');
            thisBtnStartEngine === null || thisBtnStartEngine === void 0 || thisBtnStartEngine.classList.add('engine-active-btn');
            thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.remove('engine-active-btn');
            thisBtnStopEngine === null || thisBtnStopEngine === void 0 || thisBtnStopEngine.classList.add('engine-inactive-btn');
            animatedCar === null || animatedCar === void 0 || animatedCar.classList.remove('animation-move-car');
          });
        });
      }
    }, "B")), /*#__PURE__*/_react.default.createElement("div", {
      className: "car-ico",
      style: {
        'color': car.color
      }
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa-solid fa-car-side",
      id: "animated-car-".concat(car.id),
      "animation-duration": "0s",
      "animation-fill": "forwards",
      style: {
        'animationDuration': "".concat((_document$getElementB5 = document.getElementById("animated-car-".concat(car.id))) === null || _document$getElementB5 === void 0 || (_document$getElementB5 = _document$getElementB5.getAttribute('animation-duration')) === null || _document$getElementB5 === void 0 ? void 0 : _document$getElementB5.valueOf(), "s"),
        'animationFillMode': "".concat((_document$getElementB6 = document.getElementById("animated-car-".concat(car.id))) === null || _document$getElementB6 === void 0 ? void 0 : _document$getElementB6.getAttribute('animation-fill'))
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
  }))))));
};
var _default = exports.default = CarList;