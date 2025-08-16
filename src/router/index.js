import DemoPage from "@/views/DemoPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import SignupPage from "@/views/SignupPage.vue"
import MainPage from "@/views/MainPage.vue"
import {createRouter, createWebHistory} from "vue-router"
import LifeCycle from "@/views/LifeCycle.vue"

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
        {
            path: '/main',
            component: MainPage
        },
        {
            path: '/life',
            component: LifeCycle
        }
    ]
})

export default router