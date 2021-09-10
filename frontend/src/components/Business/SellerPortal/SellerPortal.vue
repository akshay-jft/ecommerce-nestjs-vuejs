<template>
  <div class="seller-portal">
    <Sidebar @userSelection="userSelection"/>
    <div class="seller-container mt-5" v-if="selectedIndex==0">
      <SellerDashboard/>
      <v-date-picker v-model="picker"></v-date-picker>
    </div> 
    <div class="seller-container mt-5" v-if="selectedIndex==1">
      <SellerProducts/> 
    </div> 
  </div>
</template>

<script>
import Sidebar from '../UI/Sidebar.vue'
import SellerDashboard from './SellerDashboard.vue'
import SellerProducts from './SellerProducts.vue'
export default {
  components: { Sidebar, SellerDashboard, SellerProducts },
  data(){
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      selectedIndex: 1
    }
  },
  methods:{ 
    userSelection(userSelection){
      this.selectedIndex = userSelection
    }
  }
}
</script>

<style scoped> 
.seller-container{
  margin-left: 80px;
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
} 
</style>