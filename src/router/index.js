import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import TaskPage from '@/pages/TaskPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(VueRouter);

const routes = [
	{ 
		name: 'home', 
		path: '/', 
		component: HomePage 
	},
	{
		name: 'task',
		path: '/task/:taskID',
		component: TaskPage
	},
	{
		path: '*',
		component: NotFoundPage
	}

];

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;