<template>
    <v-container>
        <div class="not-found">
            <h2>This page is not found</h2>
            <router-link to="/">Main Page</router-link>
        </div>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';

    export default {
        name: 'NotFoundPage',
        components: {
            vContainer
        }
    }
</script>

<style lang="scss">
    .not-found {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 100%;
        height: 100vh;

        margin-top: -50px;
    }
</style>