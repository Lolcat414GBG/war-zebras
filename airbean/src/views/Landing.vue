<template>
  <div class="landing">
    <router-link class="logo" to="/menu">
      <img v-bind:src="landingpage.landingpage" alt="landingpage" />
    </router-link>
  </div>
</template>

<script>
import airbeanLanding from "../assets/airbean-landing.svg";

export default {
  components: {},
  data() {
    return {
      landingpage: { landingpage: airbeanLanding },
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
</style>
