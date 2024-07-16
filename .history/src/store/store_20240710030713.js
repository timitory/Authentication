import { createStore } from 'vuex'
import auth from './modules/auth/index.js';
import cart from './modules/cart/index.js';
import {CHANGE_LOADER} from './storeconstants.js'
import createPersistedState from 'vuex-persistedstate'
const store= createStore({
  stat(){
    return{
      ShowLoader:false,
    }
  },
  modules:{
    auth,
    cart,
  },
 
  mutations:{
    [CHANGE_LOADER](state,payload){
      state.ShowLoader=payload;
    }
  },
  plugins:[createPersistedState()]
})

export default store;