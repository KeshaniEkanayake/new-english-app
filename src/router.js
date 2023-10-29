// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import SelectProfLevel from './views/SelectProfLevel.vue'
import SelectModule from './views/SelectModule.vue'


// import TestView from './views/TestView.vue'


const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },

  { path: '/SelectProfLevel', component: SelectProfLevel },
  { path: '/SelectModule', component: SelectModule },


  // { path: '/TestView', component: TestView }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;