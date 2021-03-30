<template>
  <section class="nav-overlay">
      <header>

      </header>
      <main>
          <ul>
              <li><router-link to="/menu">Meny</router-link></li>
              <li><router-link to="/about">Vårt kaffe</router-link></li>
              <li><router-link to="/profile">Min profil</router-link></li>
              <li><router-link to="/status">Orderstatus</router-link></li>
          </ul>
      </main>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-overlay {
    background-color: #2F2926;
    height: 100vh;
    top: 0;
    position: fixed;
    width: 375px;
    color: #fff;
    font-size: 2em;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.nav-overlay a, .nav-overlay a:active {
    color: #fff;
    text-decoration: none;
}
.nav-overlay ul {
    list-style-type: none;
    padding: 0;
}
.nav-overlay ul li {
    border-bottom: 1px solid red;
}
.nav-overlay ul li {
  border-image: linear-gradient(to right, red 20%, green 20%, green 40%, blue 40%, blue 60%, maroon 60%, maroon 80%, chocolate 80%); /* gradient with required colors */
  border-image-slice: 1;
}
</style>