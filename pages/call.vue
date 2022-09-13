<template>
    <div>
        <Navbar />
        <Heroess />
        <Form />
        <Footer />
    </div>
</template>
<script>
import Navbar from './section/navbar.vue';
import Heroess from './section/call/Heroess.vue';
import Form from './section/call/Form.vue';
import Footer from './section/footer.vue';
export default {
    components: { Navbar, Heroess, Form, Footer }
}
</script>
<style>
</style>