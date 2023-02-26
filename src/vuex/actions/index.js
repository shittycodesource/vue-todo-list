import lists from './modules/lists';
import search from './modules/search';
import tasks from './modules/tasks';

export default {
    changeColorTheme({commit}, name) {
        
        if (name == 'Dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme', 'dark');
        }

        commit('CHANGE_COLOR_THEME', name);
    },

    ...lists,
    ...search,
    ...tasks,
};