<template>
  <section class="nav-overlay">
      <header>
          <button v-on:click="closeNav" class="close__icon"><img src="../assets/close.svg"></button>
      </header>
      <main>
          <ul>
              <li v-on:click="closeNav"><router-link to="/menu">Meny</router-link></li>
              <li v-on:click="closeNav"><router-link to="/about">Vårt kaffe</router-link></li>
              <li v-on:click="closeNav"><router-link to="/profile">Min profil</router-link></li>
              <li v-on:click="closeNav"><router-link to="/status">Orderstatus</router-link></li>
          </ul>
      </main>
  </section>
</template>

<script>
export default {
    name: 'Nav',
    methods: {
        closeNav: function() {
            this.$store.dispatch('toggleNav', false);
        }
    }
}
</script>

<style scoped>
header {
    text-align: left;
    padding: 1rem;
}
main {
    margin-top: 5rem;
}
.close__icon {
    width: 3rem;
    height: 3rem;
    padding: 0.8rem;
    border-radius: 3rem;
    border: none;
    outline: none;
    cursor: pointer;
}
.nav-overlay {
    background-color: #2F2926;
    height: 100vh;
    top: 0;
    position: fixed;
    width: 375px;
    color: #fff;
    font-size: 2em;
    font-weight: 700;
    z-index: 1000;
}
.nav-overlay a, .nav-overlay a:active {
    color: #fff;
    text-decoration: none;
}
.nav-overlay ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nav-overlay ul li:last-child {
    border-bottom: none;
}
/** gradient on border to make it seem smaller */
.nav-overlay ul li {
    border-image: linear-gradient(to right,#2F2926 20%, #2F2926 20%, #2F2926 40%, #665953 40%, #665953 60%, #2F2926 60%, #2F2926 80%, #2F2926 80%);
    border-image-slice: 1;
    padding: 1rem;
    width: 60%;
    justify-content: center;
    border-bottom: 1px solid #2F2926;
    margin-top: 0;
}
</style>