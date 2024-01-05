<template>
    <aside class="sidebar" :class="{'open': isOpen}">
        <div class="sidebar__inner">
            <header class="sidebar__header">
                <!-- <v-burger-menu @click.native="toggleSidebar" :isActive="isOpen"/> -->
                <h2 class="sidebar__title">Senseless</h2>
                <div class="sidebar__version">1.1.2</div>
            </header>

            <div class="sidebar__content">

                <v-block>
                    <template #title>{{ 'SidebarBlockCreateTitle' | localizeFilter }}</template>
                    <template #content>
                        <div class="mr20px ml20px">
                            <v-button class="btn--flat btn--gray btn--with-icon btn--big" @click.native="$emit('openChooseModal')">
                                <v-icon name="#plus-circle"/> {{ 'Create' | localizeFilter }}
                            </v-button>
                        </div>
                    </template>
                </v-block>

                <v-block>
                    <template #title>{{ 'SidebarBlockNavTitle' | localizeFilter }}</template>
                    <template #content> <v-nav v-if="isOpen" :links="links"/> </template>
                </v-block>

                <v-block>
                    <template #title>{{ 'SidebarBlockListsTitle' | localizeFilter }}</template>
                    <template #content> <lists-nav /> </template>
                </v-block>

            </div>

            <footer class="sidebar__footer">
                <v-block>
                    <template #title>{{ 'SidebarBlockThemesTitle' | localizeFilter }}</template>
                    <template #content>
                        <v-theme-changer/>
                    </template>
                </v-block>
            </footer>

        </div>
    </aside>
</template>

<script>
    import vBurgerMenu from './vBurgerMenu.vue';
    import vBlock from './vBlock.vue';
    import vNav from './vNav.vue';
    import vButton from '../Inputs/vButton.vue';
    import vIcon from './vIcon.vue';
    import vThemeChanger from './vThemeChanger.vue';
    import ListsNav from '../Lists/ListsNav.vue';
    import localizeFilter from '../../filters/localize.filter.js';

    export default {
        name: 'vSidebar',
        data() {
            return {
                isOpen: true,
                links: [
                    { name: 'NavHome', to: '/', exact: true, iconName: '#home' },
                    { name: 'NavSearch', to: "/search", exact: false, iconName: '#search' },
                    { name: 'NavSettings', to: "/settings", exact: false, iconName: '#settings' },
                    { name: 'NavNotFound', to: "/404", exact: false, iconName: '#trash' }
                ]
            }
        },
        components: { vBurgerMenu,  vNav, vBlock, vButton, vIcon, vThemeChanger, ListsNav },
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

            min-height: $headerHeight;
            
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
            border-top: 1px solid var(--sidebar-borders-color);
            
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