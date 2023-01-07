<template>
    <BaseTextarea
        class="task-text-input w100p" 
        placeHolder="Add new task"
        ref="textarea"
        v-model.trim="inputValue" 
    >
        <BaseButton @click.native="createTask">Create</BaseButton>
    </BaseTextarea>
</template>

<script>
import { mapActions } from 'vuex';
import BaseTextarea from './app/BaseTextarea.vue';
import BaseButton from './app/BaseButton.vue';

    export default {
        name: 'TheTaskTextInput',
        data() {
            return {
                inputValue: ''
            }
        },
        components: {
            BaseTextarea,
            BaseButton
        },
        methods: {
            ...mapActions([
                'addTask'
            ]),
            createTask() {
                this.addTask(this.inputValue);
                this.inputValue = '';

                this.$refs.textarea.$el.children[0].removeAttribute('style');
            }
        },
    }
</script>

<style lang="scss">
    .task-text-input {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        margin: 0 auto 80px;

        .textarea {
            height: 23px;
            margin-bottom: 5px;
            width: 100%;
            margin-right: 20px;
        }
    }
</style>