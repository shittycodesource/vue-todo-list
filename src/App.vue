<template>
    <div id="app">
        <v-sidebar/>
        <main class="main">
            <transition name="page" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script>
import vSidebar from './components/app/vSidebar.vue';

export default {
    name: "App",
    components: {
        vSidebar
    }
};
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;

        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #000;
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
    }
</style>
