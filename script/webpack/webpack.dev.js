
const base = require('../../webpack.config.js')
const { merge } = require('webpack-merge')
const { projectName, port } = process.env

module.exports = merge(base, {
    entry: `./src/projects/${projectName}/main.tsx`,
    mode: 'development',
    devServer: {
        static: `./dist/${projectName}`,
        port,
        hot: true
    }
})