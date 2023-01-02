<template>
    <div class="input-wrapper">
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeHolder"
            class="input"
            type="text"
        />
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        value: {
            type: String,
            default: "",
        },
        placeHolder: {
            type: String,
            default: "",
        },
    }
};
</script>

<style lang="scss">
.input-wrapper {
    display: block;
    width: fit-content;

    padding: 20px;

    background: #fff;
    box-shadow: $baseBoxShadow;

    .input {
        background: none;
        border: none;

        color: #000;
        font-size: inherit;

        &::placeholder {
            color: #767676;
        }

        &:focus {
            outline: none;
        }
    }
}
</style>