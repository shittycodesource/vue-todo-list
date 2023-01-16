<template>
    <v-edit-task-page 
        ref="editPage"
        :notFound="notFound"
        :title="title" 
        :text="text"
        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
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
                notFound: false
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