import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// 没有vue实例，无法启动devtools
createApp(App).use(store).mount('#app')
