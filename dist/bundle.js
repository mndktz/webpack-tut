/******/!function(modules){/******/
/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
i:moduleId,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
__webpack_require__.m=modules,/******/
/******/
// expose the module cache
/******/
__webpack_require__.c=installedModules,/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
__webpack_require__.i=function(value){return value},/******/
/******/
// define getter function for harmony exports
/******/
__webpack_require__.d=function(exports,name,getter){/******/
__webpack_require__.o(exports,name)||/******/
Object.defineProperty(exports,name,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:getter})},/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
__webpack_require__.n=function(module){/******/
var getter=module&&module.__esModule?/******/
function(){return module.default}:/******/
function(){return module};/******/
/******/
return __webpack_require__.d(getter,"a",getter),getter},/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},/******/
/******/
// __webpack_public_path__
/******/
__webpack_require__.p="/dist/",__webpack_require__(__webpack_require__.s=4)}([/* 0 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});/* harmony import */
var __WEBPACK_IMPORTED_MODULE_0__mathStuff__=__webpack_require__(1),style=(__webpack_require__(2),__webpack_require__(3));app.innerHTML=function(){return'\n<div class="'+style.box+'"> \n    DEVELOPMENT: '+(!1).toString()+"<br />\n    PRODUCTION: "+(!0).toString()+"<br />\n    "+__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__mathStuff__.a)(3,3)+" \n</div>"}()},/* 1 */
/***/
function(module,__webpack_exports__,__webpack_require__){"use strict";function multiply(a,b){return a*b}/* unused harmony export add */
/* unused harmony export subtract */
/* harmony export (immutable) */
__webpack_exports__.a=multiply},/* 2 */
/***/
function(module,exports){module.exports={hi:"Hi There",event:"Mendy Katz the king"}},/* 3 */
/***/
function(module,exports){
// removed by extract-text-webpack-plugin
module.exports={box:"_3LP5jqF8Se"}},/* 4 */
/***/
function(module,exports,__webpack_require__){module.exports=__webpack_require__(0)}]);