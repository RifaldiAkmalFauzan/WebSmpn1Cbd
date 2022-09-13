<template>
    <div>
        <Navbar />
        <Heroes />
        <Content />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Heroes from './section/Prestasi/Heroes.vue';
import Content from './section/Prestasi/content.vue';
import Footer from './section/footer.vue';
export default {
    components: { Navbar, Heroes, Content, Footer }
}
</script>
<style>
</style>