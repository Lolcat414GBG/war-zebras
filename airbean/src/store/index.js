import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

const url = "http://localhost:3000/api/beans";

export default new Vuex.Store({
  state: {
    menu: [],
    showNav: false,
    cart: [],
    orderReply: null,
  },
  mutations: {
    setMenu(state, menu) {
      state.menu = menu;
    },
    toggleNavigation(state, bol) {
      state.showNav = bol;
    },
    setCoffeeToCart(state, coffee) {
      state.cart.push(coffee);
    },
    clearCart(state) {
      state.cart = [];
    },
    setOrderReply(state, orderReply) {
      state.orderReply = orderReply;
    },
  },
  actions: {
    async fetchMenu(ctx) {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      ctx.commit("setMenu", data.menu);
      console.log(data);
    },
    async purchaseCoffee(ctx) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      ctx.commit("clearCart");
      ctx.commit("setOrderReply", data);
      router.push("/status");
    },
    toggleNav(ctx, bol) {
      ctx.commit("toggleNavigation", bol);
    },
    addCoffeeToCart(ctx, coffee) {
      ctx.commit("setCoffeeToCart", coffee);
    },
  },
  getters: {
    getMenu(state) {
      return state.menu;
    },
    getCart(state) {
      return state.cart;
    },
    getOrderReply(state) {
      return state.orderReply;
    },
  },
});
