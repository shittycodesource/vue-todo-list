import lists from './modules/lists';
import tasks from './modules/tasks';

export default {
    getColorTheme: (state) => state.colorTheme,
    getColorThemeFromLocalStorage: () => localStorage.getItem('theme_color'),
    ...lists,
    ...tasks
}