import { createServer, build } from 'vite'
import devConfig from './vite.dev.mjs';
import prodConfig from './vite.prod.mjs';
const { port, mode } = process.env

async function startServer() {
    const vite = await createServer(devConfig)
    vite.listen(port)
    console.log('Server running at http://localhost:' + port);
}

async function startBuild() {
    const vite = await build(prodConfig)
    console.log(vite)
}


if (mode === 'dev')
    startServer()
if (mode === 'build') {
    startBuild()
}
