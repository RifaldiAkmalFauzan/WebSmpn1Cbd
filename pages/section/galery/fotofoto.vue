<template>
    <div>
        <section class="my-20">
            <div class="container">
                <div class="foto grid grid-cols-1 sm:grid sm:grid-cols-2 sm:grid-rows-4 gap-8">
                    <div class="foto1 relative xl:flex " v-for="image in fotofoto">
                        <!-- <div class="absolute z-10 bg-primary lg:w-4/5 w-full py-2 pr-4 rounded-md mt-4 opacity-80"> -->
                        <div class="relative xl:w-3/5  w-full ">
                            <h2
                                class="absolute z-10 bg-primary xl:w-[120%] w-full py-2 pr-4 rounded-md mt-4 bg-opacity-80 sm:text-h2 text-p2 text-white font-bold text-end">
                                {{
                                        image.title
                                }}</h2>
                            <img src="../../../assets/img/perpisahan.svg" alt="" class="w-full h-full" />
                        </div>
                        <div class="xl:px-4 xl:pt-20 xl:w-2/5 xl:h-full p-3 b">
                            <p class="sm:text-p3 text-p4 text-secondary sm:leading-8"> {{
                                    image.content
                            }}</p>
                            <nuxt-link to="galerysanlat" class="sm:text-p3 text-p4 text-primary">Lihat Foto </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fotofoto: [
                {
                    title: "Guru",
                    content: "Beberapa Foto Guru - Guru SMP Negeri 1 Cibadak",
                },
                {
                    title: "Sanlat",
                    content: "Beberapa Foto Ketika Sanlat Murid - Murid SMP Negeri 1 Cibadak",
                },
                {
                    title: "Kunjungan Disdik",
                    content: "Beberapa Foto Kunjungan dari Dinas Pendidikan SMP Negeri 1 Cibadak",
                },
                {
                    title: "Kunjungan Arrayah",
                    content: "Beberapa Foto Ketika Kunjungan Arrayah SMP Negeri 1 Cibadak",
                },
                {
                    title: "Perpisahan 2016",
                    content: "Beberapa Foto Ketika Perpisahan SMP Negeri 1 Cibadak",
                },
                {
                    title: "Wisuda Tahfidz",
                    content: "Beberapa Foto Ketika Wisida Tahfidz Murid - Murid SMP Negeri 1 Cibadak",
                }, {
                    title: "MPLS 2016",
                    content: "Beberapa Foto Ketika MPLS ( Masa Pengenalan Lingkunga SekolahSMP Negeri 1 Cibadak",
                }, {
                    title: "Fasilitas Sekolah",
                    content: "Beberapa Foto Ketika Kunjungan Arrayah SMP Negeri 1 Cibadak",
                },



            ]
        }
    },
}
</script>