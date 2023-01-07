<template>
    <BaseInputWrapper>
    	<textarea class="textarea"
    		:value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeHolder"
            v-textarea
    	></textarea>
    	

    	<slot></slot>
    </BaseInputWrapper>
</template>

<script>
import BaseInputWrapper from './BaseInputWrapper.vue';

export default {
    name: "BaseTextarea",
    components: {
        BaseInputWrapper
    },
    props: {
        value: {
            type: String,
            default: "",
        },
        placeHolder: {
            type: String,
            default: "",
        },
    },
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