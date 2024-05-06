"use strict";
exports.__esModule = true;
var react_1 = require("react");
var usePagination = function (_a) {
    var contentPerPage = _a.contentPerPage, count = _a.count;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var pageCount = Math.ceil(count / contentPerPage);
    var lastContentIndex = page * contentPerPage;
    var firstContentIndex = lastContentIndex - contentPerPage;
    var changePage = function (direction) {
        setPage(function (state) {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            }
            else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };
    return {
        totalPages: pageCount,
        nextPage: function () { return changePage(true); },
        prevPage: function () { return changePage(false); },
        firstContentIndex: firstContentIndex,
        lastContentIndex: lastContentIndex,
        page: page
    };
};
exports["default"] = usePagination;
