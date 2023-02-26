<template>
    <v-container>
        <form class="search-form">
            <div class="search-form__header">

                <v-input placeholder="Title" :value="text" v-model="text" :maxLength="48" />

                <v-select
                    defaultTitle="All Lists"
                    :selectedOption="selectedOption"
                    :options="getListsData"
                    @selectOption="(option) => selectedOption = option"
                />
            </div>

            <v-tags-input 
                placeholder="Tags"
                @addTag="(tagsArr) => tags = tagsArr"
                @deleteTag="startSearch"
                :tags="tags"
                ref="tagsInput"
             />

            <div class="text-left">
                <v-button @click.native="startSearch">Search</v-button>
            </div>
        </form>

        <tasks-list
            :list="foundTasks" 
            :emptyListText="wereSearchActive ? 'Tasks not found' : '' "
        />
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
                foundTasks: [],
                wereSearchActive: false,
                prevRoutePath: '',
            }
        },
        computed: {
            ...mapGetters([
                'getAllTasks',
                'getListsData'
            ])
        },
        methods: {
            ...mapActions([
                'searchTasks'
            ]),
            async startSearch() {
                try {
                    this.$refs.tagsInput.pushTag() // push tag if there's something in input

                    if (this.text.trim('') || this.tags.length) {
                        this.wereSearchActive = true;
                        const dataForSearch = {
                            title: this.text,
                            tags: this.tags,
                            list: this.selectedOption
                        };
                        
                        this.foundTasks = await this.searchTasks(dataForSearch);

                        const queryObject = { text: this.text, tags: JSON.stringify(this.tags) };

                        if (this.$route.query.text != queryObject.text || this.$route.query.tags != queryObject.tags) {
                            this.$router.push({ query: queryObject});
                        } // lol i don't know how i did all of this work because this whole page is a piece of shit but it works
                    }
                } catch (error) {
                    throw error;
                }
            },
            setData() {
                const text = this.$route.query.text;
                const tags = this.$route.query.tags;
                const listId = this.$route.query.listId;

                text ? this.text = text.trim('') : '';
                tags ? this.tags = JSON.parse(tags) : '';
                listId ? this.getListsData.filter(list => list.id == listId ? this.selectedOption = list : '') : ''; 
            },
        },
        mounted() {
            this.setData();
            this.startSearch();
        },
        watch: {
            '$route.query': {
                handler() {
                    this.setData()
                    this.startSearch(); 
                }
            }
        }
    }
</script>

<style lang="scss">
    .search-form {
        display: flex;
        flex-direction: column;

        &__header {
            display: flex;
            align-items: center;
            gap: 10px;

            @media (max-width: $mobileBP) {
                flex-direction: column;
                gap: 5px;
                margin-bottom: 5px;
            }
        }
    }
</style>