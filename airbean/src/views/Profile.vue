<template>

<main >
  <Header/>
  <section class="info__profile">
    <h1>Sixten KaffeLövér</h1>
    <p>Sixten.kaffelover@zocom.se</p>
  </section>

  <section>
   <ul> 
      <li>

      </li>
    </ul>
    <h5>Totalt spenderat</h5>
  </section>
  
  
      <!--<div class="container mt-5 mb-5" style="width: 500px">-->
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
main {
  display: flex;
  flex-direction: column;
  background-color: #2F2926;
  height: 100%;
  color: white;
  min-height: 667px;
  max-height: auto;
  width: 100%;
}

.info__profile{
  background: url("../assets/profile-icon.svg") center no-repeat;
  height: 94px;
  width: 94px;
  align-self: center;
}


</style>