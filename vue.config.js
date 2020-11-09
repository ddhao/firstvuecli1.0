/* eslint-disable */
// 避免ts-eslint 检测 vue.config.ts不起作用只能用js文件 但是eslint检测却是ts的 只能关闭校验
const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
/* eslint-enable */
module.exports = {
  // 自动导入全局css(全局变量、颜色、函数)
  // 导入项目后，需要执行以下操作
  // require('path').resolve(__dirname, 'src/assets/base.css')
  // $ ~ vue add style-resources-loader
  // preProcessor: 'postcss'
  pluginOptions: {
    'style-resources-loader': {
      patterns: [
        'D:\\vue3.0\\firstvuecli1.0\\src\\assets\\base.css'
      ],
      preProcessor: 'postcss'
    }
  },
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
      wx: 'jWeixin'
    }
  }
}
