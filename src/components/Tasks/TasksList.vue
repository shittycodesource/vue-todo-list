<template>
    <div class="tasks__list">
        <template v-if="list.length">
            <template  v-for="task_data, index in list" >

                 <template v-if="index == 0 || task_data.dayValue != list[index - 1].dayValue">
                    <div class="tasks__separator" :key="index">{{ task_data.dayValue }}</div>
                </template>

                <Task
                    :data="task_data"
                    :key="task_data.id"
                />

            </template>
        </template>
        <template v-else>
            <p class="center">Empty</p>
        </template>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from './Task.vue';

    export default {
        name: 'TasksList',
        components: {
            Task
        },
        computed: {
            ...mapGetters([
                'getTasks',
                'getSortedTasks',
                'isTasksSorted'
            ]),
            list() {
                if (this.isTasksSorted) {
                    return this.getSortedTasks
                };

                return this.getTasks;
            }
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

        &__separator {
            width: 100%;
            color: #7a7a7a;
        }
    }
</style>