<template>

<main >
  <Header/>
  <section class="info__profile">
    <div class="img__profile"></div>
    <h1>Sixten KaffeLövér</h1>
    <p>Sixten.kaffelover@zocom.se</p>
  </section>

  <section class="list__orderhistory">
    <h2>Orderhistorik</h2>
   <ul> 
      <li>

      </li>
    </ul>
    <h5>Totalt spenderat</h5>
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

.info__profile{
  height: 40%;
  width: 100%;
  align-self: flex-start;
  justify-content: center;
  flex-direction: column;
}

.img__profile{
   background: url("../assets/profile-icon.svg") center no-repeat;
   height: 40%;
   width: 100%;
}

.list__orderhistory{
  text-align: left;
  margin-left: 30px;
}

h5{
font-family: Work Sans;
}


</style>