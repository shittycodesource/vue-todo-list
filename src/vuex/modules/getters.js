export default {
    getLists: (state) => state.lists,

    getList: (state) => (listId) => state.lists.find(el => el.id == listId),

    getTasksSortType: (state) => state.sortTasksBy,

    getTask: (state) => (listId, id) => {
        console.log(listId);
        console.log(id); 
        const list = state.lists.find(el => el.id == listId);
        const task = list.tasks.find(el => el.id == id)
        return task;
    },

    getIncompleteTasksNumber: () => (arr) => {
        let counter = 0;
        arr.forEach(el => el.completed != true ? counter++ : '');
        
        return counter;
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
}