<template>
<form>
    <div class="form-group col-md-6">
        <label>firstname</label>
        <input v-model="firstname" type="text" class="form-control" placeholder="firstname">
    </div>
    <div class="form-group col-md-6">
        <label>lastname</label>
        <input v-model="lastname" type="text" class="form-control" placeholder="lastname">
    </div>
    <div class="form-group">
        <div class="form-group col-md-6">
            <label>Email</label>
            <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="form-group col-md-6">
            <label>Date</label>
            <input v-model="date" type="text" class="form-control" placeholder="yyyy/mm/dd">
        </div>
    </div>
    <div class="form-group">
        <div class="form-group col-md-6">
        <label >Password</label>
        <input v-model="password" type="password" class="form-control"  placeholder="Password">
        </div>
    </div>
    <button @click='register' type="submit" class="btn btn-primary">Register</button>
    <div>{{errMsg}}</div>
</form>
</template>

<script>
import store from '@/store'

export default {
    name: 'Register',
    computed:{
      firstname:{
        get(){
          return this.$store.state.firstname
        },
        set(value){
          this.$store.commit('regFirstName',value)
        }
      },
      lastname:{
        get(){
          return this.$store.state.lastname
        },
        set(value){
          this.$store.commit('regLastName',value)
        }
      },
      date:{
        get(){
          return this.$store.state.date
        },
        set(value){
          this.$store.commit('regDate',value)
        }
      },
      email:{
        get(){
          return this.$store.state.email
        },
        set(value){
          this.$store.commit('regEmail',value)
        }
      },
      password:{
        get(){
          return this.$store.state.password
        },
        set(value){
          this.$store.commit('regPassword',value)
        }
      },
      errMsg(){
        return this.$store.state.errMsg
      }
    },
    methods:{
        register(event){
          event.preventDefault()
            if(!this.$store.state.firstname ||!this.$store.state.lastname || !this.$store.state.date || !this.$store.state.email ||!this.$store.state.password){
                return(
                  this.$store.dispatch('showErr'))
          }else{
            return(
              this.$store.dispatch('toRegister'))
            }
        }
    }
  }
</script>



