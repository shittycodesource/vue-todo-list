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

    async searchTasks({getters, dispatch}, data) {
        try {
            let tasksList = [];
            const foundTasks = [];
    
            data.list
                ? tasksList = getters.getList(data.list.id).tasks // tasks from selected list
                : getters.getLists.forEach(list => tasksList = [...tasksList, ...list.tasks]); // there will be all tasks

            for (let i = 0; i <= tasksList.length - 1; i++) {
                const task = tasksList[i]; // current task
                const titleFromInput = data.title.toLowerCase();
                let tagsInTheTask = [];
                
                if (data.tags.length) {
                    tagsInTheTask = await dispatch('doesIncludeTags', {task: task, tags: data.tags});
                } else {
                    tagsInTheTask = true;
                }

                if (task.title.toLowerCase().includes( titleFromInput ) && tagsInTheTask ) {
                    foundTasks.push(task);
                }
            }

            return foundTasks;
        } catch (error) {
            throw error;
        }
    },

    doesIncludeTags({}, {task, tags}) {
        const sort = (arr) => {
            const sorted = arr.sort((a, b) => {
                if(a < b) { return -1; }
                if(a > b) { return 1; }
    
                return 0;
            });

            return sorted.map(tag => tag.toLowerCase()).join('');
        }

        const sortedTaskTags = sort(task.tags);
        const sortedDataTags = sort(tags);

        return sortedTaskTags.includes(sortedDataTags) ? true : false;
    },
}