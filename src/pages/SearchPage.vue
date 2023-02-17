<template>
    <v-container>
        <form class="search-form">
            <div class="flex items-center gap10px">

                <v-input placeholder="Title" :value="text" v-model="text" :maxLength="48" />

                <v-select
                    defaultTitle="All Lists"
                    :selectedOption="selectedOption"
                    :options="getListsNamesAndIdArray"
                    @selectOption="(option) => selectedOption = option"
                />
            </div>

            <v-tags-input 
                placeholder="Tags"
                @addTag="(tagsArr) => tags = tagsArr"
             />

            <div class="text-left">
                <v-button @click.native="startSearch">Search</v-button>
            </div>
        </form>

        <tasks-list
            :list="foundTasks" 
            emptyListText="Tasks not found"
        />

        <router-link :to="{ name: 'home', query: { arr: JSON.stringify(['first tag', 'second tag', 'third tag']) } } ">params</router-link>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import vInput from '../components/Inputs/vInput.vue';
    import vTagsInput from '../components/Inputs/vTagsInput.vue';
    import vSelect from '../components/Inputs/vSelect.vue';
    import vButton from '../components/app/vButton.vue';
    import TasksList from '../components/Tasks/TasksList.vue';
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'SearchPage',
        components: { vContainer, vInput, vTagsInput, vSelect, vButton, TasksList },
        data() {
            return {
                text: '',
                tags: [],
                selectedOption: false,
                foundTasks: []
            }
        },
        computed: {
            ...mapGetters([
                'getAllTasks',
                'getListsNamesAndIdArray'
            ])
        },
        methods: {
            ...mapActions([
                'searchTasks'
            ]),
            async startSearch() {
                try {
                    const dataForSearch = {
                        title: this.text,
                        tags: this.tags,
                        list: this.selectedOption
                    };
                    
                    console.log(dataForSearch)
    
    
                    this.foundTasks = await this.searchTasks(dataForSearch);
                } catch (error) {
                    throw error;
                }
            }
        }
    }
</script>

<style lang="scss">
    .search-form {
        display: flex;
        // align-items: center;
        // flex-wrap: wrap;
        flex-direction: column;
        // gap: 10px;
    }
</style>