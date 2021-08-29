"use strict";

/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-07 22:25:32
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-07 23:30:22
 * @FilePath     : /webpack/lesson/src/Header.js
 */
function Header() {
  var dom = document.getElementById('root');
  var header = document.createElement('div');
  header.innerText = 'header';
  dom.append(header);
}

module.exports = Header; // export default Header;