<template>
    <div>
        <div class="container pt-10 mx-auto">
            <p class="font-bold text-h2 mb-6">Jumlah Siswa</p>
            <table class="w-full box-border mb-6" v-for="tab in 3" :key="tab">
                <tr>
                    <th colspan="12" class="bg-primary text-white font-normal py-[10px] text-p1">Tahun 2019 / 2020
                    </th>
                </tr>
                <tr class="border border-table">
                    <th class="font-normal border border-table py-[9px] sm:text-p1 text-p4" colspan="2"
                        v-for="head in kelas" :key="head">{{
                                head.title
                        }}</th>
                </tr>
                <tr class="text-center odd:bg-table sm:text-p3 md:text-p2  text-[11px]" v-for="dat in isi" :key="dat">
                    <td class="border border-table py-[7px]">{{ dat.satu }}</td>
                    <td class="border border-table">{{ dat.dua }}</td>
                    <td class="border border-table" colspan="2">{{ dat.tiga }}</td>
                    <td class="border border-table">{{ dat.satu }}</td>
                    <td class="border border-table">{{ dat.dua }}</td>
                    <td class="border border-table" colspan="2">{{ dat.tiga }}</td>
                    <td class="border border-table">{{ dat.satu }}</td>
                    <td class="border border-table">{{ dat.dua }}</td>
                    <td class="border border-table" colspan="2">{{ dat.tiga }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isi: [
                {
                    satu: "L",
                    dua: "P",
                    tiga: "",
                },
                {
                    satu: "140",
                    dua: "196",
                    tiga: "8",
                },
            ],

            kelas: [
                {
                    title: "Kelas VII"
                },
                {
                    title: "Jumlah Rumbel"
                },
                {
                    title: "Kelas VIII"
                },
                {
                    title: "Jumlah Rumbel"
                },
                {
                    title: "Kelas IX"
                },
                {
                    title: "Jumlah Rumbel"
                },
            ],
        }
    },
}
</script>
<style>
</style>