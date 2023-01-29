import { format } from 'date-fns'; 

export default {
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

        return withTheTag;
    }
}