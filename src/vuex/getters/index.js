import lists from './modules/lists';
import tasks from './modules/tasks';

export default {
    getColorTheme: (state) => state.colorTheme,
    ...lists,
    ...tasks
}