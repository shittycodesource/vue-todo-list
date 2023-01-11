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
                    <template #task-action>
                        <router-link 
                            class="btn" 
                            :to="{
                                 name: 'task', 
                                 params: { taskID: task_data.id } 
                            }"
                        >
                            Open
                        </router-link>
                    </template>
                </Task>

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
                'getTasksSortType'
            ]),
            list() {
                if (this.getTasksSortType) {
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
            margin: 10px 0;
            width: 100%;
            color: #7a7a7a;
            position: relative;

            span {
                position: relative;
                z-index: 1;
                background: $mainBackgroundColor;
                padding-right: 20px;
            }

            &::after {
                content: '';
                width: 100%;
                height: 1px;

                background: #7a7a7a;
                
                position: absolute;
                right: 0;
                top: 50%;

                transform: translateY(-50%);
            }
        }

        @media (max-width: $tabletBP) {
            &__separator {
                text-align: center; 

                span {
                    padding-left: 20px;
                }
            }
        }
    }
</style>