<template>
    <header class="tasks__header">
        <div class="tasks__left">
            <h3 class="tasks__title">ACTIVE TASKS</h3>
            <span class="tasks__count">({{count}})</span>
        </div>
        <div class="tasks__right">

            <Dropdown :isOpened="isDropdownOpen">
                <BaseButton @click.native="toggleDropdown">Sort by</BaseButton>
                <template #dropdown-items>
                    <BaseButton
                        v-for="btn in buttons"
                        :key="btn.name" 
                        @click.native="btn.handler"
                        :class="{'active': getTasksSortType == btn.name.toLowerCase()}"
                    >
                        {{ btn.name }}
                    </BaseButton>
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
                'getTasksSortType'
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
            font-weight: 400;
            margin-right: 5px;
        }

        &__count {
            color: #767676;
        }
    }
</style>