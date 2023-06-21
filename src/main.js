import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/index.js";
import router from './router/index.js';

import textareaDirective from './directives/textarea.directive';
import clickOutsideDirective from './directives/clickOutside.directive';
import dateToHours from './filters/dateToHours.filter';
import localizeFilter from './filters/localize.filter';
import dateFilter from './filters/date.filter';

Vue.directive('textarea', textareaDirective);
Vue.directive('click-outside', clickOutsideDirective);
Vue.filter('dateToHours', dateToHours);
Vue.filter('localizeFilter', localizeFilter);
Vue.filter('dateFilter', dateFilter);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
