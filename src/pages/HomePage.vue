<template>
	<BaseContainer>
		<!-- <TheTaskTextInput/> -->
        <Tasks/>	
    </BaseContainer>
</template>

<script>
	import BaseContainer from '@/components/app/BaseContainer.vue';
	import TheTaskTextInput from '@/components/TheTaskTextInput.vue';
	import Tasks from '@/components/Tasks/Tasks.vue';

	export default {
		name: 'HomePage',
		components: {
	        BaseContainer,
	        TheTaskTextInput,
	        Tasks
	    }
	}
</script>