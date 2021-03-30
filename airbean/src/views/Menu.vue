<template>
  <main class="container">
    <Header></Header>
    <div class="meny_header">
      <h1>Meny</h1>
    </div>
    <ul>
      <li v-for="coffee in menu" :key="coffee.id">
        <button @click="addCoffee(coffee)" class="add_coffee">
          <div class="add_coffee_icon"></div>
        </button>
        <div>
          <h2 class="coffee_title">{{ coffee.title }}</h2>
          <p class="coffee_desc">{{ coffee.desc }}</p>
        </div>
        <span class="coffee_price"> {{ coffee.price }} kr</span>
      </li>
    </ul>
    <AppFooter />
  </main>
</template>

<script>
import AppFooter from "../components/AppFooter.vue";
import Header from "../components/Header.vue";

export default {
  name: "CoffeMenuComponent",
  components: {
    AppFooter,
    Header
  },
  created() {
    this.fetchMenuFromApi();
  },
  computed: {
    menu() {
      return this.$store.getters.getMenu;
    },
  },
  methods: {
    async fetchMenuFromApi() {
      await this.$store.dispatch("fetchMenu");
    },
    addCoffee(coffee) {
      this.$store.dispatch("addCoffeeToCart", coffee);
    },
  },
};
</script>

<style >
.add_coffee {
  width: 32px;
  height: 32px;
  background-color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add_coffee_icon {
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
  align-items: center;
  gap: 16px;
  margin-top: 18px;
}

body {
  background-color: #f3e4e1;
  text-align: left;
}
.coffee_price {
  font-weight: 700;
  font-size: 23px;
}
.coffee_title {
  font-weight: 700;
  font-size: 23px;
}
.coffee_desc {
  font-weight: 400;
  font-size: 12px;
}
.container {
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
}
.meny_header {
  text-align: center;
}
</style>