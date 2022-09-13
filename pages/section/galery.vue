<template>
    <div>
        <section class="my-12 ds:mt-44">
            <div class="container">
                <h2 class="text-h3 lg:text-h2 font-bold mb-5 ds:mb-10">Galery</h2>
                <div
                    class="grid grid-cols-1  sm:grid sm:grid-cols-2 sm:grid-rows-3 md:grid md:grid-cols-3 md:grid-rows-2 gap-8 ">
                    <img src="../../assets/img/galery2.png" alt=""
                        class="hover:scale-95 active:scale-75 transition-all duration-200 w-full" v-for="picture in 6 "
                        :key="picture">
                </div>
                <button
                    class="block text-p3 font-bold px-6 py-2 lg:px-9 bg-primary  rounded-sm text-white hover:bg-hover active:bg-active focus:bg-focus mx-auto  mt-6">
                    <a href="">Lebih
                        Lanjut</a> </button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            gambar: [
                {
                    image: "../../assets/img/galery1.png.svg",

                },
                {
                    image: "../../assets/img/galery2.png.svg",
                },
                {
                    image: "../../assets/img/galery3.png.svg",

                },
                {
                    image: "../../assets/img/galery4.png.svg",

                },
                {
                    image: "../../assets/img/galery5.png.svg",

                },
                {
                    image: "../../assets/img/galery6.png.svg",

                },

            ]
        }
    },
}
</script>
<style>
</style>