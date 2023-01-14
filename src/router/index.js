import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import TaskPage from '@/pages/TaskPage';
import CreatePage from '@/pages/CreatePage';
import EditPage from '@/pages/EditPage';
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
		path: '/task',
		component: TaskPage
	},
	{
		name: 'create',
		path: '/create',
		component: CreatePage
	},
	{
		name: 'edit',
		path: '/edit',
		component: EditPage
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