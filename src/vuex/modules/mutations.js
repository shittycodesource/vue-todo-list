export default {
    ADD_TASK(state, {obj, listIndex}) {
        state.lists[listIndex].tasks.unshift(obj);
    },
    
    UPDATE_TASK(state, {data, listIndex, taskIndex}) {
        const taskObject = state.lists[listIndex].tasks[taskIndex];

        taskObject.title = data.title;
        taskObject.text = data.text;
        taskObject.tags = data.tags;

        // state.lists.forEach(list => {
        //     if (list.id == data.listId) {
        //         list.tasks[index].title = data.title;
        //         list.tasks[index].text = data.text;
        //         list.tasks[index].tags = data.tags; 
        //     }
        // });
    },

    DELETE_TASK(state, {data, listIndex}) {
        state.lists[listIndex].tasks = state.lists[listIndex].tasks.filter(task => task.id != data.id);
    },

    SORT_TASKS(state, name) {
        state.sortTasksBy == name
            ? state.sortTasksBy = false
            : state.sortTasksBy = name;
    },

    COMPLETE_TASK(state, {listIndex, taskIndex}) {
        const task = state.lists[listIndex].tasks[taskIndex];
        task.completed = !task.completed;
    }

}