<template>
  <main>
    <Cart v-show="showCart" :key="componentKey" />
    <Header />
    <CartButton @click.native="showCart = !showCart" />
    <section class="menu-container">
    <div class="menu__header">
      <h1>Meny</h1>
    </div>
    <ul>
      <li v-for="coffee in menu" :key="coffee.id">
        <button @click="addCoffee(coffee)" class="add__coffee">
          <div class="add_coffee__icon"></div>
        </button>
        <div class="coffee__item">
          <h2 class="coffee__title">{{ coffee.title }}</h2>
          <p class="coffee__desc">{{ coffee.desc }}</p>
        </div>
        <span class="coffee__price"> {{ coffee.price }} kr</span>
      </li>
    </ul>
    </section>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import Header from "../components/Header.vue";
import CartButton from "../components/CartButton.vue";
import Cart from "../components/Cart.vue"

export default {
  name: "CoffeMenuComponent",
  components: {
    AppFooter,
    CartButton,
    Cart,
    Header
  },
  data() {
    return {
      showCart: false,
      componentKey: 0
    }
  },
  watch: {
    newCount() { //rerender cart component through the componentKey if the length of the cart changes
      this.forceRerender();
    }
  },
  created() {
    this.fetchMenuFromApi(); // grabbing the menu from api
  },
  computed: {
    menu() {
      return this.$store.getters.getMenu;
    },
    newCount() {
      return this.$store.state.cart.length
    },
    cart() {
      return this.$store.state.cart
    }
  },
  methods: {
    async fetchMenuFromApi() {
      await this.$store.dispatch("fetchMenu");
    },
    addCoffee(coffee) {
      this.$store.dispatch("addCoffeeToCart", coffee);
    },
    forceRerender() {
      this.componentKey += 1;
    }
  }
};
</script>

<style>

.add__coffee {
  width: 32px;
  height: 32px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  align-self: center;
}
.add_coffee__icon {
  background-image: url("../assets/add.svg");
  width: 14px;
  height: 14px;
}
ul {
  list-style: none;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-top: 18px;
}
.coffee__item {
  flex: auto;
}
.coffee__price {
  font-weight: 700;
  font-size: 23px;
}
.coffee__title {
  font-weight: 700;
  font-size: 23px;
  overflow: hidden;
  text-align: left;
}
.coffee__desc {
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
}
.menu-container {
  padding: 1rem 2rem;
}
.menu__header {
  text-align: center;
}
</style>