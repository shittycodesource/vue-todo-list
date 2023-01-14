<template>
    <aside class="sidebar" :class="{'open': isOpen}">
        <div class="sidebar__inner">
            <div class="sidebar__header">
                <v-burger-menu @click.native="toggleSidebar"/>
            </div>
            <transition name="fade">
                <div class="sidebar__content" v-if="isOpen">
                    <v-nav :links="links" @linkClick="toggleSidebar"/>
                </div>
            </transition>
            <div class="sidebar__footer">

            </div>
        </div>
    </aside>
</template>

<script>
    import vBurgerMenu from './vBurgerMenu.vue';
    import vNav from './vNav.vue';

    export default {
        name: 'vSidebar',
        data() {
            return {
                isOpen: false,
                links: [
                    { name: 'Home', to: '/', exact: true },
                    { name: 'Create New Task', to: "/create", exact: false }
                ]
            }
        },
        components: {
            vBurgerMenu,
            vNav
        },
        methods: {
            toggleSidebar() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<style lang="scss">
    .sidebar {
        max-width: 60px;
        width: 100%;
        height: 100vh;

        padding: 17px;

        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;

        z-index: 1000;

        background: $blockBackgroundColor;
        box-shadow: $baseBoxShadow;

        transition: max-width .2s ease-in-out;

        &__inner {
            width: 300px;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;

            position: relative;
        }

        &__header {
            display: flex;
            // justify-content: center;
            align-items: center;
        }

        &__content {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }

        &.open {
            max-width: 300px;
        }
    }
</style>