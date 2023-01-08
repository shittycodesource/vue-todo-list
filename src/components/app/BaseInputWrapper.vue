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
        width: 100%;

        padding: 20px;

        background: #fff;
        box-shadow: $baseBoxShadow;
    }
</style>