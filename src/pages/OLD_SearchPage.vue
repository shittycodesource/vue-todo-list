<template>
    <v-container>
        <v-tags-input
            :tags="tags" 
            :isEditable="true"
            placeholder="Type tags here..."
            @addTag="updateTags"
        />
        <v-select
            :options="[ { name: 'All Tasks' }, ...getListsNamesAndIdArray]"
            :selectedOption="selectedOption"
            defaultTitle="Choose list"
            class="mb20px select--max-width"
            @selectOption="setOption"
        />
        <v-button @click="search">Search</v-button>
        <!-- <Tasks
            v-if="isSearchActive"
            :key="$route.fullPath"
            :activeCount="1"
            :list="tasksList"
            :customHeaderText='`${tasksList.length} tasks with tag "${$route.query.tag}" found`'
            :emptyListText="'No tasks with this tag found'"
        /> -->
        <tasks-list
            :list="getAllTasks" 
            emptyListText="Tasks not found"
        />
        <!-- <p v-else class="center mt20px">Search tasks by tag</p> -->
    </v-container>
</template>

<script>
    // import vContainer from '../components/app/vContainer.vue';
    // import TasksList from '../components/Tasks/TasksList.vue';
    // import vTagsInput from '../components/Inputs/vTagsInput.vue';
    // import vSelect from '../components/Inputs/vSelect.vue';
    // import vButton from '../components/app/vButton.vue';
    // import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Search',
        // data() {
        //     return {
        //         isSearchActive: false,
        //         tasksList: [],
        //         tags: [],
        //         selectedOption: {},
        //     }
        // },
        // components: {
        //     vContainer,
        //     TasksList,
        //     vTagsInput,
        //     vSelect,
        //     vButton
        // },
        // methods: {
        //     ...mapActions([
        //         'searchByTags'
        //     ]),
        //     async search() {
        //         try {
        //             if (this.tags.length && this.selectedOption.id) {
        //                 this.isSearchActive = true;

        //                 const obj = {
        //                     tags: this.tags,
        //                     listId: this.selectedOption.id
        //                 };

        //                 this.tasksList = await this.searchByTags(obj);
        //             }
        //         } catch (error) {
        //             console.log(e)
        //         }
        //     },
        //     changeTag(tag) {
        //         if (tag) {
        //             this.$router.push({ query: { tag: tag }});
        //         } 
        //     },
        //     updateTags(tags) {
        //         this.tags = tags;
        //     },
        //     setOption(option) {
        //         this.selectedOption = option;
        //     }
        // },
        // computed: {
        //     ...mapGetters([
        //         'getListsNamesAndIdArray',
        //         'getAllTasks'
        //     ])
        // },
        // created() {
        //     this.search();
        // },
        // watch: {
        //     '$route.query.tag': {
        //         handler() {
        //             this.search();
        //         }
        //     }
        // }
    }
</script>

<style lang="scss">

</style>