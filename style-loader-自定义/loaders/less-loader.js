/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-29 12:34:46
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-29 12:56:12
 * @FilePath     : /webpack/style-loader-自定义/loaders/less-loader.js
 */
const less = require('less');

// less-loader
function loader(inputSource) { // less源代码
    const callback = this.async(); // 异步loader回调
    less.render(
        inputSource, // less源代码
        { filename: this.resource }, // less配置
        (err, output) => { // less编译css完成的回调
            console.log('log 111 output.css => ', output.css);
            callback(err, output.css); // 异步完成，转交给下一个loader
        }
    )
}
module.exports = loader;