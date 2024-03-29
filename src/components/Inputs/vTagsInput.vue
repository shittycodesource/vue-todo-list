<template>
    <v-input-wrapper :class="{'focus': isFocused}" class="input-block--tags">
        <template #label>
        	<span v-if="label">{{ label }}</span>
        </template>
    	
    	<template #input>
    		<div class="input-container custom-scrollbar" :class="{'notEmpty': tags.length}" ref="scrollbar">
                <tags 
                    :tags="tags" 
                    :isEditable="editTags"
                    @deleteTag="deleteTag"
                />
                <input
                    v-if="tags.length != 6"
                    class="input"
                    ref="input"
                    :class="{'input--with-message': message, 'input--tags': tags.length}"
                    type="text"
                    :disabled="isDisabled"
                    :placeholder="!isDisabled ? placeholder : ''"
                    @keydown="addTag"
                    @keydown.delete="removePrevTag"
                    @blur="onBlur"
                    @focus="onFocus"
                    maxlength="20"
                />
                <div class="input-message" v-if="message">{{ message }}</div>
            </div>
    	</template>
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';
import Tags from '../Tags.vue';
import inputFocusMixin from '../../mixins/inputFocusMixin';

export default {
    name: "vTagsInput",
    mixins: [ inputFocusMixin ],
    components: { vInputWrapper, Tags },
    data() {
        return {
            scrollCounter: 0,
        }
    },
    props: {
        value: { type: String, default: '' },
        message: { type: String, default: '' },
        placeholder: { type: String, default: '' },
        label: { type: String, default: '' },
        tags: { type: Array, default: () => [], },
        editTags: { type: Boolean, default: true }
    },
    methods: {
        addTag(event) {
        	if (event.code == 'Comma' || event.code == 'Enter') {
                event.preventDefault();
        		this.pushTag();
            }
        },
        pushTag() {
            let val = this.$refs.input.value.trim();

            if (val.length && !this.tags.includes(val)) {
                this.tags.push(val);
                this.$refs.input.value = '';

                this.$emit('addTag', this.tags);

                if (this.tags.length != 6) {
                    setTimeout(() => {
                        this.$refs.scrollbar.scrollTo({ left: this.$refs.scrollbar.scrollWidth, behavior: 'smooth' })
                    }, 0);
                }
            }
        },
        deleteTag(index) {
            this.tags.splice(index, 1);
            this.$emit('deleteTag');
        },
        removePrevTag(event) {
        	if (event.target.value.length === 0 && this.tags.length) {
        		this.deleteTag(this.tags.length - 1);
        	}
        },
    },
    computed: {
    	isDisabled() {
    		if (this.tags.length == 6) {
    			return true;
    		}
    	}
    }
};
</script>

<style lang="scss">
    .input {
        display: block;

        width: 100%;
        min-width: fit-content;

        font-family: inherit;
        color: var(--textColor);
        font-size: inherit;

        transition: border-bottom-left-radius .2s, border-bottom-right-radius .2s;
        
        &::placeholder {
            color: var(--inputPlaceholderColor);
        }

        &:focus {
            outline: none;
        }

        &--tags {
        	margin-left: 10px;
        }
    }

    .input-block--tags {
        .input-container {
            display: flex;
            align-items: center;
            overflow-x: overlay;

            &.notEmpty {
                .tags,
                .input {
                    margin-bottom: 5px;
                    padding-bottom: 5px;
                }
            }

            &.custom-scrollbar {
                &::-webkit-scrollbar {
                    height: 4px;
                }
            }
        }
    }
</style>