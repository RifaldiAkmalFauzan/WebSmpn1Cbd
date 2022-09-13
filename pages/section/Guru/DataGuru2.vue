<template>
    <div>
        <div class="container pt-[70px] box-border">
            <div class="flex justify-end w-[1110] pb-6 border-b-2 border-abu mb-20">
                <label class="relative block my-2 md:w-4/12 w-6/12 md:mx-0 mx-auto ">
                    <span class="sr-only">Search</span>
                    <span class="absolute inset-y-0 left-0 flex items-center pl-2"> <img
                            src="../../../assets/img/icons8-search.svg" alt="" class="h-5 w-5 fill-slate-200"
                            viewBox="0 0 20 20" /> </span>
                    <input
                        class="placeholder:italic placeholder:text-slate-300 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search teacher....." type="text" name="search" />
                </label>
            </div>
            <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 sm:gap-5 gap-3 mb-10 box-border">
                <div class="bg-bg2 drop-shadow-lg w-full h-full px-2 rounded-[5px] m-auto flex flex-col items-center mb-[50px]"
                    v-for="card in profil" :key="card">
                    <img class="m-auto mb-[51px] mt-[50px]" src="../../../assets/img/guru1.png" alt="Foto Guru">
                    <div class="wrappper">
                        <p class="sm:text-sm text-xs leading-4 mb-2"><span class="font-bold">Nama <span
                                    class="ml-[22px]">: </span> </span>{{ card.nama
                                    }}
                        </p>
                        <p class="sm:text-sm text-xs leading-4 mb-2"><span class="font-bold">Nip <span
                                    class="ml-[37px]">: </span> </span>{{ card.nip }}
                        </p>
                        <p class="sm:text-sm text-xs leading-4 mb-2"><span class="font-bold">Pelajaran : </span>{{
                                card.pel
                        }}</p>
                    </div>
                </div>
            </section>
            <div class="flex justify-center gap-x-2 pb-20">
                <Btn />
            </div>
        </div>
    </div>
</template>
<script>
import Btn from '../btn.vue';
export default {
    data() {
        return {
            profil: [
                {
                    nama: "Hj. ELIS HERNAWATI, S.Pd.",
                    nip: "196606051992032008",
                    pel: "Ilmu Pengetahuan Sosial"
                },
                {
                    nama: "Drs. Osad",
                    nip: "196203121989031014",
                    pel: "Bahasa Indonesia"
                },
                {
                    nama: "Hj. ENUNG NURHASANAH, S.Pd.",
                    nip: "196202021983022006",
                    pel: "Bahasa Indonesia"
                },
                {
                    nama: "HANA WIJAYA, S.Pd.",
                    nip: "196207091983022001",
                    pel: "Matematika"
                },
                {
                    nama: "MAMAN, S.Pd., M.M.Pd.",
                    nip: "196402161989031005",
                    pel: "Penjaskes"
                },
                {
                    nama: "RAKHMAT, S.Pd.,M.Si.\t",
                    nip: "196703101986031002",
                    pel: "Pendidikan Kewarganegaraan"
                },
                {
                    nama: "RITA NURYANTI, S.Pd.\t",
                    nip: "197108041998022003",
                    pel: "Ilmu Pengetahuan Alam"
                },
                {
                    nama: "IDA LAELASARI, S.Pd.\t",
                    nip: "196811231998022001",
                    pel: "Bahasa Sunda"
                },
                {
                    nama: "SUPRIYONO, S.Pd.\t",
                    nip: "196511141998021001",
                    pel: "Bahasa Inggris"
                },
            ],
            isi: [
                {
                    no: "1"
                },
                {
                    no: "2"
                },
                {
                    no: "3"
                },
                {
                    no: "4"
                },
                {
                    no: "5"
                },
            ]
        };
    },
    components: { Btn }
}
</script>
<style>
</style>