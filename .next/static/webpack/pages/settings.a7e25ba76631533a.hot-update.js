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

/***/ "./API/UserService.js":
/*!****************************!*\
  !*** ./API/UserService.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserService; }\n/* harmony export */ });\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ \"./API/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\n\n\nvar UserService = /*#__PURE__*/ function() {\n    \"use strict\";\n    function UserService() {\n        _classCallCheck(this, UserService);\n    }\n    _createClass(UserService, null, [\n        {\n            key: \"fetchDataProfile\",\n            value: // No auth user\n            function fetchDataProfile(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/user/\".concat(userID, \"/get-data-profile\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchDataParams\",\n            value: function fetchDataParams(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/user/\".concat(userID, \"/get-params\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchFollows\",\n            value: function fetchFollows(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/user/\".concat(userID, \"/get-follows\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchFollowings\",\n            value: function fetchFollowings(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/user/\".concat(userID, \"/get-followings\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchDataSettings\",\n            value: // Auth user\n            function fetchDataSettings(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/get-settings\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"saveData\",\n            value: function saveData(userID, name, email, description, ntfsNewMsg, ntfsNewSubs, ntfsNewComment, ntfsUpdate, ntfsEmail) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/auth/user/\".concat(userID, \"/save-settings\"), {\n                                    name: name,\n                                    email: email,\n                                    description: description,\n                                    notifications: {\n                                        new_message: ntfsNewMsg,\n                                        new_sub: ntfsNewSubs,\n                                        new_comment: ntfsNewComment,\n                                        update: ntfsUpdate,\n                                        email_notification: ntfsEmail\n                                    }\n                                }));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"changePassword\",\n            value: function changePassword(userID, oldPassword, newPassword) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/auth/user/\".concat(userID, \"/change-password\"), {\n                                    old_password: oldPassword,\n                                    new_password: newPassword\n                                }));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"deleteAccount\",\n            value: function deleteAccount(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/delete-account\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchLikesFavorites\",\n            value: function fetchLikesFavorites(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/get-likes-favorites\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"fetchListFollowings\",\n            value: function fetchListFollowings(userID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/get-followings\")));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"subscribeUser\",\n            value: function subscribeUser(userID, accountID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/subscribe/\").concat(accountID)));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        },\n        {\n            key: \"unsubscribeUser\",\n            value: function unsubscribeUser(userID, accountID) {\n                return _asyncToGenerator(_home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_q_p_projects_project_union_project_frontend_nextjs_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                return _ctx.abrupt(\"return\", ___WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/auth/user/\".concat(userID, \"/unsubscribe/\").concat(accountID)));\n                            case 1:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return UserService;\n}();\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7aUJBQ3pEO2FBQUE7OztZQUVZNEIsR0FBbUIsRUFBbkJBLHFCQUFtQjttQkFBaEMsU0FBYUEsbUJBQW1CLENBQUM1QixNQUFNO3VCQUF2Qyx5TUFBeUM7Ozs7NkRBQzlCSCw2Q0FBUSxDQUFDLGFBQVksQ0FBUyxNQUFvQixDQUEzQkcsTUFBTSxFQUFDLHNCQUFvQixDQUFDLENBQUM7Ozs7OztpQkFDOUQ7YUFBQTs7O1lBRVk2QixHQUFtQixFQUFuQkEscUJBQW1CO21CQUFoQyxTQUFhQSxtQkFBbUIsQ0FBQzdCLE1BQU07dUJBQXZDLHlNQUF5Qzs7Ozs2REFDOUJILDZDQUFRLENBQUMsYUFBWSxDQUFTLE1BQWUsQ0FBdEJHLE1BQU0sRUFBQyxpQkFBZSxDQUFDLENBQUM7Ozs7OztpQkFDekQ7YUFBQTs7O1lBRVk4QixHQUFhLEVBQWJBLGVBQWE7bUJBQTFCLFNBQWFBLGFBQWEsQ0FBQzlCLE1BQU0sRUFBRStCLFNBQVM7dUJBQTVDLHlNQUE4Qzs7Ozs2REFDbkNsQyw2Q0FBUSxDQUFDLGFBQVksQ0FBc0JrQyxNQUFTLENBQTdCL0IsTUFBTSxFQUFDLGFBQVcsQ0FBWSxRQUFWK0IsU0FBUyxDQUFFLENBQUM7Ozs7OztpQkFDakU7YUFBQTs7O1lBRVlDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQTVCLFNBQWFBLGVBQWUsQ0FBQ2hDLE1BQU0sRUFBRStCLFNBQVM7dUJBQTlDLHlNQUFnRDs7Ozs2REFDckNsQyw2Q0FBUSxDQUFDLGFBQVksQ0FBd0JrQyxNQUFTLENBQS9CL0IsTUFBTSxFQUFDLGVBQWEsQ0FBWSxRQUFWK0IsU0FBUyxDQUFFLENBQUM7Ozs7OztpQkFDbkU7YUFBQTs7OztDQUNKO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQVBJL1VzZXJTZXJ2aWNlLmpzPzRmNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICRhcGkgZnJvbSBcIi5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIC8vIE5vIGF1dGggdXNlclxuXG4gICAgc3RhdGljIGFzeW5jIGZldGNoRGF0YVByb2ZpbGUodXNlcklEKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldChgL3VzZXIvJHt1c2VySUR9L2dldC1kYXRhLXByb2ZpbGVgKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmZXRjaERhdGFQYXJhbXModXNlcklEKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldChgL3VzZXIvJHt1c2VySUR9L2dldC1wYXJhbXNgKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmZXRjaEZvbGxvd3ModXNlcklEKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldChgL3VzZXIvJHt1c2VySUR9L2dldC1mb2xsb3dzYClcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZmV0Y2hGb2xsb3dpbmdzKHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gJGFwaS5nZXQoYC91c2VyLyR7dXNlcklEfS9nZXQtZm9sbG93aW5nc2ApXG4gICAgfVxuXG4gICAgLy8gQXV0aCB1c2VyXG5cbiAgICBzdGF0aWMgYXN5bmMgZmV0Y2hEYXRhU2V0dGluZ3ModXNlcklEKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldChgL2F1dGgvdXNlci8ke3VzZXJJRH0vZ2V0LXNldHRpbmdzYClcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgc2F2ZURhdGEodXNlcklELCBuYW1lLCBlbWFpbCwgZGVzY3JpcHRpb24sIG50ZnNOZXdNc2csIG50ZnNOZXdTdWJzLCBudGZzTmV3Q29tbWVudCwgbnRmc1VwZGF0ZSwgbnRmc0VtYWlsKSB7XG4gICAgICAgIHJldHVybiAkYXBpLnBvc3QoYC9hdXRoL3VzZXIvJHt1c2VySUR9L3NhdmUtc2V0dGluZ3NgLCB7bmFtZTogbmFtZSwgZW1haWw6IGVtYWlsLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sIG5vdGlmaWNhdGlvbnM6IHtuZXdfbWVzc2FnZTogbnRmc05ld01zZywgbmV3X3N1YjogbnRmc05ld1N1YnMsIG5ld19jb21tZW50OiBudGZzTmV3Q29tbWVudCwgdXBkYXRlOiBudGZzVXBkYXRlLCBlbWFpbF9ub3RpZmljYXRpb246IG50ZnNFbWFpbH19KVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBjaGFuZ2VQYXNzd29yZCh1c2VySUQsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gJGFwaS5wb3N0KGAvYXV0aC91c2VyLyR7dXNlcklEfS9jaGFuZ2UtcGFzc3dvcmRgLCB7b2xkX3Bhc3N3b3JkOiBvbGRQYXNzd29yZCwgbmV3X3Bhc3N3b3JkOiBuZXdQYXNzd29yZH0pXG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGRlbGV0ZUFjY291bnQodXNlcklEKSB7XG4gICAgICAgIHJldHVybiAkYXBpLmdldChgL2F1dGgvdXNlci8ke3VzZXJJRH0vZGVsZXRlLWFjY291bnRgKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmZXRjaExpa2VzRmF2b3JpdGVzKHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gJGFwaS5nZXQoYC9hdXRoL3VzZXIvJHt1c2VySUR9L2dldC1saWtlcy1mYXZvcml0ZXNgKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBmZXRjaExpc3RGb2xsb3dpbmdzKHVzZXJJRCkge1xuICAgICAgICByZXR1cm4gJGFwaS5nZXQoYC9hdXRoL3VzZXIvJHt1c2VySUR9L2dldC1mb2xsb3dpbmdzYClcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgc3Vic2NyaWJlVXNlcih1c2VySUQsIGFjY291bnRJRCkge1xuICAgICAgICByZXR1cm4gJGFwaS5nZXQoYC9hdXRoL3VzZXIvJHt1c2VySUR9L3N1YnNjcmliZS8ke2FjY291bnRJRH1gKVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyB1bnN1YnNjcmliZVVzZXIodXNlcklELCBhY2NvdW50SUQpIHtcbiAgICAgICAgcmV0dXJuICRhcGkuZ2V0KGAvYXV0aC91c2VyLyR7dXNlcklEfS91bnN1YnNjcmliZS8ke2FjY291bnRJRH1gKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyIkYXBpIiwiVXNlclNlcnZpY2UiLCJmZXRjaERhdGFQcm9maWxlIiwidXNlcklEIiwiZ2V0IiwiZmV0Y2hEYXRhUGFyYW1zIiwiZmV0Y2hGb2xsb3dzIiwiZmV0Y2hGb2xsb3dpbmdzIiwiZmV0Y2hEYXRhU2V0dGluZ3MiLCJzYXZlRGF0YSIsIm5hbWUiLCJlbWFpbCIsImRlc2NyaXB0aW9uIiwibnRmc05ld01zZyIsIm50ZnNOZXdTdWJzIiwibnRmc05ld0NvbW1lbnQiLCJudGZzVXBkYXRlIiwibnRmc0VtYWlsIiwicG9zdCIsIm5vdGlmaWNhdGlvbnMiLCJuZXdfbWVzc2FnZSIsIm5ld19zdWIiLCJuZXdfY29tbWVudCIsInVwZGF0ZSIsImVtYWlsX25vdGlmaWNhdGlvbiIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsIm9sZF9wYXNzd29yZCIsIm5ld19wYXNzd29yZCIsImRlbGV0ZUFjY291bnQiLCJmZXRjaExpa2VzRmF2b3JpdGVzIiwiZmV0Y2hMaXN0Rm9sbG93aW5ncyIsInN1YnNjcmliZVVzZXIiLCJhY2NvdW50SUQiLCJ1bnN1YnNjcmliZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./API/UserService.js\n");

/***/ }),

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/hooks */ \"./redux/hooks.js\");\n/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/user */ \"./redux/slices/user.js\");\n/* harmony import */ var _API_UserService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../API/UserService */ \"./API/UserService.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Settings() {\n    _s();\n    var userData = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_4__.selectUserData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"settings\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"\\u041D\\u0430\\u0441\\u0442\\u0440\\u043E\\u0439\\u043A\\u0438\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/q/p/projects/project-union/project-frontend-nextjs/pages/settings.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n};\n_s(Settings, \"7M0b+HzNoGlTfrYL2IIiGjzXu8s=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = Settings;\nvar _c;\n$RefreshReg$(_c, \"Settings\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXR0aW5ncy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDZjtBQUNvQjtBQUNNO0FBQ1Q7O0FBRzlCLFNBQVNNLFFBQVEsR0FBRzs7SUFDL0IsSUFBTUMsUUFBUSxHQUFHSiw0REFBYyxDQUFDQyw4REFBYyxDQUFDO0lBRS9DLHFCQUNJLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxVQUFVO2tCQUNyQiw0RUFBQ1Asa0RBQUk7OzhCQUNELDhEQUFDUSxPQUFLOzhCQUFDLHdEQUFTOzs7Ozt3QkFBUTs4QkFDeEIsOERBQUNDLE1BQUk7b0JBQUNDLEdBQUcsRUFBQyxNQUFNO29CQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7d0JBQUc7Ozs7OztnQkFDcEM7Ozs7O1lBQ0wsQ0FDUjtDQUNMO0dBWHVCUCxRQUFROztRQUNYSCx3REFBYzs7O0FBRFhHLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanM/MDllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uL3JlZHV4L2hvb2tzJztcbmltcG9ydCB7IHNlbGVjdFVzZXJEYXRhIH0gZnJvbSAnLi4vcmVkdXgvc2xpY2VzL3VzZXInO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL0FQSS9Vc2VyU2VydmljZSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3MoKSB7XG4gICAgY29uc3QgdXNlckRhdGEgPSB1c2VBcHBTZWxlY3RvcihzZWxlY3RVc2VyRGF0YSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3MnPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPtCd0LDRgdGC0YDQvtC50LrQuDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJ1c2VBcHBTZWxlY3RvciIsInNlbGVjdFVzZXJEYXRhIiwiVXNlclNlcnZpY2UiLCJTZXR0aW5ncyIsInVzZXJEYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/settings.js\n");

/***/ })

});