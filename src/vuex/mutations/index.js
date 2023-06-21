import lists from './modules/lists';
import tasks from './modules/tasks';
import header from './modules/header';
import settings from './modules/settings';

export default {
    ...lists,
    ...tasks,
    ...header,
    ...settings
}