export default {
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