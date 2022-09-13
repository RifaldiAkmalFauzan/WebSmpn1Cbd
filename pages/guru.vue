<template lang="">
    <div>
        <navbar/>
        <DataGuru/>
        <DataGuru2/>
        <Footer/>
    </div>
</template>
<script>
import Navbar from "./section/navbar.vue";
import DataGuru from "./section/Guru/DataGuru.vue";
import DataGuru2 from "./section/guru/DataGuru2.vue";
import Footer from "./section/footer.vue";


export default { components: { Navbar, DataGuru, DataGuru2, Footer, } }
</script>
    
</style>