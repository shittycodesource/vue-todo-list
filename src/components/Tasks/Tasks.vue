<template>
    <div class="tasks">
        <TasksHeader :count="activeCount" :customHeaderText="customHeaderText"/>
        <TasksList :list="list" :emptyListText="emptyListText"/>
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
                type: Array,
                default: []
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

<style lang="scss">

</style>