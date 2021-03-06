// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import VueCarousel from 'vue-carousel';
import App from './App'
import router from './router'

import 'variables.sass';
import 'bulma/bulma.sass';
import 'font-awesome/css/font-awesome.css';

Vue.use(VueResource);
Vue.use(VueCarousel);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
