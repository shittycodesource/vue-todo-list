import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import TasksPage from '@/pages/Tasks/TasksPage';
import TaskPage from '@/pages/Tasks/TaskPage';
import CreateListPage from '@/pages/Lists/CreateListPage';
import EditListPage from '@/pages/Lists/EditListPage';
import CreateTaskPage from '@/pages/Tasks/CreateTaskPage';
import EditTaskPage from '@/pages/Tasks/EditTaskPage';
import SearchPage from '@/pages/SearchPage';
import SettingsPage from '@/pages/SettingsPage';
import NotFoundPage from '@/pages/NotFoundPage';

Vue.use(VueRouter);

const routes = [
	{ 
		name: 'home', 
		path: '/', 
		component: HomePage 
	},
	{
		name: 'tasks',
		path: '/tasks',
		component: TasksPage
	},
	{
		name: 'task',
		path: '/task',
		component: TaskPage
	},
	{
		name: 'create list',
		path: '/create-list',
		component: CreateListPage
	},
	{
		name: 'edit list',
		path: '/edit-list',
		component: EditListPage
	},
	{
		name: 'create task',
		path: '/create-task',
		component: CreateTaskPage
	},
	{
		name: 'edit task',
		path: '/edit-task',
		component: EditTaskPage
	},
	{
		name: 'search',
		path: '/search',
		component: SearchPage
	},
	{
		name: 'settings',
		path: '/settings',
		component: SettingsPage
	},
	// {
	// 	name: 'lists',
	// 	path: '/lists',
	// 	component: ListsPage
	// },
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