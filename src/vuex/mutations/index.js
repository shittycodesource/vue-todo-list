import lists from './modules/lists';
import tasks from './modules/tasks';

export default {
    CHANGE_COLOR_THEME(state, name) {
        state.colorTheme = name;
    },
    ...lists,
    ...tasks
}