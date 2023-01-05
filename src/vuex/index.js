import Vue from 'vue';
import Vuex from 'vuex';
import { format } from 'date-fns'; 

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [
            {
                text: 'first task',
                dayValue: '3 March 2007',
                date: 1172810970320,
                id: 1172810970320
            },
            {
                text: 'before first task',
                dayValue: '7 July 2005',
                date: 1122790970320,
                id: 1122790970320
            },
            {
                text: 'middle task',
                dayValue: '12 December 2022',
                date: 1672310952752,
                id: 1672310952752,
            },
            { 
                text: 'lastest task',
                dayValue: '1 January 2023',
                date: 1672810784122,
                id: 1672810784122,
            },
            {
                text: 'before last task',
                dayValue: '1 January 2023',
                date: 1672610961888,
                id: 1672610961888,
            },
        ]   
    },
    mutations: {
        ADD_TASK(state, data) {
            const date_now = Date.now();

            const dayValue = format(new Date(), 'd MMMM yyyy');
            console.log(dayValue);

            state.tasks.push({
                text: data, 
                date: date_now,
                id: date_now, 
                dayValue: dayValue
            });
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter(item => item.id != id);
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
        }
    },
    getters: {
        getTasks(state) {
            const arr = state.tasks.sort((a, b) => b.date - a.date);

            return arr;
        }
    }
}); 