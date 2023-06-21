<template>
    <v-container :key="formKey">
        <form class="form">
            <v-select
                :label="inputsLabels[0]"
                :selectedOption="selectedTheme"
                :options="themes"
                :preventOptionReset="true"
                @selectOption="(option) => selectedTheme = option"
            />
            <v-select
                :label="inputsLabels[1]"
                :selectedOption="selectedLanguage"
                :options="locales"
                :preventOptionReset="true"
                @selectOption="(option) => selectedLanguage = option"
            />
            <div class="flex content-center">
                <v-button @click.native="changeSettings">{{ 'Save' | localizeFilter }}</v-button>
            </div>
        </form>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import vSelect from '../components/Inputs/vSelect.vue';
    import vButton from '../components/Inputs/vButton.vue';
    import { mapActions, mapGetters } from 'vuex';
    import localizeFilter from '../filters/localize.filter';
    
    export default {
        name: 'SettingsPage',
        components: { vContainer, vSelect, vButton },
        data() {
            return {
                formKey: 0,
                inputsLabels: [localizeFilter('Color Theme'), localizeFilter('Language')],
                themes: [ { name: 'Light' }, { name: 'Dark' } ],
                selectedTheme: { name: 'Light' },
                locales: [ { name: 'En' }, { name: 'Ru' } ],
                selectedLanguage: { name: 'En' }
            }
        },
        methods: {
            ...mapActions([ 'changeColorTheme', 'changeLocale' ]),
            changeSettings() {
                this.changeColorTheme(this.selectedTheme.name);
                this.changeLocale(this.selectedLanguage.name);

                this.$router.push('/');
            }
        },
        computed: {
            ...mapGetters([ 'getColorTheme', 'getLocale' ])
        },
        created() {
            this.selectedTheme = { name: this.getColorTheme }
            this.selectedLanguage = { name: this.getLocale }
        }
    }
</script>