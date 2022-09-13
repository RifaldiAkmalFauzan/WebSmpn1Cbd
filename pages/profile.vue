<template lang="">
    <div>
        <navbar/>
        <Heros/>
        <AboutSmp/>
        <RuangKelas/>
        <TableJumSis/>
        <TenagaPendidik/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import AboutSmp from "./section/Profile/AboutSmp.vue";
import Heros from "./section/Profile/Heros.vue";
import RuangKelas from "./section/Profile/RuangKelas.vue";
import TableJumSis from "./section/Profile/TableJumSis.vue";
import TenagaPendidik from "./section/Profile/TenagaPendidik.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, AboutSmp, Heros, RuangKelas, TableJumSis, TenagaPendidik, Footer, } }
</script>
<style lang="">
    
</style>