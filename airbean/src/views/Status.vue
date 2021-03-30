<template>
  <section class="status">
    <Header></Header>
    <img alt="Vue logo" src="../assets/add.svg">
    <img alt="Vue logo" src="../assets/airbean-landing.svg">
    <img alt="Vue logo" src="../assets/arrow-down.svg">
    <img alt="Vue logo" src="../assets/arrow-up.svg">
    <img alt="Vue logo" src="../assets/bag.svg">
    <img alt="Vue logo" src="../assets/close.svg">
    <img alt="Vue logo" src="../assets/drone.svg">
    <img alt="Vue logo" src="../assets/eva-cortado.jpg">
    <img alt="Vue logo" src="../assets/graphics-footer.svg">
    <img alt="Vue logo" src="../assets/graphics-header.svg">
    <img alt="Vue logo" src="../assets/intro-graphic-left.svg">
    <img alt="Vue logo" src="../assets/intro-graphic-right.svg">
    <img alt="Vue logo" src="../assets/loader.png">
    <img alt="Vue logo" src="../assets/navicon.svg">
  </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
<style scoped>
.status {
  background-color: #F3E4E1;
}
</style>