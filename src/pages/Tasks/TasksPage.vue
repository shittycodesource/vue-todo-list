<template>
	<v-container>
        <Tasks
			v-if="getList($route.query.listId)" 
			:activeCount="getIncompleteTasksNumber(getList($route.query.listId).tasks)"
			:list="getList($route.query.listId)"
		/>
		<p class="center text-color" v-else>This list not found</p>	
    </v-container>
</template>

<script>
	import Tasks from '../../components/Tasks/Tasks.vue';
	import vContainer from '../../components/app/vContainer.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'TasksPage',
		components: { vContainer, Tasks },
		computed: {
			...mapGetters([
				'getIncompleteTasksNumber',
				'getList'
			])
		},
	}
</script>