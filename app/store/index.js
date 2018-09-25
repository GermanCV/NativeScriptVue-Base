import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import theme from './modules/theme';
import component from './modules/component';
import sqlite from './modules/sqlite';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    counter,
    component,
    theme,
    sqlite,
  },
  strict: debug,
});

// //Vue.prototype.$store = store;

// export default { store };
// // module.exports = store;
