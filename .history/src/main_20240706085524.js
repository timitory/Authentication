import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import '../src/assets/styles.css'
// Import SweetAlert globally in your main.js or main entry point
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Chat from 'vue3-beautiful-chat'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// library.add(fas);
const app=createApp(App)
app.use(store)
app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
app.use
