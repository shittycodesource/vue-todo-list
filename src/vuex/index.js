import Vue from 'vue';
import Vuex from 'vuex';
import { format } from 'date-fns'; 

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                text: 'first task',
                completed: false,
                dayValue: '3 March 2007',
                date: 1172810970320,
                id: 1172810970320
            },
            {
                text: 'before first task',
                completed: false,
                dayValue: '7 July 2005',
                date: 1122790970320,
                id: 1122790970320
            },
            {
                text: 'middle task',
                completed: false,
                dayValue: '12 December 2022',
                date: 1672310952752,
                id: 1672310952752,
            },
            { 
                text: 'lastest task',
                completed: false,
                dayValue: '1 January 2023',
                date: 1672810784122,
                id: 1672810784122,
            },
            {
                text: 'before last task',
                completed: false,
                dayValue: '1 January 2023',
                date: 1672610961888,
                id: 1672610961888,
            },
        ],
        sortTasksBy: false,
    },
    mutations: {
        ADD_TASK(state, data) {
            const dateNow = Date.now();
            const dayValue = format(new Date(), 'd MMMM yyyy');

            state.tasks.push({
                text: data, 
                date: dateNow,
                completed: false,
                id: dateNow, 
                dayValue: dayValue
            });
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter(item => item.id != id);
        },
        SORT_TASKS_BY_DATE(state) {
            state.sortTasksBy == 'date'
                ? state.sortTasksBy = false
                : state.sortTasksBy = 'date';
        },
        SORT_TASKS_BY_COMPLETE(state) {
            state.sortTasksBy == 'complete'
                ? state.sortTasksBy = false
                : state.sortTasksBy = 'complete';
        },
        SORT_TASKS_BY_INCOMPLETE(state) {
            state.sortTasksBy == 'incomplete'
                ? state.sortTasksBy = false
                : state.sortTasksBy = 'incomplete';
        },
        COMPLETE_TASK(state, obj) {
            const index = state.tasks.indexOf(obj);
            state.tasks[index].completed = !state.tasks[index].completed;
        }
    },
    actions: {
        addTask({commit}, data) {
            if (data) {
                commit('ADD_TASK', data);
            }
        },
        deleteTask({commit}, id) {
            commit('DELETE_TASK', id);
        },
        sortTasksByDate({commit}) {
            commit('SORT_TASKS_BY_DATE');
        },
        sortTasksByComplete({commit}) {
            commit('SORT_TASKS_BY_COMPLETE');
        },
        sortTasksByIncomplete({commit}) {
            commit('SORT_TASKS_BY_INCOMPLETE');
        },
        completeTask({commit}, obj) {
            commit('COMPLETE_TASK', obj);
        }
    },
    getters: {
        getTasks(state) {
            const arr = state.tasks.sort((a, b) => b.date - a.date);
            return arr;
        },
        getSortedTasks(state, getters) {
            switch (state.sortTasksBy) {
                case 'date':
                    return getters.getSortedByDateTasks;
                    break;
                case 'complete':
                    return getters.getSortedByCompleteTasks;
                    break;
                case 'incomplete':
                    return getters.getSortedByIncompleteTasks;
                    break;
            }
        },
        getSortedByDateTasks(state) {
            const arr = [...state.tasks];
            return arr.reverse();
        },
        getSortedByCompleteTasks(state) {
            const arr = [...state.tasks];
            return arr.sort((x, y) => Number(y.completed) - Number(x.completed));
        },
        getSortedByIncompleteTasks(state) {
            const arr = [...state.tasks];
            return arr.sort((x, y) => Number(x.completed) - Number(y.completed));
        },
        isTasksSorted: (state) => state.sortTasksBy
    }
}); 