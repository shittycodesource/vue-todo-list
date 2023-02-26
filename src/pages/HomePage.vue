<template>
	<v-container>
		<div class="lists">
			<div class="lists__header">Lists:</div>
			<lists-grid v-if="getLists.length">
				<list-card 
					v-for="list in getLists"
					:list="list"
					:key="list.id"
					@deleteList="setDeleteList(list)"
				/>
			</lists-grid>
			<p class="center" v-else>Looks like you don't have any list</p>
		</div>

		<choose-modal :isOpen="isOpen" @closeModal="toggleChooseModal">
			<template #title>Delete this list?</template>
			<template #options>
				<v-button class="btn--no-border btn--full-width btn--text-left p15px" @click.native="deleteTheList">Confirm</v-button>
				<v-button class="btn--no-border btn--full-width btn--text-left p15px" @click.native="cancelDelete">Cancel</v-button>
			</template>
		</choose-modal>
	</v-container>
</template>

<script>
	import vContainer from '../components/app/vContainer.vue';
	import ListsGrid from '../components/Lists/ListsGrid.vue';
	import ListCard from '../components/Lists/ListCard.vue';
	import ChooseModal from '../components/Modals/ChooseModal.vue';
	import vButton from '../components/app/vButton.vue';
	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'HomePage',
		components: {vContainer, ListsGrid, ListCard, ChooseModal, vButton },
		computed: {
			...mapGetters([
				'getLists'
			])
		},
		data() {
			return {
				listForDelete: false,
				isOpen: false,
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
			}
		}
	}
</script>

<style lang="scss">
	.lists__header {
		color: $textColor;
		font-size: 20px;
		margin-bottom: 15px;
	}
</style>