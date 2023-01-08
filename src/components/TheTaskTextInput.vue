<template>
    <BaseInputWrapper class="task-text-input">
        <BaseTextarea
            placeholder="Add new task"
            ref="textarea"
            v-model:value="inputValue"
            :maxlength="
                isMaxLines 
                    ? inputValue.length 
                    : maxCharacters
            "
        ></BaseTextarea>

        <div class="task-text-input__btn">
            
            <span v-if="inputValue.length">
                {{ inputValue.length }} / {{ maxCharacters }}
                {{ isMaxLines ? maxLinesMessage : '' }}
            </span>
            <span v-else></span>

            <BaseButton @click.native="createTask">Create</BaseButton>
        </div>

    </BaseInputWrapper>
</template>

<script>
import { mapActions } from 'vuex';
import BaseInputWrapper from './app/BaseInputWrapper';
import BaseTextarea from './app/BaseTextarea.vue';
import BaseButton from './app/BaseButton.vue';

    export default {
        name: 'TheTaskTextInput',
        data() {
            return {
                inputValue: '',
                maxCharacters: 2048,
                maxLines: 48
            }
        },
        components: {
            BaseInputWrapper,
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
        computed: {
            lineCount() {
                return this.inputValue.split('\n').length;
            },
            isMaxLines() {
                return this.lineCount == this.maxLines;
            },
            maxLinesMessage() {
                return '(' + this.maxLines + ' lines max)';
            }
        }
    }
</script>

<style lang="scss">
    .task-text-input {
        display: flex;
        flex-direction: column;

        margin: 0 auto 80px;

        .textarea {
            height: 23px;
            width: 100%;
            margin-right: 20px;
        }

        &__btn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
</style>