import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
