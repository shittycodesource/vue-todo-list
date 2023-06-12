<template>
	<v-container>
		<!-- <v-page-header :link="{ name: 'tasks', query: { listId: $route.query.listId } }"  /> -->
		<task :data="theTask" v-if="theTask">
			<template #task-actions>
				<v-button class="btn--flat btn--with-icon" @click.native="completeThisTask">
					<v-icon class="action__icon" name="#done" width="17px" height="11px"/>
					Complete
				</v-button>
				<router-link class="btn btn--flat btn--with-icon" :to="{ name: 'edit task',  query: { listId: $route.query.listId, id: theTask.id } }">
                    <v-icon class="action__icon" name="#edit" width="17px" height="17px"/>
					Edit
                </router-link>
				<v-button class="btn--flat btn--with-icon" @click.native="deleteThisTask">
					<v-icon class="action__icon" name="#trash" width="17px" height="17px"/>
					Delete
				</v-button>
			</template>
		</task>
		<p v-else>This task is not found or deleted</p>
    </v-container>
</template>

<script>
	import vPageHeader from '../../components/app/vPageHeader.vue';
	import Task from '../../components/Tasks/Task.vue';
	import vContainer from '../../components/app/vContainer.vue';
	import vButton from '../../components/Inputs/vButton.vue';
	import vIcon from '../../components/app/vIcon.vue';
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'TaskPage',
		components: { Task, vContainer, vButton, vPageHeader, vIcon },
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