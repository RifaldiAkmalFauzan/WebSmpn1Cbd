<template>
    <div>
        <section class="mt-20">
            <div class="container">
                <div class="fasilitascontent grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 gap-8">
                    <div class="relative" v-for="images in fasilitas">
                        <div class="relative">
                            <img src="../../../assets/img/fasilitas1.svg" alt="" class="w-full">
                            <div
                                class="absolute bg-primary w-full lg:py-[13px] py-4 lg:pr-4 rounded-md bottom-0 opacity-80">
                                <h2 class=" sm:text-h2 text-p2 text-white font-bold text-center">{{
                                        images.title
                                }}</h2>
                            </div>
                        </div>
                        <p class="text-p3 text-secondary py-4 px-2 ">{{
                                images.content
                        }}</p>
                    </div>
                </div>
                <a href=""><button
                        class="block text-p3 font-bold px-6 py-2 lg:px-12 bg-primary  rounded-sm text-white hover:bg-hover active:bg-active focus:bg-focus mx-auto  mt-6">
                        Lebih
                        Lanjut </button></a>
            </div>
        </section>
    </div>

</template>
<script>
export default {
    data() {
        return {
            fasilitas: [
                {
                    title: "CCTV",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },
                {
                    title: "Greenhouse",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },
                {
                    title: "Lemari Tropiy",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },
                {
                    title: "Panggung",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },
                {
                    title: "TV Umum",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },
                {
                    title: "Lab Biologi",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem.",
                },




            ]
        }
    },
}
</script>