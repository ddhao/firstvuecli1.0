# vuecli for vue3.0 基本框架插件封装

git clone https://github.com/ddhao/firstvuecli1.0.git

直接克隆至本地稍作操作即可食用

# 注意事项

本项目舍弃了常见的css处理器 如sass less等 采用了postcss-cssnext postcss-nested替代
布局方面也舍弃了 rem自适应布局 采用了postcss-px-to-viewport 也就是vw布局替代

克隆至本地后需要打开vue.config.js 按照提示自动导入全局css（主要是为了安装style-resources-loader）

style-resources-loader > patterns
require('path').resolve(__dirname, 'src/assets/base.css') 替换下方代码
'D:\\vue3.0\\firstvuecli1.0\\src\\assets\\base.css' 

替换后执行 vue add style-resources-loader 然后随意选择一个css预处理器
执行完成后 将preProcessor 'xxxx' 更改为 preProcessor 'postcss'