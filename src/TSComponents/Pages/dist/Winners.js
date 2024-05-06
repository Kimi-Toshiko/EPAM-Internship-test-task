"use strict";
exports.__esModule = true;
require("../../winners.css");
var useFetch_1 = require("../useFetch");
var WinnerList_1 = require("../WinnerList");
var Winners = function (props) {
    var winnersUrl = 'http://localhost:3000/winners';
    var _a = useFetch_1["default"](winnersUrl), winnersData = _a.data, winnersIsPending = _a.isPending, winnersError = _a.error;
    return (React.createElement("div", { className: "winners" },
        React.createElement("div", { id: "winners-content" },
            React.createElement("h2", null, "WINNERS"),
            React.createElement("section", null,
                winnersError && React.createElement("p", { className: 'fetch-error' }, winnersError),
                winnersIsPending && React.createElement("p", { className: 'fetch-loading' }, "Loading winners..."),
                winnersData && React.createElement(WinnerList_1["default"], { winners: winnersData })))));
};
exports["default"] = Winners;
