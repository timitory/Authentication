import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
  }
  getters: {
    cartItems: (state) => state.cartItems,
    totalPrice: (state) => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
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
