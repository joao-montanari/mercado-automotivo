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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Venda; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/transitions/transition.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"(app-client)/./node_modules/@headlessui/react/dist/components/dialog/dialog.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Venda(props) {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [usuarios, setusuarios] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const patchAlocacao = (id, quant)=>{\n        console.log(id);\n        console.log(quant);\n        fetch(\"http://localhost:5000/alocacao/\".concat(id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                quantidade: quant\n            })\n        }).then((response)=>response.json()).then((data)=>{\n            console.log(data);\n        }).catch((error)=>{\n            console.log(\"Ocorreu um erro:\", error);\n        });\n    };\n    const fetchUsuarios = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:5000/clientes\");\n            const jsonData = await response.json();\n            return jsonData;\n        } catch (error) {\n            console.log(\"Error: \", error);\n        }\n    };\n    const openModal = async ()=>{\n        setIsOpen(true);\n        let usuarios = await fetchUsuarios();\n        setusuarios(usuarios);\n        console.log(props.id);\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n        setusuarios([]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: openModal,\n                className: \"absolute right-0 bg-[#7814FF] text-white p-1 w-28 rounded-md\",\n                children: \"Vender\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {\n                appear: true,\n                show: isOpen,\n                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {\n                    as: \"div\",\n                    className: \"relative z-10\",\n                    onClose: closeModal,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                            enter: \"ease-out duration-300\",\n                            enterFrom: \"opacity-0\",\n                            enterTo: \"opacity-100\",\n                            leave: \"ease-in duration-200\",\n                            leaveFrom: \"opacity-100\",\n                            leaveTo: \"opacity-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fixed inset-0 bg-black bg-opacity-25\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"fixed inset-0 overflow-y-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex min-h-full items-center justify-center p-4 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {\n                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                    enter: \"ease-out duration-300\",\n                                    enterFrom: \"opacity-0 scale-95\",\n                                    enterTo: \"opacity-100 scale-100\",\n                                    leave: \"ease-in duration-200\",\n                                    leaveFrom: \"opacity-100 scale-100\",\n                                    leaveTo: \"opacity-0 scale-95\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {\n                                        className: \"w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {\n                                                as: \"h1\",\n                                                className: \"text-xl text-gray-900 mb-5\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                        children: \"Modelo: \"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    props.automovel.modelo\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                children: \"Cliente: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-1 mb-5\",\n                                                children: usuarios.map((usuario, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: usuario.nome\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"\",\n                                                className: \"\",\n                                                children: \"Concessionaria: \"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 104,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                                name: \"\",\n                                                id: \"\",\n                                                className: \"w-full border border-black rounded-md p-2\",\n                                                children: props.concessionarias.map((concessionaria, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                        value: \"\",\n                                                        children: concessionaria.concessionaria\n                                                    }, i, false, {\n                                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                        lineNumber: 108,\n                                                        columnNumber: 33\n                                                    }, this))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 105,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    className: \"mt-5 w-full bg-[#9a4cff] p-2 rounded-lg text-white border border-white hover:border-[#7814FF] hover:bg-[#aa6aff] duration-500\",\n                                                    onClick: ()=>patchAlocacao(props.id, props.quantidade),\n                                                    children: \"Confirmar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                                lineNumber: 113,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\slj4ca\\\\Desktop\\\\mercado-automotivo\\\\web\\\\src\\\\components\\\\venda.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Venda, \"zL4eS5l4kyUVGXSh561jHaMVWyI=\");\n_c = Venda;\nvar _c;\n$RefreshReg$(_c, \"Venda\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvdmVuZGEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ0Q7QUFFdEMsU0FBU0ssTUFBTUMsS0FBSyxFQUFFOztJQUNuQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNTyxnQkFBZ0IsQ0FBQ0MsSUFBSUMsUUFBVTtRQUNuQ0MsUUFBUUMsR0FBRyxDQUFDSDtRQUNaRSxRQUFRQyxHQUFHLENBQUNGO1FBQ1pHLE1BQU0sa0NBQXFDLE9BQUhKLEtBQU07WUFDMUNLLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxZQUFZVDtZQUFNO1FBQzNDLEdBRURVLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDRyxDQUFBQSxPQUFRO1lBQ1paLFFBQVFDLEdBQUcsQ0FBQ1c7UUFDZCxHQUNDQyxLQUFLLENBQUNDLENBQUFBLFFBQVM7WUFDZGQsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQmE7UUFDbEM7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQixVQUFZO1FBQ2hDLElBQUk7WUFDRixNQUFNTCxXQUFXLE1BQU1SLE1BQU87WUFDOUIsTUFBTWMsV0FBVyxNQUFNTixTQUFTQyxJQUFJO1lBQ3BDLE9BQU9LO1FBQ1QsRUFBRSxPQUFNRixPQUFPO1lBQ2JkLFFBQVFDLEdBQUcsQ0FBQyxXQUFXYTtRQUN6QjtJQUNGO0lBRUEsTUFBTUcsWUFBWSxVQUFZO1FBQzVCdkIsVUFBVSxJQUFJO1FBQ2QsSUFBSUMsV0FBVyxNQUFNb0I7UUFDckJuQixZQUFZRDtRQUNaSyxRQUFRQyxHQUFHLENBQUNULE1BQU1NLEVBQUU7SUFDdEI7SUFFQSxNQUFNb0IsYUFBYSxJQUFNO1FBQ3ZCeEIsVUFBVSxLQUFLO1FBQ2ZFLFlBQVksRUFBRTtJQUNoQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ3VCO2dCQUNDQyxNQUFLO2dCQUNMQyxTQUFTSjtnQkFDVEssV0FBVTswQkFDWDs7Ozs7OzBCQUlELDhEQUFDbkMseURBQVVBO2dCQUFDb0MsTUFBTTtnQkFBQ0MsTUFBTS9CO2dCQUFRZ0MsSUFBSXJDLDJDQUFRQTswQkFDM0MsNEVBQUNGLHFEQUFNQTtvQkFBQ3VDLElBQUc7b0JBQU1ILFdBQVU7b0JBQWdCSSxTQUFTUjs7c0NBQ2xELDhEQUFDL0IsK0RBQWdCOzRCQUNmc0MsSUFBSXJDLDJDQUFRQTs0QkFDWndDLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZDLFNBQVE7NEJBQ1JDLE9BQU07NEJBQ05DLFdBQVU7NEJBQ1ZDLFNBQVE7c0NBRVIsNEVBQUNDO2dDQUFJWixXQUFVOzs7Ozs7Ozs7OztzQ0FHakIsOERBQUNZOzRCQUFJWixXQUFVO3NDQUNiLDRFQUFDWTtnQ0FBSVosV0FBVTswQ0FDYiw0RUFBQ25DLCtEQUFnQjtvQ0FDZnNDLElBQUlyQywyQ0FBUUE7b0NBQ1p3QyxPQUFNO29DQUNOQyxXQUFVO29DQUNWQyxTQUFRO29DQUNSQyxPQUFNO29DQUNOQyxXQUFVO29DQUNWQyxTQUFROzhDQUVSLDRFQUFDL0MsMkRBQVk7d0NBQ1hvQyxXQUFVOzswREFFUiw4REFBQ3BDLDJEQUFZO2dEQUNUdUMsSUFBRztnREFDSEgsV0FBVTs7a0VBRVosOERBQUNlO2tFQUFPOzs7Ozs7b0RBQWtCN0MsTUFBTThDLFNBQVMsQ0FBQ0MsTUFBTTs7Ozs7OzswREFHbEQsOERBQUNDO2dEQUFNQyxTQUFROzBEQUFHOzs7Ozs7MERBQ2xCLDhEQUFDQztnREFBT0MsTUFBSztnREFBRzdDLElBQUc7Z0RBQUd3QixXQUFVOzBEQUV4QjNCLFNBQVNpRCxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msa0JBQ25CLDhEQUFDQzt3REFBT0MsT0FBTTtrRUFBWUgsUUFBUUksSUFBSTt1REFBaEJIOzs7Ozs7Ozs7OzBEQUlsQyw4REFBQ047Z0RBQU1DLFNBQVE7Z0RBQUduQixXQUFVOzBEQUFHOzs7Ozs7MERBQy9CLDhEQUFDb0I7Z0RBQU9DLE1BQUs7Z0RBQUc3QyxJQUFHO2dEQUFHd0IsV0FBVTswREFFeEI5QixNQUFNMEQsZUFBZSxDQUFDTixHQUFHLENBQUMsQ0FBQ08sZ0JBQWdCTCxrQkFDdkMsOERBQUNDO3dEQUFPQyxPQUFNO2tFQUFZRyxlQUFlQSxjQUFjO3VEQUFqQ0w7Ozs7Ozs7Ozs7MERBS3BDLDhEQUFDWjtnREFBSVosV0FBVTswREFDYiw0RUFBQ0g7b0RBQ0NDLE1BQUs7b0RBQ0xFLFdBQVU7b0RBQ1ZELFNBQVMsSUFBT3hCLGNBQWNMLE1BQU1NLEVBQUUsRUFBRU4sTUFBTWdCLFVBQVU7OERBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZckIsQ0FBQztHQTdIdUJqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy92ZW5kYS5qc3g/YWU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZW5kYShwcm9wcykge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzdWFyaW9zLCBzZXR1c3Vhcmlvc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IHBhdGNoQWxvY2FjYW8gPSAoaWQsIHF1YW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuICAgIGNvbnNvbGUubG9nKHF1YW50KVxyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hbG9jYWNhby8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVhbnRpZGFkZTogcXVhbnQgfSksXHJcbiAgICAgIH1cclxuICAgIClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdPY29ycmV1IHVtIGVycm86JywgZXJyb3IpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmV0Y2hVc3VhcmlvcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jbGllbnRlc2ApO1xyXG4gICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcsIGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3Blbk1vZGFsID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKHRydWUpO1xyXG4gICAgbGV0IHVzdWFyaW9zID0gYXdhaXQgZmV0Y2hVc3VhcmlvcygpO1xyXG4gICAgc2V0dXN1YXJpb3ModXN1YXJpb3MpO1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuaWQpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICAgIHNldHVzdWFyaW9zKFtdKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgb25DbGljaz17b3Blbk1vZGFsfVxyXG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtMCBiZy1bIzc4MTRGRl0gdGV4dC13aGl0ZSBwLTEgdy0yOCByb3VuZGVkLW1kJ1xyXG4gICAgICA+XHJcbiAgICAgICAgVmVuZGVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIHNob3c9e2lzT3Blbn0gYXM9e0ZyYWdtZW50fT5cclxuICAgICAgICA8RGlhbG9nIGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMFwiIG9uQ2xvc2U9e2Nsb3NlTW9kYWx9PlxyXG4gICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICBlbnRlcj1cImVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS0yNVwiIC8+XHJcbiAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIG92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgIGFzPXtGcmFnbWVudH1cclxuICAgICAgICAgICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCBzY2FsZS05NVwiXHJcbiAgICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0yMDBcIlxyXG4gICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgc2NhbGUtMTAwXCJcclxuICAgICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgc2NhbGUtOTVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEaWFsb2cuUGFuZWwgXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy14bCB0cmFuc2Zvcm0gb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcgYmctd2hpdGUgcC02IHRleHQtbGVmdCBhbGlnbi1taWRkbGUgc2hhZG93LXhsIHRyYW5zaXRpb24tYWxsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPVwiaDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS05MDAgbWItNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Nb2RlbG86IDwvc3Ryb25nPntwcm9wcy5hdXRvbW92ZWwubW9kZWxvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGlhbG9nLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+Q2xpZW50ZTogPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzTmFtZT0ndy1mdWxsIGJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBwLTEgbWItNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzdWFyaW9zLm1hcCgodXN1YXJpbywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBrZXk9e2l9Pnt1c3VhcmlvLm5vbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIiBjbGFzc05hbWU9Jyc+Q29uY2Vzc2lvbmFyaWE6IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiXCIgaWQ9XCJcIiBjbGFzc05hbWU9J3ctZnVsbCBib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWQgcC0yJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29uY2Vzc2lvbmFyaWFzLm1hcCgoY29uY2Vzc2lvbmFyaWEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIga2V5PXtpfT57Y29uY2Vzc2lvbmFyaWEuY29uY2Vzc2lvbmFyaWF9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgdy1mdWxsIGJnLVsjOWE0Y2ZmXSBwLTIgcm91bmRlZC1sZyB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItd2hpdGUgaG92ZXI6Ym9yZGVyLVsjNzgxNEZGXSBob3ZlcjpiZy1bI2FhNmFmZl0gZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IChwYXRjaEFsb2NhY2FvKHByb3BzLmlkLCBwcm9wcy5xdWFudGlkYWRlKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29uZmlybWFyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2cuUGFuZWw+XHJcbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nPlxyXG4gICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICA8Lz5cclxuICApXHJcbn0iXSwibmFtZXMiOlsiRGlhbG9nIiwiVHJhbnNpdGlvbiIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJWZW5kYSIsInByb3BzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXN1YXJpb3MiLCJzZXR1c3VhcmlvcyIsInBhdGNoQWxvY2FjYW8iLCJpZCIsInF1YW50IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVhbnRpZGFkZSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImZldGNoVXN1YXJpb3MiLCJqc29uRGF0YSIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImNsYXNzTmFtZSIsImFwcGVhciIsInNob3ciLCJhcyIsIm9uQ2xvc2UiLCJDaGlsZCIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsImRpdiIsIlBhbmVsIiwiVGl0bGUiLCJzdHJvbmciLCJhdXRvbW92ZWwiLCJtb2RlbG8iLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwibWFwIiwidXN1YXJpbyIsImkiLCJvcHRpb24iLCJ2YWx1ZSIsIm5vbWUiLCJjb25jZXNzaW9uYXJpYXMiLCJjb25jZXNzaW9uYXJpYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/venda.jsx\n"));

/***/ })

});