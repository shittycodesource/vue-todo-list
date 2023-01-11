<template>
    <div id="app">
        <main class="main">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import BaseContainer from './components/app/BaseContainer.vue';

export default {
    name: "App",
    components: {
        BaseContainer
    }
};
</script>

<style lang="scss">
    body {
        margin: 0;
        padding: 0;

        font-family: 'Roboto', sans-serif;
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
