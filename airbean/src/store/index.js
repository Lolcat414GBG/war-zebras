import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
  state: {
    menu: [],
    showNav: false,
    cart: []
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu
    },
    changeNave(state, bol) {
      state.showNav = bol
    },
    setCoffeeToCart(state, coffee) {
      state.cart.push(coffee)
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
    },
    showOrHideNav(ctx, bol) {
      ctx.commit('changeNave', bol)
    },
    addCoffeeToCart(ctx, coffee) {
      ctx.commit('setCoffeeToCart', coffee)

    }
  },
  getters: {
    getMenu(state) {
      return state.menu
    },
    getCart(state) {
      return state.cart
    }
  },
  modules: {
  }
})