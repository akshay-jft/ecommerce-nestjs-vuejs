<template>
  <div class="seller-portal">
    <Sidebar />
    <div class="seller-container mt-5">
      <SellerDashboard/>
      <v-date-picker v-model="picker"></v-date-picker>
    </div> 
  </div>
</template>

<script>
import Sidebar from '../UI/Sidebar.vue'
import SellerDashboard from '../UI/SellerDashboard.vue'
export default {
  components: { Sidebar, SellerDashboard },
  data(){
    return {
      picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
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