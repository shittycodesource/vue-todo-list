import Vue from 'vue';
import Vuex from 'vuex';
import { format } from 'date-fns'; 

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets..",
                completed:false,
                dayValue:"9 January 2023",
                date:1673268394753,
                id: 1673268394753
            },
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
        SORT_TASKS(state, name) {
            state.sortTasksBy == name
                ? state.sortTasksBy = false
                : state.sortTasksBy = name;
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
        sortTasks({commit}, name) {
            commit('SORT_TASKS', name);
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
                case 'complete':
                    return getters.getSortedByCompleteTasks;
                case 'incomplete':
                    return getters.getSortedByIncompleteTasks;
            };
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
        getTasksSortType: (state) => state.sortTasksBy,
        getTask: (state) => (id) => state.tasks.find(el => el.id == id),
    }
}); 