<template lang="">
    <div>
        <navbar/>
        <berita/>
        <beritabaru/>
        <kegiatanbelajar/>
        <beritabaru2/>
        <recentpost/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import berita from "./section/artikel/berita.vue";
import beritabaru from "./section/artikel/beritabaru.vue";
import kegiatanbelajar from "./section/artikel/kegiatanbelajar.vue";
import beritabaru2 from "./section/artikel/beritabaru2.vue";
import recentpost from "./section/artikel/recentpost.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, berita, beritabaru, kegiatanbelajar, beritabaru2, recentpost, Footer } }
</script>
<style lang="">
    
</style>