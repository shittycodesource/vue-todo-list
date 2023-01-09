<template>
	<BaseContainer>
		<div class="task-page">
			<div class="task-page__header">
				<router-link to="/">&lt; Back</router-link>
			</div>
			<div class="task-page__content">
				<Task class="task--page-task" :data="theTask">
					<template #task-date>
						<div class="task__date">
							{{ theTask.dayValue }}
						</div>
					</template>
				</Task>
			</div>
		</div>
    </BaseContainer>
</template>

<script>
	import { mapGetters } from 'vuex';
	import BaseContainer from '@/components/app/BaseContainer.vue';
	import Task from '@/components/Tasks/Task.vue';

	export default {
		name: 'TaskPage',
		components: {
	        BaseContainer,
			Task
	    },
		computed: {
			...mapGetters([
				'getTask'
			]),
			theTask() {
				return this.getTask(0);
			}
		}
	}
</script>

<style lang="scss">
	.task-page {
		&__header {
			margin-bottom: 80px;

			a {
				color: $gray;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
				}
			}
		}
	}

</style>