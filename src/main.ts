import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './core/router/router';
import './assets/css/main.css';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount('#app');
