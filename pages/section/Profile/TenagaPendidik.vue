<template>
    <div>
        <div class="container mx-auto">
            <p class="text-h2 font-bold mb-6">Data Tenaga Pendidik dan Kependidikan</p>
            <table class="w-full mb-20">
                <tr class="bg-primary text-white sm:text-p1  text-[10px] border border-table">
                    <th class="font-normal border border-table">No.</th>
                    <th class="font-normal border border-table">Jumlah Guru / Staf</th>
                    <th class="font-normal border border-table">Smp Negeri</th>
                    <th class="font-normal border border-table px-5">S-1</th>
                    <th class="font-normal border border-table px-5">S-2</th>
                    <th class="font-normal border border-table">Yang sedang<br>menempuh S-1</th>
                    <th class="font-normal border border-table">Keterangan</th>
                </tr>
                <tr class="border border-table sm:text-p3 md:text-p2  text-[10px] text-center odd:bg-table"
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
            isinya: [
                {
                    kesatu: "1",
                    kedua: "Guru PNS",
                    ketiga: "32",
                    keempat: "23",
                    kelima: "8",
                    keenam: "",
                    ketujuh: "1 Orang D-1",
                },
                {
                    kesatu: "2",
                    kedua: "Guru Non PNS",
                    ketiga: "5",
                    keempat: "5",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "3",
                    kedua: "Guru PNS DPK",
                    ketiga: "2",
                    keempat: "1",
                    kelima: "1",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "4",
                    kedua: "Staf TU PNS",
                    ketiga: "4",
                    keempat: "",
                    kelima: "",
                    keenam: "",
                    ketujuh: "",
                },
                {
                    kesatu: "5",
                    kedua: "Staf TU Non PNS",
                    ketiga: "9",
                    keempat: "",
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