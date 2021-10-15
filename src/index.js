/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-15 21:30:12
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-15 22:23:36
 */
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (content,options) => {
    return {
        name: 'docusaurus-plugin-usevue',
        configureWebpack(config, isServer, utils) {
            return {
                module: {
                    rules: [{
                        test: /\.vue$/,
                        use: ['vue-loader']
                    }]
                },
                plugins: [
                    new VueLoaderPlugin()
                ]
            }
        }
    }
}