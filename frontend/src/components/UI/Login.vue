<template>
  <Backdrop>
    <div class="login-body">
      <div class="close" @click="closeModal">
        <v-icon color="error">
          mdi-close
        </v-icon>
      </div>
      <div class="template-design pa-8">
        <h1>Login</h1>
        <p class="mt-5">Get access to your orders, Wishlist and Recommendations</p>
      </div>
      <div class="template-login py-4  pa-8">
        <div class="form">
          <v-text-field
            label="Enter Email/Mobile number"
            v-model="formdata.email"
          ></v-text-field>
          <v-text-field
            label="Enter Password"
            v-model="formdata.password"
          ></v-text-field>
        </div> 
        <small>
          By continuing, you agree to our 
          <span 
            class="hyperlink">
            Terms of Use 
          </span>
          and
          <span 
            class="hyperlink">
            Privacy Policy.
          </span>
        </small>
        <button class="login-btn mt-2 pa-2" @click="handleLogin">Login</button>
        <p class="title my-3 d-block text-center">OR</p>
        <button 
          class="otp-btn mb-1 elevation-1 pa-2">Request OTP
        </button>
        <div class="mt-15 text-center">
          <small class="d-block">
            <a href="#" class="hyperklink">Forgot email/password?</a>
          </small>
          <small>
            <a href="#" class="hyperklink">New to myCart? Create an account</a>
          </small> 
        </div>
      </div>
    </div>
  </Backdrop>
  
</template>

<script>
import Backdrop from '@/components/Wrapper/Backdrop.vue'
export default {
  components: { Backdrop },
  data(){
    return{
      formdata: {}
    }
  },
  methods:{
    closeModal(){
      this.$store.dispatch('setLoginModal', false)
    },
    handleLogin(){
      this.$axios.post('http://localhost:3000/auth', this.formdata)
      .then(response=>{
        alert('logged in')
      })
      .catch(err=>{ 
        alert(err.response.data.error)
      })
    }
  } 
}
</script>

<style scoped>
.login-body{
  display: grid;
  grid-template-columns: 250px 400px;
}
.template-design{
  background-color: var(--primaryColor);
  color: white;
}
.login-btn{
  width: 100%;
  color: white;
  background-color: #FB651B;
}
.otp-btn{
  width: 100%;
  background-color: white;
  color: var(--primaryColor);
  font-size: 14px;
  font-weight: 500;
}
.hyperlink{
  color: var(--primaryColor);
  cursor: pointer; 
}
.close{
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
</style>