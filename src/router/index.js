import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes = []
const context = require.context('./', true, /^\.\/[^/]+\/.+\.js$/)
context.keys().forEach(key => {
    routes = routes.concat(context(key).default)
})

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    const routeTitle = to.name || window.localStorage.getItem('routeTitle') || 'Webpack App'
    document.title = routeTitle
    window.localStorage.setItem('routeTitle', routeTitle)
    next()
})

export default router
