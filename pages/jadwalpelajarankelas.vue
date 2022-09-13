<template>
    <div>
        <Navbar />
        <Jadwalheader />
        <Jadwaltable />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Jadwalheader from './section/jadwalpelajarankelas/jadwalheader.vue';
import Jadwaltable from './section/jadwalpelajarankelas/jadwaltable.vue';
import Footer from './section/footer.vue';
export default {
    components: { Navbar, Jadwalheader, Jadwaltable, Footer }
}
</script>
<style>
</style>