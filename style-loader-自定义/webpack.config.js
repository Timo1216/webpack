/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-08-22 13:17:00
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-08-29 12:59:07
 * @FilePath     : /webpack/style-loader-自定义/webpack.config.js
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
    },
    resolveLoader: {// 解析loader的路径
        alias: {
            'less-loader': path.resolve(__dirname, 'loaders/less-loader.js'),
            'style-loader': path.resolve(__dirname, 'loaders/style-loader.js'),
        },
        // modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'loaders')],
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'less-loader',
                ]
            }
        ]
    }
}