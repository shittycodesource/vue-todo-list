<template>
    <div class="tasks__list">
        <template v-if="list.length">
            <template  v-for="(task_data, index) in getTasksList" >

                 <template v-if="index == 0 || task_data.dayValue != getTasksList[index - 1].dayValue">
                    <div class="tasks__separator" :key="index">
                        <span>{{ task_data.date | dateFilter }}</span>
                    </div>
                </template>

                <task-card 
                    :data="task_data" 
                    :key="task_data.id"
                    @completeTask="completeThisTask(task_data)"
                    @deleteTask="deleteThisTask(task_data)"
                />

            </template>
        </template>
        <template v-else>
            <p class="center">{{ emptyListText }}</p>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Task from './Task.vue';
import TaskCard from '../Cards/TaskCard.vue';
import vButton from '../Inputs/vButton.vue';

    export default {
        name: 'TasksList',
        components: { Task, vButton, TaskCard },
        props: {
            list: {
                type: Array,
                default: [],
            },
            emptyListText: {
                type: String,
                default: ''
            }
        },
        computed: {
            ...mapGetters([
                'getSortedTasks',
                'getTasksSortType'
            ]),
            getTasksList() {
                if (this.getTasksSortType) {
                    return this.getSortedTasks(this.list);
                };

                return this.list;
            }
        },
        methods: {
            ...mapActions([
                'deleteTask',
                'completeTask'
            ]),
            deleteThisTask(taskData) {
                this.deleteTask(taskData);
            },
            completeThisTask(taskData) {
                this.completeTask(taskData);
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
            margin: 10px 0;
            width: 100%;
            color: var(--secondary-text);
            text-align: center;
        }
    }
</style>