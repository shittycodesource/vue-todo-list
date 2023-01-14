<template>
    <v-edit-task-page 
        ref="editPage"
        :title="title" 
        :text="text"
        @emitInput="(newTitle) => title = newTitle"
        @emitextarea="(newText) => text = newText"
    >
        <template #button>
            <v-button @click.native="editTask">Edit</v-button>
        </template>
    </v-edit-task-page>
</template>

<script>
    import vEditTaskPage from '../components/app/vEditTaskPage.vue';
    import vButton from '../components/app/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'CreatePage',
        data() {
            return {
                title: '',
                text: '',
            }
        },
        components: {
            vEditTaskPage,
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
                'addTask'
            ]),
            editTask() {
                const data = {
                    title: this.title,
                    text: this.text
                };

                this.updateTask(data);
                this.title = '';
                this.text = '';

                this.$refs.editPage.reset();
            }
        },
        created() {
            this.title = this.theTask.title;
            this.text = this.theTask.text;
        }
    }
</script>

<style lang="scss">

</style>