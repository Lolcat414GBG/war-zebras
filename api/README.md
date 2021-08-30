# Grupparbete - AirBean

Du ska bygga en webbapp där du kan beställa kaffe och få den levererad via drönare (drönare ingår ej i uppgiften).

**Figmaskiss:** https://www.figma.com/file/ONcO3UQRPBLQsZc3FkysMt/AirBean-v.1.1-Vue?node-id=0%3A1

## Instruktioner

**För att få Godkänt ska du:**
* Gjort enligt Figma skissen
* Är en single file application (SPA) med vue-router
* Använder sig av Vuex med en Vuex store
* Gå att lägga till produkter i en varukorg från menysidan
* I varukorgen ändra antal/ta bort produkter
* Hämta alla produkter med `fetch`
* Kunna skicka sin order med `fetch` och få ett svar med en ETA och ordernummer

**För att Väl Godkänt ska du:**
* Att alla ordrar sparas i en Lowdb-databas
* Att man som användare kan se orderhistorik på sin profil
* Att det finns en profilvy
* Att det går att skapa ett konto med användarnamn och lösenord som knyts till de ordrar som användaren har lagt


Inlämning via Learnpoint och Github med ert gruppnamn som repo-namn.

**Deadline:** 8/4 23:59

## Airbean API

Endpoint: `http://localhost:5000/api/beans`

Metod: `GET`

Beskrivning: För att hämta menyn

---

Endpoint: `http://localhost:5000/api/beans`

Metod: `POST`

Beskrivning: För att posta en beställning