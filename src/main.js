import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import PrimeVue from 'primevue/config';
import router from './router';
import SelectButton from 'primevue/selectbutton';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import './assets/main.css';

const app = createApp(App);
app.use(i18n);
app.use(router); // Usar el router
app.use(PrimeVue, { ripple: true });
app.component('SelectButton', SelectButton);
app.mount('#app');
