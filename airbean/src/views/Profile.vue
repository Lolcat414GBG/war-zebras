<template>

<main v-bind:orders="orders">
  <Header/>
  <section class="info-profile">
    <div class="img__profile"></div>
    <h1>{{ name }}</h1>
    <p class="email">{{ email }}</p>
  </section>

  <section class="list-orderhistory">

    <h2>Orderhistorik</h2>
   <ul class="order-container"> 
      <li v-for="(order, index) in orders" :key="index">
        <div class="left">
          <p class="order__number">#{{ order.orderNumber }}</p>
          <p class="bottom__text">total ordersumma</p></div>
        <div class="list__orderhistory--right">
          <p class="order__date">{{ order.date }}</p>
          <p class="order__total bottom__text">{{ order.total }} kr</p>
        </div>
      </li>
    </ul>
    <hr>
    <div class="total__spent">
      <h5>Totalt spenderat</h5>
      <p>{{ total }} kr</p>
    </div>
  </section>
    <ProfileForm/>
</main>
</template>

<script>
import Header from "../components/Header";
import ProfileForm from "../components/ProfileForm.vue"

export default {
    components: {
        Header,
        ProfileForm
    },
    data() {
      return {
        total: 0
      }
    },
    computed: {
        orders() {
            return this.$store.state.orderHistory
        },
        name() {
            return this.$store.state.name
        },
        email() {
            return this.$store.state.email
        }
    },
    created() {
        this.countTotal();
    },
    methods: {
      //Loop through the array of orders and set total amount
      countTotal() {
        for(let index in this.orders) {
                this.total += this.orders[index].total;
            }
      }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,200&display=swap");

main {
  display: flex;
  flex-direction: column;
  background-color: #2F2926;
  height: 100%;
  color: white;
  width: 100%;
}

.info-profile{
  height: 45%;
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
}

.img__profile{
   background: url("../assets/profile-icon.svg") center no-repeat;
   height: 46%;
   width: 100%;
}

.list-orderhistory {
  padding: 0 2rem;
  text-align: left;
}
.list__orderhistory--right {
  text-align: right;
}

h5 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
}
.email {
  font-family: 'Work Sans', sans-serif;
  color: rgba(255, 255, 255, 0.700);
}
.order-container, .total-spent {
    font-family: 'Work Sans', sans-serif;
    font-size: 0.9em;
    font-weight: normal;
    padding-bottom: 0.7rem;
    color: rgba(255, 255, 255, 0.700);
}
.order__container li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.200);
  margin-top: 0.7rem;
}
.order__container li:last-child {
  border-bottom: none;
}
.bottom__text {
  margin-bottom: 0.7rem;
  color: rgba(255, 255, 255, 0.500);
}
.order__total {
    text-align: right;
}
.right {
  text-align: right;
}
.order__number, .total-spent {
    font-weight: 700;
    font-size: 1em;
}
.total__spent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0.7em;
}
</style>