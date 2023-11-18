import { createApp } from 'vue'
import App from './App.vue'

// used for naive ui components 
import naive from "naive-ui";

// Import the router instance
import router from './router'; 



createApp(App).use(router).use(naive).mount('#app');
