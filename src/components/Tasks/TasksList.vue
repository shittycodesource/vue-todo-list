<template>
    <div class="tasks__list">
        <template v-if="list.length">
            <template  v-for="(task_data, index) in list" >

                 <template v-if="index == 0 || task_data.dayValue != list[index - 1].dayValue">
                    <div class="tasks__separator" :key="index">
                        <span>{{ task_data.dayValue }}</span>
                    </div>
                </template>

                <Task
                    :data="task_data"
                    :key="task_data.id"
                >
                    <template #task-actions>
                        <router-link 
                            class="btn" 
                            :to="{
                                 name: 'task', 
                                 query: { id: task_data.id } 
                            }"
                        >
                            Open
                        </router-link>
                        <BaseButton @click.native="completeThisTask(task_data)">Complete</BaseButton>
                        <BaseButton class="btn--delete" @click.native="deleteThisTask(task_data.id)">Delete</BaseButton>
                    </template>
                </Task>

            </template>
        </template>
        <template v-else>
            <p class="center">Seems like you've finished all your tasks. Well done</p>
        </template>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Task from './Task.vue';
import BaseButton from '../app/BaseButton.vue';

    export default {
        name: 'TasksList',
        components: {
            Task,
            BaseButton
        },
        computed: {
            ...mapGetters([
                'getTasks',
                'getSortedTasks',
                'getTasksSortType'
            ]),
            list() {
                if (this.getTasksSortType) {
                    return this.getSortedTasks
                };

                return this.getTasks;
            }
        },
        methods: {
            ...mapActions([
                'deleteTask',
                'completeTask'
            ]),
            deleteThisTask(id) {
                this.deleteTask(id);
            },
            completeThisTask(data) {
                this.completeTask(data);
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
            color: #7a7a7a;
            text-align: center;
        }
    }
</style>