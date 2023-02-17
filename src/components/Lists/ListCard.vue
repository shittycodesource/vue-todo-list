<template>
	<div class="list-card">
		<header class="list-card__header">
			<div class="list-card__title">
				{{ list.name }}
			</div>

			<Dropdown :isOpened="isDropdownOpen" @clickOutside="closeDropdown">
				<v-icon 
					class="list-card__icon" 
					name="#vertical-menu"
					@click.native="isDropdownOpen = !isDropdownOpen"
				></v-icon>

				<template #dropdown-items>
					<button class="dropdown__btn">Edit</button>
					<button class="dropdown__btn">Delete</button>
				</template>

			</Dropdown>
		</header>
		<div class="list-card__description">
			{{ list.description }}
		</div>
		<div class="list-card__footer">
			<div class="list-card__num">{{ getIncompleteTasksNumber(list.tasks) }} Active Tasks</div>
			<router-link class="list-card__link" :to="{ name: 'tasks', query: { listId: list.id } }">Open</router-link>
		</div>
	</div>
</template>

<script>
	import vIcon from '../app/vIcon.vue';
	import Dropdown from '../Dropdown/Dropdown.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'ListCard',
		data() {
			return {
				isDropdownOpen: false
			}
		},
		methods: {
			closeDropdown() {
				this.isDropdownOpen = false
			}
		},
		computed: {
			...mapGetters([
				'getIncompleteTasksNumber'
			])
		},
		props: {
			list: {
				type: Object,
				required: true,
			}
		},
		components: {
			vIcon,
			Dropdown,
		}
	}
</script>

<style lang="scss">
	.list-card {
		display: flex;
		flex-direction: column;
		
		max-width: calc(100% / 4 - 15px);
        width: 100%;	
		min-height: 220px;

		padding: 15px;

		background: $blockBackgroundColor;
		border-radius: 11px;
		border: 1px solid #F3F3F3;
		box-shadow: $baseBoxShadow;

		transition: background.2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out;

		&__header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		
			margin-bottom: 10px;
		}

		&__title {
			font-size: 20px;
			font-weight: 400;
		}

		&__icon {
			width: 25px;
			height: 22px;
			cursor: pointer;
		}

		&__description {
			flex-grow: 1;

			font-size: 13px;
			color: $textColor;
		}

		&__footer {
			display: flex;
			align-items: center;
			justify-content: space-between;

			font-size: 13px;
			color: $textColor;
		}

		&__link {
			color: $textColor;
			text-decoration: none;

			&:hover {
				color: darken($textColor, 10%);
			}
		}

		&:hover {
			background: darken($blockBackgroundColor, 3%);
			border-color: lighten(#F3F3F3, 10%);
			box-shadow: $baseBoxShadowHover;
		}
	}
</style>