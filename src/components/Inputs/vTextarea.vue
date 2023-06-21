<template>
    <v-input-wrapper :class="{'focus': isFocused}">
        <template #label>
            <span v-if="label">{{ label }}</span>
        </template>
    
        <template #input>
            <textarea
                class="input input--textarea"
                :class="{'input--with-message': message}"
                :placeholder="placeholder"
                :value="value" 
                :maxlength="maxLength"
                @input="onInput"
                @blur="onBlur"
                @focus="onFocus"
                v-textarea
                ref="input"
            ></textarea>
            <transition name="fade">
                <div class="textarea__info" v-if="message">
                    <div class="input-message">{{ message }}</div>
                    <div class="input-clear">
                        <v-icon name="#close" @click.native="clearTextarea"/>
                    </div>
                </div>
            </transition>
        </template>
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';
import vIcon from '../app/vIcon.vue';
import inputFocusMixin from '../../mixins/inputFocusMixin';

export default {
    name: "vTextarea",
    mixins: [ inputFocusMixin ],
    components: { vInputWrapper, vIcon },
    props: {
        maxLength: { type: String, default: '' },
        message: { type: String, default: '', },
        placeholder: { type: String, default: '' },
        label: { type: String, default: '', },
        value: { type: String, default: '', required: true },
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value)
        },
        resetTextarea() {
            this.$refs.input.removeAttribute('style');
        },
        clearTextarea() {
            this.resetTextarea();
        }
    },
    mounted() {
        let input = this.$refs.input;
        setTimeout(() => {
            input.setAttribute('style', `height: ${input.scrollHeight + 'px'}`); 
        }, 0);
    }
};
</script>

<style lang="scss">
    .input--textarea {
        margin: 0;

		height: 23px;
        overflow: hidden;
        resize: none;

		&:focus {
			outline: none;
		}
	}

    .textarea__info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .input-clear {
            svg {
                fill: var(--light-text);
                width: 11px;
                height: 11px;
                cursor: pointer;

                &:hover {
                    fill: var(--secondary-text);
                }
            }
        }
    }
</style>