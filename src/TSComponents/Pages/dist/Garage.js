"use strict";
exports.__esModule = true;
require("../../garage.css");
var CarList_1 = require("../CarList");
var useFetch_1 = require("../useFetch");
var axios_1 = require("axios");
var CarBrandList_1 = require("../Data/CarBrandList");
var CarModelList_1 = require("../Data/CarModelList");
var HexAlphabetList_1 = require("../Data/HexAlphabetList");
var react_1 = require("react");
require("animate.css");
var sweetalert2_1 = require("sweetalert2");
var Garage = function (props) {
    var _a = react_1.useState(0), isDataChanged = _a[0], setIsDataChanged = _a[1];
    var carsUrl = 'http://localhost:3000/garage';
    var _b = useFetch_1["default"](carsUrl, isDataChanged), cars = _b.data, isPending = _b.isPending, error = _b.error;
    var _c = react_1.useState(''), createInputName = _c[0], setCreateInputName = _c[1];
    var _d = react_1.useState('#000000'), createInputColor = _d[0], setCreateInputColor = _d[1];
    var _e = react_1.useState(''), updateInputName = _e[0], setUpdateInputName = _e[1];
    var _f = react_1.useState(''), updateInputColor = _f[0], setUpdateInputColor = _f[1];
    var createCarName = document.getElementById('create-car-name');
    var selectedCar = document.querySelector('div[data-selected]');
    var handleGenerateRandomCars = function () {
        for (var i = cars.length; i < cars.length + 100; i++) {
            var newCar = {
                "name": CarBrandList_1["default"][Math.round(Math.random() * (CarBrandList_1["default"].length - 1))] + " " + CarModelList_1["default"][Math.round(Math.random() * (CarModelList_1["default"].length - 1))],
                "color": "#" + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))] + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))] + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))] + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))] + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))] + HexAlphabetList_1["default"][Math.round(Math.random() * (HexAlphabetList_1["default"].length - 1))]
            };
            axios_1["default"].post(carsUrl, newCar);
        }
        setIsDataChanged(isDataChanged + 1);
    };
    var handleCreateNameInputChange = function (el) {
        setCreateInputName(el.target.value);
        if (createCarName === null || createCarName === void 0 ? void 0 : createCarName.classList.contains('invalid-form-input')) {
            createCarName === null || createCarName === void 0 ? void 0 : createCarName.classList.remove('invalid-form-input');
        }
    };
    var handleCreateColorInputChange = function (el) {
        setCreateInputColor(el.target.value);
    };
    var handleCreateCar = function (el) {
        el.preventDefault();
        var newCar = {
            'name': createInputName,
            'color': createInputColor
        };
        if (createInputName === '') {
            createCarName === null || createCarName === void 0 ? void 0 : createCarName.setAttribute('placeholder', 'Enter car name...');
            createCarName === null || createCarName === void 0 ? void 0 : createCarName.classList.add('invalid-form-input');
        }
        else {
            axios_1["default"].post(carsUrl, newCar);
            setIsDataChanged(isDataChanged + 1);
        }
    };
    var handleUpdateNameInputChange = function (el) {
        setUpdateInputName(el.target.value);
        if (createCarName === null || createCarName === void 0 ? void 0 : createCarName.classList.contains('invalid-form-input')) {
            createCarName === null || createCarName === void 0 ? void 0 : createCarName.classList.remove('invalid-form-input');
        }
    };
    var handleUpdateColorInputChange = function (el) {
        setUpdateInputColor(el.target.value);
    };
    var handleUpdate = function (el) {
        el.preventDefault();
        var selectedCarId = Number(selectedCar === null || selectedCar === void 0 ? void 0 : selectedCar.getAttribute('data-selected'));
        if (cars[selectedCarId] === undefined && selectedCarId !== cars.length) {
            console.log(selectedCarId, cars.length);
            sweetalert2_1["default"].fire({
                title: "Please, select a car you want to update!",
                showClass: {
                    popup: "\n                    animate__animated\n                    animate__fadeInUp\n                    animate__faster\n                  "
                },
                hideClass: {
                    popup: "\n                    animate__animated\n                    animate__fadeOutDown\n                    animate__faster\n                  "
                }
            });
        }
        else {
            if ((updateInputName === '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
                axios_1["default"].patch(carsUrl + "/" + selectedCarId, { "color": updateInputColor });
                setIsDataChanged(isDataChanged + 1);
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor === '' || null || undefined)) {
                axios_1["default"].patch(carsUrl + "/" + selectedCarId, { "name": updateInputName });
                setIsDataChanged(isDataChanged + 1);
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
                axios_1["default"].patch(carsUrl + "/" + selectedCarId, { "name": updateInputName, "color": updateInputColor, "id": selectedCarId });
                setIsDataChanged(isDataChanged + 1);
            }
            else {
                console.log('nothing is changed');
            }
        }
    };
    return (React.createElement("div", { className: "garage" },
        React.createElement("div", { id: "garage-content" },
            React.createElement("div", { className: "btns-block" },
                React.createElement("div", { className: "race-btns" },
                    React.createElement("button", { className: 'orange-btn' },
                        "Race ",
                        React.createElement("i", { className: "fa-solid fa-play" })),
                    React.createElement("button", { className: 'light-blue-btn' },
                        "Reset ",
                        React.createElement("i", { className: "fa-solid fa-rotate-left" }))),
                React.createElement("div", { className: "cu-btns" },
                    React.createElement("div", { className: "create" },
                        React.createElement("form", { action: "http://localhost:3000/garage", method: 'POST' },
                            React.createElement("input", { type: "text", id: 'create-car-name', onChange: handleCreateNameInputChange }),
                            React.createElement("input", { type: "color", id: 'create-car-color', onChange: handleCreateColorInputChange }),
                            React.createElement("button", { className: 'orange-btn', type: 'submit', onClick: handleCreateCar }, "Create"))),
                    React.createElement("div", { className: "update" },
                        React.createElement("form", { action: "http://localhost:3000/garage", method: 'POST' },
                            React.createElement("input", { type: "text", onChange: handleUpdateNameInputChange }),
                            React.createElement("input", { type: "color", onChange: handleUpdateColorInputChange }),
                            React.createElement("button", { className: 'orange-btn', type: 'submit', onClick: handleUpdate }, "Update")))),
                React.createElement("div", { className: "generate-cars-btn" },
                    React.createElement("button", { className: 'light-blue-btn', onClick: handleGenerateRandomCars }, "Generate cars"))),
            React.createElement("div", { className: "divider" }),
            React.createElement("section", null,
                error && React.createElement("p", { className: 'fetch-error' }, error),
                isPending && React.createElement("p", { className: 'fetch-loading' }, "Loading cars..."),
                cars && React.createElement(CarList_1["default"], { cars: cars, isDataChanged: function () { setIsDataChanged(isDataChanged + 1); } })))));
};
exports["default"] = Garage;
