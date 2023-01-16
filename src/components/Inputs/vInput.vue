<template>
    <v-input-wrapper>
        <span v-if="label">{{ label }}</span>
    
        <input
            class="input"
            :class="{'input--with-message': message}"
            type="text"
            :placeholder="placeholder"
            :value="value" 
            @input="onInput"
        />
        <div class="input-message" v-if="message">{{ message }}</div>
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';

export default {
    name: "vInput",
    data() {
        return {
            text: '',
        }
    },
    components: {
        vInputWrapper
    },
    props: {
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
            this.$emit('input', event.target.value);
        }
    }
};
</script>

<style lang="scss">
    .input {
        display: block;

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

        transition: border-bottom-left-radius .2s, border-bottom-right-radius .2s;
        
        &::placeholder {
            color: #767676;
        }

        &:focus {
            outline: none;
        }
        
        &--with-message {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        &-message {
            display: flex;
            align-items: center;

            padding: 4px 13px;

            border-bottom-right-radius: 18px;
            border-bottom-left-radius: 18px;
            background: $blockBackgroundColor;
            box-shadow: $baseBoxShadow;
            
            position: relative;

            color: $textColor;
            font-weight: 400;
        }
    }
</style>