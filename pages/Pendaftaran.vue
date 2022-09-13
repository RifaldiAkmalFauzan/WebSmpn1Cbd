<template>
    <div>
        <Navbar />
        <Selamatdatang />
        <Informasi />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Informasi from './section/pendaftaran/informasi.vue';
import Footer from './section/footer.vue';
import Selamatdatang from './section/pendaftaran/selamatdatang.vue';

export default {
    components: { Navbar, Informasi, Footer, Selamatdatang }
}
</script>
<style>
</style>