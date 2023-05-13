export default {
    async addList({commit, dispatch}, data) {
        try {
            const isAlreadyUsed = await dispatch('checkListName', data.name);
            if (isAlreadyUsed) {
                return isAlreadyUsed;
            }

            const id = Date.now();
            commit('ADD_LIST', {...data, id});
        } catch (error) {
            throw error;
        }
    },

    async editList({commit, getters, dispatch}, data) {
        try {
            const list = getters.getList(data.id)
            let isAlreadyUsed = false;

            if (list.name != data.name) {
                isAlreadyUsed = await dispatch('checkListName', data.name);

                if (isAlreadyUsed) {
                    return isAlreadyUsed;
                } 
            };

            const listIndex = getters.getListIndex(data.id)
            commit('UPDATE_LIST', {data, listIndex});
        } catch (error) {
            throw error;
        }
    },

    deleteList({commit, getters}, list) {
        const listIndex = getters.getListIndex(list.id);
        commit('DELETE_LIST', listIndex);
    },

    checkListName({getters}, name) {
        const lists = getters.getListsData;
        let isAlreadyUsed = false;

        lists.forEach(list => {
            if (list.name == name) {
                isAlreadyUsed = true;
            }
        })

        return isAlreadyUsed;
    },

    setOpenedListName({commit}, name) {
        commit('SET_OPENED_LIST_NAME', name);
    }
}