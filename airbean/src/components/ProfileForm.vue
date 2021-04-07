<template>
<main id="login__overlay" v-show="showForm">
  <section class="login__terms">
    <div class="logo__airbean"></div>
    <h1>Välkommen till AirBean-familjen!</h1>
    <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
    </section>

    <section>
        <form action="" class="loginForm" @submit.prevent="addUser">
            <p>Namn</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginName"
            name="LoginName"
            placeholder="Sixten Kaffelövér"
            required />

            <p>Epost</p>
            <input
            class="login__inputField" 
            type="text"
            v-model="LoginEmail"
            name="LoginEmail"
            placeholder="sixten.kaffelover@zocom.se"
            required />

            <div class="gdpr">
              <input
                id="btn__login"
                class="login__GDPR" 
                type="radio"
                value="GDPR"
                name="GDPR"
                required />
                <label class="label__GDPR" for="GDPR">GDPR Ok!</label>
            </div>
          <button class="btn__login" type="submit">Logga in</button>
        </form>
    </section>
</main>
</template>

<script>
export default {
    data() {
      //check if user is registered
      const bol = window.localStorage.getItem('showForm');
      if(bol === null) {
          return {
              LoginEmail: '',
              LoginName: '',
              showForm: true
          }
      }
      else {
          return {
            LoginEmail: '',
            LoginName: '',
            showForm: false
        }
      }

    },
    methods: {
      addUser() {
        this.$store.dispatch("addUser", { name: this.LoginName, email: this.LoginEmail });
        //set localstorage to false so that the form doesn´t show and set the showForm to false immediately
        this.showForm = false;
        window.localStorage.setItem('showForm', false);
      }
    }
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
  flex-direction: column;
  width: 310px;
  height: 48px;
  text-align: left;
  margin-top: 10px;
}

.login__inputField {
  width: 100%;
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

h3 {
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
}

.login__GDPR {
  background: transparent;
}

.label__GDPR{
  font-family: "Work Sans", sans-serif;
  color: rgba(47, 41, 38, 1);
  font-size: 12px;
  margin-left: 0.5em;
}

.btn__login {
  background: #2F2926;
  font-family: 'PT Serif', serif;
  font-size: 1.5em;
  color: #fff;
  padding: 0.7rem 5rem;
  border-radius: 3rem;
  align-self: center;
  font-weight: 700;
}

.gdpr {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 1em 0 3em;
}
</style>