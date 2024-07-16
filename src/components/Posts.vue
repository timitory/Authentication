<template>
    <div v-if="isAuthenticated">
    <div v-if="user" class="min-h-screen bg-light-blue-50 flex flex-col">

      <nav class="bg-light-blue-500 text-white p-4 flex justify-between items-center">
        <div class="text-lg font-bold">{{ user.firstName }} Dashboard</div>
        <div class="space-x-4">
          <button class="bg-light-blue-600 px-3 py-2 rounded hover:bg-light-blue-700">Profile</button>
          <button class="bg-light-blue-600 px-3 py-2 rounded hover:bg-light-blue-700">Logout</button>
        </div>
      </nav>
  
     
      <div class="flex-grow p-6">
        <div class="max-w-4xl mx-auto bg-white p-6 rounded shadow-lg">
          <h2 class="text-2xl font-bold mb-4 text-uppercase">{{ user.username }} Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
           
            <div class="space-y-4">
              <div>
                <label class="block font-bold">Name:</label>
                <p class="text-gray-700">{{ user.firstName + ' ' + user.lastName  }}</p>
              </div>
              <div>
                <label class="block font-bold">Email:</label>
                <p class="text-gray-700">{{ user.email }}</p>
              </div>
              <div>
                <label class="block font-bold">Country:</label>
                <p class="text-gray-700">{{ user.country }}</p>
              </div>
              <div>
                <label class="block font-bold">Age:</label>
                <p class="text-gray-700">{{ user.age }}</p>
              </div>
              <div>
                <label class="block font-bold">Weight:</label>
                <p class="text-gray-700">{{ user.weight }} kg</p>
              </div>
              <div>
                <label class="block font-bold">Favorite Color:</label>
                <p class="text-gray-700">{{ user.favoriteColor }}</p>
              </div>
            </div>
          </div>
        </div>
  

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded shadow-lg">
            <RouterLink to="/profile" class="text-lg font-bold text-light-blue-600 hover:text-light-blue-700">Profile</RouterLink>
          </div>
          <div class="bg-white p-4 rounded shadow-lg">
            <RouterLink to="/settings" class="text-lg font-bold text-light-blue-600 hover:text-light-blue-700">Settings</RouterLink>
          </div>
          <div class="bg-white p-4 rounded shadow-lg">
            <RouterLink to="/help" class="text-lg font-bold text-light-blue-600 hover:text-light-blue-700">Help</RouterLink>
          </div>
        </div>
      </div>
      </div>
  
      
      <footer class="bg-light-blue-500 text-white p-4 text-center">
        © 2024 Your Company. All rights reserved.
      </footer>
    </div>
  </template>
<script>
import axiosInstance from '../Services/AxiosInstance.js'
import { mapGetters } from 'vuex'
import { LOGIN_USER_GETTER, USER_IS_AUTHENTICATED } from '@/store/storeconstants'
export default{
    data(){
        return{
            user:null
        }
    },
    computed:{
        ...mapGetters('auth',{
            userId:LOGIN_USER_GETTER,
            isAuthenticated:USER_IS_AUTHENTICATED
        })
    },
    mounted(){
        if(this.userId){
        axiosInstance.get(`https://dummyjson.com/users/${this.userId}`).then(response =>{
            this.user=response.data
            // console.log(this.user)
        })
    }
    }
}

</script>

<style scoped>
.bg-light-blue-50 {
  background-color: #ebf8ff;
}
.bg-light-blue-500 {
  background-color: #4299e1;
}
.bg-light-blue-600 {
  background-color: #3182ce;
}
.bg-light-blue-700 {
  background-color: #2b6cb0;
}
</style>