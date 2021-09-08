<template> 
  <div class="home-body">
    <Login v-if="showLoginModal"/>
  </div>
</template>

<script>  
import {mapGetters} from 'vuex'
import Login from '@/components/UI/Login.vue'
  export default {
    name: 'Home', 
    components: { Login },
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
