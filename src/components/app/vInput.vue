<template>
    <v-input-wrapper>
        <span v-if="label">{{ label }}</span>
    
        <input
            class="input"
            type="text"
            :placeholder="placeholder"
            :value="value" 
            @input="onInput"
        />
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';

export default {
    name: "vInput",
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
    .input {
        width: 100%;

        padding: 13px 15px;

        background: #fff;
        border: none;
        border: 1px solid #F5F5F5;
        border-radius: 18px;
        box-shadow: $baseBoxShadow;

        font-family: inherit;
        color: $textColor;
        font-size: inherit;

        &::placeholder {
            color: #767676;
        }

        &:focus {
            outline: none;
        }
    }
</style>