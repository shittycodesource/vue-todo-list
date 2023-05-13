import lists from './modules/lists';
import tasks from './modules/tasks';
import header from './modules/header';

export default {
    CHANGE_COLOR_THEME(state, name) {
        state.colorTheme = name;
    },
    ...lists,
    ...tasks,
    ...header
}