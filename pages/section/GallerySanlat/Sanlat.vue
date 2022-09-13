<template>
    <section>
        <div class="container pt-[168px]">
            <p class="text-h2 font-bold leading-[48px] text-center">Gallery ( Sanlat )</p>
            <div class="grid grid-col-1 sm:grid sm:grid-col-2 lg:grid lg:grid-cols-3 gap-4 lg:gap-10 pt-20 pb-10">
                <img class="w-full" src="../../../assets/img/sanlat6.png" alt="" v-for="gam in 9" :key="gam">
            </div>
            <Btn />
        </div>
    </section>
</template>
<script>
import Btn from '../btn.vue';

export default {
    data() {
        return {
            isi: [
                {
                    no: "1"
                },
                {
                    no: "2"
                },
                {
                    no: "3"
                },
            ]
        };
    },
    components: { Btn }
}
</script>
<style>
</style>