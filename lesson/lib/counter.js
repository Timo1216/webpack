"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-10 18:08:37
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 18:11:37
 * @FilePath     : /learn/webpack/lesson/src/counter.js
 */
function counter() {
  var div = document.createElement('div');
  div.setAttribute('id', 'number');
  div.innerHTML = 1;

  div.onclick = function () {
    div.innerHTML = parseInt(div.innerHTML) + 1;
  };

  document.body.append(div);
}