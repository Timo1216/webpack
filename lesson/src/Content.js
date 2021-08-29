/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-07 22:25:32
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-07 23:30:15
 * @FilePath     : /webpack/lesson/src/Content.js
 */

export default function Content() {
    var dom = document.getElementById('root');
    var content = document.createElement('div');
    content.innerText = 'Content';
    dom.append(content);
}