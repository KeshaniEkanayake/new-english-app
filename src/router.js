// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import MainPage from './views/MainPage.vue'
import SelectProfLevel from './views/SelectProfLevel.vue'
import SelectModule from './views/SelectModule.vue'
import LeaderBoard from './views/LeaderBoard.vue'
import SuccessFeedback from './views/SuccessFeedback.vue'

import ReadingMain from './views/basic/reading/ReadingMain.vue'

// import TestView from './views/TestView.vue'


const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },

  { path: '/MainPage', component: MainPage },
  { path: '/SelectProfLevel', component: SelectProfLevel },
  { path: '/SelectModule', component: SelectModule },
  { path: '/LeaderBoard', component: LeaderBoard },
  { path: '/SuccessFeedback', component: SuccessFeedback },

  { path: '/basic/ReadingMain', component: ReadingMain },

  // { path: '/TestView', component: TestView }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;