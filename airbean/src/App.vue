<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Landing</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/menu">Menu</router-link> |
      <router-link to="/status">Status</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'PT Serif', serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
#nav {
  padding: 30px;
  display: none;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>