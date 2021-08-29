"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = number;

/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-10 18:08:37
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 18:16:48
 * @FilePath     : /learn/webpack/lesson/src/number.js
 */
function number() {
  var div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.innerHTML = 1000;
  document.body.append(div);
}