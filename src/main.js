import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000/api/'

createApp(App).use(router).use(VueAxios, axios).mount('#app')

import "bootstrap/dist/js/bootstrap.js";