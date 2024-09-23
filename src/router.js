import { createRouter, createWebHistory } from 'vue-router';
import Doctors from './components/Doctors/Doctors.component.vue';
import MainImage from './layouts/MainLayout.component.vue';

const routes = [
    { path: '/', component: MainImage },
    { path: '/doctores', component: Doctors }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
