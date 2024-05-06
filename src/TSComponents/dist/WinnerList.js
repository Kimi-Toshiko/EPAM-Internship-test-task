"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useFetch_1 = require("./useFetch");
var usePagination_1 = require("./usePagination");
var WinnerList = function (_a) {
    var winners = _a.winners;
    var _b = usePagination_1["default"]({
        contentPerPage: 7,
        count: winners.length
    }), firstContentIndex = _b.firstContentIndex, lastContentIndex = _b.lastContentIndex, nextPage = _b.nextPage, prevPage = _b.prevPage, page = _b.page, totalPages = _b.totalPages;
    var carsUrl = 'http://localhost:3000/garage';
    var carsData = useFetch_1["default"](carsUrl).data;
    function filterById(jsonObject, id) {
        return jsonObject.filter(function (jsonObject) {
            return (jsonObject['id'] === id);
        })[0];
    }
    ;
    var isCarsDataLoaded = false;
    try {
        if (carsData === null) {
            console.log('cars data is null');
        }
        else {
            console.log('cars data is loaded');
            isCarsDataLoaded = true;
        }
    }
    catch (err) {
        console.log(err);
    }
    return (react_1["default"].createElement("div", { className: "winners-list-content" },
        react_1["default"].createElement("table", { className: "winners-tb" },
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("th", null, "\u2116"),
                react_1["default"].createElement("th", null, "CAR"),
                react_1["default"].createElement("th", null, "NAME"),
                react_1["default"].createElement("th", null, "WINS"),
                react_1["default"].createElement("th", null, "BEST TIME (SECONDS)")),
            winners.slice(firstContentIndex, lastContentIndex).map(function (winner) { return (react_1["default"].createElement("tr", { key: winner.id },
                react_1["default"].createElement("td", null, winner.id),
                react_1["default"].createElement("td", null,
                    react_1["default"].createElement("i", { className: "fa-solid fa-car-side", style: { 'color': isCarsDataLoaded ? filterById(carsData, winner.id)['color'] : '#CBCBCB' } })),
                react_1["default"].createElement("td", null, isCarsDataLoaded ? filterById(carsData, winner.id)['name'] : ''),
                react_1["default"].createElement("td", null, winner.wins),
                react_1["default"].createElement("td", null,
                    winner.time,
                    " seconds"))); })),
        react_1["default"].createElement("div", { className: "pagination" },
            react_1["default"].createElement("button", { className: "orange-btn sm-padding " + (page === 1 ? 'btn-disabled' : 'btn-enabled'), disabled: page === 1 ? true : false, onClick: prevPage },
                react_1["default"].createElement("i", { className: "fa-solid fa-caret-left" })),
            react_1["default"].createElement("p", null,
                "PAGE \u2116",
                page,
                "/",
                totalPages),
            react_1["default"].createElement("button", { className: "orange-btn sm-padding " + (page === totalPages ? 'btn-disabled' : 'btn-enabled'), disabled: page === totalPages ? true : false, onClick: nextPage },
                react_1["default"].createElement("i", { className: "fa-solid fa-caret-right" })))));
};
exports["default"] = WinnerList;
