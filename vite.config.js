import devConfig from './script/vite/vite.dev.mjs'
import prodConfig from './script/vite/vite.prod.mjs'
import { defineConfig } from 'vite'
export default defineConfig(({ command }) => {
    if (command === 'serve')
        return devConfig
    if (command === 'build')
        return prodConfig
})
