const inquirer = require('inquirer')
const spawn = require('cross-spawn')
const { projectList, runQuestion, createQuestion } = require('../config')

/** 运行项目 */
inquirer.prompt([...runQuestion]).then((res) => {
    const { projectName, mode, runEnv, port } = res
    process.env.NODE_ENV = runEnv
    process.env.projectName = projectName
    process.env.mode = mode
    process.env.port = port
    const find = projectList.find((it) => it.value === projectName)

    // 项目模板的信息，注入html模板
    process.env.projectInfo = JSON.stringify({
        title: find?.title,
        jsScriptLink: find?.jsScriptLink
    })

    spawn('node', ['./script/vite/index.mjs'], {
        stdio: 'inherit',
        cwd: process.cwd(),
    })
})