import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/index.js";
import router from './router/index.js';

import textareaDirective from './directives/textarea.directive';

Vue.directive('textarea', textareaDirective);

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount("#app");
