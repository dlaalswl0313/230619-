import './assets/styleGuide.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')

import './assets/styleGuide.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'; // Axios를 가져옵니다.

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 이제 Axios를 설정하고 전역에서 사용할 수 있도록 합니다.
app.config.globalProperties.axios = axios;

app.mount('#app')
