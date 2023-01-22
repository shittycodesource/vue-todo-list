import Vue from 'vue';
import Vuex from 'vuex';
import { format } from 'date-fns'; 

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.. ",
                completed:false,
                title: 'Lorem ipsum dolor',
                dayValue:"9 January 2023",
                date:1673268394753,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1673268394753
            },
            {
                text: 'first task',
                completed: false,
                title: 'First task',
                dayValue: '3 March 2007',
                date: 1172810970320,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1172810970320
            },
            {
                text: 'before first task',
                completed: false,
                title: 'Before First task',
                dayValue: '7 July 2005',
                date: 1122790970320,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1122790970320
            },
            {
                text: 'middle task',
                title: 'Middle task',
                completed: false,
                dayValue: '12 December 2022',
                date: 1672310952752,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1672310952752,
            },
            { 
                text: 'lastest task',
                completed: false,
                title: 'Lastest task',
                dayValue: '1 January 2023',
                date: 1672810784122,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1672810784122,
            },
            {
                text: 'before last task',
                completed: false,
                title: 'Before Last task',
                dayValue: '1 January 2023',
                date: 1672610961888,
                tags: ['lorem ipsum', 'fdsfsdf', '324324324'],
                id: 1672610961888,
            },
        ],
        sortTasksBy: false,
    },
    mutations: {
        ADD_TASK(state, data) {
            state.tasks.push(data);
        },
        UPDATE_TASK(state, data) {
            state.tasks.forEach(el => {
                if (el.id == data.id) {
                    el.title = data.title;
                    el.text = data.text;
                    el.tags = data.tags;
                }
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
                const dateNow = Date.now();
                const dayValue = format(new Date(), 'd MMMM yyyy');

                const obj = {
                    ...data, 
                    date: dateNow, 
                    dayValue,
                    completed: false,
                    id: dateNow, 
                };

                commit('ADD_TASK', obj);
            }
        },
        updateTask({commit}, data) {
            commit('UPDATE_TASK', data);
        },
        deleteTask({commit}, id) {
            commit('DELETE_TASK', id);
        },
        sortTasks({commit}, name) {
            commit('SORT_TASKS', name);
        },
        completeTask({commit}, obj) {
            commit('COMPLETE_TASK', obj);
        },
        searchByTag({getters}, tag) {
            const tasks = getters.getTasks;

            const withTheTag = tasks.filter(item => {
                if (item.tags.includes(tag)) {
                    return tag;
                }
            });

            console.log(withTheTag);
            return withTheTag;
        }
    },
    getters: {
        getTasks(state) {
            const arr = state.tasks.sort((a, b) => b.date - a.date);
            return arr;
        },
        getSortedTasks: (state, getters) => (list) => {
            switch (state.sortTasksBy) {
                case 'date':
                    return getters.getSortedByDateTasks(list);
                case 'complete':
                    return getters.getSortedByCompleteTasks(list);
                case 'incomplete':
                    return getters.getSortedByIncompleteTasks(list);
            };
        },
        getSortedByDateTasks: () => (list) => {
            const arr = [...list];
            return arr.reverse();
        },
        getSortedByCompleteTasks: () => (list) => {
            const arr = [...list];
            return arr.sort((x, y) => Number(y.completed) - Number(x.completed));
        },
        getSortedByIncompleteTasks: () => (list) => {
            const arr = [...list];
            return arr.sort((x, y) => Number(x.completed) - Number(y.completed));
        },
        getTasksSortType: (state) => state.sortTasksBy,
        getTask: (state) => (id) => state.tasks.find(el => el.id == id),
        getIncompleteTasksNumber: (state) => {
            let counter = 0;
            state.tasks.forEach(el => el.completed != true ? counter++ : '');
            
            return counter;
        }
    }
}); 