<template>
<form>
  <div class="form-group">
    <div class="form-group col-md-6">
      <label>Email</label>
      <input v-model="email" type="email" class="form-control" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        remember me
      </label>
    </div>
  </div>
  <button @click="login" type="submit" class="btn btn-primary col-md-1" >Log in</button>
  <button @click="goRegister" type="submit" class="btn btn-primary col-md-1">Register</button>
  <div>{{errMsg}}</div>
</form>
</template>

<script> 
import store from '@/store'

export default {
    name: 'Login',
    computed:{
      email:{
        get(){
          return this.$store.state.email
        },
        set(value){
          this.$store.commit('checkEmail',value)
        }
      },
      password:{
        get(){
          return this.$store.state.password
        },
        set(value){
          this.$store.commit('checkPassword',value)
        }
      },
      errMsg(){
        return this.$store.state.errMsg
      }
    },
    methods:{
        login(event) {
          event.preventDefault()
          if(!this.$store.state.email ||!this.$store.state.password){
            return(
              this.$store.dispatch('showErr'))
          }else{
            return(
              this.$store.dispatch('toLogin')
            )  
          }
        },
      goRegister:function(){
      this.$router.push('/register')
    }
  }
}
</script>

