import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/router/IndexPage.vue';
import NotFoundPage from '@/router/NotFoundPage.vue';

const routes = [
	{
		path: '/',
		name: 'index',
		component: IndexPage,
	},
];

if (import.meta.env.DEV) {
	routes.push({ path: '/pixelperfect' });
}

routes.push({
	path: '/:catchAll(.*)',
	name: 'notfound',
	component: NotFoundPage,
});

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
