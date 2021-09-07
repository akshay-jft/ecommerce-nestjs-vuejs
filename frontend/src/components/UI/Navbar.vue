<template>
  <div class="navbar-body">
    <div class="branding">
      <h1 class="body">Brand Title</h1>
      <input type="text" class="global-search" placeholder="Search for products, brands and more">
    </div> 
    <div class="d-flex justify-end">
      <v-btn 
        color="#2874F0" 
        text 
        width="100px"
        class="mr-4 login-btn">
        Login
      </v-btn>
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="white"
              class="mr-2"
              v-bind="attrs"
              v-on="on"
              text
            >
              More 
            </v-btn> 
          </template>
          <v-list>
            <v-list-item >
              <v-list-item-title>Option 1</v-list-item-title>
              <v-list-item-title>Option 2</v-list-item-title>
              <v-list-item-title>Option 3</v-list-item-title>
              <v-list-item-title>Option 4</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn 
        text
        dark
      >
        Cart <v-icon class="ml-2">mdi-cart</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar-body{
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
  }
  .global-search{
    width: 70%;
    background-color: white;
    border: 1px solid red;
    height: 35px;
    margin-left: 20px;
    padding-left: 10px;
    border: none;
    border-radius: 2px;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: #999;
  }
  .branding{
    display: flex;
    align-items: center;
  }
  .login-btn{
    background-color: white;
    color: #2874F0;
    border: none;
  }
</style>