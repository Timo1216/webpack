"use strict";

require("core-js/modules/es.promise.js");

/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-10 18:21:33
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 18:54:41
 * @FilePath     : /learn/webpack/lesson/lib/es6.js
 */
const arr = [
  // new Promise((resolve, reject) => {}), Promise.resolve()
  123,
];
arr.forEach(item => {
  console.log('log 111 item => ', item);
});