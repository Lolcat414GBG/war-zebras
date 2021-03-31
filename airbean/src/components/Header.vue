<template>
    <section>
        <header>
            <button v-on:click="toggleNavigation" class="menu-icon"><img src="../assets/navicon.svg"></button>
        </header>
        <Nav v-if="showNav"></Nav>
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
    computed: {
        showNav(){
            return this.$store.state.showNav
        }
    },
    methods: {
        toggleNavigation: function() {
            this.$store.dispatch('toggleNav', true);
        }
    }
}
</script>

<style scoped>
header {
    background-image: url("../assets/graphics-header.svg");
    height: 7rem;
    background-repeat: no-repeat;
    padding: 1rem;
}
.menu-icon {
    background: #fff;
    padding: 1.5rem;
    border-radius: 2rem;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
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
    outline: none;
    border: none;
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