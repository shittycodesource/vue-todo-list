<template>
    <v-input-wrapper>
        <template #label>
            <span v-if="label">{{ label }}</span>
        </template>
    
        <template #input>
            <input
                class="input"
                :class="{'input--with-message': message}"
                type="text"
                :placeholder="placeholder"
                :value="value" 
                @input="onInput"
                @keydown.enter="onEnter"
                :maxlength="maxLength ? maxLength : ''"
            />
            <div class="input-message" v-if="message">{{ message }}</div>
        </template>
    </v-input-wrapper>
</template>

<script>
import vInputWrapper from './vInputWrapper.vue';

export default {
    name: "vInput",
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
        },
        maxLength: {
            type: Number,
            default: 256
        }
    },
    methods: {
        onInput(event) {
            this.$emit('input', event.target.value);
        },
        onEnter(event) {
            this.$emit('enter', event.target.value);
        }
    }
};
</script>

<style lang="scss">
    .input {
        display: block;

        width: 100%;

        background: none;
        border: none;

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
        
        &-message {
            display: flex;
            align-items: center;

            padding: 8px 0px;

            color: $textColor;
            font-weight: 400;
        }
    }
</style>