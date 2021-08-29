"use strict";

var _kite = _interopRequireDefault(require("../assets/kite.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-10 09:56:45
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 09:56:53
 * @FilePath     : /learn/webpack/lesson/src/createImg.js
 */
const img = new Image();
img.classList.add('kite');
img.src = _kite.default;
const root = document.getElementById('root');
root.appendChild(img);