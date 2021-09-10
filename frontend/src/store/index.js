import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// UI Modules
import UI from './uiState'

// Seller State
import sellerProduct from './sellerProducts'
export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    UI, sellerProduct
  }
})
