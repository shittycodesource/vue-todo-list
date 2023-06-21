<template>
	<card class="card--list">
		<template #title>{{ list.name }}</template>
		<template #header-right>

			<dropdown :isOpened="isDropdownOpen" @clickOutside="toggleDropdown">
				<v-icon class="card-dropdown-icon" name="#horizontal-menu" @click.native="toggleDropdown"/>
				<template #options>
					<router-link 
						class="btn btn--choose"
						:to="{ name: 'edit list', query: { listId: list.id } }"
					>
						{{ 'Edit' | localizeFilter }}
					</router-link>
					<v-button class="btn--choose" @click.native="$emit('deleteList', list)">	{{ 'Delete' | localizeFilter }}
					</v-button>
				</template>
			</dropdown>

		</template>
		<template #content>
			<div class="card--list__description"><p>{{ list.description }}</p></div>
			<v-progress :fill="getListProgress(list.tasks)"/>
			<div class="progress-info">
				<span>{{ getListProgress(list.tasks) || 0 }}% / 100%</span> <!-- All tasks - Incompleted Tasks -->
				<span>{{ list.tasks.length }} {{ 'Tasks' | localizeFilter }}</span>
			</div>
		</template>
		<template #footer-left>
			<router-link :to="{ name: 'tasks', query: { listId: list.id } }" class="card__link">
				{{ 'Open' | localizeFilter }}
				<v-icon class="open-icon" name="#right"/>
			</router-link>	
		</template>
	</card>
</template>

<script>
	import Card from './Card.vue';
	import vIcon from '../app/vIcon.vue';
	import vProgress from '../vProgress.vue';
	import Dropdown from '../Dropdown.vue';
	import vButton from '../Inputs/vButton.vue';
	import dropdownMixin from '../../mixins/dropdownMixin';
	import { mapGetters } from 'vuex';

	export default {
		name: 'ListCard',
		components: { Card, vIcon, vProgress, Dropdown, vButton },
		mixins: [ dropdownMixin ],
		props: {
			list: {
				type: Object,
				required: true,
			}
		},
		computed: {
			...mapGetters(['getListProgress'])
		},
	}
</script>

<style lang="scss">
	.card--list {
		min-height: 250px;
		// max-width: 320px;
		width: calc(33.333% - 30px);

		&__description {
			flex-grow: 1;

			p {
				padding: 0;
				margin: 0;

				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 4;
				text-overflow: ellipsis;
				word-break: break-word;
				white-space: pre-line;
				-webkit-box-orient: vertical;
				line-height: 1.8;
			}
		}

		.progress-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 5px;
		}

		.open-icon {
			width: 6px;
			height: 11px;
			margin-left: 5px;
		}
	}
</style>