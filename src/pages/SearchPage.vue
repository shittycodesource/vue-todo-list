<template>
    <v-container>
        <p>( doesn't work )</p>

        <form class="search-form">
            <div class="flex items-center gap10px">
                <v-input 
                    placeholder="Title"
                    :value="text"
                    v-model="text"   
                    :maxLength="48"
                />
                <v-select
                    :selectedOption="selectedOption"
                    :options="getListsNamesAndIdArray"
                    @selectOption="(option) => selectedOption = option"
                />
            </div>

            <v-tags-input 
                placeholder="Tags"
            />

            <div class="text-left">
                <v-button>Search</v-button>
            </div>
        </form>

        <tasks-list
            :list="getAllTasks" 
            emptyListText="Tasks not found"
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
    import { mapGetters } from 'vuex';

    export default {
        name: 'SearchPage',
        components: { vContainer, vInput, vTagsInput, vSelect, vButton, TasksList },
        data() {
            return {
                text: '',
                tags: [],
                selectedOption: {},
            }
        },
        computed: {
            ...mapGetters([
                'getAllTasks',
                'getListsNamesAndIdArray'
            ])
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