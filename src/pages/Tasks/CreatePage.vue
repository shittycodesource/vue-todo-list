<template>
    <edit-task-page 
        ref="editPage"
        :title="title" 
        :text="text"
        :tags="tags"
        :listSelect="true"
        :selectedOption="selectedOption"
        :selectOptions="getListsNamesAndIdArray"
        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
        @emitTags="(newTags) => tags = newTags"
        @emitOption="(option) => selectedOption = option"
    >
        <template #button>
            <v-button @click.native="createTask">Create</v-button>
        </template>
    </edit-task-page>
</template>

<script>
    import EditTaskPage from '@/components/Tasks/EditTaskPage.vue';
    import vButton from '@/components/app/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CreatePage',
        data() {
            return {
                title: '',
                text: '',
                tags: [],
                selectedOption: {}
            }
        },
        components: {
            EditTaskPage,
            vButton
        },
        methods: {
            ...mapActions([
                'addTask'
            ]),
            createTask() {
                const _title = this.title;
                const _text = this.text;

                if (_title.trim().length && _text.trim().length) {
                    const data = {
                        title: this.title,
                        text: this.text,
                        tags: this.tags,
                        listId: this.selectedOption.id
                    };

                    this.addTask(data);
                    this.title = '';
                    this.text = '';
                    this.tags = [];
                    this.selectedOption = {};

                    this.$refs.editPage.reset();
                }
            },
            autoSelectList(id) {
                this.selectedOption = this.getList(id);
            }
        },
        computed: {
            ...mapGetters([
                'getList',
                'getListsNamesAndIdArray'
            ])
        },
        beforeRouteEnter(to, from, next) {
            if (from.query.listId) {
                next(vm => {
                    vm.autoSelectList(from.query.listId);
                });
                
                return;
            }

            next();
        }
    }
</script>

<style lang="scss">

</style>