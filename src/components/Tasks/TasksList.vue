<template>
    <div class="tasks__list">
        <template v-if="list.length">

            <template  v-for="task_data, index in list" >

                 <template v-if="index == 0 || task_data.dayValue != list[index - 1].dayValue">
                    <div class="tasks__separator" :key="index">{{ task_data.dayValue }}</div>
                </template>

                <Task
                    :text="task_data.text"
                    :id="task_data.id"
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
        },
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