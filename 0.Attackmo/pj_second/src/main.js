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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4AWYpbBL-7I8mWm9F4VrP-i0O3D-5y0",
  authDomain: "pjsecond-4e01a.firebaseapp.com",
  projectId: "pjsecond-4e01a",
  storageBucket: "pjsecond-4e01a.appspot.com",
  messagingSenderId: "18653238368",
  appId: "1:18653238368:web:16b5bf548ada141b4f5f05"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 이제 Axios를 설정하고 전역에서 사용할 수 있도록 합니다.
app.config.globalProperties.axios = axios;

app.mount('#app')
