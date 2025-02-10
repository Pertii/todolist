import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TaskListView from '@/views/TaskListView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/tasks', component: TaskListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;