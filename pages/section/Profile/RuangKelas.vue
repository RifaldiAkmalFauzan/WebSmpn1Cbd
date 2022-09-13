<template>
    <div>
        <div class="container pt-4 mx-auto">
            <p class="text-2xl font-bold mb-6">Data Ruang Kelas</p>
            <!-- Tabel data ruang kelas kesatu -->
            <table class="w-full box-border table-auto mb-10">
                <tr class="border border-table bg-primary text-white sm:text-p1 text-p4 ipx:text-p3 text-center">
                    <th class="border border-table font-normal" colspan="7">Jumlah Ruang Kelas Asli</th>
                    <th class="border border-table font-normal xl:px-8 xl:py-5 " colspan="2.5">Jumlah ruang
                        lainnya yang
                        dipakai untuk
                        ruang kelas (e)</th>
                    <th class="border border-table font-normal xl:px-8 xl:py-0 " colspan="2.5">Jumlah ruang yang
                        digunakan untuk
                        ruang
                        kelas
                        (f)=(d+e) </th>
                </tr>
                <tr class=" w-full sm:text-p1 md:text-p2 text-[11px] ipx:text-p1 text-center odd:bg-table"
                    v-for="uk in jumlah" :key="uk">
                    <td class="border border-table xl:px-20" colspan="2">{{ uk.tittle }}</td>
                    <td class="border border-table xl:px-6 ">{{ uk.ukuran1 }}</td>
                    <td class="border border-table xl:px-6 ">{{ uk.ukuran2 }}</td>
                    <td class="border border-table xl:px-4 ">{{ uk.ukuran3 }}</td>
                    <td class="border border-table xl:px-4 " colspan="2">{{ uk.ukuran4 }}</td>
                    <td class="border border-table xl:px-7" colspan="2.5">{{ uk.kosong1 }}</td>
                    <td class="border border-table xl:px-7" colspan="2.5">{{ uk.kosong }}</td>
                </tr>
            </table>

            <!-- tabel data ruang kelas kedua -->
            <p class="text-h2 font-bold mb-6">Data Ruang Kelas</p>
            <table class="w-full mb-[51px]">
                <tr class="border border-table bg-primary text-white sm:text-p1 text-[10px] text-center">
                    <th class="font-normal border border-table xl:px-3" rowspan="2">No</th>
                    <th class="font-normal border border-table xl:px-3" rowspan="2">Jenis Ruangan</th>
                    <th class="font-normal border border-table xl:px-6" rowspan="2">Jumlah<br>Ruangan</th>
                    <th class="font-normal border border-table" rowspan="2">Jumlah Yang<br>Kondisinya Baik</th>
                    <th class="font-normal border border-table" rowspan="2">Jumlah Yang<br>Kondisinya Rusak</th>
                    <th class="font-normal border border-table sm:p-4" colspan="2">Kategori Kerusakan</th>
                </tr>
                <tr class="border border-table bg-primary text-white sm:text-p1  text-[10px] text-center py-1">
                    <th class="font-normal border border-table">Berat</th>
                    <th class="font-normal border border-table">Sedang</th>
                </tr>
                <tr class="border border-table text-center even:bg-table  sm:text-p3 md:text-p2  text-[10px]"
                    v-for="isi in isinya" :key="isi">
                    <td class="border border-table py-2">{{ isi.kesatu }}</td>
                    <td class="border border-table">{{ isi.kedua }}</td>
                    <td class="border border-table">{{ isi.ketiga }}</td>
                    <td class="border border-table">{{ isi.keempat }}</td>
                    <td class="border border-table">{{ isi.kelima }}</td>
                    <td class="border border-table">{{ isi.keenam }}</td>
                    <td class="border border-table">{{ isi.ketujuh }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jumlah: [
                {
                    tittle: "",
                    ukuran1: "Ukuran 7x9 m2",
                    ukuran2: "Ukuran > 63 m2",
                    ukuran3: "Ukuran >< 63 m2",
                    ukuran4: " Jumlah (d) (d) = (1 + b + c)",
                    kosong: "",
                },
                {
                    tittle: "Jumlah",
                    ukuran1: "4",
                    ukuran2: "23",
                    ukuran3: "-",
                    ukuran4: "27",
                    kosong1: "-",
                    kosong: "27",
                },
            ],
            isinya: [
                {
                    kesatu: "1",
                    kedua: "Perpustakaan",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "2",
                    kedua: "Ruang Komputer",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "3",
                    kedua: "Lab. IPA Fisika",
                    ketiga: "1",
                    keempat: "",
                    kelima: "1",
                    keenam: "",
                    ketujuh: "1",
                },
                {
                    kesatu: "4",
                    kedua: "Lab. IPA Biologi",
                    ketiga: "1",
                    keempat: "",
                    kelima: "1",
                    keenam: "",
                    ketujuh: "1",
                },
                {
                    kesatu: "5",
                    kedua: "Ruang TU",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "6",
                    kedua: "Ruang Guru",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "7",
                    kedua: "Ruang Kepala Sekolah",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "8",
                    kedua: "Ruang BP",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "9",
                    kedua: "Ruang UKS",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "10",
                    kedua: "Ruang Ibadah",
                    ketiga: "1",
                    keempat: "1",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
            ]
        }
    },
}
</script>
<style>
</style>