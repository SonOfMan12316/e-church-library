<template>
    <div class="denomination bg-center bg-cover h-screen" :style="{ backgroundImage: `url(${image})` }">
        <div class=" bg-center bg-no-repeat p-6 sm:px-6 lg:px-16 xl:px-20">
            <DenominationBanner />
            <div class="denomination-content mt-12 space-y-4 flex flex-col lg:flex-row lg:justify-around ">
                <div class="flex flex-col">
                    <div class="Strength hidden sm:block">
                        <img :src="Image" class="echurch sm:w-96 md:w-8/12 xl:w-7/12">
                    </div>
                    <p class="text-white font-medium font-serif lg:-mt-4 sm:text-lg text-xs lg:w-9/12 md:inline-flex">
                        And
                        I will raise me up a faithful priest, that shall do according to that which isin mine heart and
                        in my mind: and I will build him a sure house; and he shall walk before mine anoineted for ever.
                    </p>
                    <Quote />
                </div>
                <div class="denominationimages lg:w-full">
                    <p class="text-xl sm:text-2xl text-white font-medium font-serif lg:mt-8 xl:mt-16">Choose your
                        Denomination
                    </p>
                    <div
                        class="denominationimages2 grid grid-cols-3 gap-3 sm:gap-y-3 sm:gap-x-4 gap w-72 sm:w-96 md:w-9/12 lg:w-10/12">
                        <div v-for="Denomination in Denominations" :key="Denomination.id">
                            <router-link to="/section">
                                <img :src="Denomination.DenominationImages" class="md:w-40" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DenominationBanner from '../components/DenominationBanner.vue';
// import DenominationImages from '@/com'
import Quote from '../components/Quote.vue'
export default {
    data() {
        return {
            image: require('../assets/images/denominationbg.jpg'),
            Image: require('../assets/images/strengthenfaith.jpg'),
            Denominations: [
                {
                    id: 0,
                    DenominationImages: require('@/assets/images/covenantnation.jpg')
                },
                {
                    id: 1,
                    DenominationImages: require('@/assets/images/christembassy.jpg')
                },
                {
                    id: 2,
                    DenominationImages: require('@/assets/images/elevation.jpg')
                },
                {
                    id: 3,
                    DenominationImages: require('@/assets/images/redeemchurch.jpg')
                },
                {
                    id: 4,
                    DenominationImages: require('@/assets/images/celestialchurch.jpg')
                },
                {
                    id: 5,
                    DenominationImages: require('@/assets/images/mountainoffire.jpg')
                },
                {
                    id: 6,
                    DenominationImages: require('@/assets/images/covenantnation.jpg')
                },
                {
                    id: 7,
                    DenominationImages: require('@/assets/images/christembassy.jpg')
                },
                {
                    id: 8,
                    DenominationImages: require('@/assets/images/elevation.jpg')
                },
                {
                    id: 9,
                    DenominationImages: require('@/assets/images/redeemchurch.jpg')
                },
                {
                    id: 10,
                    DenominationImages: require('@/assets/images/celestialchurch.jpg')
                },
                {
                    id: 11,
                    DenominationImages: require('@/assets/images/mountainoffire.jpg')
                }
            ]
        }
    },
    components: {
        DenominationBanner,
        Quote,
        // DenominationImages
    }
}
</script>

<style>

</style>