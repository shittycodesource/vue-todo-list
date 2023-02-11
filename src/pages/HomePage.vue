<template>
	<v-container>
		<lists-grid>
			<list-card 
				v-for="list in getLists"
				:list="list"
				:key="list.id"
			/>
		</lists-grid>
	</v-container>
</template>

<script>
	import vContainer from '../components/app/vContainer.vue';
	import ListsGrid from '../components/Lists/ListsGrid.vue';
	import ListCard from '../components/Lists/ListCard.vue';
	import { mapGetters } from 'vuex';

	export default {
		name: 'HomePage',
		components: {
			vContainer,
			ListsGrid,
			ListCard
		},
		computed: {
			...mapGetters([
				'getLists'
			])
		}
	}
</script>