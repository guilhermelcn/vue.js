import Vue from 'vue'
import App from './App'
import {routes} from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({

    routes

});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: i => i (App)
})

