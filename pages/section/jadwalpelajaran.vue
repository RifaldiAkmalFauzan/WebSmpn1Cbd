<template>
    <div>
        <Navbar />
        <Heross />
        <Jadwal />
        <Footer />
    </div>
</template>
<script>
import Navbar from './navbar.vue';
import Heross from './JadwalPelajaran/Heross.vue';
import Jadwal from './JadwalPelajaran/Jadwal.vue';
import Footer from './footer.vue';
export default {
    components: { Navbar, Heross, Jadwal, Footer }
}
</script>
<style>
</style>