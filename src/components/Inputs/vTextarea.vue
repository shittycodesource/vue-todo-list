<template>
    <v-input-wrapper>
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
                v-textarea
                ref="input"
            ></textarea>
            <transition name="fade">
                <div class="input-message" v-if="message">{{ message }}</div>
            </transition>
        </template>
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';

export default {
    name: "vTextarea",
    components: {
        vInputWrapper
    },
    props: {
        maxLength: {
            type: String,
            default: ''
        },
        message: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
            required: true
        },
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value)
        },
        resetTextarea() {
            this.$refs.input.removeAttribute('style');
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

		height: 25px;
        overflow: hidden;
        resize: none;

		font-family: inherit;
		font-size: inherit;
		color: var(--mainTextColor);

		&:focus {
			outline: none;
		}
	}
</style>