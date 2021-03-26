(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ColorControl",(function(){return ColorControl}));__webpack_require__(7),__webpack_require__(16);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_color__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(960),_storybook_theming__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),_form__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(81);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Swatch=_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled.div((function(_ref){var theme=_ref.theme;return{position:"absolute",top:"50%",transform:"translateY(-50%)",left:6,width:16,height:16,boxShadow:"".concat(theme.appBorderColor," 0 0 0 1px inset"),borderRadius:"1rem"}})),ColorButton=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled)(_form__WEBPACK_IMPORTED_MODULE_5__.a.Button)((function(_ref2){return{zIndex:_ref2.active?3:"unset",width:"100%"}})),Popover=_storybook_theming__WEBPACK_IMPORTED_MODULE_4__.styled.div({position:"absolute",zIndex:2}),ColorControl=function ColorControl(_ref3){var name=_ref3.name,value=_ref3.value,_onChange=_ref3.onChange,onFocus=_ref3.onFocus,onBlur=_ref3.onBlur,presetColors=_ref3.presetColors,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),2),showPicker=_useState2[0],setShowPicker=_useState2[1];return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ColorButton,{active:showPicker,type:"button",name:name,onClick:function onClick(){return setShowPicker(!showPicker)},onKeyDown:function onKeyDown(e){"Enter"===e.key&&setShowPicker(!showPicker)},size:"flex"},value?value.toUpperCase():"Choose color",react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Swatch,{style:{background:value}}),showPicker?react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Popover,{onClick:function onClick(e){"INPUT"===e.target.tagName&&e.stopPropagation()}},react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_3__.a,{color:value,onChange:function onChange(color){return _onChange(function format(color){return"rgba(".concat(color.rgb.r,",").concat(color.rgb.g,",").concat(color.rgb.b,",").concat(color.rgb.a,")")}(color))},onFocus:onFocus,onBlur:onBlur,presetColors:presetColors})):null)};ColorControl.displayName="ColorControl",__webpack_exports__.default=ColorControl}}]);