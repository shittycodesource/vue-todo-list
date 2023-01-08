<template>
	<textarea
        :value="value"
        @input="$emit('input', $event.target.value)" 
        class="textarea"
        v-textarea
	></textarea>
</template>

<script>
export default {
    name: "BaseTextarea",
    props: {
        value: {
            type: String,
            default: ''
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