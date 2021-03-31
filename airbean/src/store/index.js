import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        menu: [],
        showNav: false,
        cart: [],
        copyCart: [],
        noDuplicatesCart: [],
        IDs: {}
    },
    mutations: {
        setMenu(state, menu) {
            state.menu = menu
        },
        toggleNavigation(state, bol) {
            state.showNav = bol
        },
        setCoffeeToCart(state, coffee) {
            state.cart.push(coffee)
        },
        copyCart(state) {
            state.copyCart = state.cart.map(item => item.id);
            console.log('copyCart', state.copyCart);
        },
        noDuplicatesCart(state) {
            state.noDuplicatesCart = [...new Set(state.copyCart)];
            console.log('noduplicates', state.noDuplicatesCart);
        }
    },
    actions: {
        async fetchMenu(ctx) {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json();
            ctx.commit('setMenu', data.menu)
            console.log(data)
        },
        toggleNav(ctx, bol) {
            ctx.commit('toggleNavigation', bol)
        },
        addCoffeeToCart(ctx, coffee) {
            ctx.commit('setCoffeeToCart', coffee)
            ctx.commit('copyCart')
            ctx.commit('noDuplicatesCart')
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
    modules: {}
})