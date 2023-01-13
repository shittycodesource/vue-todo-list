<template>
    <div class="tasks" v-once>
        <TasksHeader :count="getIncompleteTasksNumber"/>
        <TasksList :list="getTasks"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TasksHeader from './TasksHeader.vue';
import TasksList from './TasksList.vue';

    export default {
        name: 'Tasks',
        components: {
            TasksHeader,
            TasksList
        },
        computed: {
            ...mapGetters([
                'getTasks',
                'getIncompleteTasksNumber'
            ])
        }
    }
</script>

<style lang="scss">

</style>