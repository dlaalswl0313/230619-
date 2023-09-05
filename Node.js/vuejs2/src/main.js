import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' //pinia :: vuejs동작 상태관리

import App from './App.vue'
import router from './router'

//createApp(App).use(createPinia()).use(router)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
