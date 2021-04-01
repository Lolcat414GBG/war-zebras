<template>
  <main>
    <Header />

    <div class="about__text">
      <h1>Vårt Kaffe</h1>
      <h5>{{ subHeader }}</h5>
      <p>{{ bodyText }}</p>
    </div>

    <div class="info__founder">
      <div class="img__founder"></div>
      <h2>Eva Cortado</h2>
      <h3>VD & Grundare</h3>
    </div>
    <AppFooter />
  </main>
</template>

<script>
import Header from "../components/Header";
import AppFooter from "../components/AppFooter";

export default {
  data() {
    return {
      subHeader:
        "Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.",

      bodyText: `Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.
      
       Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.`,
    };
  },
  components: {
    Header,
    AppFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap");

main {
  min-height: 667px;
  background-color: #f3e4e1;
  overflow: auto;
}
.about__text {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 3rem;
  height: 80%;
  width: 90%;
  white-space: pre-line;
}

h1 {
  font-family: "PT Serif", serif;
  margin-bottom: 1rem;
}
h5 {
  font-size: 14px;
  font-weight: bolder;
  font-family: "Work Sans", sans-serif;
  color: rgba(47, 41, 38, 1);
  line-height: 160%;
  margin-bottom: 1rem;
}
p {
  font-size: 12px;
  font-family: "Work Sans", sans-serif;
  color: rgba(47, 41, 38, 1);
  line-height: 160%;
}
.info__founder {
  display: flex;

  align-items: center;
  flex-direction: column;
  margin-top: 6rem;
  margin-bottom: 2rem;
  height: auto;
  width: 100%;
}
.img__founder {
  background: url("../assets/eva-cortado.jpg") center no-repeat;
  height: 74px;
  width: 74px;
  border-radius: 50px;
}
h2 {
  font-size: 22px;
}

h3 {
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  padding-bottom: 3rem;
}
</style>
