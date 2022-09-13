<template>
    <div>
        <header class="bg-navbar w-full z-50 top-0">
            <nav class="container mx-auto after:content[''] clear-both table py-4 w-full top-0 ">
                <div class="logo float-left md:inline-block block  w-9 h-9  top-0 z-5"><img
                        src="../../assets/img/logo.png" alt="logo"></div>

                <label for="btn" class="block relative icon md:hidden cursor-pointer text-white float-right">
                    <span class="hamburger w-8 h-1 my-2 block bg-white rounded-2xl "></span>
                    <span class="hamburger w-8 h-1 my-2 block bg-white rounded-2xl "></span>
                    <span class="hamburger w-8 h-1 my-2 block bg-white rounded-2xl "></span>
                </label>

                <input type="checkbox" class="hidden" id="btn" />
                <ul class="relative text-white md:float-right float-left md:inline-block hidden">
                    <li
                        class="title md:inline-block block md:float-left md:text-center  hover:shadow-sm hover:shadow-primary after:shadow-sm focus:shadow-primary ">
                        <nuxt-link to="/" href="" class="text-white leading-10 text-p1 py-4 px-4 ">Home
                        </nuxt-link>
                    </li>
                    <li
                        class="title md:inline-block block md:float-left md:text-start hover:shadow-sm hover:shadow-primary">
                        <label for="btn-1"
                            class="show text-white leading-10 text-p1 py-4 px-4 cursor-pointer">About</label>
                        <nuxt-link to="About" href="" class="text-white leading-10 text-p1 py-4 px-4">About</nuxt-link>
                        <input type="checkbox" class="hidden" id="btn-1" />
                        <ul class="md:absolute z-10 md:invisible static rounded-md">
                            <li class="relative first bg-bg1 list-items hover:bg-primary">
                                <span class="kotak absolute w-4 h-4 bg-white rotate-45"></span>
                                <nuxt-link to="profile"
                                    class="block text-slate-700 leading-7 border border-secondary text-p1 py-2 px-4 hover:text-white">
                                    Profil
                                </nuxt-link>
                            </li>
                            <li class="relative bg-bg1 list-items hover:bg-primary">
                                <nuxt-link to="visimisi"
                                    class="block text-slate-700 leading-7 border border-secondary text-p1 py-2 px-4 hover:text-white">
                                    Visi Misi
                                </nuxt-link>
                            </li>
                            <li class="relative bg-bg1 list-items hover:bg-primary">
                                <nuxt-link to="strukturorganisasi"
                                    class="block text-slate-700 leading-7 border border-secondary text-p1 text-start py-2 px-4 hover:text-white">
                                    Struktur
                                    Organisasi</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li
                        class="relative title md:inline-block md:float-left md:text-center hover:shadow-sm hover:shadow-primary">
                        <nuxt-link to="guru" class="text-white leading-10 text-p1 py-4 px-4">Guru</nuxt-link>
                    </li>
                    <li
                        class="relative title md:inline-block md:float-left md:text-center hover:shadow-sm hover:shadow-primary">
                        <label for="btn-2"
                            class="show text-white leading-10 text-p1 py-4 px-4 hover:text-white cursor-pointer">Siswa</label>
                        <a href="" class="block text-white leading-10 text-p1 py-4 px-4 hover:text-white">Siswa</a>
                        <input type="checkbox" class="hidden" id="btn-2" />
                        <ul class="md:absolute md:blok  md:invisible static">
                            <li class=" first bg-bg1 md:w-[160px] list-items hover:bg-primary block z-30 w-full">
                                <span class="box absolute w-4 h-4 bg-white rotate-45"></span>
                                <label for="btn-21"
                                    class="show block text-slate-700 text-p1 text-start leading-7 py-2 px-4 hover:text-white border border-b-secondary hover:bg-primary w-full cursor-pointer">Kelas
                                    VII</label>
                                <a href=""
                                    class="text-slate-700 text-p1 text-start leading-7 py-2 px-4 hover:text-white block border border-b-secondary hover:bg-primary">Kelas
                                    VII</a>
                                <input type="checkbox" class="hidden" id="btn-21" />
                                <ul
                                    class="tujuh md:absolute md:invisible top-0 left-[160px] static md:w-[160px] w-full cursor-pointer">

                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII A</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII B</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII C</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII D</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII E</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII F</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII G</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas" class="block text-slate-700 text-p1 py-[9px] px-4
                                            hover:text-white border border-b-secondary">VII I</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li class=" bg-bg1 list-items hover:bg-primary block w-full z-20">
                                <label for="btn-22"
                                    class="show block text-slate-700 text-p1 text-start leading-7 py-2 px-4  hover:text-white border border-b-secondary hover:bg-primary cursor-pointer">Kelas
                                    VIII</label>
                                <a href=""
                                    class="text-slate-700 text-p1 text-start hover:text-white block leading-7 py-2 px-4 border border-b-secondary hover:bg-primary">Kelas
                                    VIII</a>
                                <input type="checkbox" class="hidden" id="btn-22" />
                                <ul
                                    class="eight md:absolute md:invisible top-0 left-[160px] static md:w-[160px] w-full cursor-pointer">
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            A </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            B </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            C </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            D </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            E </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            F </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            G </nuxtlink>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            H </nuxtlink>
                                    </li>
                                    <li class=" bg-white  text-center hover:bg-primary">
                                        <nuxtlink to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            VIII
                                            I </nuxtlink>
                                    </li>
                                </ul>
                            </li>
                            <li class=" bg-bg1 list-itemshover:bg-primary block w-full">
                                <label for="btn-23"
                                    class="show block text-slate-700 text-p1 text-start leading-7 py-2 px-4 hover:text-white border border-b-secondary hover:bg-primary cursor-pointer">Kelas
                                    IX</label>
                                <a href=""
                                    class="text-slate-700 text-p1 text-start leading-7 py-2 px-4 hover:text-white block border border-b-secondary hover:bg-primary">Kelas
                                    IX</a>
                                <input type="checkbox" class="hidden" id="btn-23" />
                                <ul
                                    class="nine md:absolute md:invisible top-0 left-[160px] static md:w-[160px] w-full cursor-pointer">
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            A</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            B</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            C</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            D</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            E</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            F</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            G</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            H</nuxt-link>
                                    </li>
                                    <li class=" bg-white   text-center hover:bg-primary">
                                        <nuxt-link to="jadwalpelajarankelas"
                                            class="block text-slate-700 text-p1 leading-7 py-2 px-4 hover:text-white border border-b-secondary">
                                            IX
                                            I</nuxt-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li
                        class=" title md:inline-block md:float-left md:text-center hover:shadow-sm hover:shadow-primary">
                        <label for="btn-3"
                            class="show text-white leading-10 text-p1 py-4 px-4 cursor-pointer">Pendaftaran</label>
                        <a href="" class="text-white leading-10 text-p1 py-4 px-4">Pendaftaran</a>
                        <input type="checkbox" class="hidden" id="btn-3" />
                        <ul class="md:absolute md:invisible static">
                            <li
                                class=" first bg-bg1 md:w-36 float-none list-items   text- w-full start leading-7 hover:bg-primary">
                                <span class="box absolute w-4 h-4 bg-white rotate-45"></span>
                                <nuxt-link to="pendaftaran"
                                    class="block text-slate-700 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Panduan</nuxt-link>
                            </li>
                            <li
                                class=" bg-bg1 md:w-36 float-none list-items   text- w-full start leading-7 hover:bg-primary">

                                <nuxt-link to="jadwaldansyarat" class="block text-slate-700 md:text-center text-p1 py-2 px-4
                                    border border-b-secondary hover:text-white">Jadwal
                                    & Persyaratan</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li
                        class="title md:inline-block block md:float-left md:text-start hover:shadow-sm hover:shadow-primary">
                        <label for="btn-4"
                            class="show text-white leading-10 text-p1 py-4 px-4 cursor-pointer ">Lainnya</label>
                        <a href="" class="text-white leading-10 text-p1 py-4 px-4 ">Lainnya</a>
                        <input type="checkbox" class="hidden" id="btn-4" />
                        <ul class="md:absolute z-10 md:invisible static">
                            <li class=" first bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <span class="kotak absolute w-4 h-4 bg-white rotate-45"></span>
                                <nuxt-link to="artikel"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Artikel
                                </nuxt-link>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <nuxt-link to="galery"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Galery</nuxt-link>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <nuxt-link to="ekstrakulikuler"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Ekstrakurikuler</nuxt-link>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <nuxt-link to="prestasi"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Prestasi
                                </nuxt-link>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <nuxt-link to="fasilitas"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Fasilitas
                                </nuxt-link>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <a href="jadwalguru"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">Jadwal
                                    Pelajaran</a>
                            </li>
                            <li class=" bg-bg1 md:w-36 list-items   hover:bg-primary block w-full">
                                <nuxt-link to="about"
                                    class="block text-slate-700 leading-7 text-p1 py-2 px-4 border border-b-secondary hover:text-white">
                                    Sejarah
                                </nuxt-link>
                            </li>

                        </ul>
                    </li>
                    <li
                        class=" title md:inline-block md:float-left md:text-center hover:shadow-sm hover:shadow-primary">
                        <nuxt-link to="call" class="text-white leading-10 text-p1 py-2 px-4">Kontak
                        </nuxt-link>

                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>


<style>
nav ul li {
    transition: all 0.1s ease-in-out;
    border-radius: 2px;
}

nav ul.eight {
    left: 160px;
    top: 46px;
}

nav ul.nine {
    left: 160px;
    top: 92px;
}

nav ul li ul li.first:hover>.kotak {
    background-color: #0193dc;



}

nav ul li ul li.first:hover>.box {
    background-color: #0193dc;

}

.kotak {
    position: absolute;
    top: -8px;
    left: 7px;
}

.box {
    position: absolute;
    top: -8px;
    left: 7px;
}

header {
    position: fixed;
}

nav ul ul {
    top: 48px;
}

nav ul li:hover>ul {
    opacity: 1;
    visibility: visible;

}

.show+a,
nav ul {
    display: none;
}

[id^='btn']:checked+ul {
    display: block;
}

@media (max-width: 767px) {
    header {
        position: sticky;
    }

    nav>ul {
        margin: 20px 0 0 -15px;
        width: 100%;

    }

    nav ul li>ul {
        background-color: transparent;
    }

    label {
        color: white;
    }

    .kotak,
    .box {
        display: none;
    }
}
</style>