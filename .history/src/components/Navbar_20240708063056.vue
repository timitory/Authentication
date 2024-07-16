<template>
    <div class="header w-full py-2 top-0 justify-between static">
      <div class="flex justify-between items-center w-full px-4">
        <div class="flex items-center">
          <RouterLink to="/">
            <img src="../assets/Image/Logoimage.png" alt="logoimage" class="h-10">
          </RouterLink>
        </div>
        <div class="relative flex items-center bg-white rounded-md w-1/2 lg:w-2/5 mx-5 hidden md:flex">
          <svg 
            class="absolute left-0 transform -translate-y-1/2 h-5 w-5 text-gray-400 mt-4 ml-2 cursor-pointer" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
          <input 
            type="text" 
            placeholder="Search for our products..." 
            class="py-3 border-0 outline-0 rounded-md px-6 ml-4 w-full text-sm"
          >
        </div>
        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-white focus:outline-none">
            <svg 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center space-x-5 text-white">
          <form class="outline-0 border-0">
            <select name="language" id="language" class="text-white outline-0 border-0">
              <option value="english">English</option>
              <option value="portuguese">Portuguese</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </form>
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/">PaddyBlogs</RouterLink>
          <div v-if="isAuthenticated">
            <button @click="OnLogout">LogOut</button>
          </div>
          <div v-if="!isAuthenticated">
            <RouterLink to="/signup">SignUp</RouterLink>
          </div>
          <div v-if="!isAuthenticated">
            <RouterLink to="/login">Login</RouterLink>
          </div>
          <div class="relative">
            <RouterLink to="/cart">
              <img src="../assets/cartimage.png" alt="cartimage" class="w-10 h-10">
              <span v-if="cartItemCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{{ cartItemCount }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
      <div v-if="isMobileMenuOpen" class="md:hidden">
        <div class="flex flex-col items-start px-4 py-2 space-y-2 text-white">
          <form class="outline-0 border-0 w-full">
            <select name="language" id="language" class="text-white outline-0 border-0 w-full">
              <option value="english">English</option>
              <option value="portuguese">Portuguese</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </form>
          <RouterLink to="/home" class="w-full text-center">Home</RouterLink>
          <RouterLink to="/" class="w-full text-center">PaddyBlogs</RouterLink>
          <div v-if="isAuthenticated" class="w-full text-center">
            <button @click="OnLogout" class="w-full text-center">LogOut</button>
          </div>
          <div v-if="!isAuthenticated" class="w-full text-left">
            <RouterLink to="/signup" class="w-full text-left">SignUp</RouterLink>
          </div>
          <div v-if="!isAuthenticated" class="w-full text-left">
            <RouterLink to="/login" class="w-full text-left">Login</RouterLink>
          </div>
          <div class="relative w-full text-left">
            <RouterLink to="/cart" class="w-full text-left flex items-center">
              <img src="../assets/cartimage.png" alt="cartimage" class="w-10 h-10">
              <span v-if="cartItemCount > 0" class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{{ cartItemCount }}</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { LOGOUT_USER, USER_IS_AUTHENTICATED } from '@/store/storeconstants';
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    data(){
        return{
            isMobileMenuOpen:false
        }
    },
    computed: {
      ...mapGetters('auth', {
        isAuthenticated: USER_IS_AUTHENTICATED,
      }),
      ...mapGetters('cart', {
        cartItemCount: 'cartItemCount', // Assumes you have a getter for cart item count
      }),
    },
    methods: {
      ...mapActions('auth', {
        logoutnow: LOGOUT_USER,
      }),
      OnLogout() {
        this.logoutnow().then(() => {
          this.$router.replace('/login');
        });
      },
    },
  };
  </script>
  
  <style>
  .header {
    background-color: #242734;
  }
  form > select {
    background-color: #242734;
  }
  </style>
  