import { createStore } from 'vuex';

export default createStore({
namespaced:true,
  state: {
    cartItems: []
  },
  mutations,
  getters,
  actions
});
