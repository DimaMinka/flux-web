import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css';

require('./assets/scss/_main.scss');

Vue.config.productionTip = false;
Vue.use(VueGoodTablePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
