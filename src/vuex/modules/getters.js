export default {
    getTasks: (state) => state.tasks.sort((a, b) => b.date - a.date),
    getTasksSortType: (state) => state.sortTasksBy,
    getTask: (state) => (id) => state.tasks.find(el => el.id == id),
    getIncompleteTasksNumber: (state) => {
        let counter = 0;
        state.tasks.forEach(el => el.completed != true ? counter++ : '');
        
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