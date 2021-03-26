(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bossWMUi", [], factory);
	else if(typeof exports === 'object')
		exports["bossWMUi"] = factory();
	else
		root["bossWMUi"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function() {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/boss/boss-wm-ui/src/template/Button/index.tsx: Support for the experimental syntax 'flow' isn't currently enabled (7:8):\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mconst\u001b[39m [createComponent\u001b[33m,\u001b[39m bem] \u001b[33m=\u001b[39m createNamespace(\u001b[32m'button'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mexport\u001b[39m type \u001b[33mButtonSize\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'large'\u001b[39m \u001b[33m|\u001b[39m \u001b[32m'normal'\u001b[39m \u001b[33m|\u001b[39m \u001b[32m'small'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m createComponent({\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     name\u001b[33m:\u001b[39m \u001b[32m'Button'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\nAdd @babel/preset-flow (https://git.io/JfeDn) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-flow (https://git.io/vb4yb) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.expectOnePlugin (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:9701:18)\n    at Parser.isExportDefaultSpecifier (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13429:16)\n    at Parser.maybeParseExportDefaultSpecifier (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13330:14)\n    at Parser.parseExport (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13283:29)\n    at Parser.parseStatementContent (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12308:27)\n    at Parser.parseStatement (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12782:25)\n    at Parser.parseBlockBody (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12773:10)");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[0]();
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});