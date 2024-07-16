export default {
    cartItems: state => state.cartItems,
    totalPrice: state => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  };
  