import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset.css' // 将默认的html标签样式清除

createApp(App).use(store).use(router).mount('#app')
