<template>
    <div class="denomination p-4 sm:px-6 lg:px-16">
        <div class="template-1 bg-center bg-no-repeat">
            <DenominationBanner/>
                <div class="denomination-content flex flex-col justify-center items-center sm:flex-row sm:justify-around ">
                    <div class="flex flex-col">
                        <div class="Strength">
                            <img src="../assets/images/Group16.png" class="echurch w-72 sm:w-80 lg:w-96 mt-12 sm:mt-16">
                        </div>
                        <Quote/>
                        <p class="w-96 text-white font-medium font-serif md:text-base sm:text-xs md:inline-flex hidden">And I will raise me up a faithful priest, that shall do according to that which isin mine heart and in my mind: and I will build him a sure house; and he shall walk before mine anoineted for ever.</p>
                    </div>
                    <div class="denominationimages">
                        <p class="text-xl sm:text-2xl text-white font-medium font-serif">Choose your Denomination</p>
                        <div class="denominationimages2 grid grid-cols-3 gap-2 sm:gap-y-3 w-72 sm:w-80 lg:w-96">
                            <DenominationImages 
                            v-for="Denomination in Denominations" 
                            :key="Denomination.id" 
                            :images="Denomination.DenominationImages"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Quote from '../components/Quote.vue'
import DenominationImages from '../components/DenominationImages.vue'
import DenominationBanner from '../components/DenominationBanner.vue'
export default {
    components: {
        Quote,
        DenominationImages,
        DenominationBanner
    },
    data() {
        return {
            Denominations: [
                {
                    id: 0,
                    DenominationImages: require('../assets/images/Group57.jpg')
                },
                {
                    id: 1,
                    DenominationImages: require('../assets/images/Group61.jpg')
                },
                {
                    id: 2,
                    DenominationImages: require('../assets/images/Rectangle9.jpg')
                },
                {
                    id: 3,
                    DenominationImages: require('../assets/images/Rectangle10.jpg')
                },
                {
                    id: 4,
                    DenominationImages: require('../assets/images/Rectangle11.jpg')
                },
                {
                    id: 5,
                    DenominationImages: require('../assets/images/Group70.jpg')
                },
                {
                    id: 6,
                    DenominationImages: require('../assets/images/Group57.jpg')
                },
                {
                    id: 7,
                    DenominationImages: require('../assets/images/Group61.jpg')
                },
                {
                    id: 8,
                    DenominationImages: require('../assets/images/Rectangle9.jpg')
                },
                {
                    id: 9,
                    DenominationImages: require('../assets/images/Rectangle10.jpg')
                },
                {
                    id: 10,
                    DenominationImages: require('../assets/images/Rectangle11.jpg')
                },
                {
                    id: 11,
                    DenominationImages: require('../assets/images/Group70.jpg')
                }
            ]
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.denomination {
    background-image: url('../assets/images/Desktop1.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;
    padding: 1rem;
}
.denomination-content {
    height: 80vh;
}

@media (min-width: 1024px) {
    .header-div a span {
        font-size: 1.75rem;
    }

    .denomination-content {
        height: 85vh;
    }
}

@media (min-width: 1200px) {
    .Strength .echurch {
        width: 27rem;
    }
    
    .denominationimages .denominationimages2 {
        width: 95%;
    }
}
</style>
