<template>
    <v-input-wrapper>
        <span v-if="label">{{ label }}</span>
    
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
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';

export default {
    name: "vTextarea",
    data() {
        return {
            text: ''
        }
    },
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

		height: 51px;
        overflow: hidden;
        resize: none;

		font-family: inherit;
		font-size: inherit;
		color: #000;

		&:focus {
			outline: none;
		}
	}
</style>