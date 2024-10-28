
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url';
const { port, projectName } = process.env

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/*开发环境 */
const devConfig = {
    plugins: [react()],
    configFile: false,
    server: {
        port,
        strictPort: true
    },
    mode: 'development',
    root: path.resolve(__dirname, `../../src/projects/${projectName || 'demo2'}`),
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../../src'),
            '@project': path.resolve(__dirname, '../../src/projects'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
}

export default devConfig