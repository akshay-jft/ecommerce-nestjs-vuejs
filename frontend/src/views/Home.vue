<template> 
  <div class="home-body">
    <Login v-if="showLoginModal"/>
    <Showcase />
  </div>
</template>

<script>  
import {mapGetters} from 'vuex'
import Login from '@/components/UI/Login.vue'
import Showcase from '@/components/Product/Showcase.vue'
  export default {
    name: 'Home', 
    components: { Login, Showcase },
    data(){
      return{

      }
    },
    methods:{ 
    },
    computed:{
      ...mapGetters(['showLoginModal'])
    }
  }
</script>
