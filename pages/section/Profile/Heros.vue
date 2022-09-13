<template>
    <div class="Hero relative">
        <img class="absolute top-0 left-0 h-full w-full object-cover object-center" src="../../../assets/img/bg.png"
            alt="" />
        <div class="container relative ">
            <p class="text-white text-h2 font-bold text-center pt-[145px] mb-20">
                Profile SMP Negeri 1 Cibadak
            </p>

            <VueSlickCarousel v-bind="settings">
                <div v-for="gam in galley" :key="gam" class="active:scale-75 transition-all duration-200">
                    <img class="rounded-sm w-fit px-5 mx-auto hover:scale-95 duration-300 "
                        src="../../../assets/img/halaman.png" alt="">
                    <p class="text-white italic text-p1 mt-[18px] mb-20 text-center">{{ gam.tittle }}</p>
                </div>
            </VueSlickCarousel>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            settings: {
                "dots": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2

                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            },
            galley: [
                {
                    tittle: "Aula Sekolah"
                },
                {
                    tittle: "Kantin "
                },
                {
                    tittle: "SMPN 1 Cibadak"
                },
                {
                    tittle: "Halaman"
                },
                {
                    tittle: "Perpustakaan"
                },
                {
                    tittle: "Ruang Kelas"
                },
                {
                    tittle: "Halaman"
                }
            ]
        }
    },
    name: 'MyComponent',
    components: { VueSlickCarousel },
};
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
</script>
<style>
</style>
