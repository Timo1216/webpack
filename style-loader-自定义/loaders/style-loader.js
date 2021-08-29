/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-29 12:34:46
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-29 12:59:59
 * @FilePath     : /webpack/style-loader-自定义/loaders/style-loader.js
 */

// style-loader 生成style标签
function loader(inputSource) { // css源代码
    const script = `
        let style = document.createElement('style');
        style.innerHTML = ${JSON.stringify(inputSource)};
        document.head.appendChild(style);
    `;
    return script;
}
module.exports = loader;