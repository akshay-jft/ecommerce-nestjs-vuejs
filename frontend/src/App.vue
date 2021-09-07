<template>
  <v-app>
    <v-app-bar
      app
      color="#2874F0"
      dark
    > 
    <v-container> 
      <Navbar/>
    </v-container>
      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/UI/Navbar.vue'
export default {
  components: { Navbar },
  name: 'App',

  data(){
    return{

    }
  }
};
</script>

<style>
@import './assets/css/global.css'
</style>