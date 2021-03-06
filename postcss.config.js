/* eslint-disable */
// 避免ts-eslint 检测 vue.config.ts不起作用只能用js文件 但是eslint检测却是ts的 只能关闭校验
const postPxToViewport = require('postcss-px-to-viewport') // vw自适应布局
const postcssNested = require('postcss-nested') // css嵌套
const postcssCssnext = require('postcss-cssnext') // css4
/* eslint-enable */
module.exports = {
  plugins: [
    postcssCssnext(),
    postcssNested(),
    postPxToViewport({
      viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: '', // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: [], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false // 允许在媒体查询中转换`px`
    })
  ]
}
