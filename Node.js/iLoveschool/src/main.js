import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueSession from 'vue-session/index'

var sessionOptions={
    persist:true
}

const firebaseConfig = {
    apiKey: "AIzaSyD8PkB9MWa14wVdSrj-pLkBzskXyp6caOg",
    authDomain: "iloveschool-63735.firebaseapp.com",
    projectId: "iloveschool-63735",
    storageBucket: "iloveschool-63735.appspot.com",
    messagingSenderId: "823294660339",
    appId: "1:823294660339:web:6e31e842256c84323bf186",
    measurementId: "G-MMK079KP3K"
};
firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(VueSession, sessionOptions)
app.use(createPinia())
app.use(router)

app.mount('#app')
