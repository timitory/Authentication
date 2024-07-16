import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: ''
  },
  mutations: {
    addToCart(state, product) {
      const cartItem = state.cartItems.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    updateQuantity(state, { id, quantity }) {
      const cartItem = state.cartItems.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeItem(state, id) {
      state.cartItems = state.cartItems.filter(item => item.id !== id);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    loadCartFromLocalStorage(state) {
      const savedCartItems = localStorage.getItem('cartItems');
      if (savedCartItems) {
        state.cartItems = JSON.parse(savedCartItems);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    }
  },
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
