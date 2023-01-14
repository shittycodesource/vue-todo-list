<template>
	<v-container>
		<!-- <TheTaskTextInput/> -->
        <Tasks/>	
    </v-container>
</template>

<script>
	import TheTaskTextInput from '../components/TheTaskTextInput.vue';
	import Tasks from '../components/Tasks/Tasks.vue';
	import vContainer from '../components/app/vContainer.vue';

	export default {
		name: 'HomePage',
		components: {
	        vContainer,
	        TheTaskTextInput,
	        Tasks
	    }
	}
</script>