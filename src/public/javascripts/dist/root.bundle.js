/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/Root.jsx":
/*!*************************!*\
  !*** ./client/Root.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _views_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/index.jsx */ "./client/views/index.jsx");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/user */ "./client/context/user.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_5__);







var Root = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_user__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.getElementById("root"));
root.render(Root);

/***/ }),

/***/ "./client/commons/spinner.js":
/*!***********************************!*\
  !*** ./client/commons/spinner.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    style: {
      margin: "auto",
      display: "block",
      shapeRendering: "auto"
    },
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(0 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.9166666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(30 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.8333333333333334s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(60 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.75s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(90 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.6666666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(120 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5833333333333334s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(150 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.5s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(180 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.4166666666666667s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(210 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.3333333333333333s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(240 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.25s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(270 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.16666666666666666s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(300 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "-0.08333333333333333s",
    repeatCount: "indefinite"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    transform: "rotate(330 50 50)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "47",
    y: "24",
    rx: "3",
    ry: "6",
    width: "6",
    height: "12",
    fill: "#fe718d"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("animate", {
    attributeName: "opacity",
    values: "1;0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  }))));
});

/***/ }),

/***/ "./client/context/user.js":
/*!********************************!*\
  !*** ./client/context/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthProvider": () => (/* binding */ AuthProvider),
/* harmony export */   "useAuthContext": () => (/* binding */ useAuthContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext();
var DEFAULT_USER = {};
var AuthProvider = function AuthProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(DEFAULT_USER),
      _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      user = _React$useState2[0],
      setUser = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AuthContext.Provider, {
    value: {
      user: user,
      setUser: setUser
    }
  }, children);
};
var useAuthContext = function useAuthContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(AuthContext);
};

/***/ }),

/***/ "./client/hooks/useInput.js":
/*!**********************************!*\
  !*** ./client/hooks/useInput.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useInput": () => (/* binding */ useInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/******************************************
 * Simple input manager.
 * @param {string} name
 * @returns {object}
 *   {string} value
 *   {function} onChange
 *   {name} name
 */

var useInput = function useInput(name) {
  var _react$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(""),
      _react$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_react$useState, 2),
      value = _react$useState2[0],
      setValue = _react$useState2[1];

  var onChange = function onChange(_ref) {
    var value = _ref.target.value;
    return setValue(value);
  };

  return {
    value: value,
    onChange: onChange,
    name: name
  };
};

/***/ }),

/***/ "./client/utils/logs.js":
/*!******************************!*\
  !*** ./client/utils/logs.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "success": () => (/* binding */ success)
/* harmony export */ });
/**
 * Logs a notification on the browser dev tools
 * @param {string} value
 */
var log = function log(value) {
  console.log("%c".concat(value), "color:blue; font-weight:bold");
};
/**
 * Logs a success notification on the browser dev tools.
 * Success prefix on display
 * @param {string} message
 */

var success = function success(message) {
  console.log("%c------------------------\n%cSUCCESS%c ".concat(message, "\n------------------------"), "color:green; font-weight:bold", "background-color:green; color: white; font-weight:bold", "color:green; font-weight:bold");
};
/**
 * Logs a notification on the browser dev tools
 * Error prefix on display
 * @param {string} reason
 */

var error = function error(status, reason) {
  console.log("%c------------------------\n%cAPI ERROR ".concat(status, "%c ").concat(reason, "\n------------------------"), "color:red; font-weight:bold", "background-color:red; color: white; font-weight:bold", "color:red; font-weight:bold");
};

/***/ }),

/***/ "./client/views/ForgotPassword.jsx":
/*!*****************************************!*\
  !*** ./client/views/ForgotPassword.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./client/hooks/useInput.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var setUset = _ref.setUset;
  var email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__.useInput)("email");

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      userEmail = _useState2[0],
      setUserEmail = _useState2[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setUserEmail(true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex align-items-center justify-content-center py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", {
    className: "h4 mb-4 text-center"
  }, "Reset your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Email address",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Email address"
  }, email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    onClick: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "position-absolute left-0 d-flex align-items-center pl-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("svg", {
    className: "h-5 w-5 transition ease-in-out duration-150",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("path", {
    fillRule: "evenodd",
    d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
    clipRule: "evenodd"
  }))), "Forgot Password")))), userEmail ? "Se ha enviado un email para restablecer contrasenia" : ""));
});

/***/ }),

/***/ "./client/views/Login.jsx":
/*!********************************!*\
  !*** ./client/views/Login.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commons_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commons/spinner */ "./client/commons/spinner.js");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/user */ "./client/context/user.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useInput */ "./client/hooks/useInput.js");
/* harmony import */ var _utils_logs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/logs */ "./client/utils/logs.js");











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      hasError = _useState4[0],
      setError = _useState4[1];

  var _useAuthContext = (0,_context_user__WEBPACK_IMPORTED_MODULE_7__.useAuthContext)(),
      user = _useAuthContext.user,
      setUser = _useAuthContext.setUser;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();
  var email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.useInput)("email");
  var password = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_8__.useInput)("password");

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var _yield$axios$post, data, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setLoading(true);
              setError(false);
              _context.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/login", {
                email: email.value,
                password: password.value
              });

            case 6:
              _yield$axios$post = _context.sent;
              data = _yield$axios$post.data;
              setUser(data);
              setLoading(false);
              history.push("/secret");
              _context.next = 18;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              response = _context.t0.response;
              setLoading(false);
              setError(true);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (user.email) history.push("/");
  }, [user]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex align-items-center justify-content-center py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", {
    className: "h4 mb-4 text-center"
  }, "Sign in to your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Email address",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Email address"
  }, email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Password",
    type: "password",
    required: true,
    className: "form-control",
    placeholder: "Password"
  }, password))), hasError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("p", {
    className: "text-danger mb-3"
  }, "Invalid Credentials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
    to: "/forgot-password",
    className: "font-weight-bold text-decoration-none"
  }, "Forgot your password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_commons_spinner__WEBPACK_IMPORTED_MODULE_6__["default"], null) : "Sign in"))))));
});

/***/ }),

/***/ "./client/views/Navbar.jsx":
/*!*********************************!*\
  !*** ./client/views/Navbar.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/user */ "./client/context/user.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useAuthContext = (0,_context_user__WEBPACK_IMPORTED_MODULE_4__.useAuthContext)(),
      user = _useAuthContext.user,
      setUser = _useAuthContext.setUser;

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useHistory)();

  var handleLogout = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().post("/api/logout");

            case 3:
              setUser({});
              history.push("/");
              console.log("User logout");
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              response = _context.t0.response;
              console.log(response.statusText);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function handleLogout() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "bg-primary text-white w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "d-flex justify-content-between align-items-center p-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/",
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiFilm, {
    className: "h-20 rounded-circle text-secondary",
    style: {
      color: "black",
      fontSize: "48px"
    }
  }))), user.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h5", {
    className: "me-2 text-center"
  }, "Bienvenido ", user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btn btn-light",
    onClick: handleLogout
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btn btn-outline-light me-2"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: "/register"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("button", {
    className: "btn btn-light"
  }, "Register")))));
});

/***/ }),

/***/ "./client/views/Register.jsx":
/*!***********************************!*\
  !*** ./client/views/Register.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./client/hooks/useInput.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useHistory)();
  var email = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.useInput)("email");
  var password = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.useInput)("password");
  var name = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.useInput)("name");
  var lastname = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__.useInput)("lastname");

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(e) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_5___default().post("/api/register", {
                email: email.value,
                password: password.value,
                name: name.value,
                lastname: lastname.value
              });

            case 5:
              setLoading(false);
              history.push("/login");
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              response = _context.t0.response;
              setLoading(false);
              console.log(response.statusText);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex align-items-center justify-content-center py-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card shadow-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("h2", {
    className: "h4 mb-4 text-center"
  }, "Create your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", {
    type: "hidden",
    name: "remember",
    value: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Email address",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Email address"
  }, email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Password",
    type: "password",
    required: true,
    className: "form-control",
    placeholder: "Password"
  }, password))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Name",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Name"
  }, name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-label": "Last Name",
    type: "text",
    required: true,
    className: "form-control",
    placeholder: "Last Name"
  }, lastname))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    type: "submit",
    className: "btn btn-primary",
    disabled: loading
  }, loading ? "Loading..." : "Sign up"))))));
});

/***/ }),

/***/ "./client/views/Welcome.jsx":
/*!**********************************!*\
  !*** ./client/views/Welcome.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






var Welcome = function Welcome() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      movies = _useState2[0],
      setMovies = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      searchTerm = _useState4[0],
      setSearchTerm = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
                  headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1ZTg3MDRmMGY5YjE1MDQ0MjQ2NzRjZDZmNmYwZCIsInN1YiI6IjY0OGM5MDU2MDc2Y2U4MDBjOGJhMDE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtzEe2Ypd1FcIPWF2zzyz3tN7OKB2Le2CcQIPXeOf_E"
                  }
                });

              case 3:
                response = _context.sent;
                setMovies(response.data.results);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error("Error fetching movies:", _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, [searchTerm]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_4___default().get("https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=".concat(searchTerm), {
                  headers: {
                    accept: "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1ZTg3MDRmMGY5YjE1MDQ0MjQ2NzRjZDZmNmYwZCIsInN1YiI6IjY0OGM5MDU2MDc2Y2U4MDBjOGJhMDE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtzEe2Ypd1FcIPWF2zzyz3tN7OKB2Le2CcQIPXeOf_E"
                  }
                });

              case 3:
                response = _context2.sent;
                setMovies(response.data.results);
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error("Error fetching movies:", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm]);

  var handleSearch = function handleSearch(e) {
    setSearchTerm(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "text-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("input", {
    type: "search",
    name: "",
    id: "",
    onChange: handleSearch,
    className: "form-control",
    style: {
      maxWidth: "300px",
      margin: "0 auto",
      marginTop: "10px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4"
  }, movies.map(function (movie) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      className: "col bg-white p-4 rounded shadow hover-zoom",
      key: movie.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
      src: "https://image.tmdb.org/t/p/w500".concat(movie.poster_path),
      alt: movie.title,
      className: "w-100 mb-2 rounded"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", {
      className: "h5 fw-bold"
    }, movie.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
      className: "text-secondary"
    }, movie.release_date));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

/***/ }),

/***/ "./client/views/index.jsx":
/*!********************************!*\
  !*** ./client/views/index.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Welcome_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Welcome.jsx */ "./client/views/Welcome.jsx");
/* harmony import */ var _Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.jsx */ "./client/views/Navbar.jsx");
/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register.jsx */ "./client/views/Register.jsx");
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login.jsx */ "./client/views/Login.jsx");
/* harmony import */ var _ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ForgotPassword.jsx */ "./client/views/ForgotPassword.jsx");
/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/user */ "./client/context/user.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var _useAuthContext = (0,_context_user__WEBPACK_IMPORTED_MODULE_7__.useAuthContext)(),
      setUser = _useAuthContext.setUser;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("/api/me").then(function (res) {
      return res.data;
    }).then(function (user) {
      setUser(user);
    })["catch"](function (_ref) {
      var response = _ref.response;
      console.log(response.statusText);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/",
    component: _Welcome_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/register",
    component: _Register_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/login",
    component: _Login_jsx__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/forgot-password",
    component: _ForgotPassword_jsx__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Redirect, {
    to: "/"
  }))));
});

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e":
/*!*********************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e ***!
  \*********************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e":
/*!***********************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e ***!
  \***********************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%28255, 255, 255, 0.25%29%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23052c65%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%236ea8fe%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23adb5bd%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m2 5 6 6 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27m6 10 3 3 6-6%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%2833, 37, 41, 0.75%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e";

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"root": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkauth_workshop"] = self["webpackChunkauth_workshop"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./client/Root.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtd29ya3Nob3AvLi9jbGllbnQvUm9vdC5qc3giLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC9jb21tb25zL3NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC9jb250ZXh0L3VzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wLy4vY2xpZW50L3V0aWxzL2xvZ3MuanMiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC92aWV3cy9Gb3Jnb3RQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC92aWV3cy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC92aWV3cy9OYXZiYXIuanN4Iiwid2VicGFjazovL2F1dGgtd29ya3Nob3AvLi9jbGllbnQvdmlld3MvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2F1dGgtd29ya3Nob3AvLi9jbGllbnQvdmlld3MvV2VsY29tZS5qc3giLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC8uL2NsaWVudC92aWV3cy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2F1dGgtd29ya3Nob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hdXRoLXdvcmtzaG9wL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXV0aC13b3Jrc2hvcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tIFwiLi92aWV3cy9pbmRleC5qc3hcIjtcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC91c2VyXCI7XHJcblxyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuanNcIjtcclxuXHJcbmNvbnN0IFJvb3QgPSAoXHJcbiAgPFJvdXRlcj5cclxuICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDxBcHAgLz5cclxuICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gIDwvUm91dGVyPlxyXG4pO1xyXG5cclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcclxucm9vdC5yZW5kZXIoUm9vdCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuICA8c3ZnXHJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcclxuICAgIHN0eWxlPXt7XHJcbiAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgICAgc2hhcGVSZW5kZXJpbmc6IFwiYXV0b1wiLFxyXG4gICAgfX1cclxuICAgIHdpZHRoPVwiMjBweFwiXHJcbiAgICBoZWlnaHQ9XCIyMHB4XCJcclxuICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWRcIlxyXG4gID5cclxuICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjkxNjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9nPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDMwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjgzMzMzMzMzMzMzMzMzMzRzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9nPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDYwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjc1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgIDwvZz5cclxuICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSg5MCA1MCA1MClcIj5cclxuICAgICAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZlNzE4ZFwiPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC42NjY2NjY2NjY2NjY2NjY2c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgIDwvZz5cclxuICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgNTAgNTApXCI+XHJcbiAgICAgIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZTcxOGRcIj5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuNTgzMzMzMzMzMzMzMzMzNHNcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMTUwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjVzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9nPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDE4MCA1MCA1MClcIj5cclxuICAgICAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZlNzE4ZFwiPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC40MTY2NjY2NjY2NjY2NjY3c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgIDwvZz5cclxuICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyMTAgNTAgNTApXCI+XHJcbiAgICAgIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZTcxOGRcIj5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuMzMzMzMzMzMzMzMzMzMzM3NcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMjQwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIi0wLjI1c1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgID48L2FuaW1hdGU+XHJcbiAgICAgIDwvcmVjdD5cclxuICAgIDwvZz5cclxuICAgIDxnIHRyYW5zZm9ybT1cInJvdGF0ZSgyNzAgNTAgNTApXCI+XHJcbiAgICAgIDxyZWN0IHg9XCI0N1wiIHk9XCIyNFwiIHJ4PVwiM1wiIHJ5PVwiNlwiIHdpZHRoPVwiNlwiIGhlaWdodD1cIjEyXCIgZmlsbD1cIiNmZTcxOGRcIj5cclxuICAgICAgICA8YW5pbWF0ZVxyXG4gICAgICAgICAgYXR0cmlidXRlTmFtZT1cIm9wYWNpdHlcIlxyXG4gICAgICAgICAgdmFsdWVzPVwiMTswXCJcclxuICAgICAgICAgIGtleVRpbWVzPVwiMDsxXCJcclxuICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgIGJlZ2luPVwiLTAuMTY2NjY2NjY2NjY2NjY2NjZzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9nPlxyXG4gICAgPGcgdHJhbnNmb3JtPVwicm90YXRlKDMwMCA1MCA1MClcIj5cclxuICAgICAgPHJlY3QgeD1cIjQ3XCIgeT1cIjI0XCIgcng9XCIzXCIgcnk9XCI2XCIgd2lkdGg9XCI2XCIgaGVpZ2h0PVwiMTJcIiBmaWxsPVwiI2ZlNzE4ZFwiPlxyXG4gICAgICAgIDxhbmltYXRlXHJcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwib3BhY2l0eVwiXHJcbiAgICAgICAgICB2YWx1ZXM9XCIxOzBcIlxyXG4gICAgICAgICAga2V5VGltZXM9XCIwOzFcIlxyXG4gICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgYmVnaW49XCItMC4wODMzMzMzMzMzMzMzMzMzM3NcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICA+PC9hbmltYXRlPlxyXG4gICAgICA8L3JlY3Q+XHJcbiAgICA8L2c+XHJcbiAgICA8ZyB0cmFuc2Zvcm09XCJyb3RhdGUoMzMwIDUwIDUwKVwiPlxyXG4gICAgICA8cmVjdCB4PVwiNDdcIiB5PVwiMjRcIiByeD1cIjNcIiByeT1cIjZcIiB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIxMlwiIGZpbGw9XCIjZmU3MThkXCI+XHJcbiAgICAgICAgPGFuaW1hdGVcclxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJvcGFjaXR5XCJcclxuICAgICAgICAgIHZhbHVlcz1cIjE7MFwiXHJcbiAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXHJcbiAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgPjwvYW5pbWF0ZT5cclxuICAgICAgPC9yZWN0PlxyXG4gICAgPC9nPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgREVGQVVMVF9VU0VSID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKERFRkFVTFRfVVNFUik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgc2V0VXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGhDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgcmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIFNpbXBsZSBpbnB1dCBtYW5hZ2VyLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gKiBAcmV0dXJucyB7b2JqZWN0fVxyXG4gKiAgIHtzdHJpbmd9IHZhbHVlXHJcbiAqICAge2Z1bmN0aW9ufSBvbkNoYW5nZVxyXG4gKiAgIHtuYW1lfSBuYW1lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlSW5wdXQgPSAobmFtZSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gcmVhY3QudXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpO1xyXG5cclxuICByZXR1cm4geyB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUgfTtcclxufTtcclxuIiwiLyoqXHJcbiAqIExvZ3MgYSBub3RpZmljYXRpb24gb24gdGhlIGJyb3dzZXIgZGV2IHRvb2xzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZyA9ICh2YWx1ZSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGAlYyR7dmFsdWV9YCwgXCJjb2xvcjpibHVlOyBmb250LXdlaWdodDpib2xkXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIExvZ3MgYSBzdWNjZXNzIG5vdGlmaWNhdGlvbiBvbiB0aGUgYnJvd3NlciBkZXYgdG9vbHMuXHJcbiAqIFN1Y2Nlc3MgcHJlZml4IG9uIGRpc3BsYXlcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBzdWNjZXNzID0gKG1lc3NhZ2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIGAlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbiVjU1VDQ0VTUyVjICR7bWVzc2FnZX1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gLFxyXG4gICAgXCJjb2xvcjpncmVlbjsgZm9udC13ZWlnaHQ6Ym9sZFwiLFxyXG4gICAgXCJiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBjb2xvcjogd2hpdGU7IGZvbnQtd2VpZ2h0OmJvbGRcIixcclxuICAgIFwiY29sb3I6Z3JlZW47IGZvbnQtd2VpZ2h0OmJvbGRcIlxyXG4gICk7XHJcbn07XHJcblxyXG4vKipcclxuICogTG9ncyBhIG5vdGlmaWNhdGlvbiBvbiB0aGUgYnJvd3NlciBkZXYgdG9vbHNcclxuICogRXJyb3IgcHJlZml4IG9uIGRpc3BsYXlcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlYXNvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVycm9yID0gKHN0YXR1cywgcmVhc29uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBgJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4lY0FQSSBFUlJPUiAke3N0YXR1c30lYyAke3JlYXNvbn1cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gLFxyXG4gICAgXCJjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OmJvbGRcIixcclxuICAgIFwiYmFja2dyb3VuZC1jb2xvcjpyZWQ7IGNvbG9yOiB3aGl0ZTsgZm9udC13ZWlnaHQ6Ym9sZFwiLFxyXG4gICAgXCJjb2xvcjpyZWQ7IGZvbnQtd2VpZ2h0OmJvbGRcIlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IHNldFVzZXQgfSkgPT4ge1xyXG4gIGNvbnN0IGVtYWlsID0gdXNlSW5wdXQoXCJlbWFpbFwiKTtcclxuXHJcbiAgY29uc3QgW3VzZXJFbWFpbCwgc2V0VXNlckVtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFVzZXJFbWFpbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcHktNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoNCBtYi00IHRleHQtY2VudGVyXCI+UmVzZXQgeW91ciBwYXNzd29yZDwvaDI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZT1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHsuLi5lbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSBsZWZ0LTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwbC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUgdy01IHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk01IDlWN2E1IDUgMCAwMTEwIDB2MmEyIDIgMCAwMTIgMnY1YTIgMiAwIDAxLTIgMkg1YTIgMiAwIDAxLTItMnYtNWEyIDIgMCAwMTItMnptOC0ydjJIN1Y3YTMgMyAwIDAxNiAwelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt1c2VyRW1haWwgPyBcIlNlIGhhIGVudmlhZG8gdW4gZW1haWwgcGFyYSByZXN0YWJsZWNlciBjb250cmFzZW5pYVwiIDogXCJcIn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbW1vbnMvc3Bpbm5lclwiO1xyXG5pbXBvcnQgeyB1c2VBdXRoQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L3VzZXJcIjtcclxuaW1wb3J0IHsgdXNlSW5wdXQgfSBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgbG9nLCBzdWNjZXNzLCBlcnJvciB9IGZyb20gXCIuLi91dGlscy9sb2dzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoYXNFcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdXNlciwgc2V0VXNlciB9ID0gdXNlQXV0aENvbnRleHQoKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGNvbnN0IGVtYWlsID0gdXNlSW5wdXQoXCJlbWFpbFwiKTtcclxuICBjb25zdCBwYXNzd29yZCA9IHVzZUlucHV0KFwicGFzc3dvcmRcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwge1xyXG4gICAgICAgIGVtYWlsOiBlbWFpbC52YWx1ZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICBzZXRVc2VyKGRhdGEpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgaGlzdG9yeS5wdXNoKFwiL3NlY3JldFwiKTtcclxuICAgIH0gY2F0Y2ggKHsgcmVzcG9uc2UgfSkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgc2V0RXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyLmVtYWlsKSBoaXN0b3J5LnB1c2goXCIvXCIpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBweS01XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3ctc21cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImg0IG1iLTQgdGV4dC1jZW50ZXJcIj5TaWduIGluIHRvIHlvdXIgYWNjb3VudDwvaDI+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZT1cInRydWVcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgIHsuLi5lbWFpbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB7Li4ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtoYXNFcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgbWItM1wiPkludmFsaWQgQ3JlZGVudGlhbHM8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgdG89XCIvZm9yZ290LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvcmdvdCB5b3VyIHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gPFNwaW5uZXIgLz4gOiBcIlNpZ24gaW5cIn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmssIHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC91c2VyXCI7XHJcblxyXG5pbXBvcnQgeyBCaUZpbG0gfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICBjb25zdCB7IHVzZXIsIHNldFVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG4gICAgICBzZXRVc2VyKHt9KTtcclxuICAgICAgaGlzdG9yeS5wdXNoKFwiL1wiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJVc2VyIGxvZ291dFwiKTtcclxuICAgIH0gY2F0Y2ggKHsgcmVzcG9uc2UgfSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGUgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxCaUZpbG1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTIwIHJvdW5kZWQtY2lyY2xlIHRleHQtc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI0OHB4XCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3VzZXIuZW1haWwgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWUtMiB0ZXh0LWNlbnRlclwiPkJpZW52ZW5pZG8ge3VzZXIubmFtZX08L2g1PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICBMb2dvdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1saWdodCBtZS0yXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlJlZ2lzdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUlucHV0IH0gZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgY29uc3QgZW1haWwgPSB1c2VJbnB1dChcImVtYWlsXCIpO1xyXG4gIGNvbnN0IHBhc3N3b3JkID0gdXNlSW5wdXQoXCJwYXNzd29yZFwiKTtcclxuICBjb25zdCBuYW1lID0gdXNlSW5wdXQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGxhc3RuYW1lID0gdXNlSW5wdXQoXCJsYXN0bmFtZVwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIG5hbWU6IG5hbWUudmFsdWUsXHJcbiAgICAgICAgbGFzdG5hbWU6IGxhc3RuYW1lLnZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIGhpc3RvcnkucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gY2F0Y2ggKHsgcmVzcG9uc2UgfSkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB5LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvdy1zbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDQgbWItNCB0ZXh0LWNlbnRlclwiPkNyZWF0ZSB5b3VyIGFjY291bnQ8L2gyPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInJlbWVtYmVyXCIgdmFsdWU9XCJ0cnVlXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICB7Li4uZW1haWx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgey4uLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIHsuLi5uYW1lfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICB7Li4ubGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJTaWduIHVwXCJ9XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFdlbGNvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9wb3B1bGFyP2xhbmd1YWdlPWVuLVVTJnBhZ2U9MVwiLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAgICAgXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaGRXUWlPaUkyTmpjMVpUZzNNRFJtTUdZNVlqRTFNRFEwTWpRMk56UmpaRFptTm1Zd1pDSXNJbk4xWWlJNklqWTBPR001TURVMk1EYzJZMlU0TURCak9HSmhNREUyWmlJc0luTmpiM0JsY3lJNld5SmhjR2xmY21WaFpDSmRMQ0oyWlhKemFXOXVJam94ZlEuanR6RWUyWXBkMUZjSVBXRjJ6enl6M3RON09LQjJMZTJDY1FJUFhlT2ZfRVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vdmllczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtzZWFyY2hUZXJtXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXHJcbiAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9zZWFyY2gvbW92aWU/bGFuZ3VhZ2U9ZW4tVVMmcGFnZT0xJnF1ZXJ5PSR7c2VhcmNoVGVybX1gLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOlxyXG4gICAgICAgICAgICAgICAgXCJCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKaGRXUWlPaUkyTmpjMVpUZzNNRFJtTUdZNVlqRTFNRFEwTWpRMk56UmpaRFptTm1Zd1pDSXNJbk4xWWlJNklqWTBPR001TURVMk1EYzJZMlU0TURCak9HSmhNREUyWmlJc0luTmpiM0JsY3lJNld5SmhjR2xmY21WaFpDSmRMQ0oyWlhKemFXOXVJam94ZlEuanR6RWUyWXBkMUZjSVBXRjJ6enl6M3RON09LQjJMZTJDY1FJUFhlT2ZfRVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0TW92aWVzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1vdmllczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChzZWFyY2hUZXJtICE9PSBcIlwiKSB7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWFyY2hUZXJtXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcclxuICAgICAgICAgIG5hbWU9XCJcIlxyXG4gICAgICAgICAgaWQ9XCJcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogXCIzMDBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIsIG1hcmdpblRvcDogXCIxMHB4XCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1zbS0yIHJvdy1jb2xzLW1kLTMgcm93LWNvbHMtbGctNCByb3ctY29scy14bC01IGctNFwiPlxyXG4gICAgICAgIHttb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wgYmctd2hpdGUgcC00IHJvdW5kZWQgc2hhZG93IGhvdmVyLXpvb21cIlxyXG4gICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9YH1cclxuICAgICAgICAgICAgICBhbHQ9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG1iLTIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoNSBmdy1ib2xkXCI+e21vdmllLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+e21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VsY29tZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZSwgU3dpdGNoLCBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBXZWxjb21lIGZyb20gXCIuL1dlbGNvbWUuanN4XCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2YmFyLmpzeFwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXIuanN4XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9Mb2dpbi5qc3hcIjtcclxuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gXCIuL0ZvcmdvdFBhc3N3b3JkLmpzeFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC91c2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VBdXRoQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9hcGkvbWVcIilcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmRhdGEpXHJcbiAgICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCh7IHJlc3BvbnNlIH0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e1dlbGNvbWV9IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0ZXJ9IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW59IC8+XHJcbiAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9mb3Jnb3QtcGFzc3dvcmRcIiBjb21wb25lbnQ9e0ZvcmdvdFBhc3N3b3JkfSAvPlxyXG4gICAgICAgICAgPFJlZGlyZWN0IHRvPVwiL1wiIC8+XHJcbiAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicm9vdFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmthdXRoX3dvcmtzaG9wXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2F1dGhfd29ya3Nob3BcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2NsaWVudC9Sb290LmpzeFwiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJBcHAiLCJBdXRoUHJvdmlkZXIiLCJSb290Iiwicm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJtYXJnaW4iLCJkaXNwbGF5Iiwic2hhcGVSZW5kZXJpbmciLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJERUZBVUxUX1VTRVIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VBdXRoQ29udGV4dCIsInVzZUNvbnRleHQiLCJyZWFjdCIsInVzZUlucHV0IiwibmFtZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImxvZyIsImNvbnNvbGUiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwic3RhdHVzIiwicmVhc29uIiwic2V0VXNldCIsImVtYWlsIiwidXNlckVtYWlsIiwic2V0VXNlckVtYWlsIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwidXNlSGlzdG9yeSIsIkxpbmsiLCJheGlvcyIsIlNwaW5uZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhc0Vycm9yIiwic2V0RXJyb3IiLCJoaXN0b3J5IiwicGFzc3dvcmQiLCJwb3N0IiwiZGF0YSIsInB1c2giLCJyZXNwb25zZSIsIkJpRmlsbSIsImhhbmRsZUxvZ291dCIsInN0YXR1c1RleHQiLCJjb2xvciIsImZvbnRTaXplIiwibGFzdG5hbWUiLCJXZWxjb21lIiwibW92aWVzIiwic2V0TW92aWVzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJmZXRjaERhdGEiLCJnZXQiLCJoZWFkZXJzIiwiYWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsInJlc3VsdHMiLCJoYW5kbGVTZWFyY2giLCJtYXhXaWR0aCIsIm1hcmdpblRvcCIsIm1hcCIsIm1vdmllIiwiaWQiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwicmVsZWFzZV9kYXRlIiwiUm91dGUiLCJTd2l0Y2giLCJSZWRpcmVjdCIsIk5hdkJhciIsIlJlZ2lzdGVyIiwiTG9naW4iLCJGb3Jnb3RQYXNzd29yZCIsInRoZW4iLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9