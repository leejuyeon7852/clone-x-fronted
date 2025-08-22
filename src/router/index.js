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
            component: LoginPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if(token){
                    next('/main')
                }else{
                    next()
                }
            }
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
            component: SignupPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if(token){
                    next('/main')
                }else{
                    next()
                }
            }
        },
        {
            path: '/main',
            component: MainPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if(token){
                    next()
                }else{
                    next('')
                }
            }
        },
        {
            path: '/life',
            component: LifeCycle
        }
    ]
})

export default router