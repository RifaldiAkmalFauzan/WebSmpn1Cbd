<template>
    <div>

        <section class="my-20">
            <div class="container">
                <div class="info">
                    <div>
                        <h1 class="text-h1 md:mb-20 mb-14 font-bold text-center">Info Agenda</h1>
                    </div>
                    <div
                        class="lg:w-4/5 w-full sm:grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-8 grid grid-cols-1 grid-rows-3 gap-5 mx-auto">
                        <div class="shadow-lg box-content border-2 border-primary rounded-lg py-9"
                            v-for="info in agenda">
                            <img src="../../../assets/img/waktumulai.svg" alt="" class="pb-6 mx-auto">
                            <h3 class="text-h3 text-center font-bold">{{
                                    info.title
                            }}</h3>
                            <p class="text-p3 text-center my-2 ">{{
                                    info.jam
                            }}</p>
                            <p class="text-p3 text-center ">{{
                                    info.tanggal
                            }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-primary  ">
            <div class="container py-20 mx-auto">
                <div class="wrap md:grid md:grid-cols-2 grid-cols-none">
                    <div class="text-white  md:pr-[72px] w-full ">
                        <p class="sm:text-p1 text-p3">Assalamualikum wrwb,
                        </p>
                        <p class="my-8 sm:text-p1 text-p3 text-justify">Dipermaklumkan dengan hormat, di tengah masih
                            mewabahnya
                            penyebaran
                            Covid-19, semoga
                            Bapak/Ibu dalam keadaan sehat walafiat. Selanjutnya, menindaklanjuti Surat Keputusan
                            Bupati
                            Sukabumi Nomor 421/Kep.444/Disdik/2020 tentang Penerimaan Peserta Didik Baru pada
                            Taman
                            Kanak-kanak, Sekolah Dasar, dan Sekolah Menengah Pertama Tahun Pelajaran 2020/2021,
                            maka
                            perlu kami sampaikan bahwa Penerimaan Peseta Didik Baru ( PPDB ) Tahun Pelajaran
                            2020/2021
                            di SMP Negeri 1 Cibadak dilaksanakan secara daring ( online ) melalui
                            http://smpn1cibadak.sch.id/ppdb/ dengan jadwal seperti pada lampiran surat ini.</p>
                    </div>
                    <figure class="my-auto">
                        <img src="../../../assets/img/fotbar.svg" alt="">
                        <figcaption class="inline-block text-p4 text-white italic my-2">
                            Foto
                            Guru-guru SMPN 1 CIBADAK
                        </figcaption>
                    </figure>
                </div>
                <button
                    class=" bg-transparent md:py-2 md:px-9  text-white font-bold hover:bg-white md:text-p2 sm: active:bg-white rounded-md border-2 border-white hover:text-primary sm:py-1 py-px px-4 md:mt-2 mt-6 ">Informasi
                    lebih lanjut</button>
            </div>
        </section>
    </div>



</template>

<script>
export default {
    data() {
        return {
            agenda: [
                {
                    title: "Waktu Mulai",
                    jam: "08.00 AM",
                    tanggal: "2020-06-29",
                },
                {
                    title: "Waktu Selesai",
                    jam: "05.00 PM",
                    tanggal: "2020-07-04",
                },
                {
                    title: "Tempat",
                    jam: "Gedung SMPN 1 Cibadak",
                    tanggal: "",
                },
            ]
        }
    },
}
</script>
<style>
</style>