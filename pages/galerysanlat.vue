<template>
    <div>
        <Navbar />
        <Sanlat />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Sanlat from './section/GallerySanlat/Sanlat.vue';
import Footer from './section/footer.vue';

export default {
    components: { Navbar, Footer, Sanlat, }
}
</script>
<style>
</style>