import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
// import DateFilter from '../src/Filters/date';

// Vue.filter('date', DateFilter )
// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
Vue.use(VueResource);
