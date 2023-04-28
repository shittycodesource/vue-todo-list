<template>
    <div id="app">
        <v-icons-sprites/>
        <v-header/>
        <v-sidebar @openChooseModal="toggleChooseModal"/>
        <main class="main">
            <transition name="page" mode="out-in">
                <router-view></router-view>
            </transition>

            <choose-modal :isOpen="isChooseModalOpen" @closeModal="toggleChooseModal">
                <template #title>What do you want to do?</template>
                <template #options>
                    <router-link 
                        to="/create-list" 
                        class="btn btn--choose"
                        @click.native="toggleChooseModal"
                    >
                        New List
                    </router-link>
                    <router-link 
                        to="/create-task" 
                        class="btn btn--choose" 
                        @click.native="toggleChooseModal"
                    >
                        New Task
                    </router-link>
                </template>
            </choose-modal>
        </main>
    </div>
</template>

<script>
import vSidebar from './components/app/vSidebar.vue';
import vHeader from './components/app/vHeader.vue';
import vIconsSprites from './components/app/vIconsSprites.vue';
import ChooseModal from './components/Modals/ChooseModal.vue';
import { mapActions } from 'vuex';

export default {
    name: "App",
    components: { vSidebar, vIconsSprites, ChooseModal, vHeader },
    data() {
        return {
            isChooseModalOpen: false,
        }
    },
    methods: {
        ...mapActions([ 'applyColorTheme' ]),
        toggleChooseModal() {
            this.isChooseModalOpen = !this.isChooseModalOpen;
        }
    },
    created() {
        this.applyColorTheme();

        const v = this;
        window.addEventListener('keydown', event => {
            if (event.keyCode == 191) {
                v.toggleChooseModal();
            }
        })
    }
};
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--textColor);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: var(--main-background-color);
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    .main {
        padding-top: $headerHeight + 15px;
        padding-bottom: 50px;
        padding-left: $sidebarWidth;

        @media (max-width: $mobileBP) {
            padding-top: 20px;
            padding-left: 60px;
            // padding-right: 20px;
        }
    }
</style>
