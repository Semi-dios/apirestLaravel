/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');
import Vue from 'vue';
import VueRouter from "vue-router"

import { ValidationProvider } from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
import router from './routes'
import App from './App.vue';


import moment from 'vue-moment/dist/vue-moment.es'
//import VueMomentLocalePlugin from 'vue-moment-locale'

Vue.use(require('vue-moment'),
moment);
/* Vue.use(VueMomentLocalePlugin, {    lang: 'es'
}) */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)

window.Vue= Vue;
Vue.use(VueRouter);
/*
import Form from "./utilities/Form";
window.Form = Form; */




window.eventBus = new Vue();



import { Form, HasError, AlertError } from 'vform'





const app = new Vue({
    el: '#app',
    router,
    render: h=>h(App)
});
