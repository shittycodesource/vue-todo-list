import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []   
    },
    mutations: {
        ADD_TASK(state, data) {
            state.tasks.unshift({text: data, id: Date.now()});
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
        getTasks: state => state.tasks 
    }
}); 