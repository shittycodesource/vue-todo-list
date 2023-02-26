<template>
    <task-edit-form 
        ref="editForm"
        :link="{ name: 'task', query: { listId: $route.query.listId, id: $route.query.id } }"
        :notFound="notFound"
        :title="title" 
        :text="text"
        :tags="tags"
        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
        @emitTags="(newTagsew) => tags = newTags"
    >
        <template #button>
            <v-button @click.native="editTask">Edit</v-button>
        </template>
    </task-edit-form>
</template>

<script>
    import TaskEditForm from '../../components/Tasks/TaskEditForm.vue';
    import vButton from '../../components/app/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'EditTaskPage',
        data() {
            return {
                title: '',
                text: '',
                tags: [],
                notFound: false
            }
        },
        components: {
            TaskEditForm,
            vButton
        },
        computed: {
            ...mapGetters([
                'getTask'
            ]),
            theTask() {
                return this.getTask(this.$route.query.listId, this.$route.query.id);
            }
        },
        methods: {
            ...mapActions([
                'updateTask'
            ]),
            editTask() {
                const data = {
                    title: this.title,
                    text: this.text,
                    tags: this.tags,
                    id: this.theTask.id,
                    listId: this.theTask.listId
                };

                this.updateTask(data);
                this.$router.push({ name: 'task', query: { listId: data.listId, id: data.id }});
            }
        },
        created() {
            if (this.theTask) {
                this.title = this.theTask.title;
                this.text = this.theTask.text;
                this.tags = this.theTask.tags;
            } else {
                this.notFound = true;
            }
        }
    }
</script>