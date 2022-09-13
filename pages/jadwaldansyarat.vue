<template lang="">
    <div>
        <navbar/>
<pemberitahuan/>
<infoagenda/>
     <Footer />
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import pemberitahuan from "./section/jadwaldanpersyaratan/pemberitahuan.vue";
import infoagenda from "./section/jadwaldanpersyaratan/infoagenda.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, pemberitahuan, infoagenda, Footer } }
</script>
<style lang="">
    
</style>