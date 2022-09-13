  <template>
    <div>
        <section class="sm:my-20 my-12">
            <div class="container">
                <h2 class="sm:text-h2 text-h3 font-bold text-center mb-10">Jadwal Mengajar Guru</h2>
                <div class="table sm:w-full mx-auto border-x border-bordertable">
                    <div class="table-header-group">
                        <div class="table-row bg-primary sm:text-p1 text-p2 text-white">
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-1 px-1">Jam
                            </div>
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-7 px-1 ...">
                                Senin</div>
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-7 px-1 ...">
                                Selasa</div>
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-7 px-1 ...">
                                Rabu</div>
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-7 px-1 ...">
                                Kamis</div>
                            <div class="table-cell text-center border border-bordertable sm:py-2 py-1 sm:px-7 px-1 ...">
                                Jum'at</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row odd:bg-table sm:text-p3 text-p4" v-for="jadwal in table" :key="jadwal">
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.jam
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.senin
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.selasa
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.rabu
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.kamis
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable">{{
                                    jadwal.jumat
                            }}</div>
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
            table: [
                {
                    jam: "07:40 - 08:20",
                    senin: "",
                    selasa: "7A",
                    rabu: "7C",
                    kamis: "7A",
                    jumat: "",
                },
                {
                    jam: "08:20 - 09:00",
                    senin: "7B",
                    selasa: "7A",
                    rabu: "7C",
                    kamis: "7A",
                    jumat: "",
                },
                {
                    jam: "09:00 - 09:40",
                    senin: "7B",
                    selasa: "7B",
                    rabu: "",
                    kamis: "7C",
                    jumat: "7B",
                },
                {
                    jam: "10:00 - 10:40",
                    senin: "",
                    selasa: "7B",
                    rabu: "",
                    kamis: "7C",
                    jumat: "7B",
                },
                {
                    jam: "10:40 - 11:20",
                    senin: "",
                    selasa: "7D",
                    rabu: "",
                    kamis: "7E",
                    jumat: "7D",
                },
                {
                    jam: "11:20 - 12:00",
                    senin: "7C",
                    selasa: "7D",
                    rabu: "",
                    kamis: "7E",
                    jumat: "7D",
                },

                {
                    jam: "12:30 - 13:10",
                    senin: "7C",
                    selasa: "7E",
                    rabu: "7A",
                    kamis: "7D",
                    jumat: "",
                },
                {
                    jam: "12:30 - 14:10",
                    senin: "7E",
                    selasa: "7E",
                    rabu: "7A",
                    kamis: "7D",
                    jumat: "",
                },
                {
                    jam: "14:10 - 15:50",
                    senin: "7E",
                    selasa: "",
                    rabu: "",
                    kamis: "",
                    jumat: "",
                },





            ]
        }
    },
}
</script>
