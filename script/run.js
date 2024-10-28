const inquirer = require('inquirer')
const spawn = require('cross-spawn')



/** 使用webpack 还是vite */
inquirer.prompt([{
    type: 'list',
    name: 'buildTool',
    message: '构建工具',
    choices: [
        { name: 'webpack', value: 'webpack' },
        { name: 'vite', value: 'vite' },
    ]
},]).then((res) => {
    const { buildTool } = res

    spawn('node', [`./script/${buildTool}/run.js`], {
        stdio: 'inherit',
        cwd: process.cwd(),
    })
})