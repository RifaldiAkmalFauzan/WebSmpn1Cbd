<template>
    <div>
        <Navbar />
        <Aboutheader />
        <Aboutcontent />
        <Footer />
    </div>
</template>
<script>

import Aboutcontent from './section/about/aboutcontent.vue';
import Footer from './section/footer.vue';
import Navbar from './section/navbar.vue';
import Aboutheader from './section/about/aboutheader..vue';
export default {

    components: { Aboutcontent, Footer, Navbar, Aboutheader }
}

</script>
<style>
</style>