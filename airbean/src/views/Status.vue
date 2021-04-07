<template>
  <section class="status-info">
    <div class="order__number">
      <span>Ordernummer</span>
      #{{ orderReply.orderNr }}
    </div>
    <div class="background__image"></div>
    <h2 class="order__message">DIN BESTÄLLNING ÄR PÅ VÄG!</h2>
    <div class="order__eta">
      <span>{{ orderReply.eta }}</span>
      minuter
    </div>
    <router-link class="ok__button" to="/menu">OK, cool!</router-link>
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
.status-info {
  background-color: #e5674e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 62px 48px 82px 48px;
}

.order__number {
  font-size: 16px;
  color: white;
  font-weight: 700;
}
.order__number span {
  font-weight: 400;
}
.background__image {
  background-image: url("../assets/drone.svg");
  width: 216px;
  height: 119px;
}
.order__message {
  font-size: 30px;
  color: white;
  font-weight: 700;
}
.order__eta {
  font-size: 18px;
  color: white;
  font-weight: 400;
}
.order__eta span {
  font-weight: 700;
}
.ok__button {
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