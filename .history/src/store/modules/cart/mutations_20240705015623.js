const state = {
    cartItems: []
  };
  
  const mutations = {
    addToCart(state, product) {
      const cartItem = state.cartItems.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      saveCartToLocalStorage(state.cartItems);
    },
    updateQuantity(state, { id, quantity }) {
      const cartItem = state.cartItems.find(item => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
      saveCartToLocalStorage(state.cartItems);
    },
    removeItem(state, id) {
      state.cartItems = state.cartItems.filter(item => item.id !== id);
      saveCartToLocalStorage(state.cartItems);
    },
    loadCartFromLocalStorage(state, cartItems) {
      state.cartItems = cartItems;
    },
    clearCart(state) {
      state.cartItems = [];
      saveCartToLocalStorage(state.cartItems);
    }
  };
  
  const getters = {
    cartItems: state => state.cartItems,
    totalPrice: state => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  };
  
  const actions = {
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
      const cartItems = getCartFromLocalStorage();
      commit('loadCartFromLocalStorage', cartItems);
    },
    clearCart({ commit }) {
      commit('clearCart');
    }
  };
  
  function saveCartToLocalStorage(cartItems) {
    const userId = localStorage.getItem('userId'); // Assumes you store the user ID in local storage after login
    if (userId) {
      localStorage.setItem(`cartItems_${userId}`, JSON.stringify(cartItems));
    }
  }
  
  function getCartFromLocalStorage() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      const savedCartItems = localStorage.getItem(`cartItems_${userId}`);
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    }
    return [];
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
  };
  