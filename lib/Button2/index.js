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
/* 0 */,
/* 1 */
/***/ (function() {

throw new Error("Module build failed (from ../node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/admin/boss/boss-wm-ui/src/components/Button2/index.tsx: Support for the experimental syntax 'flow' isn't currently enabled (7:8):\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[36mconst\u001b[39m [createComponent\u001b[33m,\u001b[39m bem] \u001b[33m=\u001b[39m createNamespace(\u001b[32m'button2'\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[36mexport\u001b[39m type \u001b[33mButtonSize\u001b[39m \u001b[33m=\u001b[39m \u001b[32m'large'\u001b[39m \u001b[33m|\u001b[39m \u001b[32m'normal'\u001b[39m \u001b[33m|\u001b[39m \u001b[32m'small'\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m createComponent({\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m     name\u001b[33m:\u001b[39m \u001b[32m'Button'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\nAdd @babel/preset-flow (https://git.io/JfeDn) to the 'presets' section of your Babel config to enable transformation.\nIf you want to leave it as-is, add @babel/plugin-syntax-flow (https://git.io/vb4yb) to the 'plugins' section to enable parsing.\n    at Parser._raise (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.expectOnePlugin (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:9701:18)\n    at Parser.isExportDefaultSpecifier (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13429:16)\n    at Parser.maybeParseExportDefaultSpecifier (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13330:14)\n    at Parser.parseExport (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:13283:29)\n    at Parser.parseStatementContent (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12308:27)\n    at Parser.parseStatement (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12202:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12782:25)\n    at Parser.parseBlockBody (/Users/admin/boss/boss-wm-ui/node_modules/@babel/parser/lib/index.js:12773:10)");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			1: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbossWMUi"] = self["webpackChunkbossWMUi"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(1);
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});