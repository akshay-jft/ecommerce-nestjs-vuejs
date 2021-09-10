import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SellerPortal from '../components/Business/SellerPortal/SellerPortal.vue' 
import SellerProduct from '../components/Business/SellerPortal/SellerProduct.vue'
import SellerProducts from '../components/Business/SellerPortal/SellerProducts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/seller',
    name: 'SellerPortal',
    component: SellerPortal
  },
  {
    path: '/seller/products/:id',
    name: 'SellerProduct',
    component: SellerProduct
  },
  {
    path: '/seller/:id/products',
    name: 'SellerProducts',
    component: SellerProducts
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
