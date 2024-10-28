
const { projectName } = process.env


/** 生产环境 */
const prodConfig = {
    build: {
        rollupOptions: {
            input: `./src/projects/demo2/index.html`,
            external: ['/main.tsx'],
            output: {
                entryFileNames: 'js/[name]-[hash].js',
                chunkFileNames: "js/[name]-[hash].js",
                assetFileNames: "[ext]/[name]-[hash].[ext]",
            },
        },
        outDir: `public/dist/`,
        emptyOutDir: true,
        sourcemap: true
    },
    publicDir: 'public/dst'
}

export default prodConfig