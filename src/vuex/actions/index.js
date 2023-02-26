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

        localStorage.setItem('theme_color', name);
        commit('CHANGE_COLOR_THEME', name);
    },
    applyColorTheme({dispatch, getters}) {
        const theme = getters.getColorThemeFromLocalStorage;
        console.log(theme)

        if (theme) {
            dispatch('changeColorTheme', theme);
        }
    },

    ...lists,
    ...search,
    ...tasks,
};