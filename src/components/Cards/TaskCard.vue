<template>
	<card class="task" :class="{'completed': data.completed}">
		<template #title>
			<router-link class="task__title" :to="{ name: 'task',  query: { listId: data.listId, id: data.id } }">
				<span>{{ data.title }}</span> <v-icon name="#right" class="task__arrow"></v-icon>
			</router-link>
		</template>

		<template #header-right>
			<dropdown :isOpened="isDropdownOpen" @clickOutside="toggleDropdown">
				<v-icon class="card-dropdown-icon" name="#horizontal-menu" @click.native="toggleDropdown"/>
				<template #options>
					<router-link class="btn btn--choose" :to="{ name: 'edit task',  query: { listId: data.listId, id: data.id } }">
						Edit
					</router-link>
					<v-button class="btn--choose" @click.native="$emit('deleteTask', listId)">Delete</v-button>
				</template>
			</dropdown>
		</template>

		<template #content>
			<div class="task__description">{{data.text}}</div>
		</template>

		<template #footer-left>
			<time class="task__date" datetime="1231231231">{{ data.date | dateToHours }} | {{ data.dayValue }}</time>
		</template>

		<template #footer-right>
			<button class="task__complete" type="button" @click="$emit('completeTask', data)">
				<v-icon name="#down"/>
			</button>
		</template>
	</card>
</template>

<script>
	import Card from './Card.vue';
	import vIcon from '../app/vIcon.vue';
	import Dropdown from '../Dropdown.vue';
	import vButton from '../Inputs/vButton.vue';
	import dropdownMixin from '../../mixins/dropdownMixin';

	export default {
		name: 'TaskCard',
		mixins: [ dropdownMixin ],
		components: { Card, Dropdown, vIcon, vButton },
		props: {
			data: {
				type: Object,
				default: {},
				required: true
			},
		}
	}

</script>

<style lang="scss">
	.task {
		width: 32%;
		transition: opacity .2s linear, border-color .2s linear, box-shadow .2s linear;

		&__description {
			display: -webkit-box;
			overflow: hidden;
			-webkit-line-clamp: 5;
			text-overflow: ellipsis;
			word-break: break-word;
			white-space: pre-line;
			-webkit-box-orient: vertical;
			line-height: 1.8;

			font-weight: 300;
			color: var(--secondary-text);
		}

		&__date {
			font-size: 12px;
			color: var(--secondary-text);
		}

		&__title {
			margin-right: 10px;

			display: flex;
			align-items: center;
			color: var(--main-text);
			text-decoration: none;

			svg {
				fill: var(--main-text);
			}

			&:hover {
				text-decoration: underline;
			}

			span {
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 1;
				text-overflow: ellipsis;
				word-break: break-word;
				white-space: pre-line;
				-webkit-box-orient: vertical;
			}
		}

		&__arrow {
			width: 22px;
			height: 16px;
			cursor: pointer;
		}

		&__complete {
			display: flex;
			justify-content: center;
			align-items: center;

			width: 30px; 
			height: 30px;
			border-radius: 5px;
			border: 1px solid var(--task-complete-btn-border-color);
			background: var(--task-complete-btn-background-color);
			cursor: pointer;
			
			transition: transform .2s linear, background-color .2s linear, border-color .2s linear;

			svg {
				width: 21px;
				height: 14px;
				fill: var(--task-complete-btn-icon-color);

				transition: fill .2s linear;
			}

			&:hover {
				transform: translateY(-2px);
			}
		}

		&.completed {
			opacity: .7;
			text-decoration: line-through;

			.task__complete {
				background: var(--task-complete-btn-background-color-active);
				border-color: var(--task-complete-btn-border-color-active);

				svg {
					fill: var(--task-complete-btn-icon-color-active);
				}	
			}
		}
	}
</style>