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
            <v-icon :name="link.iconName" class="nav__icon"/>
            {{ link.name | localizeFilter }}
        </router-link>
    </nav>
</template>

<script>
    import vIcon from './vIcon.vue';
    import '../../filters/localize.filter.js';

    export default {
        name: 'vNav',
        components: { vIcon },
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

        &__icon {
            width: 18px;
            height: 18px;

            margin-right: 10px;

            fill: var(--secondary-text);
        }

        &__link {
            display: flex;
            align-items: center;

            margin-bottom: 10px;
            padding: 10px;

            color: var(--secondary-text);
            text-decoration: none;

            background: var(--nav-link-background-color);

            position: relative;

            transition: color .2s linear, background .2s linear;

            &::after {
                content: '';
                height: 100%;
                width: 3px;

                background: var(--blue);
                border-top-right-radius: 15px;
                border-bottom-right-radius: 15px;

                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;

                opacity: 0;

                transition: opacity .2s linear;
            }

            &.active {
                color: var(--nav-link-color-active);

                &::after {
                    opacity: 1;
                }

                svg {
                    fill: var(--nav-link-color-active);
                }
            }

            &:hover {
                background: var(--nav-link-background-color-active);
                color: var(--nav-link-color-hover);
            }
        }
    }
</style>