<template>
	<card class="card--list">
		<template #title>{{ list.name }}</template>
		<template #header-right>

			<dropdown :isOpened="isDropdownOpen" @clickOutside="toggleDropdown">
				<v-icon class="menu-icon" name="#horizontal-menu" @click.native="toggleDropdown"/>
				<template #options>
					<router-link 
						class="btn btn--choose"
						:to="{ name: 'edit list', query: { listId: list.id } }"
					>
						Edit
					</router-link>
					<v-button class="btn--choose" @click.native="$emit('deleteList', list)">Delete</v-button>
				</template>
			</dropdown>

		</template>
		<template #content>
			<div class="card--list__description">{{ list.description }}</div>
			<v-progress :fill="getListProgress(list.tasks)"/>
			<div class="progress-info">
				<span>{{ getListProgress(list.tasks) }}% / 100%</span> <!-- All tasks - Incompleted Tasks -->
				<span>{{ list.tasks.length }} Tasks</span>
			</div>
		</template>
		<template #footer-left>
			<router-link :to="{ name: 'tasks', query: { listId: list.id } }">Open ></router-link>	
		</template>
	</card>
</template>

<script>
	import Card from './Card.vue';
	import vIcon from '../app/vIcon.vue';
	import vProgress from '../vProgress.vue';
	import Dropdown from '../Dropdown.vue';
	import vButton from '../app/vButton.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'ListCard',
		components: { Card, vIcon, vProgress, Dropdown, vButton },
		data() {
			return {
				isDropdownOpen: false,
			}
		},
		props: {
			list: {
				type: Object,
				required: true,
			}
		},
		computed: {
			...mapGetters(['getListProgress'])
		},
		methods: {
			toggleDropdown() {
				this.isDropdownOpen = !this.isDropdownOpen;
			}
		}
	}
</script>

<style lang="scss">
	.card--list {
		min-height: 220px;
		max-width: 320px;
		width: calc(33.333% - 40px);

		.menu-icon {
			height: 6px;
			width: 28px;

			cursor: pointer;
		}

		&__description {
			flex-grow: 1;
		}

		.progress-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 5px;
		}
	}
</style>