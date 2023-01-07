<template>
    <div class="input-wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BaseInputWrapper",
};
</script>

<style lang="scss">
    .input-wrapper {
        display: block;
        width: fit-content;

        padding: 20px;

        background: #fff;
        box-shadow: $baseBoxShadow;
    }
</style>