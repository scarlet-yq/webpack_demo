const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        vendor: ['vue', 'vue-router', 'vuex', 'less', 'less-loader']
    },
    output: {
        filename: 'dll_[name].js',
        path: path.resolve(__dirname, './static/js'),
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(__dirname, '.', '[name]_manifest.json')
        })
    ]
}