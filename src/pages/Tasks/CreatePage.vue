<template>
    <edit-task-page 
        ref="editPage"
        :title="title" 
        :text="text"
        :tags="tags"
        @emitInput="(newTitle) => title = newTitle"
        @emitTextarea="(newText) => text = newText"
        @emitTags="(newTags) => tags = newTags"
    >
        <template #button>
            <v-button @click.native="createTask">Create</v-button>
        </template>
    </edit-task-page>
</template>

<script>
    import EditTaskPage from '@/components/Tasks/EditTaskPage.vue';
    import vButton from '@/components/app/vButton.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'CreatePage',
        data() {
            return {
                title: '',
                text: '',
                tags: []
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
                        tags: this.tags
                    };

                    this.addTask(data);
                    this.title = '';
                    this.text = '';
                    this.tags = [];

                    this.$refs.editPage.reset();
                }
            }
        },
    }
</script>

<style lang="scss">

</style>