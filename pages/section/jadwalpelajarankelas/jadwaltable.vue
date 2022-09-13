<template>
    <div>
        <section class="my-20">
            <div class="container">
                <h2 class="sm:text-h2 text-h3 font-bold text-center mb-10">Data Siswa Kelas IX A</h2>
                <div class="table sm:w-full mx-auto border border-bordertable">
                    <div class="table-header-group">
                        <div class="table-row bg-primary sm:text-p2 text-p4 text-white">
                            <div class="table-cell text-center border border-bordertable  sm:py-2 py-1 sm:px-1 px-1">NO
                            </div>
                            <div
                                class="table-cell text-center border border-bordertable  sm:py-2 py-1 sm:px-7 px-1 ...">
                                Nama</div>
                            <div
                                class="table-cell text-center border border-bordertable  sm:py-2 py-1 sm:px-7 px-1 ...">
                                NIS</div>
                            <div
                                class="table-cell text-center border border-bordertable  sm:py-2 py-1 sm:px-7 px-1 ...">
                                Gender</div>
                            <div
                                class="table-cell text-center border border-bordertable  sm:py-2 py-1 sm:px-7 px-1 ...">
                                Kelas</div>
                        </div>
                    </div>
                    <div class="table-row-group">
                        <div class="table-row sm:text-p2 text-p4 even:bg-table " v-for="jadwal in table" :key="jadwal">
                            <div class="table-cell py-3 text-center border border-bordertable ...">{{
                                    jadwal.no
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable ...">{{
                                    jadwal.nama
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable ...">{{
                                    jadwal.nis
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable ...">{{
                                    jadwal.gender
                            }}</div>
                            <div class="table-cell py-3 text-center border border-bordertable ...">{{
                                    jadwal.kelas
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
                    no: "1",
                    nama: "ADELA PUTRI PRATIWI",
                    nis: "	161707001",
                    gender: "	P	",
                    kelas: "IX A"


                },
                {
                    no: "2",
                    nama: "AKMAL MAHARDIKA",
                    nis: "	161707002",
                    gender: "	L	",
                    kelas: "IX A"


                },

                {
                    no: "3",
                    nama: "ANASTIANURSYAFAAT",
                    nis: "	161707003",
                    gender: "	P	",
                    kelas: "IX A"


                },

                {
                    no: "4",
                    nama: "ANDHIERA MAULIAFANY",
                    nis: "	161707004",
                    gender: "	P	",
                    kelas: "IX A"


                },

                {
                    no: "5",
                    nama: "	ANNISA HERIYANI PUTRI",
                    nis: "	161707005",
                    gender: "	P	",
                    kelas: "IX A"


                },

                {
                    no: "6",
                    nama: "	AULIA MAESA AYU",
                    nis: "	161707006",
                    gender: "	P	",
                    kelas: "IX A"


                },

                {
                    no: "7",
                    nama: "AURELIA SYADINA",
                    nis: "	161707007",
                    gender: "	P	",
                    kelas: "IX A"


                },

                {
                    no: "8",
                    nama: "CHORRY SUNDARI IRAWAN",
                    nis: "	161707008",
                    gender: "	L	",
                    kelas: "IX A"


                },

                {
                    no: "9",
                    nama: "DAFFA FAKHRY ANSHORI",
                    nis: "	161707009",
                    gender: "	L	",
                    kelas: "IX A"


                },

                {
                    no: "10",
                    nama: "ADELA PUTRI PRATIWI",
                    nis: "	1617070010",
                    gender: "	P	",
                    kelas: "IX A"


                },



            ]
        }
    },
}
</script>