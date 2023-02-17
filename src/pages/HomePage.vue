<template>
	<v-container>
		<div class="lists">
			<lists-grid>
				<list-card 
					v-for="list in getLists"
					:list="list"
					:key="list.id"
				/>
			</lists-grid>
			<button @click="logQuery">log query</button>
		</div>
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
		},
		methods: {
			logQuery() {
				const query = JSON.parse(this.$route.query.arr);
				console.log(query);
			}
		}
	}
</script>