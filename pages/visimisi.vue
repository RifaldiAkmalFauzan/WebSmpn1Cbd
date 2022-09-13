<template lang="">
    <div>
        <navbar/>
        <Hero/>
        <TujuanSekolah/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import Hero from "./section/VisiMisi/Hero.vue";
import TujuanSekolah from "./section/VisiMisi/TujuanSekolah.vue";
import Footer from "./section/footer.vue";

export default { components: { Navbar, Hero, TujuanSekolah, Footer, } }
</script>
<style lang="">
    
</style>