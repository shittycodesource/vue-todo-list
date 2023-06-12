export default {
    getLists: (state) => state.lists,

    getList: (state) => (listId) => state.lists.find(el => el.id == listId),

    getListsData: (state) => {
        const arr = [];
        
        state.lists.forEach(list => {
            arr.push({ name: list.name, description: list.description, id: list.id });
        })

        return arr;
    },

    getListIndex: (state, getters) => (listId) => state.lists.indexOf( getters.getList(listId) ),

    getListProgress: (state, getters) => (arr = []) => {
        const completed = getters.getCompleteTasksNumber(arr);
        return Math.trunc((completed / arr.length) * 100);
    }
}