<template>
  <div>
    <navbar />
    <moto />
    <Sambutan />
    <Profil />
    <Beritaagenda />
    <Galery />
    <Footer />
  </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import Moto from "./section/moto.vue";
import Sambutan from "./section/sambutan.vue";
import Profil from "./section/profil.vue";
import Beritaagenda from "./section/beritaagenda.vue";
import Galery from "./section/galery.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, Moto, Profil, Beritaagenda, Galery, Footer, Sambutan } }
</script>
<style>
</style>