<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
        <nav aria-label="breadcrumb space-x-3">
            <ol class="breadcrumb flex px-0">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-gray-600 hover:text-gray-800">Home</RouterLink>
                </li> /
                <li class="breadcrumb-item active" aria-current="page">LogIn</li>
            </ol>
        </nav>
    </div>
</div>
    <div class="container mx-auto">
     <div class="my-4 my-lg-5">
          <div class="mx-auto max-w-md lg:max-w-lg text-center">
               <img src="../assets/Logoimage.png" alt="signin" class="mx-auto">
               <p class="text-2xl font-semibold text-gray-800 mt-4 mb-4 mb-lg-5">Sign In PaddyGro</p>
               <div class="text-red-700 text-lg font-bold" v-if="error">{{ error }}</div>
               <form @submit.prevent="Onlogin">
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
                            {{ errors.email}}
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
                          <!-- {{ LoginData.userName }} -->
                          <input type="current_password" v-model="password" class="block w-full rounded-lg pl-10 py-3 text-sm text-gray-800 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Password">
                      </div>
                      <div class="text-red-500 text-left text-sm" v-if="errors.password">
                            {{ errors.password }}
                      </div>
                  </div>
                  <button type="submit" class="btn w-full bg-slate-600 hover:bg-black text-white rounded-lg py-3 text-lg font-semibold">Sign in</button>
                  <RouterLink to="/register" class="text-gray-600 text-lg underline mt-3 mb-4 md:mb-5 block">Forgot Password ?</RouterLink>
                  <p class="text-gray-600">Don't have an account? <RouterLink to="/register" class="text-blue-500 underline">Register</RouterLink></p>
                </form>
          </div>
     </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import SignupValidation from '../Services/SignupValidation'
import {CHANGE_LOADER, LOGIN_ACTION} from '../store/storeconstants'
export default {
  name:'HelloWorld',
  data(){
    return{
      email:'',
      password:'',
      errors:[],
      error:''
    }
  },
  methods:{
    ...mapMutations({
      LoadSpinneri:CHANGE_LOADER
    }),
...mapActions('auth',{
  signup: LOGIN_ACTION,
}),
  async Onlogin(){
      let Validations = new SignupValidation(
        this.email,
        this.password,
      )
      this.errors=Validations.checkValidations();
      if('email' in this.errors || 'password' in this.errors){
        return false
      }
      this.error=''
      this.LoadSpinner(true)
      try {
     await this.signup({email:this.email,password:this.password})
  } catch(error){
    this.error=error.message
    this.LoadSpinner(false)
  }
      
      this.LoadSpinner(false)
      if(this.error){
        return false
      }
      else{
      return this.$router.push('/home')
      }
    } 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
