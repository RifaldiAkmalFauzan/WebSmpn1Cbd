<template>
    <div>
        <section>
            <div class="container">
                <div class="ds:flex justify-start">
                    <h2 class="text-h3 font-bold lg:text-h2 lg:mb-px ds:mr-[56px]">Berita dan Agenda</h2>
                    <label class="relative block my-2 md:w-3/6 w-full">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2"> <img
                                src="../../assets/img/icons8-search.svg" alt="" class="h-5 w-5 fill-slate-200"
                                viewBox="0 0 20 20" /> </span>
                        <input
                            class="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Search....." type="text" name="search" />
                    </label>
                </div>
                <div class="lg:flex lg:justify-between lg:mt-5 ds:mt-10">
                    <div class="satu lg:w-3/5">
                        <div class="flex justify-around my-2 lg:mb-5 " v-for="berita in belajar" :key="berita">
                            <img src="../../assets/img/1.png" alt="" class="object-cover">
                            <div class="my-auto p-3">
                                <h4 class="text-h4 font-bold lg:text-h3">{{ berita.title
                                }}</h4>
                                <p class="text-p4 text-secondary mt-2 mb-3 lg:text-p3">Lorem ipsum dolor sit amet
                                    adipcing amet adipcingamet adipci
                                    aqua lorem ipsum.</p>
                                <p class="text-p4 text-secondary lg:text-p3">20 Juni</p>
                            </div>
                        </div>
                    </div>
                    <div class="dua grid grid-rows-3 gap-3 my-4 lg:w-2/5 lg:h-1/5  lg:justify-center">
                        <div class="flex lg:mt-5" v-for="agenda in deklarasi" :key="deklarasi">
                            <img src="../../assets/img/logo.png" alt="" class="mr-3 object-cover">
                            <div>
                                <p class="text-p4 text-secondary lg:text-p2">01 - 06 - 2021</p>
                                <p class="text-p2 font-bold lg:text-p1 ">{{ agenda.content
                                }}</p>
                            </div>
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
            belajar: [
                {
                    title: "Belajar di Rumah",
                    content: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
                },
                {
                    title: "Kegiatan Belajar mengajar di Rumah",
                    content: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
                },
                {
                    title: "Kegiatan Belajar mengajar di Rumah",
                    content: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
                },
                {
                    title: "Kegiatan Pembelajaran Daring",
                    content: "Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci aqua lorem ipsum.",
                },

            ],

            deklarasi: [
                {
                    title: "01 - 06 - 2021",
                    content: "Deklarasi Sekolah Ramah Anak.",
                },
                {
                    title: "01 - 06 - 2021",
                    content: "Pembagian Ijazah.",
                },
                {
                    title: "01 - 06 - 2021",
                    content: "Pemberitahuan PPDB 2020/2021.",
                },
            ]
        }
    },
}
</script>
<style>
</style>