const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //自动生成html打包文件
const webpack = require('webpack') //webpack内置插件
const MiniCSSExtractPlugin = require('mini-css-extract-plugin') //将css单独放置一个文件
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') //使用cssnano优化和压缩CSS
const { projectName } = process.env
module.exports = {
    output: {
        filename: '[name]-[chunkhash:5].js',
        path: path.resolve(__dirname, `dist/${projectName}`),
        clean: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            filename: 'index.html',
            template: './public/index.html',
        }),
        new webpack.ProgressPlugin(),
        new MiniCSSExtractPlugin()
    ],
    module: {
        rules: [
            //
            {
                test: /\.css|scss$/i,
                use: [
                    // MiniCSSExtractPlugin.loader,
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                localIdentName: "[local]_[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: 'custom-loader',
                        options: {
                            color: 'gray',
                            disable: true
                        }
                    },
                    'log-loader',
                    'sass-loader',
                    'postcss-loader'
                ],

            },
            //css 放置在header的style中
            // use: [MiniCSSExtractPlugin.loader, 'css-loader','sass-loader'], // 单独一个文件存放css
            //babel-loader Es6 -> Es5 
            {
                test: /\.(js|jsx|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {                        // jsx->Es5
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            //regeneratorRuntime 兼容async-await
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
                }
            },
            //ts-loader 编译ts
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader',
                }
            }
        ],
    },
    resolveLoader: {
        alias: {
            'log-loader': path.resolve(__dirname, './script/loader/log.js'),
            'custom-loader': path.resolve(__dirname, './script/loader/demo-loader/demo.js')
        }
    },
    //优化 
    optimization: {
        //覆盖默认压缩工具
        minimizer: [new CssMinimizerWebpackPlugin()],
        usedExports: true,
    },
    //dev HMR
    devServer: {
        hot: true,
        static: './dist/demo'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }
}