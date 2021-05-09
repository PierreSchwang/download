import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/fawe',
        name: 'FastAsyncWorldEdit',
        component: () => import(/* webpackChunkName: "about" */ '../views/products/FastAsyncWorldEdit.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router