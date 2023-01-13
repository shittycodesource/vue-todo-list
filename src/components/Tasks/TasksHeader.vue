<template>
    <header class="tasks__header">
        <div class="tasks__left">
            <h3 class="tasks__title">Welcome back,
                <template v-if="getIncompleteTasksNumber"><br/>you have {{count}} tasks left</template>
                <template v-else><br/>you haven't incomplete tasks</template>
            </h3>
        </div>
        <div class="tasks__right">

            <Dropdown :isOpened="isDropdownOpen">
                <div @click="toggleDropdown" class="dropdown-title">Sort by</div>

                <template #dropdown-items>
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
import BaseButton from '@/components/app/BaseButton.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';

    export default {
        name: 'TasksHeader',
        data() {
            return {
                buttons: [
                    { name: 'Date', handler: () => this.sortTaskBy('date') },
                    { name: 'Complete', handler: () => this.sortTaskBy('complete') },
                    { name: 'Incomplete', handler: () => this.sortTaskBy('incomplete') },
                ],
                isDropdownOpen: false,
            }
        },
        props: {
            count: {
                type: Number,
                default: 0
            }
        },
        components: {
            BaseButton,
            Dropdown,
        },
        computed: {
            ...mapGetters([
                'getTasksSortType',
                'getIncompleteTasksNumber'
            ]),
        },
        methods: {
            ...mapActions([
                'sortTasks'
            ]),
            sortTaskBy(name) {
                this.sortTasks(name);
            },
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen
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

        &__left {
            display: flex;
            align-items: center;
        }

        &__title {
            font-size: 20px;
            color: $textColor;

            font-weight: 400;
            margin-right: 5px;
        }

        &__count {
            color: #767676;
        }
    }

    .dropdown {
        border-radius: 8px;
        overflow: hidden;

        &-title {
            color: $textColor;
            cursor: pointer;

            &:hover {
                color: darken($textColor, 10%);
            }
        }
    }
</style>