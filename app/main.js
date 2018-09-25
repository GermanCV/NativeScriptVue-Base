import Vue from 'nativescript-vue';
import App from './pages/Home';
import store from './store';
import VueDevtools from 'nativescript-vue-devtools';

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === 'production';

//components
import CoActionBar from './components/ActionBar';
// import CoActionBarTrans from './components/ActionBarTrans';
// import FloatLabel from './components/FloatLabel';
import SegmentedBar from './components/SegmentedBar';

// //tabs
// import TabProyecto from './components/tabs/Proyecto';
// import TabInkarry from './components/tabs/Inkarry';

// Uncomment the following to see NativeScript-Vue output logs
Vue.component('action-bar', CoActionBar);
// Vue.component('ts-action-bar-trans', CoActionBarTrans);
// Vue.component('ts-float-label', FloatLabel);
Vue.component('segmented-bar', SegmentedBar);
// Vue.component('tab-proyecto', TabProyecto);
// Vue.component('tab-inkarry', TabInkarry);

Vue.registerElement(
  'CardView',
  () => require('nativescript-cardview').CardView
);
Vue.registerElement(
  'StatusBar',
  () => require('nativescript-statusbar').StatusBar
);
Vue.registerElement(
  'Fab',
  () => require('nativescript-floatingactionbutton').Fab
);

new Vue({
  store,
  render: h => h('Frame', [h(App)]),
}).$start();
