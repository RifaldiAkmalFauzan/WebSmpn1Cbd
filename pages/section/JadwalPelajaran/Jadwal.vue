<template>
    <div class="container pt-[105px] pb-20">
        <div class="grid grid-cols-2 xl:w-4/12 tablet:w-8/12 m-auto tablet:gap-x-10 gap-x-5">
            <form class="grid grid-cols-1 gap-y-2">
                <label class="text-lg font-bold leading-6 text-center" for="kelas">Kelas</label>
                <select class="bg-bground border rounded-[5px] border-stroke focus:outline-none py-[10px] px-4"
                    name="option" id="">
                    <option class="hover:bg-about" value="" v-for="option in isi" :key="option">{{ option.Kelas }}
                    </option>
                </select>
            </form>
            <form class="grid grid-cols-1 gap-y-2">
                <label class="text-lg font-bold leading-6 text-center" for="kelas">Guru</label>
                <select class="bg-bground rounded-[5px] border border-stroke focus:outline-none py-[10px] px-4"
                    name="option" id="">
                    <option value="" v-for="opti in sect" :key="opti">{{ opti.guru }}</option>
                </select>
            </form>
        </div>

        <!-- Code untuk Table -->
        <p class="text-2xl font-bold leading-[33px] text-center my-10">Jadwal Pelajaran Siswa</p>
        <table class="w-full border-2 border-abu">
            <tr class="bg-about">
                <th class="text-white ipx:text-lg font-normal border-2 border-abu py-2" colspan="2"
                    v-for="head in title" :key="head">
                    {{ head.day }}</th>
            </tr>
            <tr class="even:bg-bgtable" v-for="row in jadwal" :key="row">
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.jam }}
                </td>
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.senin }} <br> {{ row.seninn }}
                </td>
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.selasa }} <br> {{ row.selasaa }}
                </td>
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.rabu }} <br> {{ row.rabuu }}
                </td>
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.kamis }} <br> {{ row.kamiss }}
                </td>
                <td class="text-center text-xs ipx:text-sm font-normal leading-[19px] border-2 border-abu px-[1px]"
                    colspan="2">
                    {{ row.jumat }} <br> {{ row.jumatt }}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isi: [
                {
                    Kelas: "7A",
                },
                {
                    Kelas: "7B",
                },
                {
                    Kelas: "7C",
                },
                {
                    Kelas: "7D",
                },
                {
                    Kelas: "7E",
                },
                {
                    Kelas: "7F",
                },
                {
                    Kelas: "7G",
                },
                {
                    Kelas: "7H",
                },
                {
                    Kelas: "7I",
                },
            ],

            sect: [
                {
                    guru: "Lilis Lusiana",
                },
                {
                    guru: "HJ. Setiya Rohman",
                },
                {
                    guru: "Wahyu",
                },
                {
                    guru: "Ade Rokhman",
                },
                {
                    guru: "Encep Rahmat",
                },
                {
                    guru: "Sugiarto",
                },
                {
                    guru: "Sriwastuti",
                },
                {
                    guru: "Yeni Yan Yuliani",
                },
                {
                    guru: "Maman",
                },
                {
                    guru: "Ginanjar",
                },
            ],

            title: [
                {
                    day: "Jam",
                },
                {
                    day: "Senin",
                },
                {
                    day: "Selasa",
                },
                {
                    day: "Rabu",
                },
                {
                    day: "Kamis",
                },
                {
                    day: "Jumat",
                },
            ],

            jadwal: [
                {
                    jam: "07:40 - 08:20",
                    senin: "Upacara",
                    seninn: "",
                    selasa: "B.Indo",
                    selasaa: "Lilis Lusiana",
                    rabu: "Mat",
                    rabuu: "HJ. Setiya Rohman",
                    kamis: "B.Indo",
                    kamiss: "Lilis Lusiana",
                    jumat: "",
                    jumatt: "",
                },
                {
                    jam: "08:20 - 09:00",
                    senin: "IPA (Wahyu)",
                    seninn: "",
                    selasa: "B.Indo",
                    selasaa: "Lilis Lusiana",
                    rabu: "Mat",
                    rabuu: "HJ. Setiya Rohman",
                    kamis: "B.Indo",
                    kamiss: "Lilis Lusiana",
                    jumat: "",
                    jumatt: "",
                },
                {
                    jam: "09:00 - 09:40",
                    senin: "IPA (Wahyu)",
                    seninn: "",
                    selasa: "B.Ingg",
                    selasaa: "Ade Rokhman",
                    rabu: "Mat",
                    rabuu: "HJ. Setiya Rohman",
                    kamis: "IPS",
                    kamiss: "Sugiarto",
                    jumat: "IPA",
                    jumatt: "Wahyu",
                },
                {
                    jam: "10:00 - 10:40",
                    senin: "IPA (Wahyu)",
                    seninn: "",
                    selasa: "B.Ingg",
                    selasaa: "Ade Rokhman",
                    rabu: "PAI",
                    rabuu: "Encep Rahmat",
                    kamis: "IPS",
                    kamiss: "Sugiarto",
                    jumat: "IPA",
                    jumatt: "Wahyu",
                },
                {
                    jam: "10:40 - 11:20",
                    senin: "PPKN",
                    seninn: "Sriwastuti",
                    selasa: "DTW",
                    selasaa: "Yeni Yan Yuliani",
                    rabu: "PAI",
                    rabuu: "Encep Rahmat",
                    kamis: "DTW",
                    kamiss: "Yeni Yan Yuliani",
                    jumat: "Mat",
                    jumatt: "HJ. Setiya Rohman",
                },
                {
                    jam: "11:20 - 12:00",
                    senin: "PPKN",
                    seninn: "Sriwastuti",
                    selasa: "DTW",
                    selasaa: "Yeni Yan Yuliani",
                    rabu: "PAI",
                    rabuu: "Encep Rahmat",
                    kamis: "OR",
                    kamiss: "Maman",
                    jumat: "Mat",
                    jumatt: "HJ. Setiya Rohman",
                },
                {
                    jam: "12:30 - 13:10",
                    senin: "PPKN",
                    seninn: "Sriwastuti",
                    selasa: "SB",
                    selasaa: "Ginanjar",
                    rabu: "B.Ind",
                    rabuu: "Lilis Lusiana",
                    kamis: "OR",
                    kamiss: "Maman",
                    jumat: "",
                    jumatt: "",
                },
                {
                    jam: "12:30 - 14:10",
                    senin: "IPS",
                    seninn: "Sugiarto",
                    selasa: "SB",
                    selasaa: "Ginanjar",
                    rabu: "B.Ind",
                    rabuu: "Lilis Lusiana",
                    kamis: "OR",
                    kamiss: "Maman",
                    jumat: "",
                    jumatt: "",
                },
                {
                    jam: "14:10 - 15:50",
                    senin: "IPS",
                    seninn: "Sugiarto",
                    selasa: "",
                    selasaa: "",
                    rabu: "",
                    rabuu: "",
                    kamis: "",
                    kamiss: "",
                    jumat: "",
                    jumatt: "",
                },
            ]
        }
    },
}
</script>
<style>
</style>