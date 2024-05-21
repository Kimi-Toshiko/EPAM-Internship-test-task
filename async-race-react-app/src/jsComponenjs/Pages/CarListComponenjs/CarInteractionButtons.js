"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _RemoveCar = _interopRequireDefault(require("../../API/GarageView/RemoveCar"));
var _SelectCar = _interopRequireDefault(require("../../API/GarageView/SelectCar"));
var _ICar = require("../../Interfaces/ICar");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var handleRemoveCar = function handleRemoveCar(carId, isDataChanged) {
  (0, _RemoveCar.default)(carId, function () {
    isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
  });
};
var handleSelectCar = function handleSelectCar(carId, btnSelectedAmount, decreaseSelectedAmount, changeContainerToInvalid, setContainerToValid, increaseSelectedAmount) {
  (0, _SelectCar.default)(carId, btnSelectedAmount, function () {
    decreaseSelectedAmount();
    changeContainerToInvalid();
  }, function () {
    setContainerToValid(carId);
    increaseSelectedAmount();
  });
};
var CarInteractionButtons = function CarInteractionButtons(_ref) {
  var carId = _ref.carId,
    isDataChanged = _ref.isDataChanged,
    btnSelectedAmount = _ref.btnSelectedAmount,
    decreaseSelectedAmount = _ref.decreaseSelectedAmount,
    changeContainerToInvalid = _ref.changeContainerToInvalid,
    changeContainerToValid = _ref.changeContainerToValid,
    increaseSelectedAmount = _ref.increaseSelectedAmount;
  return /*#__PURE__*/React.createElement("div", {
    className: "car-race-btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: "orange-btn md-padding sm-btn",
    id: "select-btn-".concat(carId),
    onClick: function onClick() {
      handleSelectCar(carId, btnSelectedAmount, decreaseSelectedAmount, changeContainerToInvalid, changeContainerToValid, increaseSelectedAmount);
    }
  }, "Select"), /*#__PURE__*/React.createElement("button", {
    className: "light-blue-btn md-padding sm-btn",
    onClick: function onClick() {
      handleRemoveCar(carId, isDataChanged);
    }
  }, "Remove"));
};
var _default = exports.default = CarInteractionButtons;