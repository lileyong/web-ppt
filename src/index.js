import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

const root = document.createElement('div')
document.body.append(root)

new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)
