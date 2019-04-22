<template>
  <div id="app">
    <div class="container">
       <router-view></router-view>
       <!-- <Login />
       <Register /> -->
       <!-- <router-link to='/' >Login</router-link> ||
       <router-link to='/register' >Register</router-link> -->
    </div>
  </div>
</template>
 
<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
  export default {
    name: 'App',
    components:{
      Login,
      Register
    }
  }
</script>