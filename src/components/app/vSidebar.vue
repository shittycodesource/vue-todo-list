<template>
    <aside class="sidebar" :class="{'open': isOpen}">
        <div class="sidebar__inner">
            <div class="sidebar__header">
                <!-- <v-burger-menu @click.native="toggleSidebar" :isActive="isOpen"/> -->
                <h2 class="sidebar__title">Senseless</h2>
                <div class="sidebar__version">1.1.1</div>
            </div>
            <div class="sidebar__content">
                 <v-sidebar-block>
                    <template #title>CREATE NEW LIST OR TASK</template>
                    <template #content>
                        <div class="mr20px ml20px">
                            <v-button class="btn--flat btn--gray btn--with-icon btn--big mr20px">
                                <v-icon name="#plus-circle"/>
                                Create
                            </v-button>
                        </div>
                    </template>
                </v-sidebar-block>
                <v-sidebar-block>
                    <template #title>NAVIGATION</template>
                    <template #content>
                        <v-nav v-if="isOpen" :links="links"/>
                    </template>
                </v-sidebar-block>
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
    import vSidebarBlock from './vSidebarBlock.vue';
    import vNav from './vNav.vue';
    import vButton from '../Inputs/vButton.vue';
    import vIcon from './vIcon.vue';

    export default {
        name: 'vSidebar',
        data() {
            return {
                isOpen: true,
                // links: [
                //     { name: 'Home', to: '/', exact: true, iconName: '#home' },
                //     { name: 'Create New Task', to: "/create-task", exact: false },
                //     { name: 'Search', to: "/search", exact: false },
                //     { name: 'Settings', to: "/settings", exact: false },
                //     { name: '404 Page', to: "/404", exact: false }
                // ]
                links: [
                    { name: 'Home', to: '/', exact: true, iconName: '#home' },
                    { name: 'Search', to: "/search", exact: false, iconName: '#search' },
                    { name: 'Settings', to: "/settings", exact: false, iconName: '#settings' },
                    { name: '404 Page', to: "/404", exact: false, iconName: '#trash' }
                ]
            }
        },
        components: { vBurgerMenu,  vNav, vSidebarBlock, vButton, vIcon },
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

        // padding: 15px;

        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;

        z-index: 1000;

        background: var(--sidebar-background-color);
        // box-shadow: $baseBoxShadow;
        border-right: 1px solid var(--sidebar-borders-color);

        transition: max-width .2s ease-in-out;

        &__inner {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: flex-start;
            flex-direction: column;

            position: relative;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            padding: 0 15px;

            border-bottom: 1px solid var(--sidebar-borders-color);
        }

        &__title {
            font-weight: 400;
            font-size: 20px;
            color: var(--main-text);
        }

        &__version {
            font-size: 14px;
            color: var(--main-text);
        }

        &__content {
            display: flex;
            flex-direction: column;
            // align-items: center;
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

        // &.open {
        //     max-width: 300px;
        // }
    }
</style>