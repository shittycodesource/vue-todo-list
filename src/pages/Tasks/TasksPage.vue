<template>
	<v-container>
        <Tasks 
			:activeCount="getIncompleteTasksNumber(getList($route.query.listId).tasks)"
			:list="getList($route.query.listId)"
		/>	
    </v-container>
</template>

<script>
	import Tasks from '../../components/Tasks/Tasks.vue';
	import vContainer from '../../components/app/vContainer.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'TasksPage',
		components: {
	        vContainer,
	        Tasks
	    },
		computed: {
			...mapGetters([
				'getIncompleteTasksNumber',
				'getList'
			])
		},
	}
</script>