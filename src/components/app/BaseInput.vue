<template>
    <input
        class="input"
        type="text"
    />
</template>

<script>
export default {
    name: "BaseInput",
};
</script>

<style lang="scss">
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
</style>