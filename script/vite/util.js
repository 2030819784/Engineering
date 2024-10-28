import fs from 'fs'
import path from 'path'

// 获取项目入口路径
function getEntryPath() {
    const map = {}
    const PAGE_PATH = path.resolve(__dirname, './src/projects')
    const projectEntrys = fs.readdirSync(PAGE_PATH)
    projectEntrys.forEach(path => {
        map[path] = path.resolve(__dirname, `src/projects/${path}/index.html`)
    })
    return map
}

export default getEntryPath