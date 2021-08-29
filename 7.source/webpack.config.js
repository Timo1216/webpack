/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-22 13:17:00
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-22 13:19:18
 * @FilePath     : /webpack/7.source/webpack.config.js
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'none',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }
}