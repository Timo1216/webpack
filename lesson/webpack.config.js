/**
 * @Author       : xiehan(timo)
 * @Date         : 2021-03-07 23:08:38
 * @LastEditors  : xiehan2747
 * @LastEditTime : 2021-03-10 18:54:31
 * @FilePath     : /learn/webpack/lesson/webpack.config.js
 */
const path = require('path'); // 路径
const webpack = require('webpack'); // to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    devtool: 'source-map', // sourceMap 是一个映射关系， 知道dist代码出错的代码行，对于源代码是在哪个地方, source-map会生成一个.map文件;  inline: 映射关系存在 打包的文件最后， cheap: 代表只显示出错的行，不精确到列, 最佳实践： dev: cheap-module-eval-source-map, prod: 'cheap-module-source-map'
    entry: { // 入口起点，作为依赖图的入口 `string | object`
        main: './src/index.js', // main: Chunk名
    },
    output: { // 出口 告诉 webpack 在哪里输出它所创建的 bundles。以及如何命名
        filename: '[name].js', // 文件名
        path: path.resolve(__dirname, 'dist'), // 文件目录， __dirname: webpack.config.js 所在的目录。 与dist路径做合并
        // publicPath: 'http://cdn.com.cn', // cdn 地址
    },
    mode: 'development', // 模式， 能启用webpack内置的优化  `development | production`(默认) 注：production 会压缩代码， 而development会保持源码

    module: { // 模块
        rules: [
            {
                test: /\.js$/, // 用于标识出应该被对应的 loader 进行转换的某个或某些文件。 
                exclude: /node_modules/,
                use: { // 表示进行转换时，应该使用哪个 loader。
                    loader: 'babel-loader', // 使用file-loader处理 图片。 还有一个相似的 url-loader, 能将图片直接打包成 base64, 直接打包到js文件中，从而省略了一次http请求，适合小图片，不适合大图片, 注意 limit参数配置
                    options: {
                        // presets: [
                        //     ['@babel/preset-env', {
                        //         useBuiltIns: 'usage'
                        //     }]
                        // ],
                        plugins: [
                            ["@babel/plugin-transform-runtime", {
                                corejs: 2,
                                helpers: true, 
                                regenerator: true,
                                useESModule: false
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/, // 用于标识出应该被对应的 loader 进行转换的某个或某些文件。 
                use: { // 表示进行转换时，应该使用哪个 loader。
                    loader: 'file-loader', // 使用file-loader处理 图片。 还有一个相似的 url-loader, 能将图片直接打包成 base64, 直接打包到js文件中，从而省略了一次http请求，适合小图片，不适合大图片, 注意 limit参数配置
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: './images'
                    }
                }
            },
            {
                test: /\.(css|less)$/, // 用于标识出应该被对应的 loader 进行转换的某个或某些文件。 
                use: [
                    'style-loader',  // 生成style标签 插入 header中
                    { // 将 css 编译处理
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2, // 保证在less中使用 **@import语**法依然走前面的 `postcss-loader` 和 `less-loader`
                            modules: true, // 模块化， 每个css独立， 互补干扰， js文件中使用 style.[className]拿到样式
                        }
                    }, 
                    'less-loader', // 将 less 编译成 css
                    'postcss-loader', 
                ], // 从右到左执行 less-loader => css-loader
            }
        ]
    },

    plugins: [ // plugin可以在webpack运行到某个时刻的时候，帮你做某些事情
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), // htmlWebpackPlugin会在打包结束后， 自动生成一个html文件， 并把生成的js自动引入到这个html文件中
        new CleanWebpackPlugin(), // CleanWebpackPlugin 依赖于output, 打包清除dist目录下的文件
        new webpack.HotModuleReplacementPlugin(), // 启用热更新
    ],
    devServer: { // 开启一个服务器
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        open: true, // 打开一个浏览器
        port: 8080, // 默认端口
        hot: true, // 开启 HMR
        hotOnly: true, // 不自动刷新
    },
}