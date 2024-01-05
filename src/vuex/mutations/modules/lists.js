export default {
    ADD_LIST(state, data) {
        state.lists.push(data);
    },

    UPDATE_LIST(state, {data, listIndex}) {
        state.lists[listIndex] = { ...state.lists[listIndex], ...data }
    },

    DELETE_LIST(state, listIndex) {
        state.lists.splice(listIndex, 1);
    },
}