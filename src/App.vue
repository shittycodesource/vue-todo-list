<template>
    <div id="app">
        <v-icons-sprites/>
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
                        class="btn btn--no-border btn--full-width btn--text-left p15px"
                        @click.native="toggleChooseModal"
                    >
                        New List
                    </router-link>
                    <router-link 
                        to="/create-task" 
                        class="btn btn--no-border btn--full-width btn--text-left p15px" 
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
import vIconsSprites from './components/app/vIconsSprites.vue';
import ChooseModal from './components/Modals/ChooseModal.vue';

export default {
    name: "App",
    components: {
        vSidebar,
        vIconsSprites,
        ChooseModal
    },
    data() {
        return {
            isChooseModalOpen: false
        }
    },
    methods: {
        toggleChooseModal() {
            this.isChooseModalOpen = !this.isChooseModalOpen;
        }
    }
};
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: $textColor;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        background-color: $mainBackgroundColor;
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    .main {
        padding-top: 50px;
        padding-bottom: 50px;
        padding-left: $sidebarWidth;
    }
</style>
