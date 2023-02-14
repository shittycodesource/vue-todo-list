import { format } from 'date-fns'; 

export default {
    addTask({commit, getters}, data) {
        if (data) {
            const listIndex = getters.getListIndex(data.listId);

            const dateNow = Date.now();
            const dayValue = format(new Date(), 'd MMMM yyyy');

            const obj = {
                ...data, 
                date: dateNow, 
                dayValue,
                completed: false,
                id: dateNow,
            };

            commit('ADD_TASK', {obj, listIndex});
        }
    },
    
    updateTask({commit, getters}, data) {
        const listIndex = getters.getListIndex(data.listId)
        const taskIndex = getters.getTask(data.listId, data.id, true); // returns task index
        
        commit('UPDATE_TASK', {data, listIndex, taskIndex});
    },

    deleteTask({commit, getters}, data) {
        const listIndex = getters.getListIndex(data.listId)

        commit('DELETE_TASK', {data, listIndex});
    },
    
    sortTasks({commit}, name) {
        commit('SORT_TASKS', name);
    },

    completeTask({commit, getters}, data) {
        const listIndex = getters.getListIndex(data.listId)
        const taskIndex = getters.getTask(data.listId, data.id, true); // returns task index

        commit('COMPLETE_TASK', {listIndex, taskIndex});
    },

    searchTasks({getters}, data) {
        let tasksList = [];
        const foundTasks = [];

        if (data.list.id) {
            tasksList = getters.getList(data.list.id).tasks;
        } else {
            getters.getLists.forEach(list => tasksList = [...tasksList, ...list.tasks]);
        }

        console.log(data);
        console.log(tasksList);

        tasksList.forEach(task => {
            if (task.title.toLowerCase().includes( data.title.toLowerCase() )) {
                foundTasks.push(task);
            }
        })

        return foundTasks;
    },

    searchByTags({getters}, obj) {
        const list = getters.getList(obj.listId);
        const tasks = list.tasks;

        tasks.forEach(task => {
            obj.tags.forEach(tag => {
                if (task.tags.includes(tag)) {

                }
            })
        })
        // need to sort tags in both objects
    
        // const withTheTag = tasks.filter(item => {
            // if (item.tags.includes(tag)) {
                // return tag;
            // }
        // });

        return withTheTag;
    }
}