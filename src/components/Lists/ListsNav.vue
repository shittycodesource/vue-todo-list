<template>
    <nav class="lists-nav custom-scrollbar">
        <router-link
            class="lists-nav__btn"
            :class="{'active': $route.query.listId == list.id }"
            v-for="list in getLists"
            :key="list.id"
            :to="{ name: 'tasks', query: { listId: list.id } }"
        >
            <div class="circle" :style="list.colorData ? { background: list.colorData.color } : 'unset'" ></div>
            <span>{{ list.name }}</span>
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
        max-height: calc(5 * (39px + 10px));
        overflow-y: scroll;
    
        &__btn {
            display: flex;
            align-items: center;

            padding: 10px 15px;
            margin-bottom: 10px;

            color: var(--secondary-text);
            text-decoration: none;

            position: relative;

            transition: background-color .2s linear, color .2s linear;

            span {
                overflow: hidden;
                text-overflow: ellipsis;
                max-width: calc(100% - 30px);
            }

            &:hover {
                background-color: var(--nav-link-background-color-active);
                color: var(--nav-link-color-hover);

                .circle {
                    color: var(--nav-link-color-hover);
                }
            }

            &.active {
                background-color: var(--nav-link-background-color-active);
                color: var(--nav-link-color-active);

                .circle {
                    background-color: var(--nav-link-color-active);
                }
            }
        }
    }

    .circle {
        width: 10px;
        height: 10px;

        background: var(--secondary-text);;
        border-radius: 50%;

        margin-right: 15px;

        transition: background-color .2s linear;

        display: inline-block;
    }

</style>