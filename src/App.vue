<template>
  <div id="app">
    <div class="container">
       <router-view></router-view>
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
