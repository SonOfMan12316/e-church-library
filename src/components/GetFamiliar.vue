<template>
    <div class="familiar">
        <div class="familiar-content p-6 sm:p-8 lg:p-16 xl:p-20 ">
            <div class="familiar-head">
                <h1 class="font-semibold text-xl sm:text-2xl lg:text-3xl font-serif text-center">Get Familiar With The Family</h1>
                <p class="font-normal text-tiny sm:text-base lg:text-lg font-serif text-center">eChurch library is a platform that brings you close to<br><span class="sm:text-center"> your faith</span></p>
            </div>
            <div class="familiar2">
                <FamiliarImages 
                v-for="FamiliarImage in FamiliarImages" 
                :key="FamiliarImage.id" 
                :header="FamiliarImage.header"  
                :image="FamiliarImage.image"  
                :content="FamiliarImage.content"/>
            </div>
        </div>
    </div>
</template>

<script>
import FamiliarImages from '../components/FamiliarImages.vue'
export default {
    components: {
        FamiliarImages
    },
    data() {
        return {
            FamiliarImages: [
                {
                    id: 0,
                    image: require('../assets/images/Search.jpg'),
                    header: 'About Us',
                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.'
                },
                {
                    id: 1,
                    image: require('../assets/images/Camera.jpg'),
                    header: 'Media & Live',
                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.'
                },
                {
                    id: 2,
                    image: require('../assets/images/Feedback.jpg'),
                    header: 'Testimonials',
                    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .familiar {
        background: #f8f8f8;
    }

    h1 {
        letter-spacing: -0.06em;
        color: #AD0003;
    }

    p {
        letter-spacing: -0.02em;
        color: rgba(0, 0, 0, 0.7);
    }

    .familiar2 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: 1.5rem;
    }

    @media (min-width: 1200px) {
        .familiar2 {
            display: flex;
            flex-direction: row;
            justify-content: center;
            /* justify-content: ; */
            gap: 5rem;
        }       
    }
</style>