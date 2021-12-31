<template>
    <div class="realBanner">
        <CarouselApp 
        :navigation="true"
        :pagination="true"
        :startAutoPlay="true"
         class="carousel relative" v-slot="{ currentSlide }">
            <CarouselSlide v-for="(slide, index) in carouselSlides" :key="index">
                <div class="slide-info absolute" v-show="currentSlide === index + 1">
                    <img :src="require(`../assets/images/${slide}.jpg`)"/>
                </div>
                <!-- <div class="slide-info absolute">
                    <img :src="require(`../assets/${slide}.jpg`)"/>
                </div>
                <div>
                    <p>Hello</p>
                </div> -->
            </CarouselSlide>
        </CarouselApp>
    </div>
</template>

<script>
import CarouselSlide from '../components/CarouselSlide.vue'
import CarouselApp from '../components/CarouselApp.vue'
export default {
     components: {
        CarouselApp,
        CarouselSlide
    },
    setup() {
        const carouselSlides = ["bg-2", "bg-3", "bg-1"];
        
        return { carouselSlides };
    }
}
</script>

<style scoped>
.carousel {
    height: 90vh;
    max-height: 100vh;
}

.slide-info {
    top: 0;
    width: 100%;
    left: 0;
    max-height: 100%;
    height: 100%;
}

img {
    min-width: 100%;
    height: 100%;
    object-fit:inherit;
    
}
</style>