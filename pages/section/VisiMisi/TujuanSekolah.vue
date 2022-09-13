<template>
    <section class="pt-20">
        <div class="container">
            <div class="border-2 border-abu rounded-[5px] mb-20 w-11/12 m-auto" v-for="card in content" :key="card">
                <p
                    class="bg-primary bg-opacity-90 text-white text-h2 font-bold leading-[33px] text-center py-1 rounded-t-[5px] px-2">
                    {{
                            card.title
                    }}</p>
                <div class="md:px-[100px] tablet:px-[60px] px-8 pt-6 pb-10">
                    <p class="text-lifot text-sm leading-8 tracking-[0.5px]">{{ card.kesatu }}</p>
                    <p class="text-lifot text-sm leading-8 tracking-[0.5px]">{{ card.kedua }}</p>
                    <p class="text-lifot text-sm leading-8 tracking-[0.5px]">{{ card.ketiga }}</p>
                    <p class="text-lifot text-sm leading-8 tracking-[0.5px]">{{ card.keempat }}</p>
                    <p class="text-lifot text-sm leading-8 tracking-[0.5px] text-center">{{ card.kelima }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            content: [
                {
                    title: "Tujuan Sekolah Pada Tahun 2017 Diharapkan:",
                    kesatu: "1. 100% Seluruh Guru/Staf memberikan pelayanan, keteladanan kepada para pengguna jasa dengan pendekatan agama, etika, dan budaya",
                    kedua: "2. 100% Siswa melakukan syariat agama, etika dan budaya baik di Sekolah maupun diluar",
                    ketiga: "3. 90% Fasilitas sekolah mendekati Standar Nasional Pendidikan (SNP)",
                    keempat: "4. 80% Siswa berprestasi baik ditingkat regional, nasional maupun Global"
                },
                {
                    title: "STRATEGI",
                    kelima: "Tiada kekayaan yang paling utama daripada kekayaan jiwa, tiada kepapaan yang paling menyedihkan daripada kebodohan, dan tiada warisan yang paling baik daripada pendidikan.",
                },
            ]
        }
    },
}
</script>
<style>
</style>