import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import '../src/assets/styles.css'
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const app=createApp(App)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
