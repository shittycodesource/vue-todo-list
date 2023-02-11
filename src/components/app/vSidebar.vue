<template>
    <aside class="sidebar" :class="{'open': isOpen}">
        <div class="sidebar__inner">
            <div class="sidebar__header">
                <v-burger-menu @click.native="toggleSidebar" :isActive="isOpen"/>
            </div>
            <div class="sidebar__content">
                <transition name="nav">
                    <v-nav v-if="isOpen" :links="links" @linkClick="toggleSidebar"/>
                </transition>
            </div>
            <div class="sidebar__footer">
                <transition name="nav">
                    <router-link to="/create" v-if="!isOpen">+</router-link>
                </transition>
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
                    { name: 'Create New Task', to: "/create", exact: false },
                    { name: 'Search', to: "/search", exact: false },
                    { name: 'Lists', to: "/lists", exact: false }
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
        max-width: $sidebarWidth;
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

        &__footer {
            min-height: 40px;

            a {
				display: block;
                padding-left: 4px;
                font-weight: 600;
                color: $mainColor;
                font-size: 25px;
                text-decoration: none;
            }
        }

        &.open {
            max-width: 300px;
        }
    }
</style>