"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./utils/schemas/authValidation.js":
/*!*****************************************!*\
  !*** ./utils/schemas/authValidation.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoginFormSchema\": function() { return /* binding */ LoginFormSchema; },\n/* harmony export */   \"RegisterFormSchema\": function() { return /* binding */ RegisterFormSchema; }\n/* harmony export */ });\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yup */ \"./node_modules/yup/es/index.js\");\n\nvar LoginFormSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({\n    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email(\"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u0430\\u044F \\u043F\\u043E\\u0447\\u0442\\u0430\").required(\"\\u041F\\u043E\\u0447\\u0442\\u0430 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F\"),\n    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 6 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\").required(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439\")\n});\nvar RegisterFormSchema = yup__WEBPACK_IMPORTED_MODULE_0__.object({\n    name: yup__WEBPACK_IMPORTED_MODULE_0__.string().max(30, \"\\u041D\\u0435 \\u0431\\u043E\\u043B\\u0435\\u0435 30 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\").required(\"\\u0418\\u043C\\u044F \\u0438 \\u0444\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\"),\n    email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email(\"\\u041D\\u0435\\u0432\\u0435\\u0440\\u043D\\u0430\\u044F \\u043F\\u043E\\u0447\\u0442\\u0430\").required(\"\\u041F\\u043E\\u0447\\u0442\\u0430 \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u0430\\u044F\"),\n    password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(6, \"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u043D\\u0435 \\u043C\\u0435\\u043D\\u0435\\u0435 6 \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432\").required(\"\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439\")\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zY2hlbWFzL2F1dGhWYWxpZGF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUVuQixJQUFNQyxlQUFlLEdBQUdELHVDQUFVLENBQUM7SUFDdENHLEtBQUssRUFBRUgsdUNBQVUsRUFBRSxDQUFDRyxLQUFLLENBQUMsaUZBQWdCLENBQWMsQ0FBQ0UsUUFBUSxDQUFDLHlHQUFvQixDQUFrQjtJQUMxRUMsUUFBdEIsRUFBRU4sdUNBQVUsRUFBRSxDQUFDTyxHQUFHLENBQUMsQ0FBQyxFQUFFLHFJQUE0QixDQUFzQixDQUFDRixRQUFRLENBQUMsK0dBQXFCLENBQW1CO0NBQzlGLENBQXRDLENBQUM7QUFFSSxJQUFNRyxrQkFBa0IsR0FBR1IsdUNBQVUsQ0FBQztJQUN6Q1MsSUFBSSxFQUFFVCx1Q0FBVSxFQUFFLENBQUNVLEdBQUcsQ0FBQyxFQUFFLEVBQUUsaUdBQXNCLENBQWdCLENBQUNMLFFBQVEsQ0FBQyx5SUFBMkIsQ0FBdUI7SUFDeEZGLEtBQWhDLEVBQUVILHVDQUFVLEVBQUUsQ0FBQ0csS0FBSyxDQUFDLGlGQUFnQixDQUFjLENBQUNFLFFBQVEsQ0FBQyx5R0FBb0IsQ0FBa0I7SUFDMUVDLFFBQXRCLEVBQUVOLHVDQUFVLEVBQUUsQ0FBQ08sR0FBRyxDQUFDLENBQUMsRUFBRSxxSUFBNEIsQ0FBc0IsQ0FBQ0YsUUFBUSxDQUFDLCtHQUFxQixDQUFDO0NBQzlGLENBQUMsQ0FBcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvc2NoZW1hcy9hdXRoVmFsaWRhdGlvbi5qcz9kMjE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCJcblxuZXhwb3J0IGNvbnN0IExvZ2luRm9ybVNjaGVtYSA9IHl1cC5vYmplY3Qoe1xuICAgIGVtYWlsOiB5dXAuc3RyaW5nKCkuZW1haWwoJ9Cd0LXQstC10YDQvdCw0Y8g0L/QvtGH0YLQsCcpLnJlcXVpcmVkKCfQn9C+0YfRgtCwINC+0LHRj9C30LDRgtC10LvRjNC90LDRjycpLFxuICAgIHBhc3N3b3JkOiB5dXAuc3RyaW5nKCkubWluKDYsIFwi0J/QsNGA0L7Qu9GMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LJcIikucmVxdWlyZWQoJ9Cf0LDRgNC+0LvRjCDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGL0LknKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUmVnaXN0ZXJGb3JtU2NoZW1hID0geXVwLm9iamVjdCh7XG4gICAgbmFtZTogeXVwLnN0cmluZygpLm1heCgzMCwgJ9Cd0LUg0LHQvtC70LXQtSAzMCDRgdC40LzQstC+0LvQvtCyJykucmVxdWlyZWQoJ9CY0LzRjyDQuCDRhNCw0LzQuNC70LjRjyDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdGLJyksXG4gICAgZW1haWw6IHl1cC5zdHJpbmcoKS5lbWFpbCgn0J3QtdCy0LXRgNC90LDRjyDQv9C+0YfRgtCwJykucmVxdWlyZWQoJ9Cf0L7Rh9GC0LAg0L7QsdGP0LfQsNGC0LXQu9GM0L3QsNGPJyksXG4gICAgcGFzc3dvcmQ6IHl1cC5zdHJpbmcoKS5taW4oNiwgXCLQn9Cw0YDQvtC70Ywg0L3QtSDQvNC10L3QtdC1IDYg0YHQuNC80LLQvtC70L7QslwiKS5yZXF1aXJlZCgn0J/QsNGA0L7Qu9GMINC+0LHRj9C30LDRgtC10LvRjNC90YvQuScpLFxufSk7Il0sIm5hbWVzIjpbInl1cCIsIkxvZ2luRm9ybVNjaGVtYSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIlJlZ2lzdGVyRm9ybVNjaGVtYSIsIm5hbWUiLCJtYXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/schemas/authValidation.js\n");

/***/ })

});