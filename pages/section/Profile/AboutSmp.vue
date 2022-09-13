<template>
    <div>
        <div class="container font-body">
            <p class="font-bold text-h2 text-center my-20">SMP Negeri 1 Cibadak</p>
            <section
                class="grid sm:grid-cols-3 sm:grid-rows-3 lg:gap-10 md:gap-7 sm:gap-5 gap-y-5 justify-items-center items-center">
                <div class="bg-primary w-full rounded-[10px] text-center pt-9 pb-[65px] sm:row-span-3">
                    <img class="m-auto" src="../../../assets/img/sekolahicon.svg" alt="Icon Nama Sekolah">
                    <p class="text-white font-extrabold mb-4 leading-8 text-p3">Nama Sekolah<br> <span
                            class="text-slate-300 font-normal">Smp
                            Negeri 1 Cibadak</span></p>
                    <p class="text-white font-extrabold leading-8 mb-20 text-p3">Nama Kepala Sekolah<br> <span
                            class="text-slate-300 font-normal">Drs
                            Ossad</span></p>
                    <img class="m-auto" src="../../../assets/img/alamaticon.svg" alt="Icon Alamat">
                    <p class="text-slate-300 leading-8 m-auto mb-20 text-p3"><span
                            class="text-white font-extrabold">Alamat</span>
                        <br>Jl Siliwangi No. 123 Cibadak<br> Sukabumi -
                        Jawa Barat <br>43351
                    </p>
                    <img class="m-auto" src="../../../assets/img/webicon.svg" alt="Icon Website">
                    <p class="leading-8 text-slate-300 mb-4 text-p3"><span
                            class="text-white font-extrabold">Website/Email</span><br>smpn1cibadak.sch.id
                        /<br>smpn1cbd_kabsi@yahoo.com</p>
                    <p class="leading-8 text-slate-300 text-p3"><span class="text-white font-extrabold">No.
                            Telp</span><br>(0266)
                        531333</p>
                </div>
                <div class="card text-center w-full h-full bg-bground border-2 border-slate-text-slate-300 rounded-[10px] pt-4 pb-7"
                    v-for="card in listAbout" :key="card">
                    <img class="m-auto" src="../../../assets/img/sekolahicon.svg" alt="Icon">
                    <p class="font-extrabold text-p3">{{ card.satu }}</p>
                    <p class="text-p3 mb-2">{{ card.dua }}</p>
                    <p class="font-extrabold text-p3">{{ card.tiga }}</p>
                    <p class="text-p3 mb-2">{{ card.empat }}</p>
                    <p class="font-extrabold text-p3">{{ card.lima }}</p>
                    <p class="text-p3">{{ card.enam }}</p>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            listAbout: [
                {
                    satu: "No Pendirian Sekolah",
                    dua: "-",
                    tiga: "No. Sertifikat",
                    empat: "421 / 997 / 2005",
                    lima: "",
                    enam: "",
                },
                {
                    satu: "No Statistik Sekolah",
                    dua: "20 1 02 06 10 008",
                    tiga: "NIS",
                    empat: "200080",
                    lima: "",
                    enam: "",
                },
                {
                    satu: "Jenjang Akreditasi",
                    dua: "A",
                    tiga: "Tahun Didirikan",
                    empat: "1965",
                    lima: "Tahun Operasional",
                    enam: "1966",
                },
                {
                    satu: "Status Kepemilikan Tanah",
                    dua: "Hak Milik",
                    tiga: "Luas Tanah",
                    empat: "5.007 M2",
                    lima: "Status Kepemilikan Bangunan",
                    enam: "Pemerintah",
                },
                {
                    satu: "No Pendirian Sekolah",
                    dua: "-",
                    tiga: "No. Sertifikat",
                    empat: "421 / 997 / 2005",
                    lima: "",
                    enam: "",
                },
                {
                    satu: "Luas Seluruh Bangunan",
                    dua: "2.140 M2",
                    tiga: "Fasilitas Lainnya",
                    empat: "-",
                    lima: "Sisi Lahan Seluruhnya",
                    enam: "-",
                },
            ]
        }
    },
}
</script>
<style>
</style>