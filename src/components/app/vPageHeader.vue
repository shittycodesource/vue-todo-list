<template>
    <header class="page-header">
        <router-link to="/" class="page-header__link">&lt; Back</router-link>
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name: 'vPageHeader'
    }
</script>

<style lang="scss" >
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 80px;

        &__link {
            color: $textColor;
            font-size: 20px;
            text-decoration: none;

            transition: color .2s linear;

            &:hover {
                color: $mainColor;
            }
        }
    }
</style>