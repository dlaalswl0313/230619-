//router.js
import { createWebHistory, createRouter } from 'vue-router';
const routes = [
    {
        path:"/",
        name:"MyHome",
        component : () => import('@/components/MyHome.vue')
    },
    {
        path:"/login",
        name:"SdmLogin",
        component : () => import('@/components/SdmLogin.vue')
    },
    {
        path:"/sign",
        name:"signup",
        component: () => import('@/components/SignUp.vue')
    },
    {
        path:"/qs",
        name:"qs",
        component: () => import('@/components/QuesAns.vue')
    }
];
const router = createRouter({
    history : createWebHistory(), routes,
});
export default router;