"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./components/ConfirmAction/index.js":
/*!*******************************************!*\
  !*** ./components/ConfirmAction/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ConfirmAction_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfirmAction.module.scss */ \"./components/ConfirmAction/ConfirmAction.module.scss\");\n/* harmony import */ var _ConfirmAction_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ConfirmAction_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/Button */ \"./components/UI/Button/index.jsx\");\nvar _this = undefined;\n\n\n\nvar ConfirmAction = function(param) {\n    var action = param.action, text = param.text;\n    var chooseAction = function(choice) {\n        action(choice);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ConfirmAction_module_scss__WEBPACK_IMPORTED_MODULE_2___default().confirm),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/ConfirmAction/index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ConfirmAction_module_scss__WEBPACK_IMPORTED_MODULE_2___default().actions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        mode: \"fill\",\n                        onClick: function() {\n                            return chooseAction(true);\n                        },\n                        children: \"\\u0414\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/ConfirmAction/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        mode: \"outline\",\n                        onClick: function() {\n                            return chooseAction(false);\n                        },\n                        children: \"\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430\"\n                    }, void 0, false, {\n                        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/ConfirmAction/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/ConfirmAction/index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/components/ConfirmAction/index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_c = ConfirmAction;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConfirmAction);\nvar _c;\n$RefreshReg$(_c, \"ConfirmAction\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmZpcm1BY3Rpb24vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWlEO0FBQ1g7QUFHdEMsSUFBTUUsYUFBYSxHQUFHLGdCQUFvQjtRQUFsQkMsTUFBTSxTQUFOQSxNQUFNLEVBQUVDLElBQUksU0FBSkEsSUFBSTtJQUNoQyxJQUFNQyxZQUFZLEdBQUcsU0FBQ0MsTUFBTSxFQUFLO1FBQzdCSCxNQUFNLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0tBQ3JCO0lBRUUscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUiwyRUFBYzs7MEJBQzFCLDhEQUFDVSxHQUFDOzBCQUFFTixJQUFJOzs7OztxQkFBSzswQkFFYiw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFFUiwyRUFBYzs7a0NBQzFCLDhEQUFDQyw4Q0FBTTt3QkFBQ1csSUFBSSxFQUFDLE1BQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTVIsWUFBWSxDQUFDLElBQUksQ0FBQzt5QkFBQTtrQ0FBRSxjQUFFOzs7Ozs2QkFBVztrQ0FDbEUsOERBQURKLDhDQUFNO3dCQUFDVyxJQUFJLEVBQUMsU0FBUzt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNUixZQUFZLENBQUMsS0FBSyxDQUFDO3lCQUFBO2tDQUFFLHNDQUFNOzs7Ozs2QkFBUzs7Ozs7O3FCQUN4RTs7Ozs7O2FBQ0osQ0FDWDtDQUNGO0FBZktILEtBQUFBLGFBQWE7QUFpQm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db25maXJtQWN0aW9uL2luZGV4LmpzPzRmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbmZpcm1BY3Rpb24ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vVUkvQnV0dG9uJztcblxuXG5jb25zdCBDb25maXJtQWN0aW9uID0gKHthY3Rpb24sIHRleHR9KSA9PiB7XG4gICAgY29uc3QgY2hvb3NlQWN0aW9uID0gKGNob2ljZSkgPT4ge1xuICAgICAgICBhY3Rpb24oY2hvaWNlKTtcblx0fVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25maXJtfT5cbiAgICAgICAgICAgIDxwPnt0ZXh0fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG1vZGU9J2ZpbGwnIG9uQ2xpY2s9eygpID0+IGNob29zZUFjdGlvbih0cnVlKX0+0JTQsDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gbW9kZT0nb3V0bGluZScgb25DbGljaz17KCkgPT4gY2hvb3NlQWN0aW9uKGZhbHNlKX0+0J7RgtC80LXQvdCwPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1BY3Rpb247XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwiQ29uZmlybUFjdGlvbiIsImFjdGlvbiIsInRleHQiLCJjaG9vc2VBY3Rpb24iLCJjaG9pY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjb25maXJtIiwicCIsImFjdGlvbnMiLCJtb2RlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ConfirmAction/index.js\n");

/***/ })

});