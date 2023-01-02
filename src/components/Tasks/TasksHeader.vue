<template>
    <header class="tasks__header">
        <div class="tasks__left">
            <h3 class="tasks__title">ACTIVE TASKS</h3>
            <span class="tasks__count">({{count}})</span>
        </div>
        <div class="tasks__right">
            <BaseButton>Sort</BaseButton>
        </div>
    </header>
</template>

<script>
import BaseButton from '@/components/app/BaseButton.vue';

    export default {
        name: 'TasksHeader',
        props: {
            count: {
                type: Number,
                default: 0
            }
        },
        components: {
            BaseButton
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