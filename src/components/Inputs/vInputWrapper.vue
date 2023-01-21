<template>
    <label class="input-block">
        <slot name="label"></slot>
        <span class="input-wrapper">
            <slot name="input"></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: "vInputWrapper",
};
</script>

<style lang="scss">
    .input-block {
        display: block;
        width: 100%;

        & > span {
            display: block;
            color: $textColor;
            margin-bottom: 10px;
        }

        &--tags {
            .input-wrapper {
                display: flex;
                align-items: center;
            }
        }
    }

    .input-wrapper {
        display: block;

        width: 100%;

        padding: 13px 15px;

        background: #fff;
        border: none;
        border: 1px solid #F5F5F5;
        border-radius: 18px;
        box-shadow: $baseBoxShadow;
    }
</style>