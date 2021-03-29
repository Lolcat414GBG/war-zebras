<template>
  <main>
    <h1>Meny</h1>
    <ul>
      <li v-for="coffee in menu" :key="coffee.id">
        <button class="add_coffee"></button>
        <div>
          <h2>{{ coffee.title }}</h2>
          <p>{{ coffee.desc }}</p>
        </div>
        <span> {{ coffee.price }} kr</span>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: "CoffeMenuComponent",
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
  },
};
</script>

<style>
.add_coffee {
  background-image: url("../assets/add.svg");
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 50%;
}
ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>