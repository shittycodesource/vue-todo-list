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

        padding: 8px 25px;

        border: 1px solid $mainColor;
        background: #fff;
        border-radius: 8px;
        cursor: pointer;

        font-family: inherit;
        font-size: 16px  ;
        color: #000;
        text-decoration: none;

        transition: background .2s linear, color .2s linear;

        &:hover {
            background: $mainColor;
            color: invert($mainColor);
        }
        
        &.active {
            background: darken(#fff, 10%);
        }
    }
</style>