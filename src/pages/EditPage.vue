<template>
    <edit-task-page 
        ref="editPage"
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
    </edit-task-page>
</template>

<script>
    import EditTaskPage from '../components/Tasks/EditTaskPage.vue';
    import vButton from '../components/app/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CreatePage',
        data() {
            return {
                title: '',
                text: '',
                tags: [],
                notFound: false
            }
        },
        components: {
            EditTaskPage,
            vButton
        },
        computed: {
            ...mapGetters([
                'getTask'
            ]),
            theTask() {
                return this.getTask(this.$route.query.id);
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
                    id: this.theTask.id
                };

                this.updateTask(data);
                this.$router.push({ name: 'task', query: { id: data.id }});
            }
        },
        created() {
            if (this.theTask) {
                this.title = this.theTask.title;
                this.text = this.theTask.text;
            } else {
                this.notFound = true;
            }
        }
    }
</script>

<style lang="scss">

</style>