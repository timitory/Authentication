<template>
    <div>
      <h1 class="text-red-500 text-lg text-center">HOME PAGE</h1>
      <h1 class="bg-red-500 text-center text-blue-500"><router-link to="/posts">MY DATA</router-link></h1>
      <div class="container mx-auto p-4">
        <header class="text-center mb-8">
          <h1 class="text-4xl font-bold">Our Products</h1>
          <input type="text" placeholder="search....." v-model="searchedQuery" class="border p-2 w-full mt-4">
        </header>
        <div v-if="searchedProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="product in searchedProducts" :key="product.id" class="bg-white shadow-md rounded-lg p-4">
            <h2 class="text-2xl font-semibold">{{ product.title }}</h2>
            <p class="text-gray-700">Price: ${{ product.price }}</p>
            <p class="text-gray-700">Category: {{ product.category }}</p>
            <p class="text-yellow-500">Rating: {{ product.rating }}</p>
            <button @click="addToCart(product)" class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
          </div>
        </div>
        <div v-else-if="searchedQuery" class="text-center text-gray-500">
          Item not available
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        products: [],
        searchedQuery: ''
      };
    },
    computed: {
      searchedProducts() {
        return this.products.filter(product => {
          return product.title.toLowerCase().includes(this.searchedQuery.toLowerCase());
        });
      }
    },
    methods: {
      ...mapActions('cart',['addToCart','loadCartFromLocalStorage']),
    },
    mounted() {
      axios.get('https://dummyjson.com/products')
        .then(response => {
          this.products = response.data.products;
        });
      this.$store.dispatch('loadCartFromLocalStorage');
    }
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  