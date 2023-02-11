<template>
	<v-container>
        <Tasks 
			:activeCount="activeCount"
			:list="list"
		/>	
    </v-container>
</template>

<script>
	import Tasks from '../components/Tasks/Tasks.vue';
	import vContainer from '../components/app/vContainer.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'TasksPage',
		data() {
			return {
				list: null,
				activeCount: null
			}
		},
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
		created() {
			this.list = this.getList(this.$route.query.list_id);
			this.activeCount = this.getIncompleteTasksNumber(this.list.tasks);
		}
	}
</script>