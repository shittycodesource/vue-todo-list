<template>
    <v-container>
        <v-page-header/>
        <v-input 
            class="mb20px"
            label="Title:" 
            :value="title" 
            v-model="title" 
            placeholder="Your title here..."
        />

        <v-input 
            label="Text:" 
            :value="title" 
            v-model="title" 
            placeholder="Your text here..."
        />
    </v-container>
</template>

<script>
    import vPageHeader from '../components/app/vPageHeader.vue';
    import vContainer from '../components/app/vContainer.vue';
    import vInput from '../components/app/vInput.vue';

    export default {
        name: 'CreatePage',
        data() {
            return {
                title: ''
            }
        },
        components: {
            vContainer,
            vPageHeader,
            vInput
        }
    }
</script>

<style lang="scss">

</style>