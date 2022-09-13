<template>
    <div>
        <Navbar />
        <Galeryheader />
        <Fotofoto />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Galeryheader from './section/galery/galeryheader.vue';
import Fotofoto from './section/galery/fotofoto.vue';
import Footer from './section/footer.vue';
export default {
    components: { Navbar, Galeryheader, Fotofoto, Footer }
}
</script>
<style>
</style>