const state = {
  showLogin: false
}

const actions = {
  setLoginModal({ commit }, value) {
    commit('SHOW_LOGIN_MODAL', value)
  }
}

const mutations = {
  'SHOW_LOGIN_MODAL'(state, value) {
    state.showLogin = value
  }
}

const getters = {
  showLoginModal(state) {
    return state.showLogin
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}