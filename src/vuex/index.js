import Vue from 'vue';
import Vuex from 'vuex';

import state from './modules/state.js';
import mutations from './modules/mutations';
import actions from './modules/actions.js';
import getters from './modules/getters.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
}); 