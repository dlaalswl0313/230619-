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
    },
    {
        path:"/studio",
        name:"studio",
        component: () => import('@/components/StuPhoto.vue')
    },
    {
        path:"/dress",
        name:"dress",
        component: () => import('@/components/DressUp.vue')
    },
    {
        path:"/makeup",
        name:"makeup",
        component: () => import('@/components/MakeUp.vue')
    },
    {
        path:"/wedding",
        name:"wedding",
        component: () => import('@/components/WeddingHall.vue')
    }
];
const router = createRouter({
    history : createWebHistory(), routes,
});
export default router;