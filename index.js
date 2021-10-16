/*
 * @Descripttion: 
 * @Author: 林舒恒
 * @Date: 2021-10-15 21:30:12
 * @LastEditors: 林舒恒
 * @LastEditTime: 2021-10-16 12:57:10
 */
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (content,options) => {
    return {
        name: 'docusaurus-plugin-usevue',
        async contentLoaded({content, actions}) {
            const {setGlobalData} = actions
            let reactive = {}
            let count = 0
            Object.defineProperty(reactive,'uuid',{
                get() {
                    count ++
                    return count
                },
                set(newv) {
                    return newv
                }
            })
            setGlobalData(reactive);
        },
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