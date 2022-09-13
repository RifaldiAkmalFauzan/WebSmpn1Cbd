<template lang="">
    <div>
        <navbar/>
        <ekskulheader/>
        <ekskul/>
        <btn/>
        <Footer/>

    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import ekskulheader from "./section/daftarekstrakurikuler/ekskulheader.vue";
import ekskul from "./section/daftarekstrakurikuler/ekskul.vue";
import Footer from "./section/footer.vue";

export default { components: { Navbar, ekskulheader, ekskul, Footer } }
</script>
<style lang="">
    
</style>