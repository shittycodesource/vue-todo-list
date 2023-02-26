<template>
    <task-edit-form
        ref="editForm"
        :title="title" 
        :text="text"
        :tags="tags"
        :listSelect="true"
        :selectedOption="selectedOption"
        :selectOptions="getListsData"

        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
        @emitTags="(newTags) => tags = newTags"
        @emitOption="(option) => selectedOption = option"
    >
        <template #button>
            <v-button @click.native="createTask">Create</v-button>
        </template>
    </task-edit-form>
</template>

<script>
    import TaskEditForm from '@/components/Tasks/TaskEditForm.vue';
    import vButton from '@/components/app/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CreateTaskPage',
        data() {
            return {
                title: '',
                text: '',
                tags: [],
                selectedOption: {}
            }
        },
        components: { TaskEditForm, vButton },
        methods: {
            ...mapActions([
                'addTask'
            ]),
            createTask() {
                const _title = this.title;
                const _text = this.text;

                if (_title.trim().length && _text.trim().length && this.selectedOption.id) {
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

                    this.$refs.editForm.reset();
                }
            },
            autoSelectList(id) {
                console.log(id);
                console.log('id');
                this.selectedOption = this.getList(id);
            }
        },
        computed: {
            ...mapGetters([
                'getList',
                'getListsData'
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