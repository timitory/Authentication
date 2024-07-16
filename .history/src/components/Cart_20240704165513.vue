<template>
    <div class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-4">Shopping Cart</h2>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4">
          <div>
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <p class="text-gray-700">Price: ${{ item.price }}</p>
            <p class="text-gray-700">Quantity: {{ item.quantity }}</p>
          </div>
          <div class="flex items-center">
            <button @click="decreaseQuantity(item)" class="bg-red-500 text-white px-2 py-1 rounded">-</button>
            <button @click="increaseQuantity(item)" class="bg-green-500 text-white px-2 py-1 rounded mx-2">+</button>
            <button @click="removeFromCart(item)" class="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </div>
        </div>
        <div class="text-right text-xl font-bold">Total Price: ${{ totalPrice }}</div>
        <button @click="checkout" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Checkout</button>
      </div>
      <div v-else class="text-center text-gray-500">Your cart is empty</div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['''cartItems', 'totalPrice'])
    },
    methods: {
      ...mapActions([ 'cart','updateQuantity', 'removeItem', 'clearCart']),
      increaseQuantity(item) {
        this.updateQuantity({ id: item.id, quantity: item.quantity + 1 });
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          this.updateQuantity({ id: item.id, quantity: item.quantity - 1 });
        }
      },
      removeFromCart(item) {
        this.removeItem(item.id);
      },
      checkout() {
        // Placeholder for actual checkout process
        alert(`Proceeding to checkout with total price: $${this.totalPrice}`);
        this.clearCart();
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  