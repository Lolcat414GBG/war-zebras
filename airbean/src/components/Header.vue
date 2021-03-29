<template>
    <section>
        <header>
            <button v-on:click="showNav" class="menu-icon"><img src="../assets/navicon.svg"></button>
            <div class="cart-icon">
                <div class="counter"><p>0</p></div>
                <img src="../assets/bag.svg">
            </div>
        </header>
        <Nav v-if="show"></Nav>
    </section>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Header',
    components: {
        Nav
    },
    props: {
        showCartIcon: Boolean
    },
    data() {
        return {
            show: false
        }

    },
    methods: {
        showNav: function() {
            console.log('hej')
        }
    }
}
</script>

<style>
header {
    background-image: url(/img/graphics-header.ed1c9c2c.svg);
    height: 6rem;
    background-repeat: no-repeat;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.menu-icon {
    background: #fff;
    padding: 1rem;
    border-radius: 2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
}
.cart-icon {
    background-color: #2F2926;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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