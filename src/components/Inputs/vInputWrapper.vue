<template>
    <label class="input-wrapper">
        <slot></slot>
    </label>
</template>

<script>
export default {
    name: "vInputWrapper",
};
</script>

<style lang="scss">
    .input-wrapper {
        display: block;
        width: 100%;

        span {
            display: block;
            color: $textColor;
            margin-bottom: 10px;
        }
    }
</style>