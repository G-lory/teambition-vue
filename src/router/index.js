import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/organization'
    },
    {
        path: '/organization',
        name: 'organization',
        component: () => import('@/views/organization')
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
