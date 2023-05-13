export default {
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
    
    SET_OPENED_LIST_NAME(state, name) {
        state.openedList = name;
    }
}