import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async fetchMenu(ctx) {
      const response = await fetch(url, {
        method: 'GET', headers: {
          'Content-Type': 'application/json'

        },
      });
      const data = await response.json();
      ctx.commit('setMenu', data.menu)
      console.log(data)

    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    }
  },

  modules: {
  }
})
