export default {
    cartItems: state => state.cartItems,
    totalPrice: state => state.cartItems.reduce((total, item) =>parseFloat(total) + parseFloatitem.price * item.quantity, 0),
        cartItemCount: state => {
          return state.cartItems.length; // Return the length of the cart items array
  }}
  