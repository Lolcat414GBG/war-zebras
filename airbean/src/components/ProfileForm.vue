<template>
<main id="login__overlay">
  <section class="login__terms">
    <h1>Välkommen till AirBean-familjen!</h1>
    <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
    </section>

    <section>
        <form class="loginForm">
            <p>namn</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginName"
            name= "LoginName"
            placeholder="name"/>

            <p>Email</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginEmail"
            name= "LoginEmail"
            placeholder="Email"/>

            
            <input
            class="GDPR__login" 
            type="checkbox"
            v-model="GDPR"
            name= "GDPR"/>

        </form>
    </section>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,200&display=swap");

#login__overlay {
  position: fixed;
  display: flex;
  align-self: center;
  align-items: center;
  background: #F3E4E1;
  width: 90%;
  height: 80%;
  box-shadow: rgba(0, 0, 0, 0.6);
  margin-top: 7rem;
  border-radius: 3px;
  z-index: 100;
}
.login__terms{
 /* background: url();*/
 color: rgba(47, 41, 38, 1);
 margin: 18;
 width: 90%;
 height: 30%;
}

.loginForm{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
}
H3{
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
}
</style>