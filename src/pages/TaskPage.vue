<template>
	<BaseContainer>
		<div class="task-page">
			<div class="task-page__header">
				<router-link to="/">&lt; Back</router-link>
			</div>
			<div class="task-page__content">
				<Task class="task--page-task" :data="theTask">
					<template #task-actions>
						<BaseButton @click.native="completeThisTask">Complete</BaseButton>
                    	<BaseButton class="btn--delete" @click.native="deleteThisTask">Delete</BaseButton>
					</template>
				</Task>
			</div>
		</div>
    </BaseContainer>
</template>

<script>
	import BaseContainer from '@/components/app/BaseContainer.vue';
	import Task from '@/components/Tasks/Task.vue';
	import BaseButton from '@/components/app/BaseButton.vue';
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'TaskPage',
		components: {
	        BaseContainer,
			Task,
			BaseButton
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
	.task-page {
		&__header {
			margin-bottom: 80px;

			a {
				color: $mainColor;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

</style>