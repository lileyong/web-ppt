import Vue from 'vue'
import router from './router/index.js'
import App from './App.vue'
import './plugins/element-ui'
import './plugins/widgets'
import './plugins/vue-hljs'

const root = document.createElement('div')
document.body.append(root)

new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)
