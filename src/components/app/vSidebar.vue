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
                    <span @click="$emit('openChooseModal')" v-if="!isOpen">+</span>
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
                    { name: 'Create New Task', to: "/create-task", exact: false },
                    { name: 'Search', to: "/search", exact: false },
                    { name: 'Settings', to: "/settings", exact: false },
                    { name: '404 Page', to: "/404", exact: false }
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

        background: var(--blockBackgroundColor);
        box-shadow: $baseBoxShadow;
        border-right: 1px solid var(--blockBorderColor);

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

            span {
                display: inline-block;
                padding-left: 4px;
                font-weight: 600;
                color: var(--mainTextColor);
                font-size: 25px;
                text-decoration: none;
                cursor: pointer;
            }
        }

        &.open {
            max-width: 300px;
        }
    }
</style>