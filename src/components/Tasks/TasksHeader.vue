<template>
    <header class="tasks__header">
        <div class="tasks__left">
            <h3 class="tasks__title">ACTIVE TASKS</h3>
            <span class="tasks__count">({{count}})</span>
        </div>
        <div class="tasks__right">

            <Dropdown :isOpened="isDropdownOpen">
                <BaseButton @click.native="toggleDropdown">Sort</BaseButton>
                <template #dropdown-items>
                    <BaseButton>Sort</BaseButton>
                    <BaseButton>Sort</BaseButton>
                </template>
            </Dropdown>
        </div>

    </header>
</template>

<script>
import BaseButton from '@/components/app/BaseButton.vue';
import Dropdown from '@/components/Dropdown/Dropdown.vue';

    export default {
        name: 'TasksHeader',
        data() {
            return {
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
        methods: {
            toggleDropdown() {
                this.isDropdownOpen = !this.isDropdownOpen
            }
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