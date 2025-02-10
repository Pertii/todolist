import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router'; // Importa il router

const app = createApp(App);
app.use(createPinia()); // Inizializza Pinia
app.use(router); // Usa il router
app.mount('#app');