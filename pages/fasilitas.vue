<template lang="">
    <div>
        <navbar/>
        <fasilitasheader/>
        <fasilitascontent/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import fasilitasheader from "./section/fasilitas/fasilitasheader.vue";
import fasilitascontent from "./section/fasilitas/fasilitascontent.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, fasilitasheader, fasilitascontent, Footer } }
</script>
<style lang="">
    
</style>