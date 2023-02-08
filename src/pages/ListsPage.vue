<template>
	<v-container>
		<lists-grid>
			<list-card 
				v-for="index in 10"
				:key="index"
			/>
		</lists-grid>
	</v-container>
</template>

<script>
	import vContainer from '../components/app/vContainer.vue';
	import ListsGrid from '../components/Lists/ListsGrid.vue';
	import ListCard from '../components/Lists/ListCard.vue';

	export default {
		name: 'ListsPage',
		components: {
			vContainer,
			ListsGrid,
			ListCard
		}
	}
</script>