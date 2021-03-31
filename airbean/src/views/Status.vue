<template>
  <section class="status">
    <div class="order_number">
      <span>Ordernummer</span>
      #{{ orderReply.orderNr }}
    </div>
    <!-- <img alt="Vue logo" src="../assets/drone.svg" /> -->
    <div class="background"></div>
    <h2 class="order_message">DIN BESTÄLLNING ÄR PÅ VÄG!</h2>
    <div class="order_eta">
    <span>{{ orderReply.eta }}</span>
      minuter
    </div>
    <router-link class="ok_button" to="/menu">OK, cool!</router-link>
  
    <!--<img alt="Vue logo" src="../assets/add.svg">
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
    <img alt="Vue logo" src="../assets/navicon.svg">-->
  </section>
</template>

<script>
export default {
  name: "Status",

  computed: {
    orderReply() {
      return this.$store.getters.getOrderReply;
    },
  },
};
</script>
<style scoped>
.status {
  background-color: #E5674E;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 62px 48px 82px 48px;

}

.order_number {
  font-size: 16px;
  color: white;
  font-weight: 700;
  
}
.order_number span {
  font-weight: 400;
}
.background {
 background-image: url("../assets/drone.svg" );
 width: 216px;
 height: 119px;
}
.order_message {
  font-size: 30px;
  color: white;
  font-weight: 700;
}
.order_eta {
  font-size: 18px;
   color: white;
   font-weight: 400;
}
.order_eta span {
  font-weight: 700;
}
.ok_button {
  width: 180px;
  height: 55px;
  border-radius: 50px;
  background-color: white;
  border: none;
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>