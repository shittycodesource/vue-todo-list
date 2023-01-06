<template>
    <div id="app">
        <main class="main">
            <BaseContainer>
                <TheTaskTextInput/>
                <Tasks/>
            </BaseContainer>
        </main>
    </div>
</template>

<script>
import BaseContainer from './components/app/BaseContainer.vue';
import TheTaskTextInput from './components/TheTaskTextInput.vue';
import Tasks from './components/Tasks/Tasks.vue';

export default {
    name: "App",
    components: {
        BaseContainer,
        TheTaskTextInput,
        Tasks
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

        background-color: $mainBackground;
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    .main {
        padding-top: 50px;
    }
</style>
