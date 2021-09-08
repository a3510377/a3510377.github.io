/* eslint-disable no-unused-vars */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mainStyle from "@/assets/scss/main.scss"

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')