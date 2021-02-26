// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ChatMessages from './components/ChatMessages.vue'
import VueEcho from 'vue-echo-laravel';

Vue.use(VueRouter);

window.Pusher = require('pusher-js');

Vue.use(VueEcho, {
  broadcaster: 'pusher',
    key: "0c7cc8063a0927ea5520",
    cluster: "eu",
    forceTLS: true
});

const router = new VueRouter({
  routes: routes
});


const routes = [
  {
    path: '/', 
    component: ChatMessages
  }
];
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  components: { App },
  template: '<App/>',

});
