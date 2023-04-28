<template>
    <nav class="lists-nav">
        <router-link
            class="lists-nav__btn"
            :class="{'active': $route.query.listId == list.id }"
            v-for="list in getLists"
            :key="list.id"
            :to="{ name: 'tasks', query: { listId: list.id } }"
        >
            <div class="circle"></div>
            {{ list.name }}
        </router-link>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ListsNav',
        computed: {
            ...mapGetters(['getLists'])
        }
    }
</script>

<style lang="scss">
    .lists-nav {
        display: flex;
        flex-direction: column;
    
        &__btn {
            display: flex;
            align-items: center;

            padding: 10px 15px;
            margin-bottom: 10px;

            color: var(--secondary-text);
            text-decoration: none;

            position: relative;

            transition: background-color .2s linear, color .2s linear;

            .circle {
                width: 10px;
                height: 10px;

                background: var(--secondary-text);;
                border-radius: 50%;

                margin-right: 15px;

                transition: background-color .2s linear;
            }

            &:hover {
                background-color: var(--link-background-color-active);
            }

            &.active {
                background-color: var(--link-background-color-active);
                color: var(--main-text);

                .circle {
                    background-color: var(--main-text);
                }
            }
        }
    }

</style>