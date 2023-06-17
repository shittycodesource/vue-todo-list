<template>
    <v-container>
        <div class="not-found">
            <h2 class="big-text">404</h2>
            <h3 class="medium-text">NOT FOUND</h3>
            <router-link to="/">
                <v-icon name="#left" width="7px" height="11px"/>Back
            </router-link>
        </div>
    </v-container>
</template>

<script>
    import vContainer from '../components/app/vContainer.vue';
    import vIcon from '../components/app/vIcon.vue';

    export default {
        name: 'NotFoundPage',
        components: { vContainer, vIcon }
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

        margin-top: -80px;

        .big-text {
            font-size: 200px;
            font-weight: 900;
            color: var(--lite);
            letter-spacing: 10px;

            user-select: none;
        }

        .medium-text {
            margin-top: -20px;
            margin-bottom: 10px;

            font-size: 50px;
            font-weight: 900;
            color: var(--main-text);
            letter-spacing: 10px;
            text-transform: uppercase;

            user-select: none;
        }

        a {
            display: flex;
            align-items: center;
            font-size: 18px;
            text-decoration: none;

            color: var(--blue);

            svg {
                fill: var(--blue);
                margin-right: 5px;
            }

            &:hover {
                color: var(--blue-hover);

                svg {
                    fill: var(--blue-hover);
                }   
            }
        }
    }
</style>