import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path:"/login",
      name:"login",
      component:()=>import('@/views/login.vue')
    },
    {
      path:"/signup",
      name:"signup",
      component:()=>import('@/views/SignUp.vue')
    },
    {
      path:"/Aread",
      name:"aread",
      component:()=>import('@/views/Aread.vue')
    },
    {
      path:"/Anotice",
      name:"anotice",
      component:()=>import('@/views/Anotice.vue')
    },
    {
      path:"/Anotice",
      name:"anotice",
      component:()=>import('@/views/Anotice.vue')
    },
    {
      path:"/InfoEdit",
      name:"InfoEdit",
      component:()=>import('@/views/InfoEdit.vue')
    },
    {
      path:"/If_Eck",
      name:"If_Eck",
      component:()=>import('@/views/If_Eck.vue')
    },
    {
      path:"/FindP",
      name:"findp",
      component:()=>import('@/views/FindP.vue')
    },
    {
      path:"/FindE",
      name:"finde",
      component:()=>import('@/views/FindE.vue')
    },
    {
      path:"/notice",
      name:"notice",
      component:()=>import('@/views/notice.vue')
    },
    {
      path:"/NoticeList",
      name:"noticelist",
      component:()=>import('@/views/NoticeList.vue')
    },
    {
      path:"/AskMe",
      name:"askme",
      component:()=>import('@/views/AskMe.vue')
    },
    {
      path:"/LoginTest",
      name:"logintest",
      component:()=>import('@/views/LoginTest.vue')
    },
  ]
})

export default router
