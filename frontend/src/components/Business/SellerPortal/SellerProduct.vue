<template>
  <div class="mt-5 pa-10"> 
    <div class="product-details">
      <div>
        <img :src="product.image" alt="">
      </div>
      <div class="px-5 section-header">
        <p class="title">{{ product.name }}</p>
        <span class="rating mr-5">{{ product.rating }} <v-icon small class="ml-2">mdi-star</v-icon></span>
      </div>
    </div> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      product: {}
    }
  },
  computed: {
    ...mapGetters(['getSelectedProduct'])
  },
  created(){
    this.product = this.getSelectedProduct ? this.getSelectedProduct : {}
  }

}
</script>

<style scoped>
.icon{
  color: black;
  cursor: pointer;
}
.product-details{
  display: flex;
}
img{
  max-height: 500px;
}
</style>