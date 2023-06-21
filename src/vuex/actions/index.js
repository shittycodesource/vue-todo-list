import lists from './modules/lists';
import search from './modules/search';
import tasks from './modules/tasks';
import header from './modules/header';
import settings from './modules/settings';

export default {
    ...lists,
    ...search,
    ...tasks,
    ...header,
    ...settings
};