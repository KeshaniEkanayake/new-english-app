// src/router.js

// contains routes to each vue page that is going to be displayed in the web browser
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

import MainPage from './views/MainPage.vue'
import SelectProfLevel from './views/SelectProfLevel.vue'
import SelectModule from './views/SelectModule.vue'
import LeaderBoard from './views/LeaderBoard.vue'

// basic level -> reading
import ReadingMain from './views/basic/reading/ReadingMain.vue'
import ReadingText1 from '@/views/basic/reading/ReadingText1.vue'
import ReadingText2 from '@/views/basic/reading/ReadingText2.vue'



// import TestView from './views/TestView.vue'


const routes = [
  { path: '/Home', component: Home },
  { path: '/About', component: About },

  { path: '/MainPage', component: MainPage },
  { path: '/SelectProfLevel', component: SelectProfLevel },
  { path: '/SelectModule', component: SelectModule },
  { path: '/LeaderBoard', component: LeaderBoard },

  { path: '/basic/ReadingMain', component: ReadingMain },
  { path: '/basic/reading/ReadingText1', component: ReadingText1 },
  { path: '/basic/reading/ReadingText2', component: ReadingText2 },


  // { path: '/TestView', component: TestView }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;