<template>
    <v-container>
        <v-select
            label="Color Theme:"
            :selectedOption="selectedOption"
            :options="themes"
            :preventOptionReset="true"
            @selectOption="(option) => selectedOption = option"
        />
        <v-button @click.native="changeTheme">Change</v-button>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import vSelect from '../components/Inputs/vSelect.vue';
    import vButton from '../components/Inputs/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';
    
    export default {
        name: 'SettingsPage',
        components: { vContainer, vSelect, vButton },
        data() {
            return {
                themes: [ { name: 'Light' }, { name: 'Dark' } ],
                selectedOption: { name: 'Light' }
            }
        },
        methods: {
            ...mapActions([ 'changeColorTheme' ]),
            changeTheme() {
                this.changeColorTheme(this.selectedOption.name);
            }
        },
        computed: {
            ...mapGetters([ 'getColorTheme' ])
        },
        created() {
            this.selectedOption = { name: this.getColorTheme }
        }
    }
</script>