<template>
    <header class="tasks__header">
        <div class="tasks__left">
            <router-link to="/" class="page-header__link">&lt; Back</router-link>
        </div>

        <div class="tasks__center">
            <h3 class="tasks__title">
                {{ title }} : 
                <template v-if="count">{{count}} Tasks Left</template>
                <template v-else>You haven't incomplete tasks</template>
            </h3>
        </div>
        <div class="tasks__right">

            <Dropdown :isOpened="isDropdownOpen" @clickOutside="toggleDropdown">
                <div @click="toggleDropdown" class="dropdown__title">Sort by</div>

                <template #options>
                    <button
                        class="dropdown__btn"
                        v-for="btn in buttons"
                        :key="btn.name" 
                        @click="btn.handler"
                        :class="{'active': getTasksSortType == btn.name.toLowerCase()}"
                    >
                        {{ btn.name }}
                    </button>
                </template>

            </Dropdown>
        </div>

    </header>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import Dropdown from '@/components/Dropdown.vue';
    import dropdownMixin from '../../mixins/dropdownMixin';

    export default {
        name: 'TasksHeader',
        mixins: [ dropdownMixin ],
        data() {
            return {
                buttons: [
                    { name: 'Date', handler: () => this.sortTaskBy('date') },
                    { name: 'Complete', handler: () => this.sortTaskBy('complete') },
                    { name: 'Incomplete', handler: () => this.sortTaskBy('incomplete') },
                ],
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            count: {
                type: Number,
                default: 0
            }
        },
        components: {
            Dropdown,
        },
        computed: {
            ...mapGetters([
                'getTasksSortType',
            ]),
        },
        methods: {
            ...mapActions([
                'sortTasks'
            ]),
            sortTaskBy(name) {
                this.sortTasks(name);
            },
        }
    }
</script>

<style lang="scss">
    .tasks {
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        
            margin-bottom: 30px;
        }

        &__center {
            display: flex;
            align-items: center;
            text-align: center;
        }

        &__title {
            font-size: 20px;
            color: var(--textColor);

            font-weight: 400;
            margin-right: 5px;
        }

        &__count {
            color: var(--textColor);
        }
    }
</style>