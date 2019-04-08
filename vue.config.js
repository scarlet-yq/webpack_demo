module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry:  './src/main.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: './dist/',
      filename: 'main.js'
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require('./vendor_manifest.json')
        })
    ]
  }
}