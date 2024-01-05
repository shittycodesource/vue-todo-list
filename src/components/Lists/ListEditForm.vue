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

                <v-color-picker
                    :hue="+colorDataValue.angle || 0"
                    :defaultIsWhite="true"
                    v-model="colorDataValue"
                    :light="60"
                    @input="newColorData => $emit('emitColorData', newColorData)"
                    :disabled="false"
                />

                <div class="flex content-center">
                    <slot name="button"></slot>
                </div>
            </template>
            <template v-else>
                <p>This list is not found or deleted</p>
            </template>
        </form>
    </v-container>
</template>

<script>
    import vPageHeader from '../app/vPageHeader.vue';
    import vContainer from '../app/vContainer.vue';
    import vInput from '../Inputs/vInput.vue';
    import vTextarea from '../Inputs/vTextarea.vue';
    import editFormMixin from '../../mixins/editFormMixin';
    import vColorPicker from '../Inputs/vColorPicker.vue';
    import localizeFilter from '../../filters/localize.filter.js';

    export default {
        name: 'ListEditForm',
        mixins: [ editFormMixin ],  // computed properties and emit option methods
        data() {
            return {
                inputLabels: [
                    localizeFilter('Title'),
                    localizeFilter('Description')
                ],
                inputPlaceholders: [
                    localizeFilter('ListTitleInputPlaceholder'),
                    localizeFilter('ListDescriptionInputPlaceholder')
                ],
                maxCharacters: 120,
                maxLines: 8,
                titleValue: this.name,
                textValue: this.description,
                colorDataValue: this.colorData
            }
        },
        components: {vContainer, vPageHeader, vInput, vTextarea, vColorPicker },
        props: {
            notFound: { type: Boolean,  default: false },
            name: { type: String,  default: '' },
            description: { type: String, default: '' },
            colorData: { type: Object, default: () =>  ({ angel: 0, color: 0 }) }
        },
        methods: {
            reset() {
                this.titleValue = '';
                this.textValue = '';

                this.$refs.textarea.resetTextarea();
            },
        }
    }
</script>