import { createRouter, createWebHistory } from 'vue-router';
import TodayTasksView from '@/views/TodayTasksView.vue';
import ImportantTasksView from '@/views/ImportantTasksView.vue';
import OtherTasksView from '@/views/OtherTasksView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', redirect: '/today' },
  { path: '/today', component: TodayTasksView },
  { path: '/important', component: ImportantTasksView },
  { path: '/other', component: OtherTasksView },
  { path: '/about', components: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;