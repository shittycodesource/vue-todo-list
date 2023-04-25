export default {
    getTasksSortType: (state) => state.sortTasksBy,

    getAllTasks: (state) => {
        const tasks = [];
        state.lists.forEach(list => {
            list.tasks.forEach(task => tasks.push(task));
        });

        return tasks;
    },

    getTask: (state) => (listId, id, index) => {
        const list = state.lists.find(el => el.id == listId);
        const task = list.tasks.find(el => el.id == id)

        if (index) {
            return list.tasks.indexOf(task);  // returns index of task if index in the params isn't null
        }

        return task;
    },

    getIncompleteTasksNumber: () => (arr) => {
        console.log('gitn', arr)
        let counter = 0;
        arr.forEach(el => el.completed != true ? counter++ : '');
        
        return counter;
    },

    getCompleteTasksNumber: (state, getters) => (arr = []) => {
        const IncompeleteTasksNum = getters.getIncompleteTasksNumber(arr);
        const CompleteTasksNum = arr.length - IncompeleteTasksNum;

        return CompleteTasksNum;
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