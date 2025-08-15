import DemoPage from "@/views/DemoPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import SignupPage from "@/views/SignupPage.vue"
import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/demo',
            component: DemoPage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/signup',
            component: SignupPage
        },
    ]
})

export default router