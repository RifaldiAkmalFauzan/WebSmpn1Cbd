<template>
    <div>
        <section class="my-[76px]">
            <div class="container mx-auto">
                <div class="beritabaru">
                    <h2 class="text-h2 font-bold mb-7">Berita Baru</h2>
                    <div
                        class="kegiatan  gap-8  grid grid-cols-1 grid-rows-3 sm:grid sm:grid-cols-2 sm:grid-rows-2 lg:grid lg:grid-cols-3 lg:grid-rows-1 ">
                        <div class="kegiatan1 mx-auto" v-for="images in beritabaru">
                            <img src="../../../assets/img/beritabaru1.png" alt="" class="w-full">
                            <p class="text-p1 font-bold mt-4 mb-2 px-1">{{
                                    images.title
                            }}</p>
                            <p class="text-p3 text-secondary px-1">{{
                                    images.content
                            }}<span class="text-primary font-bold "><a href=""> Read
                                        More...</a> </span>
                            </p>
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
            beritabaru: [
                {
                    title: "Kegiatan Belajar Mengajar di Rumah 2020",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem Read More...",


                },
                {
                    title: "Kegiatan Belajar Mengajar di Rumah",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem Read More...",


                },
                {
                    title: "Belajar dirumah",
                    content: "Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem Read More...",
                },
            ]
        }
    },
}
</script>
<style>
</style>