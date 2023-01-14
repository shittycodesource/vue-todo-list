<template>
    <v-input-wrapper>
        <span v-if="label">{{ label }}</span>
    
        <textarea
            class="textarea"
            :placeholder="placeholder"
            :value="value" 
            @input="onInput"
        ></textarea>
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
    }
};
</script>

<style lang="scss">
	.textarea {
		background: none;
		border: none;
		resize: none;

		font-family: inherit;
		font-size: inherit;
		color: #000;

		&::placeholder {
            color: #767676;
        }

		&:focus {
			outline: none;
		}
	}
</style>