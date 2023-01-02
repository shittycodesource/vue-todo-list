<template>
    <div class="tasks__list">
        <template v-if="list.length">
            <Task
                v-for="task_data in list"
                :text="task_data.text"
                :id="task_data.id"
                :key="task_data.id"
            />
        </template>
        <template v-else>
            <p class="center">Empty</p>
        </template>
    </div>
</template>

<script>
import Task from './Task.vue';

    export default {
        name: 'TasksList',
        props: {
            list: {
                type: Array,
                default: [],
            }
        },
        components: {
            Task
        }
    }
</script>
<style lang="scss">
    .tasks {
        &__list {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }
    }
</style>