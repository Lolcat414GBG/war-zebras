<template>
    <button class="cart__icon">
        <div class="counter"><p>{{ cart }}</p></div>
        <img src="../assets/bag.svg">
    </button>
</template>

<script>
export default {
    name: 'CartButton',
    computed: {
        cart(){
            return this.$store.state.cart.length
        }
    }
}
</script>

<style>
.cart__icon {
    background-color: #2F2926;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 999;
}
.counter {
    background-color: #E5674E;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.8em;
    transform: translate(19px, -21px);
    position: absolute;
}
</style>