<template>
    <v-container>
        <form class="form">
            <template v-if="!notFound">
                <h3 class="form__title">
                    <slot name="form-title"></slot>
                </h3>
                <v-input 
                    @input="$emit('emitInput', titleValue)"
                    class="mb20px"
                    :label="inputLabels[0]" 
                    :value="titleValue" 
                    v-model="titleValue" 
                    :placeholder="inputPlaceholders[0]"
                    :maxLength="48"
                />

                <v-textarea
                    @input="$emit('emitTextarea', textValue)"
                    class="mb20px"
                    :label="inputLabels[1]" 
                    :value="textValue" 
                    v-model="textValue" 
                    ref="textarea"
                    :placeholder="inputPlaceholders[1]"
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
                    :label="inputLabels[2]"
                    class="mb20px"
                    :tags="tags" 
                    :isEditable="true"
                    :placeholder="inputPlaceholders[2]"
                    @addTag="emitTags"
                />

                <v-select
                    v-if="listSelect"
                    :options="selectOptions"
                    :selectedOption="selectedOption"
                    :label="inputLabels[3]"
                    :defaultTitle="inputPlaceholders[3]"
                    class="mb20px"
                    @selectOption="emitOption"
                />
                <div class="flex content-center">
                    <slot name="button"></slot>
                </div>
            </template>
            <template v-else>
                <p>This task is not found or deleted</p>
            </template>
        </form>
    </v-container>
</template>

<script>
    import vPageHeader from '../app/vPageHeader.vue';
    import vContainer from '../app/vContainer.vue';
    import vInput from '../Inputs/vInput.vue';
    import vTextarea from '../Inputs/vTextarea.vue';
    import vTagsInput from '../Inputs/vTagsInput.vue';
    import vSelect from '../Inputs/vSelect.vue';
    import editFormMixin from '../../mixins/editFormMixin';
    import localizeFilter from '../../filters/localize.filter.js';

    export default {
        name: 'TaskEditForm',
        mixins: [ editFormMixin ], // computed properties and emit option methods
        data() {
            return {
                inputLabels: [
                    localizeFilter('Title'), 
                    localizeFilter('Text'),
                    localizeFilter('Tags'),
                    localizeFilter('List'),
                ],
                inputPlaceholders: [
                    localizeFilter('TaskTitleInputPlaceholder'), 
                    localizeFilter('TaskTextInputPlaceholder'),
                    localizeFilter('TaskTagsInputPlaceholder'),
                    localizeFilter('TaskListInputPlaceholder'),
                ],
                maxCharacters: 2048,
                maxLines: 48,
                titleValue: this.title,
                textValue: this.text,
                tagsValue: this.tags
            }
        },
        props: {
            link: { type: [String, Object] },
            notFound: { type: Boolean, default: false },
            listSelect: { type: Boolean, default: false, },
            selectedOption: {
                type: [Object, Boolean], // if prop is boolean then sets default title
            },
            selectOptions: { type: Array },
            title: { type: String, default: '' },
            text: { type: String, default: '' },
            tags: { type: Array, required: true }
        },
        components: { vContainer, vPageHeader, vInput, vTextarea, vTagsInput, vSelect },
        methods: {
            reset() {
                this.titleValue = '';
                this.textValue = '';
                this.tagsValue = [];

                this.$refs.textarea.resetTextarea();
            },
            emitTags(arr) {
                this.$emit('throwTags', arr);
            },
        },
    }
</script>

<style lang="scss">
    .form {
        margin-top: 50px;

        &__title {
            text-align: center;
            font-size: 16px;
            color: var(--main-text);
            font-weight: 400;
            text-transform: uppercase;
        }

        .input-block {
            max-width: 550px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>