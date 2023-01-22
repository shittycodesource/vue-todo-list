<template>
    <v-container>
        <v-input
            @enter="changeTag"
            :value="tagName" 
            v-model="tagName" 
            placeholder="Type tag here..."
            :maxLength="48"
        />
        <Tasks
            :key="$route.fullPath"
            :activeCount="1"
            :list="tasksList"
            :customHeaderText='`${tasksList.length} tasks with tag "${$route.query.tag}" found`'
            :emptyListText="'No tasks with this tag found'"
        />
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import Tasks from '../components/Tasks/Tasks.vue';
    import vInput from '../components/Inputs/vInput.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'Search',
        data() {
            return {
                tagName: this.$route.query.tag ,
                tasksList: []
            }
        },
        components: {
            vContainer,
            Tasks,
            vInput
        },
        methods: {
            ...mapActions([
                'searchByTag'
            ]),
            async search() {
                try {
                    if (this.tagName) {
                        this.tasksList = await this.searchByTag(this.tagName);
                        console.log('taskslist', this.tasksList)
                    }
                } catch (error) {
                    console.log(e)
                }
            },
            changeTag(tag) {
                console.log(tag)
                if (tag) {
                    console.log('tag', tag)
                    this.$router.push({ query: { tag: tag }});
                } 
            }
        },
        created() {
            this.search();
        },
        // updated() {
        //     this.search();
        // }
        watch: {
            '$route.query.tag': {
                handler() {
                    this.search();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>