<template>
    <div>
        <section>
            <div class="container relative">
                <div
                    class="ekskul lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-8  sm:grid sm:grid-cols-2 sm:gap-5 mt-32 mb-10 ">
                    <div class="content relative" v-for="images in ekskul">
                        <div class="relative md:w-[300px] md:h-[300px]  w-[250px] h-[250px] mx-auto">
                            <!-- <div
                                class=" absolute  left-3 bottom-3 h-full flex justify-center bg-gradient-to-b from-transparent via-transparent to-black opacity-80 rounded-md ">
                            </div> -->
                            <span
                                class="absolute  bg-black opacity-50  font-bold rounded-full py-1 px-3 text-white text-p3 top-5 left-4">{{
                                        images.no
                                }}</span>
                            <img src="../../../assets/img/osis.svg" alt="" class="w-full h-full">
                            <h3 class="absolute lg:text-h3   text-white font-bold left-4 bottom-4 z-20 ">{{
                                    images.title
                            }}
                            </h3>
                        </div>
                        <div class="flex justify-evenly  lg:p-5 py-3 px-12 rounded-md">
                            <div class="font-bold lg:text-p3 text-p4">
                                <p>Pembimbing</p>
                                <p>No.Hp</p>
                                <p>Hari</p>
                                <p>Waktu</p>
                            </div>
                            <div class="lg:text-p3 text-p4">
                                <span class="block">:</span> <span class="block">:</span> <span class="block">:</span>
                                <span class="block">:</span>
                            </div>
                            <div class="lg:text-p3 text-p4">
                                <p>{{
                                        images.p
                                }}</p>
                                <p>{{
                                        images.hp
                                }}</p>
                                <p>{{
                                        images.hari
                                }}</p>
                                <p>{{
                                        images.waktu
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
            ekskul: [
                {
                    no: "1",
                    title: "Basket",
                    p: "Noviyani, S.Pd",
                    hp: "085793978310",
                    hari: "Senin",
                    waktu: "15.00 - 17.00",
                },
                {
                    no: "2",
                    title: "Futsal / Sepak Bola",
                    p: "Devi Noviyandi, S.Pd",
                    hp: "08174984120",
                    hari: "Kamis",
                    waktu: "14.30 - 17.00",
                },
                {
                    no: "3",
                    title: "Osis",
                    p: "Iyan Sopian, S.Pd",
                    hp: "085659390050",
                    hari: "Kamis",
                    waktu: "14.00 - 16.00",
                },
                {
                    no: "4",
                    title: "Volly",
                    p: "Noviyani, S.Pd",
                    hp: "085793978310",
                    hari: "Rabu",
                    waktu: "15.00 - 17.00",
                },
                {
                    no: "5",
                    title: "Bulu tangkis",
                    p: "Iyan Sopian, S.Pd",
                    hp: "085659390050",
                    hari: "Senin",
                    waktu: "14.00 - 16.00",
                },
                {
                    no: "6",
                    title: "Paduan Suara",
                    p: "Iyan Sopian, S.Pd",
                    hp: "085659390050",
                    hari: "Senin",
                    waktu: "14.00 - 16.00",
                },
                {
                    no: "7",
                    title: "Hidroponik",
                    p: "Neneng Inayah, S.Pd",
                    hp: "081316689779",
                    hari: "Senin",
                    waktu: "15.00 - 17.00",
                },
                {
                    no: "8",
                    title: "Pramuka",
                    p: "Ocih, S.Pd / Abu Bakar",
                    hp: "085794618177",
                    hari: "Rabu & Sabtu",
                    waktu: "14.00 - 16.00",
                },
                {
                    no: "9",
                    title: "Paskibra",
                    p: "Noviyani, S.Pd",
                    hp: "085793978310",
                    hari: "Senin",
                    waktu: "15.00 - 17.00 / 14.00 - 17.00",
                },


            ]
        }
    },
}
</script>