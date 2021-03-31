<template>
    <section class="cart-container">
        <div class="triangle"></div>
        <div class="cart-info">
            <h1>Din beställning</h1>
            <article class="order">
                <div class="list-item" v-for="(item, index) in noDuplicatesCart" v-bind:key="index">
                    <div class="item-price">
                        <h3>{{ item.title }}</h3>
                        <!--<p>{{ item.price*IDs[item.id] }} kr</p>-->
                        <p>{{ item.price }} kr</p>
                    </div>
                    <div class="dots"></div>
                    <div class="count">
                        <button v-on:click="increase(item)" class="increase-btn"><img src="../assets/arrow-up.svg"></button>
                        <p>{{ IDs[item.id] }}</p>
                        <button v-on:click="decrease(item)" class="decrease-btn"><img src="../assets/arrow-down.svg"></button>
                    </div>
                </div>
            </article>
            <div class="total-container">
                <div class="total">
                    <h2>Total</h2>
                    <div class="dot"></div>
                    <h2>{{ total }} kr</h2>
                </div>
                <p class="moms">inkl moms + drönarleverans</p>
            </div>
            <button v-show="cart.length != 0" class="order-btn" @click="setOrder"><h3>Take my money!</h3></button>
        </div>
        <section class="cart-overlay"></section>
    </section>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            total: 0,
            id: Number,
            IDs: {} //this is used to collect number of coffees that are duplicates
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        copyCart() { //this is used to be able to count the number of coffees that are duplicates
            return this.cart.map(item => item.id);
        },
        noDuplicatesCart() { //this is used to extract and loop through the coffee variants
            return [ ...new Set(this.cart)];
        }
    },
    created() {
        this.setCart(); //initiate the cart
    },
    methods: {
        setCart(){
            for(let i = 0; i < this.copyCart.length; i++) { //extract items of same type
                this.IDs[this.copyCart[i]] = (this.IDs[this.copyCart[i]] + 1) || 1;
            }
            this.updateTotal();
        },
        increase(coffee) {
            this.$store.dispatch("addCoffeeToCart", coffee);
        },
        decrease(coffee) {
            console.log('decrease: ', coffee)
            this.$store.dispatch("removeCoffeeFromCart", coffee);
        },
        updateTotal() { //update total cost for this order
            for(let index in this.cart) {
                this.total += this.cart[index].price;
            }
        },
        setOrder() {
            this.$store.dispatch("purchaseCoffee")
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
.item-price {
    text-align: left;
    flex-grow: 1;
}
.dots {
    background-image: radial-gradient(circle, #000 0.5px, rgba(255,255,255,0) 1px);
    background-position: bottom;
    background-size: 5px 5px;
    background-repeat: repeat-x;
    height: 5px;
    flex-grow: 15;
}
.dot {
    background-image: radial-gradient(circle, #000 0.5px, rgba(255,255,255,0) 1px);
    background-position: bottom;
    background-size: 5px 5px;
    background-repeat: repeat-x;
    height: 5px;
    flex-grow: 2;
    align-self: flex-end;
    margin-bottom: 5px;
}
.count {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-weight: bold;
    width: 1rem;
}
.moms {
    text-align: left;
}
footer {
    position: absolute;
    bottom: 2rem;
}
button {
    border: none;
    outline: none;
}
.count button {
    background: none;
}
.increase-btn {
    margin-bottom: 2px;
}
.order-btn {
    background: #2F2926;
    font-family: 'PT Serif', serif;
    font-size: 1.3em;
    color: #fff;
    padding: 0.7rem 2rem;
    border-radius: 3rem;
    align-self: center;
}
.list-item p, .moms {
    font-family: 'Work Sans', sans-serif;
    font-size: 0.8em;
}
.order {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:flex-start;
    max-height: 20rem;
}
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 4rem;
}
.total-container {
    margin-top: auto;
    margin-bottom: 2rem;
}
.total {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    width: 100%;
}
.total h2 {
    padding: 0 1rem 0 0;
}
.total h2:last-child {
    padding: 0 0 0 1rem;
}
h1 {
    font-size: 2em;
}
.cart-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cart-overlay {
    background-color: black;
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    z-index: 20;
    position: fixed;
    top: 0;
}
.cart-info {
    background-color: white;
    opacity: 1;
    z-index: 1000;
    height: 10rem;
    width: 92vw;
    position: fixed;
    top: 4.5rem;
    margin: 0 auto;
    border-radius: 0.2rem;
    min-height: 87vh;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 20px solid #fff;
    opacity: 1;
    z-index: 1000;
    position: fixed;
    top: 3.8rem;
    right: 1.6rem;
}
</style>