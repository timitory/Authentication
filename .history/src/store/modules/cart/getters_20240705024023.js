export default {
    cartItems: state => state.cartItems,
    totalPrice: state => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    getters: {
        cartItemCount: state => {
          return state.cartItems.length; // Return the length of the cart items array
  };
  