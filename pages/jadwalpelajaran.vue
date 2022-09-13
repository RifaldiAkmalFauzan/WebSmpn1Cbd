<template>
    <div>
        <Navbar />
        <Heross />
        <Jadwalpelajaran />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Heross from './section/JadwalPelajaran/Heross.vue';
import Jadwalpelajaran from './section/jadwalpelajaran.vue';
import Footer from './section/footer.vue';
export default {
    components: { Navbar, Heross, Jadwalpelajaran, Footer }
}
</script>
<style>
</style>