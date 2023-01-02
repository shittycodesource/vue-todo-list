<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton'
    }
</script>

<style lang="scss">
    .btn {
        display: block;

        padding: 10px 20px;

        border: none;
        background: #fff;
        box-shadow: $baseBoxShadow;
        cursor: pointer;

        font-family: inherit;
        font-size: inherit;
        color: #000;

        transition: box-shadow .2s linear;

        &--delete {
            background: #FFCACA;
            color: #FF0000;
        }

        &:hover {
            box-shadow: $baseBoxShadowHover;
        }
    }
</style>