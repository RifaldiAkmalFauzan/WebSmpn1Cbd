<template>
    <div>
        <section class="bg-bg-2 my-12 ds:mt-12 ds:mb-24">
            <div class="container">
                <div class="sm:flex">
                    <div
                        class="kiri border-r-2 border-slate-300 my-6 sm:w-5/12 sm:mr-16 sm:my-auto sm:p-4 ds:mr-[80px] ds:pr-20 ">
                        <h3 class="text-h3 font-bold sm:text-h2 ds:text-h2">Profil Sekolah</h3>
                        <p class="text-p4 text-secondary mt-3 mb-8 sm:text-p3  sm:leading-7 ds:text-p3 ">Di
                            samping adalah profil sekolah kami secara keseluruhan dari mulai bagian depan hingga seluruh
                            fasilitas yang terdapat disekolah kami kami akan ...</p>
                        <a href=""
                            class="text-p3 text-white bg-primary rounded-sm font-bold px-6 py-2 sm:px-9 hover:bg-hover active:bg-active focus:bg-focus">Lebih
                            Lanjut</a>
                    </div>
                    <div
                        class="kanan grid grid-cols-1 gap-4 sm:w-6/12 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-5 sm:p-10 ds:gap-10">
                        <div class="fasilitas shadow-sm p-4 sm:aspect-[1/1] mb-4 sm:p-4" v-for="fasilitas in listabout"
                            :key="fasilitas">
                            <img src="../../assets/img/fasilitas.svg" alt="" />
                            <p class="text-p2 font-bold mb-px mt-3 sm:text-h3 sm:mb-2 sm:mt-5"><a href="">{{
                                    fasilitas.title
                            }}</a>
                            </p>
                            <p class="text-p4 text-secondary sm:text-p3 sm:leading-6">Lorem ipsum dolor sit amet
                                adipcing aqua lorem ipsum.</p>
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
            listabout: [
                {
                    title: "fasilitas",
                    content: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
                },
                {
                    title: "Lokasi",
                    content: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
                },
                {
                    title: "Seajarah",
                    content: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
                },
                {
                    title: "Prestasi",
                    content: "Lorem ipsum dolor sit amet adipcing aqua lorem ipsum.",
                },

            ]
        }
    },
}
</script>
<style>
</style>