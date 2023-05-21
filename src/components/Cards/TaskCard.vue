<template>
	<card class="task">
		<template #title>
			<router-link class="task__title" :to="{ name: 'task',  query: { listId: data.listId, id: data.id } }">
				{{ data.title }} <v-icon name="#right" class="task__arrow"></v-icon>
			</router-link>
		</template>

		<template #header-right>
			<dropdown :isOpened="isDropdownOpen" @clickOutside="toggleDropdown">
				<v-icon class="card-dropdown-icon" name="#horizontal-menu" @click.native="toggleDropdown"/>
				<template #options>
					<router-link class="btn btn--choose" :to="{ name: 'edit task',  query: { listId: data.listId, id: data.id } }">
						Edit
					</router-link>
					<v-button class="btn--choose" @click.native="$emit('deleteList', listId)">Delete</v-button>
				</template>
			</dropdown>
		</template>

		<template #content>
			<div class="task__description">{{data.text}}</div>
		</template>

		<template #footer-left>
			<time class="task__date" datetime="1231231231">{{ data.date | dateToHours }} | {{ data.dayValue }}</time>
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
		max-width: 32%;

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
			display: flex;
			align-items: center;
		}

		&__arrow {
			width: 22px;
			height: 16px;
			cursor: pointer;
		}
	}
</style>