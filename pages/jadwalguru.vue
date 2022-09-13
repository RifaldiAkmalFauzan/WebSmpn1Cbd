<template lang="">
    <div>
        <navbar/>
        <jadwalguruheader/>
        <jadwalgurulabel/>
        <jadwalgurungajar/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import Jadwalguruheader from "./section/jadwalmengajarguru/jadwalguruheader.vue";
import Jadwalgurulabel from "./section/jadwalmengajarguru/jadwalgurulabel.vue";
import Jadwalgurungajar from "./section/jadwalmengajarguru/jadwalgurungajar.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, Jadwalguruheader, Jadwalgurulabel, Jadwalgurungajar, Footer } }
</script>
<style lang="">
    
</style>