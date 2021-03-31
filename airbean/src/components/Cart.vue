<template>
    <section class="cart-container">
        <div class="triangle"></div>
        <div class="cart-info">
            <h1>Din beställning</h1>
            <article class="order">
                <div class="list-item" v-for="(item, index) in noDuplicatesCart" v-bind:key="index">
                    <div class="item-price">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.price*IDs[item.id] }} kr</p>
                    </div>
                    <div class="dots"></div>
                    <div class="count">
                        <button v-on:click="increase(item)" class="increase-btn"><img src="../assets/arrow-up.svg"></button>
                        <p>{{ IDs[item.id] }}</p>
                        <button class="decrease-btn"><img src="../assets/arrow-down.svg"></button>
                    </div>
                </div>
            </article>
            <div class="list-item">
                <div class="item-price">
                    <h2>Total</h2>
                    <p>inkl moms + drönarleverans</p>
                </div>
                <div class="dots"></div>
                <h2>{{ total }} kr</h2>
            </div>
        </div>
        <section class="cart-overlay"></section>
    </section>
</template>

<script>
export default {
    name: 'Cart',
    data() {
        return {
            count: 1,
            total: 0,
            id: Number,
            IDs: {}
        }
    },
    computed: {
        cart() {
            return this.$store.state.cart
        },
        copyCart() {
            return this.cart.map(item => item.id);
        },
        noDuplicatesCart() {
            return [ ...new Set(this.cart)];
        }
    },
    created() {
        console.log('created');
        this.setCart();
    },
    methods: {
        increase: function(coffee) {
            this.$store.dispatch("addCoffeeToCart", coffee);
            console.log('increase copy', this.copyCart)
            console.log('increase nodup', this.noDuplicatesCart)
            console.log('increase cart', this.cart)
            console.log('increase IDs', this.IDs)
            
            this.setCart();
        },
        setCart(){
            //this.newCartList = this.cart.map(item => item.id);
            for(let i = 0; i < this.copyCart.length; i++) {
                this.IDs[this.copyCart[i]] = (this.IDs[this.copyCart[i]] + 1) || 1;
            }
            this.updateTotal();
        },
        updateTotal() {
            for(let index in this.noDuplicatesCart) {
                //console.log(this.shortCartList[index].price * this.IDs[this.shortCartList[index].id]);
                this.total += this.noDuplicatesCart[index].price * this.IDs[this.noDuplicatesCart[index].id];
            }
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
.count {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-weight: bold;
    width: 1rem;
}
.count button {
    background: none;
    border: none;
    outline: none;
}
.increase-btn {
    margin-bottom: 2px;
}
.list-item p {
    font-family: 'Work Sans', sans-serif;
    font-size: 0.8em;
}
.order {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:flex-start;
    margin-top: 2rem;
}
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 4rem;
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
    opacity: 0.8;
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