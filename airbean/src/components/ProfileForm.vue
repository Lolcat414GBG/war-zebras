<template>
<main id="login__overlay">
  <section class="login__terms">
    <div class="logo__airbean"></div>
    <h1>Välkommen till AirBean-familjen!</h1>
    <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
    </section>

    <section>
        <form class="loginForm">
            <p>Namn</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginName"
            name= "LoginName"
            placeholder="Sixten Kaffelövér"/>

            <p>Epost</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginEmail"
            name= "LoginEmail"
            placeholder="sixten.kaffelover@zocom.se"/>

            
           <input
            class="login__GDPR" 
            type="radio"
            v-model="GDPR"
            value="GDPR"
            name= "GDPR"/>
            <label class="label__GDPR" for="GDPR">GDPR ok!</label>
            
          <input 
          class="btn__login"
          type="button"  
          v-model="addProfile" 
          v-on:click="removeOverlay"
          placeholder="Logga in"/>

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
  /*display: none;*/
  align-self: center;
  align-items: center;
  background: #F3E4E1;
  width: 90%;
  box-shadow: rgba(0, 0, 0, 0.6);
  margin-top: 5rem;
  border-radius: 3px;
  z-index: 100;
}
.login__terms{
 color: rgba(47, 41, 38, 1);
 width: 90%;
 height: 35%;
}

.logo__airbean{
  background: url('../assets/logoAirbean.svg') center  no-repeat;
  background-size: 15%;
  height: 70px;
  width: 100%;
  margin-top: 10px;
}

.loginForm{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 310px;
  height: 48px;
  text-align: left;
  margin-top: 10px;
}

.login__inputField {
  width: 100%;
  height:48px;
  background: transparent;
  border-radius: 6px;
  padding: 15px; 
  color: rgba(47, 41, 38, 1);
  font-size: 16px;
  font-family: Work Sans;
  border:1px solid #2F2926;
  
}

p {
width: 100%;
color: rgba(47, 41, 38, 1);
font-family: "Work Sans", sans-serif;
font-size: 12px;
padding-top: 10px;
padding-bottom: 5px;

}
H3{
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
}
.login__GDPR {
margin-top: 1.5rem;
background: transparent;
align-self: flex-start;
}

.label__GDPR{
  font-family: "Work Sans", sans-serif;
  color: rgba(47, 41, 38, 1);
  font-size: 12px;
  align-self: flex-start;
}

.btn__login {
  background-color: rgba(47, 41, 38, 1);
  border-radius: 50px;
  border-style: none;
  width: 250px;
}

/*.login__GDPR:after {
  background-color:  #0E927D;
}*/
</style>