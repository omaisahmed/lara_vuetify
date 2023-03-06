import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

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
