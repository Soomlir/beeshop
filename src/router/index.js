import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/router/IndexPage.vue';
import CooperationPage from '@/router/CooperationPage.vue';
import OrderPage from '@/router/OrderPage.vue';
import CartPage from '@/router/CartPage.vue';
import NotFoundPage from '@/router/NotFoundPage.vue';

const routes = [
	{
		path: '/',
		name: 'index',
		component: IndexPage,
	},
	{
		path: '/cooperation',
		name: 'cooperation',
		component: CooperationPage,
	},
	{
		path: '/order',
		name: 'order',
		component: OrderPage,
	},
	{
		path: '/cart',
		name: 'cart',
		component: CartPage,
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
