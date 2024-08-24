// /src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import ImageGallery from './components/ImageGallery.vue';
import MusicDashboard from './components/MusicDashboard.vue';

const routes = [
  { path: '/', component: ImageGallery },
  { path: '/music-dashboard', component: MusicDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
