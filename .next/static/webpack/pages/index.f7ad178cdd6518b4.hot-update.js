"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Button */ \"./components/UI/Button/index.jsx\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Badge */ \"./node_modules/@mui/material/Badge/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var store = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.Context).store;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    function logout() {\n        return _logout.apply(this, arguments);\n    }\n    function _logout() {\n        _logout = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        store.logout();\n                        navigate(\"/\");\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _logout.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header), \"d-flex w100\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"\".concat((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container), \" d-flex justify-between align-center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header__left),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logo),\n                            children: \"ProjectUnion\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header__right), \"d-flex align-center\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiSearch, {\n                            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().search), \"fw-bold\")\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, _this),\n                        !store.isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            mode: \"fill\",\n                            children: \"\\u0412\\u0445\\u043E\\u0434\"\n                        }, void 0, false, {\n                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 25\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    badgeContent: 0,\n                                    color: \"primary\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineBell, {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().notifications), \"fw-bold\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown, {\n                                    className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dropdown),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown.Toggle, {\n                                            variant: \"light\",\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dropdown__btn),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().profile__icon),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineUser, {}, void 0, false, {\n                                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 41\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                lineNumber: 48,\n                                                columnNumber: 37\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 33\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown.Menu, {\n                                            variant: \"light\",\n                                            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_8___default().actions),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown.Item, {\n                                                    className: \"action__item\",\n                                                    onClick: function() {\n                                                        return navigate(\"/profile/\".concat(store.isUserID));\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_cg__WEBPACK_IMPORTED_MODULE_13__.CgProfile, {\n                                                            className: \"action__item-icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                            lineNumber: 55,\n                                                            columnNumber: 41\n                                                        }, _this),\n                                                        \"\\u041F\\u0440\\u043E\\u0444\\u0438\\u043B\\u044C\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 37\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown.Item, {\n                                                    className: \"action__item\",\n                                                    onClick: function() {\n                                                        return navigate(\"/settings\");\n                                                    },\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_14__.FiSettings, {\n                                                            className: \"action__item-icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 41\n                                                        }, _this),\n                                                        \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 37\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.Dropdown.Item, {\n                                                    className: \"action__item logout\",\n                                                    onClick: logout,\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_9__.BiExit, {\n                                                            className: \"action__item-icon\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 41\n                                                        }, _this),\n                                                        \"\\u0412\\u044B\\u0439\\u0442\\u0438\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                                    lineNumber: 62,\n                                                    columnNumber: 37\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 33\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, _this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n            lineNumber: 27,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/Header/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, _this);\n};\n_s(Header, \"BCgWECjXFYwIKMzN5jTdVIIAw/Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDeEUsOERBQUNSLHVEQUFVOzREQUFDVSxTQUFTLEVBQUMsbUJBQW1COzs7OztpRUFBRTt3REFBQSx3REFFL0M7Ozs7Ozt5REFBZ0I7OERBQ2hCLDhEQUFDUiwyREFBYTtvREFBQ1EsU0FBUyxFQUFDLHFCQUFxQjtvREFBQ3NCLE9BQU8sRUFBRXpCLE1BQU07O3NFQUMxRCw4REFBQ1Ysa0RBQU07NERBQUNhLFNBQVMsRUFBQyxtQkFBbUI7Ozs7O2lFQUFFO3dEQUFBLGdDQUUzQzs7Ozs7O3lEQUFnQjs7Ozs7O2lEQUNKOzs7Ozs7eUNBQ1Q7O3dDQUNaOzs7Ozs7eUJBRUw7Ozs7OztpQkFDSjs7Ozs7YUFDSixDQUNSO0NBQ0wsQ0FBQztHQTFEV04sTUFBTTs7UUFFQVgsa0RBQVM7OztBQUZmVyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzP2RlMzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Q29udGV4dH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVCZWxsLCBBaU91dGxpbmVVc2VyIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCJcbmltcG9ydCB7IEJpRXhpdCwgQmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxuaW1wb3J0IHsgQ2dQcm9maWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2NnXCJcbmltcG9ydCB7IEZpU2V0dGluZ3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL1VJL0J1dHRvblwiXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7c3RvcmV9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICAgICAgc3RvcmUubG9nb3V0KCk7XG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCB3MTAwJyl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGQtZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfX2xlZnR9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5Qcm9qZWN0VW5pb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyX19yaWdodCwgJ2QtZmxleCBhbGlnbi1jZW50ZXInKX0+XG4gICAgICAgICAgICAgICAgICAgIDxCaVNlYXJjaCBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlYXJjaCwgJ2Z3LWJvbGQnKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHshc3RvcmUuaXNBdXRoXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG1vZGU9J2ZpbGwnPtCS0YXQvtC0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9ezB9IGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQmVsbCBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLm5vdGlmaWNhdGlvbnMsICdmdy1ib2xkJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLlRvZ2dsZSB2YXJpYW50PVwibGlnaHRcIiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9fYnRufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9faWNvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVVzZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5NZW51IHZhcmlhbnQ9XCJsaWdodFwiIGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdhY3Rpb25fX2l0ZW0nIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKGAvcHJvZmlsZS8ke3N0b3JlLmlzVXNlcklEfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2dQcm9maWxlIGNsYXNzTmFtZT0nYWN0aW9uX19pdGVtLWljb24nLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7RhNC40LvRjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdhY3Rpb25fX2l0ZW0nIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvc2V0dGluZ3MnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpU2V0dGluZ3MgY2xhc3NOYW1lPSdhY3Rpb25fX2l0ZW0taWNvbicvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCd0LDRgdGC0YDQvtC50LrQuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gY2xhc3NOYW1lPSdhY3Rpb25fX2l0ZW0gbG9nb3V0JyBvbkNsaWNrPXtsb2dvdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCaUV4aXQgY2xhc3NOYW1lPSdhY3Rpb25fX2l0ZW0taWNvbicvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgINCS0YvQudGC0LhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJDb250ZXh0IiwiY2xzeCIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJBaU91dGxpbmVCZWxsIiwiQWlPdXRsaW5lVXNlciIsIkJpRXhpdCIsIkJpU2VhcmNoIiwiQ2dQcm9maWxlIiwiRmlTZXR0aW5ncyIsIkJ1dHRvbiIsIkRyb3Bkb3duIiwiQmFkZ2UiLCJIZWFkZXIiLCJzdG9yZSIsInJvdXRlciIsImxvZ291dCIsIm5hdmlnYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiY29udGFpbmVyIiwiaGVhZGVyX19sZWZ0IiwiaHJlZiIsImgzIiwibG9nbyIsImhlYWRlcl9fcmlnaHQiLCJzZWFyY2giLCJpc0F1dGgiLCJtb2RlIiwiYmFkZ2VDb250ZW50IiwiY29sb3IiLCJub3RpZmljYXRpb25zIiwiZHJvcGRvd24iLCJUb2dnbGUiLCJ2YXJpYW50IiwiZHJvcGRvd25fX2J0biIsInByb2ZpbGVfX2ljb24iLCJNZW51IiwiYWN0aW9ucyIsIkl0ZW0iLCJvbkNsaWNrIiwiaXNVc2VySUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ })

});