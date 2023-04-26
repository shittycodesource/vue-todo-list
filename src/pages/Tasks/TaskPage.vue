<template>
	<v-container>
		<v-page-header :link="{ name: 'tasks', query: { listId: $route.query.listId } }"  />
		<Task class="task--page-task" :data="theTask" v-if="theTask">
			<template #task-actions>
				<v-button @click.native="completeThisTask">Complete</v-button>
				<router-link class="btn" :to="{ name: 'edit task',  query: { listId: $route.query.listId, id: theTask.id } }">
                    Edit
                </router-link>
				<v-button @click.native="deleteThisTask">Delete</v-button>
			</template>
		</Task>
		<p v-else>This task is not found or deleted</p>
    </v-container>
</template>

<script>
	import vPageHeader from '../../components/app/vPageHeader.vue';
	import Task from '../../components/Tasks/Task.vue';
	import vContainer from '../../components/app/vContainer.vue';
	import vButton from '../../components/Inputs/vButton.vue';
	import { mapActions, mapGetters } from 'vuex';

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
				return this.getTask(this.$route.query.listId, this.$route.query.id);
			}
		},
		methods: {
            ...mapActions([
                'deleteTask',
                'completeTask'
            ]),
            deleteThisTask() {
                this.deleteTask(this.theTask);
				this.$router.push('/');
            },
            completeThisTask() {
                this.completeTask(this.theTask);
            }
        }
	}
</script>