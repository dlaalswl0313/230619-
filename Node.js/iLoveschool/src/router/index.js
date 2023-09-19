import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const sessionStorage = window.sessionStorage;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/msg',
      name: 'msg',
      component: () => import('../views/CelebrationMsg.vue'),
      //로그인 안하면 페이지 이동 못하도록
      beforeEnter:(to,from,next)=>{ 
        //to : to에 해당하는 라우트 객체 다음에 이동
        //from : 현재 라우터로 오기 전 라우트
        //next : next에 전달되는 인자에 따라 다름 비었으면 현재, ('/') 이거는 루트
         if(sessionStorage.getItem('user_id') !== null)//아이디가 있는경우
           return next();
         alert('로그인해랏');
         //sessionStorage.removeitem() : 삭제 하는거 - logout에 사용
      } 
    },
    {
      path:'/logout',
      name:'logout',
      component : HomeView,
      beforeEnter:(to,from,next) => {
        if(sessionStorage.getItem('user_id')!==null){
          sessionStorage.removeItem('user_id')
        }
        return next();
      }     
    }
  ]
})

export default router
