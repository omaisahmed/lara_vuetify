// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

// require('./bootstrap');

// window.Vue = require('vue').default;
// import Vuetify from 'vuetify';
// import VueRouter from 'vue-router';
// import { createRouter, createWebHistory } from 'vue-router';

// // import 'vuetify/dist/vuetify.min.css';
// // import 'mdi/font/css/materialdesignicons.css';

// Vue.use(Vuetify);

// Vue.use(VueRouter);
// const router = new VueRouter({
// mode: 'history',
// linkExactActiveClass: 'active',
// routes: [
//     { path: '/', component: Home },
//     { path: '/about', component: About }
//   ]
// });
// export default router;

// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// import ExampleComponent from './components/ExampleComponent.vue';
// import MyComponent from './components/MyComponent.vue';
// import Home from './components/Home.vue';
// import About from './components/About.vue';

// Vue.component('example-component', ExampleComponent);
// Vue.component('my-component', MyComponent);

// // const router = createRouter({
// //     history: createWebHistory(),
// //     routes: [
// //       { path: '/', component: Home },
// //       { path: '/about', component: About }
// //     ]
// //   });

// //   export default router;
  

// // Vue.component('my-component', require('./components/MyComponent.vue'));

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: '#app',
//     vuetify: new Vuetify(),
//     router,
// });



// resources/js/app.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './layouts/App.vue';
import router from './router';

Vue.use(Vuetify);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  vuetify: new Vuetify(),
});

