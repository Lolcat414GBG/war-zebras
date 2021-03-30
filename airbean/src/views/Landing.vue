<template>
<div class="landing">
  
  <leafLeft class="landingLeaf__left">
    <img v-bind:src= "leafleft.leafleft" alt="leaf">
  </leafLeft>

  <airbeanLanding class="logo">
      <router-link to="/menu">
        <img v-bind:src= "landingpage.landingpage" alt="landingpage">
      </router-link>
  </airbeanLanding>

  
  <leafRight class="landingLeaf__right">
    <img v-bind:src= "leafright.leafright" alt="leaf">
  </leafRight>

  </div>
</template>

<script>
import airbeanLanding from "../assets/airbean-landing.svg"
import leafLeft from "../assets/intro-graphic-left.svg"
import leafRight from "../assets/intro-graphic-right.svg"

export default {
  components: {

  },
  data() {
    return {
      landingpage: {'landingpage': airbeanLanding },
      leafleft: {'leafleft': leafLeft},
      leafright: {'leafright': leafRight}
      }
    }
  }
</script>

<style>
.landing {
  height: 100%;
  width: 100%;
  background-color: #0E927D;
  display: flex;
  justify-content: center;
}

.logo {
  align-self: center;
  margin: -70px;

}

.landingLeaf__left {
height: 100%;
width: 30%;
}

</style>