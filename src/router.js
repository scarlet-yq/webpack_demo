import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/home.vue'
import Mall from './views/mall.vue'
import About from './views/about.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },{
            path: '/mall',
            component: Mall
        },{
            path: '/about',
            component: About
        }
    ]
})