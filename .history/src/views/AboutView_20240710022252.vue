<template>
  <!-- Start Breadcrumbs -->
  <div class="bg-gray-100">
      <div class="container mx-auto">
          <nav aria-label="breadcrumb">
              <ol class="breadcrumb flex px-0">
                  <li class="breadcrumb-item">
                      <RouterLink to="/" class="text-gray-600 hover:text-gray-800">Home</RouterLink>
                  </li> /
                  <li class="breadcrumb-item active" aria-current="page">SignUp</li>
              </ol>
          </nav>
      </div>
  </div>
  <!-- /End Breadcrumbs -->
  
  <!-- Start page content -->
  <div class="container mx-auto">
      <div class="my-4 my-lg-5">
          <div class="mx-auto max-w-md lg:max-w-lg text-center">
              <img src="../assets/Logoimage.png" alt="signin" class="mx-auto">
              <p class="text-2xl font-semibold text-gray-800 mt-4 mb-5">Create a new PaddyGro Account</p>
              <div class="bg-red-600 text-lg" v-if="error">{{ error }}</div>
              <form @submit.prevent="Register">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                      <div class="mb-4 md:mb-0">
                          <div class="relative">
                              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                  <!-- You can replace this with your icon or SVG -->
                                  <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                  </svg>
                              </span>
                              <input type="text" v-model="Firstname" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="First name">
                          </div>
                          <div class="text-red-500 text-left text-sm" v-if="errors.Firstname">
                              {{ errors.Firstname }}
                        </div>
                      </div>
                      <div>
                          <div class="relative">
                              <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                  <!-- You can replace this with your icon or SVG -->
                                  <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                  </svg>
                              </span>
                              <input type="text" v-model="Lastname" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Last name">
                          </div>
                          <div class="text-red-500 text-left text-sm" v-if="errors.Lastname">
                              {{ errors.Lastname }}
                        </div>
                      </div>
                  </div>
                  <div class="mb-4">
                      <div class="relative">
                          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                              <!-- You can replace this with your icon or SVG -->
                              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                          </span>
                          <input type="email" v-model="email" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Email">
                      </div>
                      <div class="text-red-500 text-left text-sm" v-if="errors.email">
                              {{ errors.email }}
                        </div>
                  </div>
                  <div class="mb-4">
                      <div class="relative">
                          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                              <!-- You can replace this with your icon or SVG -->
                              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                          </span>
                          <input type="password" v-model="password" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Password">
                      </div>
                      <div class="text-red-500 text-left text-sm" v-if="errors.password">
                              {{ errors.password }}
                        </div>
                  </div>
                  <div class="mb-4">
                      <div class="relative">
                          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                              <!-- You can replace this with your icon or SVG -->
                              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                              </svg>
                          </span>
                          <input type="current_password" v-model="confirmPassword" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Repeat Password">
                      </div>
                      <div class="text-red-500 text-left text-sm" v-if="errors.confirmPassword">
                              {{ errors.confirmPassword }}
                        </div>
                  </div>
                  <button type="submit" class="btn w-full hover:bg-black text-white rounded-lg py-3 text-lg font-semibold">Register Now</button>
                  <RouterLink to="/register" class="text-gray-600 text-lg underline mt-3 mb-4 md:mb-5 block">Forgot Password ?</RouterLink>
                  <p class="text-gray-600">Already have an account? <RouterLink to="/signin" class="text-blue-500 underline">Login</RouterLink></p>
              </form>
          </div>
      </div>
  </div>
  </template>
  <script>
import SignupValidation from '@/Services/SignupValidation'
import { mapActions, mapMutations } from 'vuex'
import { CHANGE_LOADER, SIGNUP_ACTION } from '@/store/storeconstants'

  export default{
    data(){
      return{
        email:'',
        password:'',
        confirmPassword:'',
        FirstName:'',
        LastName:'',
        errors:[],
        error:''
      }
    },
    computed:{
     
    },
    methods:{
      ...mapActions('auth',{
        registeruser:SIGNUP_ACTION
      }),
      ...mapMutations({
        LoadSpinner:CHANGE_LOADER}
      ),
  async  Register(){
      let Validations = new SignupValidation(
        this.email,
        this.password,
        this.confirmPassword,
        this.FirstName,
        this.LastName
      )
      this.errors=Validations.checkValidations();
      if('email' in this.errors ||'password' in this.errors || 
      'FirstName' in this.errors ||'LastName' in this.errors
      ){
        return false
      }
      this.error=''
    //   this.LoadSpinner(true)
     await this.registeruser({email:this.email,password:this.password,FirstName:this.FirstName,
        LastName:this.LastName

      }).catch(error=>{
        this.error=error
        this.LoadSpinner(false)
        console.log(error)
      })
      this.LoadSpinner(false)
    }
  }
  }
  
  </script>
  <style>
  .btn{
      background-color: #38488f;
  }
  </style>