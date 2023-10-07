import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus' //全局引入
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(pinia)
app.use(pinia.use(persist))
app.mount('#app')
pinia.use(persist)