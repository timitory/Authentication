import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },
    updateQuantity({ commit }, payload) {
      commit('updateQuantity', payload);
    },
    removeItem({ commit }, id) {
      commit('removeItem', id);
    },
    loadCartFromLocalStorage({ commit }) {
      commit('loadCartFromLocalStorage');
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  }
});
