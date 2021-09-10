<template>
  <div class="product-body">
    <h1 class="title">Seller Catalouge</h1>
    <div class="filterbar mt-5">
      <div class="d-flex align-center">
        Filter Products By
        <v-btn class="mx-3" text>Price</v-btn>
        <v-btn class="mr-3" text>Quantity</v-btn>
        <v-btn class="mr-3" text>Category</v-btn>
      </div>
      <div>
        <v-btn>Add Product</v-btn>
      </div>
    </div>
    <div class="product-list mt-10">
      <div class="product head">
        <span>Name</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Description</span>
        <span>Categories</span>
      </div>
      <div 
        class="product"
        v-for="product in userProducts"
        :key="product.id"
        @click="listProductDetail(product)"
      >
        <span>{{ product.name }}</span>
        <span>${{ product.price}}</span>
        <span>{{ product.quantity}}</span> 
        <span>{{ product.description }}</span>
        <span>{{ product.categories[0] }}, {{ product.categories[1] }}... </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userProducts: [
        {
          id: "34b75f4c-a89c-4cba-ba4e-f7e701df0004",
          name: "Acer nitro 5x ROG edition",
          price: "2499.9",
          description: "This is my first dummy product",
          quantity: 5,
          image: 'https://source.unsplash.com/Bd7gNnWJBkU',
          categories: ['dummy', 'electronic'],
          rating: 4.2,
          totalRatings: 1390, // Must be an array
          totalReviews: 219, // Must be an array,
          availableOffers: [
            'Bank Offer 10% off on ICICI Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above',
            'Bank Offer 10% off on ICICI Bank Credit Card EMI, up to ₹1250. On orders of ₹5000 and above',
            'Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card',
            'Get Mi Smart Speaker at just ₹1999 on purchase of select Smartphones, TVs, Laptops, TV streaming'
          ]
        },
        {
          id: "34b75f4c-a89c-4cba-46s1-f7e701df0004",
          name: "Second Dummy product",
          price: "249.9",
          quantity: 5,
          description: "This is my second dummy product",
          categories: ['dummy', 'fashion']
        }
      ]
    }
  },
  created(){

  },
  methods:{
    listProductDetail(product){
      this.$store.dispatch('setSelectedProduct', product)
      this.$router.push(`/seller/products/${product.id}`)
    }
  }
}
</script>

<style scoped> 
.product-body{
  width: 100%;
}
.filterbar{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
} 
.product{
  display: grid;
  grid-template-columns: 30% 10% 10% 30% 20%;
}
.product:hover{
  cursor: pointer;
  background-color: #eee;
  box-shadow: 0 1px 1px rgba(0,0,0,0.8);
}
.product span{
  padding: 10px; 
  border: 1px solid #ccc;
  color: #666;
}
.product.head span{
  font-weight: 600;
  color: black;
}
</style>