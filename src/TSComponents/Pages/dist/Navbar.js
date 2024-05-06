"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../../navbar.css");
var react_router_dom_1 = require("react-router-dom");
var Navbar = function (props) {
    return (react_1["default"].createElement("div", { className: "navbar nav" },
        react_1["default"].createElement("div", { id: "navbar-content" },
            react_1["default"].createElement("h1", null,
                "Async ",
                react_1["default"].createElement("i", null, "Race"),
                " "),
            react_1["default"].createElement("div", { className: "nav-links" },
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/' }, "Garage")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement(react_router_dom_1.NavLink, { to: '/winners' }, "Winners")))))));
};
exports["default"] = Navbar;
