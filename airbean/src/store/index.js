import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('db')
const db = low(adapter)

//initiate the database
db.defaults({ orders: [], user: [] })
    .write()

Vue.use(Vuex)

const url = 'http://localhost:3000/api/beans';

export default new Vuex.Store({
    state: {
        menu: [],
        showNav: false,
        cart: [],
        orderReply: null,
        name: db.get('user[0].name').write(),
        email: db.get('user[0].email').write(),
        dateOfOrder: '',
        total: '',
        orderHistory: db.get('orders').write()
    },
    mutations: {
        setMenu(state, menu) {
            state.menu = menu
                //To clear the database remove comment below. Remember to comment out them afterwards.
                //Also delete the local storage "showForm" and db in the browser
                //const newState = {}
                //db.setState(newState)
        },
        toggleNavigation(state, bol) {
            state.showNav = bol
        },
        setCoffeeToCart(state, coffee) {
            state.cart.push(coffee)
        },
        removeCoffeFromCart(state, coffee) { //remove the first item in cart that matches the coffee to delete
            state.cart.indexOf(coffee) > -1 ? state.cart.splice(state.cart.indexOf(coffee), 1) : false
        },
        clearCart(state) {
            state.cart = []
        },
        setOrderReply(state, orderReply) {
            state.orderReply = orderReply
            const user = db.get('user').write()
                //only add orders if there is a registered user
            if (user !== undefined) {
                if (user.length !== 0) {
                    db.get('orders')
                        .push({ date: state.dateOfOrder, total: state.total, orderNumber: state.orderReply.orderNr })
                        .write();
                }
            }
        },
        addUser(state, user) {
            const userDb = db.get('user').write();
            //only push the user if the storage is empty
            if (userDb.length === 0) {
                db.get('user')
                    .push({ name: user.name, email: user.email })
                    .write();
                state.name = user.name;
                state.email = user.email;
            }
        },
        setDateAndTotal(state, info) {
            state.dateOfOrder = info.date;
            state.total = info.total;
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
        },
        async purchaseCoffee(ctx, info) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await response.json()
            ctx.commit('clearCart')
            ctx.commit('setDateAndTotal', info)
            ctx.commit('setOrderReply', data)
            router.push('/status')
        },
        toggleNav(ctx, bol) {
            ctx.commit('toggleNavigation', bol)
        },
        addCoffeeToCart(ctx, coffee) {
            ctx.commit('setCoffeeToCart', coffee)
        },
        removeCoffeeFromCart(ctx, coffee) {
            ctx.commit('removeCoffeFromCart', coffee)
        },
        addUser(ctx, user) {
            ctx.commit('addUser', user)
        }
    },
    getters: {
        getMenu(state) {
            return state.menu
        },
        getCart(state) {
            return state.cart
        },
        getOrderReply(state) {
            return state.orderReply
        }
    }
});