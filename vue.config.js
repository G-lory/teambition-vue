const configureWebpack = require("./webpack.config");

module.exports = {
    // devServer: {
    //     proxy: {
    //         '/rest': {
    //             // target: 'http://...:8888,
    //             changeOrigin: true,
    //             secure: false,
    //         }
    //     },
    //     port: 8080,
    //     disableHostCheck: true,
    // },
    configureWebpack: configureWebpack,
    css: {
        // 引入 scss 全局变量
        loaderOptions: {
            scss: {
                prependData: `@import "~@/style/variables.scss";`
            }
        }
    },
    // pluginOptions: {
    //     mock: { entry:'./mock.js', debug: false }
    // },
    lintOnSave: false
};