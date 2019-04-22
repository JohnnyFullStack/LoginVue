import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
            email:'',
            password: '',
            firstname: '',
            lastname: '',
            date: '',
            errMsg:''
    },
    actions: {
        showErr(context){
            context.commit('ERRMSG','Please enter the required field')
        },
        toLogin(context){
                axios.get('/api',state.email,state.password)
                    .then(res=>{
                        if(res.status === 200){
                            window.location.replace('http://www.google.ca')
                    }
                }
            )
            .catch((error)=>{
                context.commit('ERRMSG',error)
            })
        },
        toRegister(){
            axios.post('/register',state.firstname,state.lastname,state.email,state.birth,state.status)
                .then(res=>{
                    if(res.status===200){
                        this.$router.push('/')
                    }
                })
                .catch((error)=>{
                    context.commit('ERRMSG',error)
        })
    }},
    mutations:{
        checkEmail(state,value){
            state.email = value
        },
        checkPassword(state,value){
            state.password = value
        },
        regFirstName(state,value){
            state.firstname = value
        },
        regLastName(state,value){
            state.lastname = value
        },
        regDate(state,value){
            state.date = value
        },
        regEmail(state,value){
            state.email = value
        },
        regPassword(state,value){
            state.password = value
        },
        ERRMSG(state,value){
            state.errMsg=value
        }
    }
})

export default store