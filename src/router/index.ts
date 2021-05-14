import {createRouter, createWebHistory, RouteLocationNormalized, RouteLocationNormalizedLoaded} from 'vue-router'

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
    routes,
    scrollBehavior: (to: RouteLocationNormalized, from: RouteLocationNormalizedLoaded) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
})

export default router