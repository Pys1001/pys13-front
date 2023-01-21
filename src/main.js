import { createApp } from 'vue'
import ant from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import axios from 'axios'
axios.defaults.baseURL = "/api"

createApp(App)
    .use(router)
    .use(ant)
    .use(ElementPlus)
    .mount('#app')



