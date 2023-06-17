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
                    label="Name:" 
                    :value="titleValue" 
                    v-model="titleValue" 
                    placeholder="Type name here..."
                    :maxLength="48"
                />

                <v-textarea
                    @input="$emit('emitTextarea', textValue)"
                    class="mb20px"
                    label="Description:" 
                    :value="textValue" 
                    v-model="textValue" 
                    ref="textarea"
                    placeholder="Type description here..."
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

    export default {
        name: 'ListEditForm',
        mixins: [ editFormMixin ],  // computed properties and emit option methods
        data() {
            return {
                maxCharacters: 120,
                maxLines: 8,
                titleValue: this.name,
                textValue: this.description,
            }
        },
        components: {vContainer, vPageHeader, vInput, vTextarea },
        props: {
            notFound: { type: Boolean,  default: false },
            name: { type: String,  default: '' },
            description: { type: String, default: '' },
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