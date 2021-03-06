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