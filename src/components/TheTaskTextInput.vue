<template>
    <v-input-wrapper class="task-text-input">
        <vTextarea
            placeholder="Add new task"
            ref="textarea"
            v-model="inputValue"
            :maxlength="
                isMaxLines 
                    ? inputValue.length 
                    : maxCharacters
            "
        ></vTextarea>

        <transition name="fade">
            <div class="task-text-input__btn" v-if="inputValue">
            
                <span v-if="inputValue.length">
                    {{ inputValue.length }} / {{ maxCharacters }}
                    {{ isMaxLines ? maxLinesMessage : '' }}
                </span>
                <span v-else></span>

                <v-button @click.native="createTask">Create</v-button>
            </div>
        </transition>

    </v-input-wrapper>
</template>

<script>
    import { mapActions } from 'vuex';
    import vInputWrapper from './app/vInputWrapper';
    import vTextarea from './app/vTextarea.vue';
    import vButton from './app/vButton.vue';

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
            vInputWrapper,
            vTextarea,
            vButton,
        },
        methods: {
            ...mapActions([
                'addTask'
            ]),
            createTask() {
                this.addTask(this.inputValue);
                this.inputValue = '';

                this.$refs.textarea.$el.removeAttribute('style');
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