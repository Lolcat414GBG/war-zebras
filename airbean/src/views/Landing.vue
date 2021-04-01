<template>
  <div class="landing">
    <!--<img class="landingLeaf__left" v-bind:src= "leafleft.leafleft" alt="leaf">-->

    <router-link class="logo" to="/menu">
      <img v-bind:src="landingpage.landingpage" alt="landingpage" />
    </router-link>

    <!--<img class="landingLeaf__right" v-bind:src= "leafright.leafright" alt="leaf">-->
  </div>
</template>

<script>
import airbeanLanding from "../assets/airbean-landing.svg";
//import leafLeft from "../assets/intro-graphic-left.svg"
//import leafRight from "../assets/intro-graphic-right.svg"

export default {
  components: {},
  data() {
    return {
      landingpage: { landingpage: airbeanLanding },
      //leafleft: {'leafleft': leafLeft},
      //leafright: {'leafright': leafRight}
    };
  },
};
</script>

<style strict>
.landing {
  min-height: 667px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: url("../assets/intro-graphic-left.svg") left no-repeat,
    url("../assets/intro-graphic-right.svg") right no-repeat;
  background-color: #0e927d;
}

.logo {
  align-self: center;
  margin: -70px;
}

.landingLeaf__left {
  height: 100%;
  width: 30%;
  align-self: flex-end;
}
</style>
