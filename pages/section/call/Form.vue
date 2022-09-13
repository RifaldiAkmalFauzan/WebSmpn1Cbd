<template>
    <section>
        <div class="container pt-20">
            <form class="w-9/12 m-auto bg-bg" action="">
                <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-6 mb-6">
                    <div class="grid grid-cols-1 mb-6">
                        <label class="text-p3  font-bold leading-6 mb-2 text-slate-700" for="name">Nama</label>
                        <input
                            class="bg-bg2 px-4 pt-4 pb-[21px] rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 focus:bg-white focus:duration-500"
                            type="text" placeholder="Nama Lengkap">
                    </div>
                    <div class="grid grid-cols-1 mb-6">
                        <label class="text-p3 font-bold leading-6 mb-2 text-slate-700" for="email">Email</label>
                        <input
                            class="bg-bg2 px-4 pt-4 pb-[21px] rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 focus:bg-white focus:duration-500"
                            type="text" placeholder="emailanda@gmail.com">
                    </div>
                </div>
                <div class="grid grid-cols-1 mb-6">
                    <label class="text-p3 font-bold leading-6 mb-2 text-slate-700" for="nomor">No. Telp</label>
                    <input
                        class="bg-bg2 px-4 pt-4 pb-[21px] rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 focus:bg-white focus:duration-500"
                        type="text" placeholder="+62">
                </div>
                <div class="grid grid-cols-1 mb-10">
                    <label class="text-p3 font-bold leading-6 mb-2 text-slate-700" for="pesan">Pesan</label>
                    <textarea
                        class="bg-bg2 px-4 pt-4 pb-[165px] rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2  focus:bg-white focus:duration-500italic"
                        type="text" placeholder="Pesan Anda"></textarea>
                </div>
            </form>
            <a href=""><button
                    class="block text-p2 font-bold px-6 py-2 lg:px-16 bg-primary  rounded-sm text-white hover:bg-hover active:bg-active focus:bg-focus mx-auto  my-6">
                    Kirim </button></a>
            <iframe class="my-20"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9683302184803!2d106.79039471468957!3d-6.894391595018183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68316af442641b%3A0x96edb366f22211d5!2sSMP%20NEGERI%201%20CIBADAK!5e0!3m2!1sid!2sid!4v1661063117283!5m2!1sid!2sid"
                width="100%" height="516" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style>
</style>