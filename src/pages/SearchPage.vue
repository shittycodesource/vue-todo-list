<template>
    <v-container>
        <v-input
            @enter="changeTag"
            :value="tagName" 
            v-model="tagName" 
            placeholder="Type tag here..."
            :maxLength="48"
        />
        <v-select/>
        <Tasks
            v-if="isSearchActive"
            :key="$route.fullPath"
            :activeCount="1"
            :list="tasksList"
            :customHeaderText='`${tasksList.length} tasks with tag "${$route.query.tag}" found`'
            :emptyListText="'No tasks with this tag found'"
        />
        <p v-else class="center mt20px">Search tasks by tag</p>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import Tasks from '../components/Tasks/Tasks.vue';
    import vInput from '../components/Inputs/vInput.vue';
    import vSelect from '../components/Inputs/vSelect.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'Search',
        data() {
            return {
                isSearchActive: false,
                tagName: this.$route.query.tag ,
                tasksList: []
            }
        },
        components: {
            vContainer,
            Tasks,
            vInput,
            vSelect
        },
        methods: {
            ...mapActions([
                'searchByTag'
            ]),
            async search() {
                try {
                    if (this.tagName) {
                        this.isSearchActive = true;
                        this.tasksList = await this.searchByTag(this.tagName);
                    }
                } catch (error) {
                    console.log(e)
                }
            },
            changeTag(tag) {
                if (tag) {
                    this.$router.push({ query: { tag: tag }});
                } 
            }
        },
        created() {
            this.search();
        },
        watch: {
            '$route.query.tag': {
                handler() {
                    this.search();
                }
            }
        }
    }
</script>

<style lang="scss">

</style>