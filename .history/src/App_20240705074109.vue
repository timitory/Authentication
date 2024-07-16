<template>
  <Loader/>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>
<script>
import Loader from "./components/Loader.vue";
import Navbar from './components/Navbar.vue';
import Footer from
export default{
  name:'app',
  components:{
    Loader,
    Navbar
  }
}

</script>


<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
