

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const prodConfig = require('./webpack.prod.js')
const devConfig = require('./webpack.dev.js')
const analyzerConfig = require('./webpack.analyzer.js')

const { getIPAddress } = require('../util.js')
const { mode, projectName, port } = process.env

// 开发
if (mode === 'dev') {
    const compiler = webpack(devConfig)
    const server = new WebpackDevServer({
        historyApiFallback: true,
        port: port || 8081
    }, compiler)
    server.startCallback(() => {
        console.log(`<i> server start http://localhost:${port}/`)
        console.log(`<i> server start http://${getIPAddress()}:${port}/`)
    })
}

// 打包
if (mode === 'build') {
    const compiler = webpack(prodConfig)
    compiler.run((err, stats) => {
        console.log(err)
        console.log(stats)
        compiler.close((closeErr) => {
            console.log(closeErr)
        })
    })
}

// 依赖分析
if (mode === 'analyze') {

}


