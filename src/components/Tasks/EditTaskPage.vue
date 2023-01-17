<template>
    <v-container>
        <v-page-header/>
        <template v-if="!notFound">
            <v-input 
                @input="$emit('emitInput', titleValue)"
                class="mb20px"
                label="Title:" 
                :value="titleValue" 
                v-model="titleValue" 
                placeholder="Your title here..."
            />

            <v-textarea
                @input="$emit('emitTextarea', textValue)"
                class="mb20px"
                label="Text:" 
                :value="textValue" 
                v-model="textValue" 
                ref="textarea"
                placeholder="Your text here..."
                :maxLength="
                    isMaxLines 
                        ? textValue.length.toString() 
                        : maxCharacters.toString()
                "
                :message="
                    isMaxLines
                        ? linesMessage + maxLinesMessage
                        : linesMessage
                "
            />
            <v-tags-input 
                :tags="tags" 
                placeholder="Your tags here..."
                @addTag="emitTags"
            />
            <slot name="button"></slot>
        </template>
        <template v-else>
            <p>This task is not found or deleted</p>
        </template>
    </v-container>
</template>

<script>
    import vPageHeader from '../app/vPageHeader.vue';
    import vContainer from '../app/vContainer.vue';
    import vInput from '../Inputs/vInput.vue';
    import vTextarea from '../Inputs/vTextarea.vue';
    import vTagsInput from '../Inputs/vTagsInput.vue';

    export default {
        name: 'EditTaskPage',
        data() {
            return {
                maxCharacters: 2048,
                maxLines: 48,
                titleValue: this.title,
                textValue: this.text,
            }
        },
        props: {
            notFound: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: '',
            },
            tags: {
                type: Array,
                required: true
            }
        },
        components: {
            vContainer,
            vPageHeader,
            vInput,
            vTextarea,
            vTagsInput
        },
        methods: {
            reset() {
                this.titleValue = '';
                this.textValue = '';

                this.$refs.textarea.$el.children[1].removeAttribute('style');
            },
            update() {
                this.$forceUpdate();
            },
            emitTags(arr) {
                this.$emit('throwTags', arr);
            }
        },
        computed: {
            lineCount() {
                return this.textValue.split('\n').length;
            },
            isMaxLines() {
                return this.lineCount >= this.maxLines;
            },
            linesMessage() {
                if (this.textValue.length) {
                    return `${this.textValue.length} / ${this.maxCharacters}`;
                }
            },
            maxLinesMessage() {
                if (this.textValue.length) {
                    return `(${this.maxLines} lines max)`;
                }
            }
        }
    }
</script>

<style lang="scss">

</style>