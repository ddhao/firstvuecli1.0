// const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/home/' : '/', // 配置路径
  devServer: {
    port: '2612', // 设定端口名
    proxy: { // 跨域
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // 不推荐使用 使用后vscode没有自动补全路径
  /* chainWebpack:(config)=>{
    config.resolve.alias
    .set('components', path.resolve(__dirname, './src/components'))
    .set('assets', path.resolve(__dirname, './src/assets'))
    .set('common', path.resolve(__dirname, './src/common'))
    .set('views', path.resolve(__dirname, './src/views'))
  }, */
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionWebpackPlugin({ // 打包压缩
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(js|css|html|svg)$/,
        threshold: 10240, // 限制10kb以上才压缩
        minRatio: 0.8
      })
    ],
    externals: {
      'wx': 'jWeixin'
    }
  }
}
