<template>
	<v-container>
		<v-page-header/>
		<Task class="task--page-task" :data="theTask">
			<template #task-actions>
				<v-button @click.native="completeThisTask">Complete</v-button>
				<v-button class="btn--delete" @click.native="deleteThisTask">Delete</v-button>
			</template>
		</Task>
    </v-container>
</template>

<script>
	import vPageHeader from '../components/app/vPageHeader.vue';
	import Task from '../components/Tasks/Task.vue';
	import { mapActions, mapGetters } from 'vuex';
	import vContainer from '../components/app/vContainer.vue';
	import vButton from '../components/app/vButton.vue';

	export default {
		name: 'TaskPage',
		components: {
			Task,
			vContainer,
			vButton,
			vPageHeader
	    },
		computed: {
			...mapGetters([
				'getTask'
			]),
			theTask() {
				return this.getTask(this.$route.query.id);
			}
		},
		methods: {
            ...mapActions([
                'deleteTask',
                'completeTask'
            ]),
            deleteThisTask() {
                this.deleteTask(this.theTask.id);
				this.$router.push('/');
            },
            completeThisTask() {
                this.completeTask(this.theTask);
            }
        }
	}
</script>

<style lang="scss">

</style>