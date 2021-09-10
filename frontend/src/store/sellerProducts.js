const state = {
  selectedProduct: ''
}

const actions = {
  setSelectedProduct({ commit }, product) {
    commit('SET_SELECTED_PRODUCT', product) 
  }
}

const mutations = {
  'SET_SELECTED_PRODUCT'(state, product) {
    state.selectedProduct = product
  }
}

const getters = {
  getSelectedProduct(state) {
    return state.selectedProduct
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}