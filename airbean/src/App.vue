<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'PT Serif', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2F2926;
  min-height: 667px;
  width: 375px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #f3e4e1;
  height: 100vh;
}
</style>