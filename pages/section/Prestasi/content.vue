<template>
    <section>
        <div class="container">
            <div
                class="grid sm:grid-cols-2 grid-cols-1 xl:gap-y-10 sm:gap-y-7 sm:gap-x-10 xl:gap-x-20 pt-20 sm:pb-[67px]">
                <div class="relative mb-5 sm:mb-0" v-for="card in isi" :key="card">
                    <img class="w-full rounded-[5px]" src="../../../assets/img/mhq.png" alt="...">
                    <p
                        class="absolute w-full bottom-0 text-white lg:text-p1 text-p3 font-bold bg-primary rounded-b-[5px] px-4 lg:py-3 py-1 bg-opacity-80">
                        {{ card.title }}</p>
                </div>

            </div>
            <a href=""><button
                    class="block text-p3 font-bold px-6 py-2 lg:px-12 bg-primary  rounded-sm text-white hover:bg-hover active:bg-active focus:bg-focus mx-auto ">
                    Lebih
                    Lanjut </button></a>
        </div>
    </section>
</template>
<script>

export default {

    data() {
        return {
            isi: [
                {
                    image: "../../../assets/img/mhq.png",
                    title: "Juara MHQ tingkat Profinsi dan Nasional",
                },
                {
                    image: "../../../assets/img/tinju.png",
                    title: "Juara MHQ tingkat Profinsi dan Nasional",
                },
                {
                    image: "../../../assets/img/pramuka.png",
                    title: "Juara umum lomba ketangkasan pramuka se Kab. Sukabumi",
                },
                {
                    image: "../../../assets/img/bulutangkis.png",
                    title: "Juara umum bulu tangkis putra & putri se Kab. Sukabumi",
                },
            ]
        }
    },
}
</script>
<style>
</style>