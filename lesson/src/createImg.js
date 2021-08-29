/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-10 09:56:45
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 09:56:53
 * @FilePath     : /learn/webpack/lesson/src/createImg.js
 */

import kite from '../assets/kite.jpeg';

const img = new Image();
img.classList.add('kite');
img.src = kite;
const root = document.getElementById('root');
root.appendChild(img);
