<template>
	<v-container>
        <Tasks 
			:activeCount="getIncompleteTasksNumber"
			:list="getTasks"
		/>	
    </v-container>
</template>

<script>
	import Tasks from '../components/Tasks/Tasks.vue';
	import vContainer from '../components/app/vContainer.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'HomePage',
		components: {
	        vContainer,
	        Tasks
	    },
		computed: {
            ...mapGetters([
                'getTasks',
                'getIncompleteTasksNumber'
            ])
        }
	}
</script>