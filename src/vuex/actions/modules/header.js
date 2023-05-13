import router from '../../../router';

export default {
    setHeaderTitle({commit}, name = false) {
        let routerText = router.currentRoute.name;

        if (name) {
            routerText = name;
        }

        if (routerText != 'tasks') {
            commit('SET_HEADER_TITLE', routerText);
        }
    }
}