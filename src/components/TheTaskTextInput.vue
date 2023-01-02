<template>
    <BaseInput
        class="task-text-input w100p" 
        placeHolder="Add new task"
        v-model.trim="inputValue" 
    >
        <BaseButton @click.native="createTask">Create</BaseButton>
    </BaseInput>
</template>

<script>
import { mapActions } from 'vuex';
import BaseInput from './app/BaseInput.vue';
import BaseButton from './app/BaseButton.vue';

    export default {
        name: 'TheTaskTextInput',
        data() {
            return {
                inputValue: ''
            }
        },
        components: {
            BaseInput,
            BaseButton
        },
        methods: {
            ...mapActions([
                'addTask'
            ]),
            createTask() {
                this.addTask(this.inputValue);
                this.inputValue = '';
            }
        }
    }
</script>

<style lang="scss">
    .task-text-input {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto 80px;

        .input {
            height: fit-content;
            width: 100%;
            padding-right: 20px;
        }
    }
</style>