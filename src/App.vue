<template>
    <div id="app">
        <main class="main">
            <Container>
                <TheTaskTextInput/>
                <Tasks/>
            </Container>
        </main>
    </div>
</template>

<script>
import Container from './components/app/Container.vue';
import TheTaskTextInput from './components/TheTaskTextInput.vue';
import Tasks from './components/Tasks/Tasks.vue';

export default {
    name: "App",
    components: {
        Container,
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

        background-color: #FAFAFA;
    }

    *,*::before,*::after {
        box-sizing: border-box;
    }

    .main {
        padding-top: 50px;
    }
</style>
