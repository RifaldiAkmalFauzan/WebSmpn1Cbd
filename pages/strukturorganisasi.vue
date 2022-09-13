<template lang="">
    <div>
        <navbar/>
        <hero/>
        <Struktur/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import hero from "./section/StrukturOrganisasi/Hero.vue";
import Struktur from "./section/StrukturOrganisasi/Struktur.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, hero, Struktur, Footer, } }
</script>
<style lang="">
    
</style>