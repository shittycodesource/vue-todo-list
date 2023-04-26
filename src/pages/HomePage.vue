<template>
	<v-container>
		<div class="lists">
			<lists-grid v-if="getLists.length">
				<list-card
					v-for="list in getLists"
					:list="list"
					:key="list.id"
					@deleteList="setDeleteList(list)"
				/>
			</lists-grid>
			<p class="center" v-else>Looks like you don't have any list</p>
			<!-- <card>
				<template #title>
					Card Title
				</template>
				<template #header-right>
					:
				</template>
				<template #content>
					Card Content
				</template>
				<template #footer-left>
					Card Footer
				</template>
			</card> -->
			<v-progress :fill="25"/>
			<dropdown :isOpened="isDropdownOpened" @clickOutside="toggleDropdown">
				<div @click="toggleDropdown">Click here</div>
				<template #options>
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</template>
			</dropdown>
		</div>

		<choose-modal :isOpen="isOpen" @closeModal="toggleChooseModal">
			<template #title>Delete this list?</template>
			<template #options>
				<v-button class="btn--choose" @click.native="deleteTheList">Confirm</v-button>
				<v-button class="btn--choose" @click.native="cancelDelete">Cancel</v-button>
			</template>
		</choose-modal>
	</v-container>
</template>

<script>
	import vContainer from '../components/app/vContainer.vue';
	import ListsGrid from '../components/Lists/ListsGrid.vue';
	import ListCard from '../components/Cards/ListCard.vue';
	import ChooseModal from '../components/Modals/ChooseModal.vue';
	import vButton from '../components/Inputs/vButton.vue';
	import { mapActions, mapGetters } from 'vuex';

	import Card from '../components/Cards/Card.vue';
	import vProgress from '../components/vProgress.vue';
	import Dropdown from '../components/Dropdown.vue';

	export default {
		name: 'HomePage',
		components: {vContainer, ListsGrid, ListCard, ChooseModal, vButton, Card, vProgress, Dropdown },
		computed: {
			...mapGetters([
				'getLists',
			])
		},
		data() {
			return {
				listForDelete: false,
				isOpen: false,
				isDropdownOpened: false,
			}
		},
		methods: {
			...mapActions([
				'deleteList'
			]),
			setDeleteList(list) {
				this.listForDelete = list;
				this.toggleChooseModal();
			},
			deleteTheList() {
				if (this.listForDelete) {
					this.deleteList(this.listForDelete);
				}

				this.listForDelete = false;
				this.toggleChooseModal();
			},
			cancelDelete() {
				this.listForDelete = false;
				this.toggleChooseModal();
			},
			toggleChooseModal() {
				this.isOpen = !this.isOpen;
			},
			toggleDropdown() {
				this.isDropdownOpened = !this.isDropdownOpened;
			}
		},
	}
</script>

<style lang="scss">
	.lists__header {
		color: var(--textColor);
		font-size: 20px;
		margin-bottom: 15px;
	}
</style>