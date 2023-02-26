export default {
    CHANGE_COLOR_THEME(state, name) {
        state.colorTheme = name;
    },

    ADD_LIST(state, data) {
        state.lists.push(data);
    },

    UPDATE_LIST(state, {data, listIndex}) {
        const list = state.lists[listIndex];
        list.name = data.name;
        list.description = data.description;
    },

    DELETE_LIST(state, listIndex) {
        state.lists.splice(listIndex, 1);
    },

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