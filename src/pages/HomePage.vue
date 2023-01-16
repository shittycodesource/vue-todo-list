<template>
	<v-container>
        <Tasks/>	
    </v-container>
</template>

<script>
	import Tasks from '../components/Tasks/Tasks.vue';
	import vContainer from '../components/app/vContainer.vue';

	export default {
		name: 'HomePage',
		components: {
	        vContainer,
	        Tasks
	    }
	}
</script>