<template>
    <div class="tasks">
        <TasksHeader :count="activeCount" :title="list.name"/>
        <TasksList :list="list.tasks" :emptyListText="emptyListText"/>
    </div>
</template>

<script>
import TasksHeader from './TasksHeader.vue';
import TasksList from './TasksList.vue';

    export default {
        name: 'Tasks',
        components: {
            TasksHeader,
            TasksList
        },
        props: {
            list: {
                type: Object,
                default: {}
            },
            activeCount: {
                type: Number,
                required: true
            },
            customHeaderText: {
                type: String,
                default: ''
            },
            emptyListText: {
                type: String,
                default: "Seems like you've finished all your tasks"
            }
        },
    }
</script>