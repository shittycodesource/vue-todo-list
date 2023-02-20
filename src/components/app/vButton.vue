<template>
    <button class="btn" type="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'vButton'
    }
</script>

<style lang="scss">
    .btn {
        display: block;

        padding: 5px 20px;

        border: 1px solid $mainColor;
        background: transparent;
        border-radius: 8px;
        cursor: pointer;

        font-family: inherit;
        font-size: 16px  ;
        color: #000;
        text-decoration: none;

        transition: background .2s linear, color .2s linear;

        &--no-border {
            border: none;
            border-radius: 0;
        }

        &--text-left {
            text-align: left;
        }

        &--full-width {
            width: 100%;
        }

        &:hover,
        &:focus {
            outline: none;
            background: $mainColor;
            color: invert($mainColor);
        }
        
        &.active {
            background: darken(#fff, 10%);
        }
    }
</style>