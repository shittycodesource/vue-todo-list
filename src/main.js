import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/index.js";
import router from './router/index.js';

import textareaDirective from './directives/textarea.directive';
import dateToHours from './filters/dateToHours.filter';

Vue.directive('textarea', textareaDirective);
Vue.filter('dateToHours', dateToHours);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
