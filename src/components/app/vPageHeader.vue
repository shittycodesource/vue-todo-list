<template>
    <header class="page-header">
        <router-link :to="link" class="page-header__link">&lt; Back</router-link>
        <slot></slot>
    </header>
</template>

<script>
    export default {
        name: 'vPageHeader',
        props: {
            link: {
                type: [String, Object],
                default: '/'
            }
        }
    }
</script>

<style lang="scss" >
    .page-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 80px;

        &__link {
            color: var(--textColor);
            font-size: 20px;
            text-decoration: none;

            transition: color .2s linear;

            &:hover {
                color: var(--mainTextColor);
            }
        }
    }
</style>