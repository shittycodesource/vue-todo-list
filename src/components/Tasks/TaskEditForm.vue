<template>
    <v-container>
        <v-page-header :link="link"/>
        <template v-if="!notFound">
            <v-input 
                @input="$emit('emitInput', titleValue)"
                class="mb20px"
                label="Title" 
                :value="titleValue" 
                v-model="titleValue" 
                placeholder="Task title..."
                :maxLength="48"
            />

            <v-textarea
                @input="$emit('emitTextarea', textValue)"
                class="mb20px"
                label="Text" 
                :value="textValue" 
                v-model="textValue" 
                ref="textarea"
                placeholder="Task text..."
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
                label="Tags"
                class="mb20px"
                :tags="tags" 
                :isEditable="true"
                placeholder="Task tags..."
                @addTag="emitTags"
            />

            <v-select
                v-if="listSelect"
                :options="selectOptions"
                :selectedOption="selectedOption"
                label="List"
                defaultTitle="Choose which list to put it in"
                class="mb20px"
                @selectOption="emitOption"
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
    import vSelect from '../Inputs/vSelect.vue';
    import editFormMixin from '../../mixins/editFormMixin';

    export default {
        name: 'TaskEditForm',
        mixins: [ editFormMixin ], // computed properties and emit option methods
        data() {
            return {
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