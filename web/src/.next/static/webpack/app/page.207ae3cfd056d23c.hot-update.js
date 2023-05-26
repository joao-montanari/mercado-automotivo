"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/venda.jsx":
/*!**********************************!*\
  !*** ./src/components/venda.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Venda; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/dialog/dialog.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Venda(props) {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usuarios, setusuarios] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const patchAlocacao = (id, quant)=>{\n        fetch(\"http://localhost:5000/alocacoes/\".concat(id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                quantidade: quant - 1\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n        }).catch((error)=>{\n            console.log(\"Ocorreu um erro:\", error);\n        });\n    };\n    const fetchUsuarios = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/clientes\");\n            const jsonData = await response.json();\n            return jsonData;\n        } catch (error) {\n            console.log(\"Error: \", error);\n        }\n    };\n    const openModal = async ()=>{\n        setIsOpen(true);\n        let usuarios = await fetchUsuarios();\n        setusuarios(usuarios);\n        console.log(props.id);\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n        setusuarios([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: openModal,\n                className: \"absolute right-0 bg-[#7814FF] text-white p-1 w-28 rounded-md\",\n                children: \"Vender\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClose: closeModal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {\n                                        className: \"w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {\n                                                as: \"h1\",\n                                                className: \"text-xl text-gray-900 mb-5\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Modelo: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    props.automovel.modelo\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                children: \"Cliente: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-1 mb-5\",\n                                                children: usuarios.map((usuario, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: usuario.nome\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                className: \"\",\n                                                children: \"Concessionaria: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-2\",\n                                                children: props.concessionarias.map((concessionaria, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: concessionaria.concessionaria\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"mt-5 w-full bg-[#9a4cff] p-2 rounded-lg text-white border border-white hover:border-[#7814FF] hover:bg-[#aa6aff] duration-500\",\n                                                    onClick: ()=>patchAlocacao(props.id, props.quantidade),\n                                                    children: \"Confirmar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                    lineNumber: 112,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Venda, \"zL4eS5l4kyUVGXSh561jHaMVWyI=\");\n_c = Venda;\nvar _c;\n$RefreshReg$(_c, \"Venda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdmVuZGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ0Q7QUFFdEMsU0FBU0ssTUFBTUMsS0FBSyxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNTyxnQkFBZ0IsQ0FBQ0MsSUFBSUMsUUFBVTtRQUNuQ0MsTUFBTSxtQ0FBc0MsT0FBSEYsS0FBTTtZQUMzQ0csUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFlBQWFQLFFBQVE7WUFBRztRQUNqRCxHQUVEUSxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUTtZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2QsR0FDQ0csS0FBSyxDQUFDQyxDQUFBQSxRQUFTO1lBQ2RILFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JFO1FBQ2xDO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTVAsV0FBVyxNQUFNUixNQUFPO1lBQzlCLE1BQU1nQixXQUFXLE1BQU1SLFNBQVNDLElBQUk7WUFDcEMsT0FBT087UUFDVCxFQUFFLE9BQU1GLE9BQU87WUFDYkgsUUFBUUMsR0FBRyxDQUFDLFdBQVdFO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNRyxZQUFZLFVBQVk7UUFDNUJ2QixVQUFVLElBQUk7UUFDZCxJQUFJQyxXQUFXLE1BQU1vQjtRQUNyQm5CLFlBQVlEO1FBQ1pnQixRQUFRQyxHQUFHLENBQUNwQixNQUFNTSxFQUFFO0lBQ3RCO0lBRUEsTUFBTW9CLGFBQWEsSUFBTTtRQUN2QnhCLFVBQVUsS0FBSztRQUNmRSxZQUFZLEVBQUU7SUFDaEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN1QjtnQkFDQ0MsTUFBSztnQkFDTEMsU0FBU0o7Z0JBQ1RLLFdBQVU7MEJBQ1g7Ozs7OzswQkFJRCw4REFBQ25DLHlEQUFVQTtnQkFBQ29DLE1BQU07Z0JBQUNDLE1BQU0vQjtnQkFBUWdDLElBQUlyQywyQ0FBUUE7MEJBQzNDLDRFQUFDRixxREFBTUE7b0JBQUN1QyxJQUFHO29CQUFNSCxXQUFVO29CQUFnQkksU0FBU1I7O3NDQUNsRCw4REFBQy9CLCtEQUFnQjs0QkFDZnNDLElBQUlyQywyQ0FBUUE7NEJBQ1p3QyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFROzRCQUNSQyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFRO3NDQUVSLDRFQUFDQztnQ0FBSVosV0FBVTs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDWTs0QkFBSVosV0FBVTtzQ0FDYiw0RUFBQ1k7Z0NBQUlaLFdBQVU7MENBQ2IsNEVBQUNuQywrREFBZ0I7b0NBQ2ZzQyxJQUFJckMsMkNBQVFBO29DQUNad0MsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTtvQ0FDUkMsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTs4Q0FFUiw0RUFBQy9DLDJEQUFZO3dDQUNYb0MsV0FBVTs7MERBRVIsOERBQUNwQywyREFBWTtnREFDVHVDLElBQUc7Z0RBQ0hILFdBQVU7O2tFQUVaLDhEQUFDZTtrRUFBTzs7Ozs7O29EQUFrQjdDLE1BQU04QyxTQUFTLENBQUNDLE1BQU07Ozs7Ozs7MERBR2xELDhEQUFDQztnREFBTUMsU0FBUTswREFBRzs7Ozs7OzBEQUNsQiw4REFBQ0M7Z0RBQU9DLE1BQUs7Z0RBQUc3QyxJQUFHO2dEQUFHd0IsV0FBVTswREFFeEIzQixTQUFTaUQsR0FBRyxDQUFDLENBQUNDLFNBQVNDLGtCQUNuQiw4REFBQ0M7d0RBQU9DLE9BQU07a0VBQVlILFFBQVFJLElBQUk7dURBQWhCSDs7Ozs7Ozs7OzswREFJbEMsOERBQUNOO2dEQUFNQyxTQUFRO2dEQUFHbkIsV0FBVTswREFBRzs7Ozs7OzBEQUMvQiw4REFBQ29CO2dEQUFPQyxNQUFLO2dEQUFHN0MsSUFBRztnREFBR3dCLFdBQVU7MERBRXhCOUIsTUFBTTBELGVBQWUsQ0FBQ04sR0FBRyxDQUFDLENBQUNPLGdCQUFnQkwsa0JBQ3ZDLDhEQUFDQzt3REFBT0MsT0FBTTtrRUFBWUcsZUFBZUEsY0FBYzt1REFBakNMOzs7Ozs7Ozs7OzBEQUtwQyw4REFBQ1o7Z0RBQUlaLFdBQVU7MERBQ2IsNEVBQUNIO29EQUNDQyxNQUFLO29EQUNMRSxXQUFVO29EQUNWRCxTQUFTLElBQU94QixjQUFjTCxNQUFNTSxFQUFFLEVBQUVOLE1BQU1jLFVBQVU7OERBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZckIsQ0FBQztHQTNIdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZlbmRhLmpzeD9hZTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlbmRhKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXN1YXJpb3MsIHNldHVzdWFyaW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgcGF0Y2hBbG9jYWNhbyA9IChpZCwgcXVhbnQpID0+IHtcclxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYWxvY2Fjb2VzLyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBxdWFudGlkYWRlOiAocXVhbnQgLSAxKSB9KSxcclxuICAgICAgfVxyXG4gICAgKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ09jb3JyZXUgdW0gZXJybzonLCBlcnJvcilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBmZXRjaFVzdWFyaW9zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NsaWVudGVzYCk7XHJcbiAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4odHJ1ZSk7XHJcbiAgICBsZXQgdXN1YXJpb3MgPSBhd2FpdCBmZXRjaFVzdWFyaW9zKCk7XHJcbiAgICBzZXR1c3Vhcmlvcyh1c3Vhcmlvcyk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5pZClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gICAgc2V0dXN1YXJpb3MoW10pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXtvcGVuTW9kYWx9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSByaWdodC0wIGJnLVsjNzgxNEZGXSB0ZXh0LXdoaXRlIHAtMSB3LTI4IHJvdW5kZWQtbWQnXHJcbiAgICAgID5cclxuICAgICAgICBWZW5kZXJcclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8VHJhbnNpdGlvbiBhcHBlYXIgc2hvdz17aXNPcGVufSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgIDxEaWFsb2cgYXM9XCJkaXZcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwXCIgb25DbG9zZT17Y2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgZW50ZXJUbz1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1XCIgLz5cclxuICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3cteS1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgZW50ZXI9XCJlYXNlLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHNjYWxlLTk1XCJcclxuICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmU9XCJlYXNlLWluIGR1cmF0aW9uLTIwMFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERpYWxvZy5QYW5lbCBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIHRyYW5zZm9ybSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy13aGl0ZSBwLTYgdGV4dC1sZWZ0IGFsaWduLW1pZGRsZSBzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJoMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTkwMCBtYi01XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1vZGVsbzogPC9zdHJvbmc+e3Byb3BzLmF1dG9tb3ZlbC5tb2RlbG99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5DbGllbnRlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiXCIgY2xhc3NOYW1lPSd3LWZ1bGwgYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHAtMSBtYi01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXN1YXJpb3MubWFwKCh1c3VhcmlvLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGtleT17aX0+e3VzdWFyaW8ubm9tZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiIGNsYXNzTmFtZT0nJz5Db25jZXNzaW9uYXJpYTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBwLTInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb25jZXNzaW9uYXJpYXMubWFwKChjb25jZXNzaW9uYXJpYSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9e2l9Pntjb25jZXNzaW9uYXJpYS5jb25jZXNzaW9uYXJpYX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNSB3LWZ1bGwgYmctWyM5YTRjZmZdIHAtMiByb3VuZGVkLWxnIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci13aGl0ZSBob3Zlcjpib3JkZXItWyM3ODE0RkZdIGhvdmVyOmJnLVsjYWE2YWZmXSBkdXJhdGlvbi01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHBhdGNoQWxvY2FjYW8ocHJvcHMuaWQsIHByb3BzLnF1YW50aWRhZGUpKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb25maXJtYXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZy5QYW5lbD5cclxuICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9EaWFsb2c+XHJcbiAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgIDwvPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJEaWFsb2ciLCJUcmFuc2l0aW9uIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZlbmRhIiwicHJvcHMiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c3VhcmlvcyIsInNldHVzdWFyaW9zIiwicGF0Y2hBbG9jYWNhbyIsImlkIiwicXVhbnQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1YW50aWRhZGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZmV0Y2hVc3VhcmlvcyIsImpzb25EYXRhIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYXBwZWFyIiwic2hvdyIsImFzIiwib25DbG9zZSIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiZGl2IiwiUGFuZWwiLCJUaXRsZSIsInN0cm9uZyIsImF1dG9tb3ZlbCIsIm1vZGVsbyIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm5hbWUiLCJtYXAiLCJ1c3VhcmlvIiwiaSIsIm9wdGlvbiIsInZhbHVlIiwibm9tZSIsImNvbmNlc3Npb25hcmlhcyIsImNvbmNlc3Npb25hcmlhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/venda.jsx\n"));

/***/ })

});