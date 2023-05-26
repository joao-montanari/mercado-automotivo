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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Venda; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/dialog/dialog.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Venda(props) {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usuarios, setusuarios] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const patchAlocacao = async (id, quant)=>{\n        await fetch(\"http://localhost:5000/alocacao/\".concat(id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                quantidade: quant - 1\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n        }).catch((error)=>{\n            console.log(\"Ocorreu um erro:\", error);\n        });\n        location.reload(true);\n    };\n    const fetchUsuarios = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/clientes\");\n            const jsonData = await response.json();\n            return jsonData;\n        } catch (error) {\n            console.log(\"Error: \", error);\n        }\n    };\n    const openModal = async ()=>{\n        setIsOpen(true);\n        let usuarios = await fetchUsuarios();\n        setusuarios(usuarios);\n        console.log(props.id);\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n        setusuarios([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: openModal,\n                className: \"absolute right-0 bg-[#7814FF] text-white p-1 w-28 rounded-md\",\n                children: \"Vender\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClose: closeModal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {\n                                        className: \"w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {\n                                                as: \"h1\",\n                                                className: \"text-xl text-gray-900 mb-5\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Modelo: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    props.automovel.modelo\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                children: \"Cliente: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-1 mb-5\",\n                                                children: usuarios.map((usuario, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: usuario.nome\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                className: \"\",\n                                                children: \"Concessionaria: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-2\",\n                                                children: props.concessionarias.map((concessionaria, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: concessionaria.concessionaria\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 107,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"mt-5 w-full bg-[#9a4cff] p-2 rounded-lg text-white border border-white hover:border-[#7814FF] hover:bg-[#aa6aff] duration-500\",\n                                                    onClick: ()=>patchAlocacao(props.id, props.quantidade),\n                                                    children: \"Confirmar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Venda, \"zL4eS5l4kyUVGXSh561jHaMVWyI=\");\n_c = Venda;\nvar _c;\n$RefreshReg$(_c, \"Venda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdmVuZGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ0Q7QUFFdEMsU0FBU0ssTUFBTUMsS0FBSyxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNTyxnQkFBZ0IsT0FBT0MsSUFBSUMsUUFBVTtRQUN6QyxNQUFNQyxNQUFNLGtDQUFxQyxPQUFIRixLQUFNO1lBQ2hERyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsWUFBYVAsUUFBUTtZQUFHO1FBQ2pELEdBRURRLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDZCxHQUNDRyxLQUFLLENBQUNDLENBQUFBLFFBQVM7WUFDZEgsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQkU7UUFDbEM7UUFDQUMsU0FBU0MsTUFBTSxDQUFDLElBQUk7SUFDdEI7SUFFQSxNQUFNQyxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTVQsV0FBVyxNQUFNUixNQUFPO1lBQzlCLE1BQU1rQixXQUFXLE1BQU1WLFNBQVNDLElBQUk7WUFDcEMsT0FBT1M7UUFDVCxFQUFFLE9BQU1KLE9BQU87WUFDYkgsUUFBUUMsR0FBRyxDQUFDLFdBQVdFO1FBQ3pCO0lBQ0Y7SUFFQSxNQUFNSyxZQUFZLFVBQVk7UUFDNUJ6QixVQUFVLElBQUk7UUFDZCxJQUFJQyxXQUFXLE1BQU1zQjtRQUNyQnJCLFlBQVlEO1FBQ1pnQixRQUFRQyxHQUFHLENBQUNwQixNQUFNTSxFQUFFO0lBQ3RCO0lBRUEsTUFBTXNCLGFBQWEsSUFBTTtRQUN2QjFCLFVBQVUsS0FBSztRQUNmRSxZQUFZLEVBQUU7SUFDaEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUN5QjtnQkFDQ0MsTUFBSztnQkFDTEMsU0FBU0o7Z0JBQ1RLLFdBQVU7MEJBQ1g7Ozs7OzswQkFJRCw4REFBQ3JDLHlEQUFVQTtnQkFBQ3NDLE1BQU07Z0JBQUNDLE1BQU1qQztnQkFBUWtDLElBQUl2QywyQ0FBUUE7MEJBQzNDLDRFQUFDRixxREFBTUE7b0JBQUN5QyxJQUFHO29CQUFNSCxXQUFVO29CQUFnQkksU0FBU1I7O3NDQUNsRCw4REFBQ2pDLCtEQUFnQjs0QkFDZndDLElBQUl2QywyQ0FBUUE7NEJBQ1owQyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFROzRCQUNSQyxPQUFNOzRCQUNOQyxXQUFVOzRCQUNWQyxTQUFRO3NDQUVSLDRFQUFDQztnQ0FBSVosV0FBVTs7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDWTs0QkFBSVosV0FBVTtzQ0FDYiw0RUFBQ1k7Z0NBQUlaLFdBQVU7MENBQ2IsNEVBQUNyQywrREFBZ0I7b0NBQ2Z3QyxJQUFJdkMsMkNBQVFBO29DQUNaMEMsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTtvQ0FDUkMsT0FBTTtvQ0FDTkMsV0FBVTtvQ0FDVkMsU0FBUTs4Q0FFUiw0RUFBQ2pELDJEQUFZO3dDQUNYc0MsV0FBVTs7MERBRVIsOERBQUN0QywyREFBWTtnREFDVHlDLElBQUc7Z0RBQ0hILFdBQVU7O2tFQUVaLDhEQUFDZTtrRUFBTzs7Ozs7O29EQUFrQi9DLE1BQU1nRCxTQUFTLENBQUNDLE1BQU07Ozs7Ozs7MERBR2xELDhEQUFDQztnREFBTUMsU0FBUTswREFBRzs7Ozs7OzBEQUNsQiw4REFBQ0M7Z0RBQU9DLE1BQUs7Z0RBQUcvQyxJQUFHO2dEQUFHMEIsV0FBVTswREFFeEI3QixTQUFTbUQsR0FBRyxDQUFDLENBQUNDLFNBQVNDLGtCQUNuQiw4REFBQ0M7d0RBQU9DLE9BQU07a0VBQVlILFFBQVFJLElBQUk7dURBQWhCSDs7Ozs7Ozs7OzswREFJbEMsOERBQUNOO2dEQUFNQyxTQUFRO2dEQUFHbkIsV0FBVTswREFBRzs7Ozs7OzBEQUMvQiw4REFBQ29CO2dEQUFPQyxNQUFLO2dEQUFHL0MsSUFBRztnREFBRzBCLFdBQVU7MERBRXhCaEMsTUFBTTRELGVBQWUsQ0FBQ04sR0FBRyxDQUFDLENBQUNPLGdCQUFnQkwsa0JBQ3ZDLDhEQUFDQzt3REFBT0MsT0FBTTtrRUFBWUcsZUFBZUEsY0FBYzt1REFBakNMOzs7Ozs7Ozs7OzBEQUtwQyw4REFBQ1o7Z0RBQUlaLFdBQVU7MERBQ2IsNEVBQUNIO29EQUNDQyxNQUFLO29EQUNMRSxXQUFVO29EQUNWRCxTQUFTLElBQU8xQixjQUFjTCxNQUFNTSxFQUFFLEVBQUVOLE1BQU1jLFVBQVU7OERBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZckIsQ0FBQztHQTVIdUJmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3ZlbmRhLmpzeD9hZTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBEaWFsb2csIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlbmRhKHByb3BzKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXN1YXJpb3MsIHNldHVzdWFyaW9zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgcGF0Y2hBbG9jYWNhbyA9IGFzeW5jIChpZCwgcXVhbnQpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYWxvY2FjYW8vJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1YW50aWRhZGU6IChxdWFudCAtIDEpIH0pLFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnT2NvcnJldSB1bSBlcnJvOicsIGVycm9yKVxyXG4gICAgfSlcclxuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hVc3VhcmlvcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jbGllbnRlc2ApO1xyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgbGV0IHVzdWFyaW9zID0gYXdhaXQgZmV0Y2hVc3VhcmlvcygpO1xyXG4gICAgc2V0dXN1YXJpb3ModXN1YXJpb3MpO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuaWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgIHNldHVzdWFyaW9zKFtdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCBiZy1bIzc4MTRGRl0gdGV4dC13aGl0ZSBwLTEgdy0yOCByb3VuZGVkLW1kJ1xyXG4gICAgICA+XHJcbiAgICAgICAgVmVuZGVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIHNob3c9e2lzT3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICA8RGlhbG9nIGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNVwiIC8+XHJcbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cuUGFuZWwgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14bCB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctd2hpdGUgcC02IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS05MDAgbWItNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Nb2RlbG86IDwvc3Ryb25nPntwcm9wcy5hdXRvbW92ZWwubW9kZWxvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2xpZW50ZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBwLTEgbWItNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9zLm1hcCgodXN1YXJpbywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9e2l9Pnt1c3VhcmlvLm5vbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIiBjbGFzc05hbWU9Jyc+Q29uY2Vzc2lvbmFyaWE6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzc05hbWU9J3ctZnVsbCBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgcC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29uY2Vzc2lvbmFyaWFzLm1hcCgoY29uY2Vzc2lvbmFyaWEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIga2V5PXtpfT57Y29uY2Vzc2lvbmFyaWEuY29uY2Vzc2lvbmFyaWF9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgdy1mdWxsIGJnLVsjOWE0Y2ZmXSBwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLVsjNzgxNEZGXSBob3ZlcjpiZy1bI2FhNmFmZl0gZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChwYXRjaEFsb2NhY2FvKHByb3BzLmlkLCBwcm9wcy5xdWFudGlkYWRlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuUGFuZWw+XHJcbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiRGlhbG9nIiwiVHJhbnNpdGlvbiIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWZW5kYSIsInByb3BzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXN1YXJpb3MiLCJzZXR1c3VhcmlvcyIsInBhdGNoQWxvY2FjYW8iLCJpZCIsInF1YW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWFudGlkYWRlIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImxvY2F0aW9uIiwicmVsb2FkIiwiZmV0Y2hVc3VhcmlvcyIsImpzb25EYXRhIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYXBwZWFyIiwic2hvdyIsImFzIiwib25DbG9zZSIsIkNoaWxkIiwiZW50ZXIiLCJlbnRlckZyb20iLCJlbnRlclRvIiwibGVhdmUiLCJsZWF2ZUZyb20iLCJsZWF2ZVRvIiwiZGl2IiwiUGFuZWwiLCJUaXRsZSIsInN0cm9uZyIsImF1dG9tb3ZlbCIsIm1vZGVsbyIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm5hbWUiLCJtYXAiLCJ1c3VhcmlvIiwiaSIsIm9wdGlvbiIsInZhbHVlIiwibm9tZSIsImNvbmNlc3Npb25hcmlhcyIsImNvbmNlc3Npb25hcmlhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/venda.jsx\n"));

/***/ })

});