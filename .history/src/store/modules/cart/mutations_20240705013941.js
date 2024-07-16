export default{
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
    }
