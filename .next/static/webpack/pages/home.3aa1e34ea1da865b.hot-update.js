"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _API_ProjectService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../API/ProjectService */ \"./API/ProjectService.js\");\n/* harmony import */ var _components_ListProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ListProjects */ \"./components/ListProjects/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_5__.selectUserData);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), projects = ref1[0], setProjects = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchProjects();\n    }, []);\n    function fetchProjects() {\n        return _fetchProjects.apply(this, arguments);\n    }\n    function _fetchProjects() {\n        _fetchProjects = _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return _API_ProjectService__WEBPACK_IMPORTED_MODULE_6__[\"default\"].fetchProjectsHome(userData.id);\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.data) setProjects(response.data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430 \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u0438 \\u043F\\u0440\\u043E\\u0435\\u043A\\u0442\\u043E\\u0432\");\n                    case 10:\n                        _ctx.prev = 10;\n                        setIsLoading(false);\n                        return _ctx.finish(10);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7,\n                    10,\n                    13\n                ]\n            ]);\n        }));\n        return _fetchProjects.apply(this, arguments);\n    }\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                marginTop: 50\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Loader, {}, void 0, false, {\n                fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n                lineNumber: 35,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n            lineNumber: 34,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().home),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                    children: \"\\u0414\\u043E\\u043C\\u0430\\u0448\\u043D\\u044F\\u044F\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/home.js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"1a2Wk2R987EaaPsZSKt/T+CcMvU=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2Y7QUFDb0I7QUFDTTtBQUNQO0FBQ0k7QUFDTzs7QUFHM0MsU0FBU1EsSUFBSSxHQUFHOztJQUMzQixJQUFNQyxRQUFRLEdBQUdOLDREQUFjLENBQUNDLDhEQUFjLENBQUM7SUFDL0MsSUFBa0NKLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFYcEQsU0FXb0IsR0FBa0JBLEdBQWMsR0FBaEMsRUFYcEIsWUFXa0MsR0FBSUEsR0FBYyxHQUFsQjtJQUM5QixJQUFnQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVpoRCxRQVltQixHQUFpQkEsSUFBWSxHQUE3QixFQVpuQixXQVlnQyxHQUFJQSxJQUFZLEdBQWhCO0lBRTVCQyxnREFBUyxDQUFDLFdBQU07UUFDWmEsYUFBYSxFQUFFLENBQUM7S0FDbkIsRUFBRSxFQUFFLENBQUM7YUFFU0EsYUFBYTtlQUFiQSxjQUFhOzthQUFiQSxjQUFhO1FBQWJBLGNBQWEsR0FBNUIseU1BQStCO2dCQUVqQkMsUUFBUTs7Ozs7OytCQUFTVCw2RUFBZ0MsQ0FBQ0csUUFBUSxDQUFDUSxFQUFFLENBQUM7O3dCQUE5REYsUUFBUSxZQUFzRDt3QkFFcEUsSUFBSUEsUUFBUSxDQUFDRyxJQUFJLEVBQ2JMLFdBQVcsQ0FBQ0UsUUFBUSxDQUFDRyxJQUFJLENBQUMsQ0FBQzs7Ozs7O3dCQUUvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsaUtBQStCLENBQTJCLENBQUM7Ozt3QkFFN0NULFlBQWQsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7U0FFM0I7ZUFYY0csY0FBYTs7SUFhNUIsSUFBSUosU0FBUyxFQUFFO1FBQ1gscUJBQ0ksOERBQUNXLEtBQUc7WUFBQ0MsS0FBSyxFQUFFO2dCQUFDQyxPQUFPLEVBQUUsTUFBTTtnQkFBRUMsY0FBYyxFQUFFLFFBQVE7Z0JBQUVDLFNBQVMsRUFBRSxFQUFFO2FBQUM7c0JBQ2xFLDRFQUFDQyxNQUFNOzs7O29CQUFFOzs7OztnQkFDUCxDQUNSO0tBQ0w7SUFFRCxxQkFDSSw4REFBQ0wsS0FBRztRQUFDTSxTQUFTLEVBQUV0QixzRUFBVztrQkFDdkIsNEVBQUNILGtEQUFJOzs4QkFDRCw4REFBQzJCLE9BQUs7OEJBQUMsa0RBQVE7Ozs7O3dCQUFROzhCQUN2Qiw4REFBQ0MsTUFBSTtvQkFBQ0MsR0FBRyxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozt3QkFBRzs7Ozs7O2dCQUNwQzs7Ozs7WUFDTCxDQUNSO0NBQ0w7R0F0Q3VCeEIsSUFBSTs7UUFDUEwsd0RBQWM7OztBQURYSyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUuanM/MTY3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L2hvb2tzJztcbmltcG9ydCB7IHNlbGVjdFVzZXJEYXRhIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3VzZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIlxuaW1wb3J0IFByb2plY3RTZXJ2aWNlIGZyb20gJy4uL0FQSS9Qcm9qZWN0U2VydmljZSc7XG5pbXBvcnQgeyBMaXN0UHJvamVjdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL0xpc3RQcm9qZWN0cyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdFVzZXJEYXRhKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFByb2plY3RzKCk7XG4gICAgfSwgW10pXG5cbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb2plY3RzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9qZWN0U2VydmljZS5mZXRjaFByb2plY3RzSG9tZSh1c2VyRGF0YS5pZCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIHNldFByb2plY3RzKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RiNC40LHQutCwINC/0YDQuCDQv9C+0LvRg9GH0LXQvdC40Lgg0L/RgNC+0LXQutGC0L7QsicpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiA1MH19PlxuICAgICAgICAgICAgICAgIDxMb2FkZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT7QlNC+0LzQsNGI0L3Rj9GPPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0VXNlckRhdGEiLCJzdHlsZXMiLCJQcm9qZWN0U2VydmljZSIsIkxpc3RQcm9qZWN0cyIsIkhvbWUiLCJ1c2VyRGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJmZXRjaFByb2plY3RzIiwicmVzcG9uc2UiLCJmZXRjaFByb2plY3RzSG9tZSIsImlkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblRvcCIsIkxvYWRlciIsImNsYXNzTmFtZSIsImhvbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.js\n");

/***/ })

});