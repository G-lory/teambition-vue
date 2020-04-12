const path = require('path');
const webpack = require('webpack');

// 把 webpack 配置提出来 方便编辑器识别别名 :)
module.exports = {
    plugins: [
        // 删除 moment 国际化相关文件 减少打包后体积
        // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
};