<template>
    <nav class="nav">
        <router-link 
            v-for="link in links"
            :to="link.to"
            :key="link.name"
            :exact="link.exact"
            active-class="active"
            class="nav__link"
            @click.native="$emit('linkClick')"
        >
            {{ link.name }}
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: 'vNav',
        props: {
            links: {
                type: Array,
                default: [],
                required: true
            }
        }
    }
</script>

<style lang="scss">
    .nav {
        display: flex;
        flex-direction: column;

        &__link {
            margin: 10px 0;

            color: $textColor;
            text-decoration: none;

            transition: color .2s linear;

            &:hover,
            &.active {
                color: $mainColor;
            }
        }
    }
</style>