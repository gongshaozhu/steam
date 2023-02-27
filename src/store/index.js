import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: ''
  },
  getters: {
  },
  mutations: {
    changeSearchValue(state, data) {
      state.searchValue = data
    }
  },
  actions: {
  },
  modules: {
  }
})
