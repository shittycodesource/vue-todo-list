import lists from './modules/lists';
import tasks from './modules/tasks';
import header from './modules/header';

export default {
    getColorTheme: (state) => state.colorTheme,
    getColorThemeFromLocalStorage: () => localStorage.getItem('theme_color'),
    ...lists,
    ...tasks,
    ...header
}