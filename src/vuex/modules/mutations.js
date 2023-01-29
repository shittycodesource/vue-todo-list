export default {
    ADD_TASK(state, data) {
        state.tasks.push(data);
    },
    
    UPDATE_TASK(state, data) {
        state.tasks.forEach(el => {
            if (el.id == data.id) {
                el.title = data.title;
                el.text = data.text;
                el.tags = data.tags;
            }
        });
    },

    DELETE_TASK(state, id) {
        state.tasks = state.tasks.filter(item => item.id != id);
    },

    SORT_TASKS(state, name) {
        state.sortTasksBy == name
            ? state.sortTasksBy = false
            : state.sortTasksBy = name;
    },

    COMPLETE_TASK(state, obj) {
        const index = state.tasks.indexOf(obj);
        state.tasks[index].completed = !state.tasks[index].completed;
    }

}