<template>
    <button class="burger" type="button">
        <span></span>
    </button>
</template>

<script>
    export default {
        name: 'vBurgerMenu'
    }
</script>

<style lang="scss">
    .burger {
        width: 25px;
        height: 12px;

        position: relative;

        background: none;
        border: none;
        cursor: pointer;

        &::before,
        &::after {
            content: '';
        }

        span,
        &::before,
        &::after {
            width: 100%;
            height: 2px;

            background: #000;

            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
        }

        &::before {
            top: 0;
        }

        &::after {
            top: 100%;
        }
    }
</style>