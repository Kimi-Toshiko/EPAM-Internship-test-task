"use strict";
exports.__esModule = true;
var react_1 = require("react");
var usePagination_1 = require("./usePagination");
var axios_1 = require("axios");
var react_2 = require("react");
var sweetalert2_1 = require("sweetalert2");
require("animate.css");
var CarList = function (_a) {
    var cars = _a.cars, isDataChanged = _a.isDataChanged;
    var _b = usePagination_1["default"]({
        contentPerPage: 7,
        count: cars.length
    }), firstContentIndex = _b.firstContentIndex, lastContentIndex = _b.lastContentIndex, nextPage = _b.nextPage, prevPage = _b.prevPage, page = _b.page, totalPages = _b.totalPages;
    var _c = react_2.useState(cars.length + 1), carContainerId = _c[0], setCarContainerId = _c[1];
    var _d = react_2.useState(0), btnSelectedAmount = _d[0], setBtnSelectedAmount = _d[1];
    var _e = react_2.useState(false), isCarMoving = _e[0], setIsCarMoving = _e[1];
    return (react_1["default"].createElement("div", { className: "class-list-container" },
        react_1["default"].createElement("div", { className: "cars-list" },
            cars.slice(firstContentIndex, lastContentIndex).map(function (car) { return (react_1["default"].createElement("div", { className: "car car-container", "data-selected": "" + carContainerId, key: car.id },
                react_1["default"].createElement("div", { className: "car-sets" },
                    react_1["default"].createElement("div", { className: "car-race-btns" },
                        react_1["default"].createElement("button", { className: 'orange-btn md-padding sm-btn', id: "select-btn-" + car.id, onClick: function () {
                                var _a, _b, _c;
                                if (btnSelectedAmount >= 1) {
                                    if ((_a = document.getElementById("select-btn-" + car.id)) === null || _a === void 0 ? void 0 : _a.classList.contains('btn-selected-active')) {
                                        (_b = document.getElementById("select-btn-" + car.id)) === null || _b === void 0 ? void 0 : _b.classList.toggle('btn-selected-active');
                                        setBtnSelectedAmount(btnSelectedAmount - 1);
                                        setCarContainerId(cars.length + 1);
                                    }
                                    else {
                                        sweetalert2_1["default"].fire({
                                            title: "Please, deselect the previous car!",
                                            showClass: {
                                                popup: "\n                                                            animate__animated\n                                                            animate__fadeInUp\n                                                            animate__faster\n                                                          "
                                            },
                                            hideClass: {
                                                popup: "\n                                                            animate__animated\n                                                            animate__fadeOutDown\n                                                            animate__faster\n                                                          "
                                            }
                                        });
                                    }
                                }
                                else {
                                    setCarContainerId(car.id);
                                    setBtnSelectedAmount(btnSelectedAmount + 1);
                                    (_c = document.getElementById("select-btn-" + car.id)) === null || _c === void 0 ? void 0 : _c.classList.toggle('btn-selected-active');
                                }
                            } }, "Select"),
                        react_1["default"].createElement("button", { className: 'light-blue-btn md-padding sm-btn', onClick: function () {
                                var _a;
                                isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
                                if ((_a = document.getElementById("select-btn-" + car.id)) === null || _a === void 0 ? void 0 : _a.classList.contains('btn-selected-active')) {
                                    sweetalert2_1["default"].fire({
                                        title: "Please, deselect this car before deleting it!",
                                        showClass: {
                                            popup: "\n                                                        animate__animated\n                                                        animate__fadeInUp\n                                                        animate__faster\n                                                      "
                                        },
                                        hideClass: {
                                            popup: "\n                                                        animate__animated\n                                                        animate__fadeOutDown\n                                                        animate__faster\n                                                      "
                                        }
                                    });
                                }
                                else {
                                    axios_1["default"]["delete"]("http://localhost:3000/garage/" + car.id);
                                }
                            } }, "Remove")),
                    react_1["default"].createElement("div", { className: "start-stop-btns" },
                        react_1["default"].createElement("button", { className: 'green-btn sm-padding sm-btn', onClick: function () {
                                setIsCarMoving(true);
                                fetch("http://localhost:3000/engine?id=" + car.id + "&status=started", {
                                    method: 'PATCH'
                                }).then(function (response) { return response.json().then(function (data) { return ({ data: data }); }).then(function (res) {
                                    var animatedCar = document.getElementById("animated-car-" + car.id);
                                    var carTime = Math.round(((res.data.distance / res.data.velocity) / 10)) / 100;
                                    animatedCar === null || animatedCar === void 0 ? void 0 : animatedCar.animate([{ left: '0px' }, { left: '80vw' }], { duration: carTime * 1000, iterations: 1, fill: "backwards" });
                                    setIsCarMoving(false);
                                    setTimeout(function () {
                                        sweetalert2_1["default"].fire({
                                            title: car.name + " has come to finish in " + carTime + " seconds",
                                            showClass: {
                                                popup: "\n                                        animate__animated\n                                        animate__fadeInUp\n                                        animate__faster\n                                      "
                                            },
                                            hideClass: {
                                                popup: "\n                                        animate__animated\n                                        animate__fadeOutDown\n                                        animate__faster\n                                      "
                                            }
                                        });
                                    }, carTime * 1000);
                                }); });
                            } }, "A"),
                        react_1["default"].createElement("button", { className: 'gray-btn sm-padding sm-btn' }, "B")),
                    react_1["default"].createElement("div", { className: "car-ico", style: { 'color': car.color } },
                        react_1["default"].createElement("i", { className: "fa-solid fa-car-side", id: "animated-car-" + car.id })),
                    react_1["default"].createElement("div", { className: "car-name" },
                        react_1["default"].createElement("p", null, car.name))),
                react_1["default"].createElement("div", { className: "finish-block" }),
                react_1["default"].createElement("hr", null))); }),
            react_1["default"].createElement("div", { className: "garage-info" },
                react_1["default"].createElement("div", { className: "garage-count" },
                    react_1["default"].createElement("p", null,
                        "GARAGE (",
                        cars.length,
                        ")")),
                react_1["default"].createElement("div", { className: "pagination" },
                    react_1["default"].createElement("button", { onClick: prevPage, className: "orange-btn sm-padding prev-page" },
                        react_1["default"].createElement("i", { className: "fa-solid fa-caret-left" })),
                    react_1["default"].createElement("p", { className: "text" },
                        "Page \u2116",
                        page,
                        "/",
                        totalPages),
                    react_1["default"].createElement("button", { onClick: nextPage, className: "orange-btn sm-padding next-page" },
                        react_1["default"].createElement("i", { className: "fa-solid fa-caret-right" })),
                    react_1["default"].createElement("div", { className: "items" }))))));
};
exports["default"] = CarList;
