import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueAxios from 'vue-axios'
import axios from "axios";
// import DateFilter from '../src/Filters/date';

window.axios = require('axios');

// createApp('date', DateFilter )
// Vue.config.productionTip = false

createApp(App).use(router, axios, VueAxios).mount('#app')
// Vue.use(VueResource);
