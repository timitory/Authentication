import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import '../src/assets/styles.css'
import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
createApp(App).use(store).use(router).mount('#app')
