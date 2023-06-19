<template>
    <div class="theme-changer">
        <v-button class="btn--with-icon btn--flat btn--big"
            @click.native="changeTheme('Light')" 
            :class="{'active': getColorTheme == 'Light'}"
        >
            <v-icon name="#sun" />
            Light
        </v-button>
        <v-button class="btn--with-icon btn--flat btn--big"
            @click.native="changeTheme('Dark')" 
            :class="{'active': getColorTheme == 'Dark'}"
        >
            <v-icon name="#moon" />
            Dark
        </v-button>
    </div>
</template>

<script>
    import vButton from '../Inputs/vButton.vue';
    import vIcon from './vIcon.vue';
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'vThemeChanger',
        components: { vButton, vIcon },
        methods: {
            ...mapActions([ 'changeColorTheme' ]),
            changeTheme(name) {
                this.changeColorTheme(name);
            }
        },
        computed: {
            ...mapGetters([ 'getColorTheme' ])
        },
    }
</script>

<style lang="scss">
    .theme-changer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        max-width: 280px;

        padding: 5px;
        margin: 0 auto;

        border: 1px solid var(--lite);
        border-radius: 5px;

        .btn {
            width: calc(50% - 5px);
            text-align: center;
        }
    }

</style>