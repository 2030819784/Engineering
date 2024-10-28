

module.exports = {
    plugins: [
        require('postcss-px-to-viewport')({
            unitToConvert: 'px',
            viewportWidth: 750,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [/node_modules/],
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 320
        }),
        require('postcss-preset-env')
    ]
}