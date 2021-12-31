<template>
    <div class="features">
        <div class="features-content p-6 sm:p-8 lg:p-16 xl:p-20">
            <div class="features-head">
                <h2 class="text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-1 font-serif">Featured</h2>
                <div class="line "></div>
            </div>
            <div class="featuredimages flex flex-col lg:flex-row mt-8 lg:mt-12 gap-y-4 lg:gap-x-20">
                    <FeaturedImages
                    v-for="FeaturedImage in FeaturedImages" 
                    :key="FeaturedImage.id" 
                    :icon="FeaturedImage.image" 
                    :paragraph="FeaturedImage.paragraph" 
                    />
            </div>
            <div class="mt-8 flex flex-col lg:flex-row lg:gap-x-32 xl:gap-x-52">
                <div class="jo flex flex-col lg:flex-row lg:gap-x-2">
                    <div class="joke">
                        <img src="../assets/images/FeaturedBible.png"/>
                    </div>
                    <div>
                        <h1 class="text-xl xl:text-2xl font-white font-serif text-white mb-4">Read the Bible Online</h1>
                        <p class="text-base font-normal font-serif">You can gain more scriptural insight from the word of God by digging deep daily from the word of God.</p>
                    </div>
                </div>
                <div>
                    <h1 class="text-xl xl:text-2xl font-white font-serif text-white mb-4">See recently added videos, audio, articles, and news.</h1>
                    <button class="text-white bg-red-700 font-serif">See What's New</button> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FeaturedImages from '../components/FeaturedImages.vue'
// import Carousel from '../components/Carousel'
export default {
    data () {
        return {
            FeaturedImages: [],
            // visibleSlide: 0,
            // https://www.pof.com/viewprofile?profileId=305639507
            // direction: ''
        }
    },
    created() {
        // getBooks() {
            // fetch("https://google-books.p.rapidapi.com/volumes?key=undefined", {
	        //     "method": "GET",
	        //     "headers": {
		    //                 "x-rapidapi-host": "google-books.p.rapidapi.com",
		    //                 "x-rapidapi-key": "c6a90fa502msh6687fb62a8ce16ap11e891jsn709ac6ce6bf5"
	        //     }
            // })
            // .then(response => {
            //     console.log(response.data);
            // })
            // .catch(err => {
            //     console.error(err);
            // });
        // }
    },
    components: {
        FeaturedImages,
        // Carousel
    },
    // computed: {
    //     slideLens() {
    //         return this.slidelength
    //     }
    // },
    // methods: {
    //     prev() {
    //         if( this.visibleSlide >= this.slideLens <= 0 ) {
    //             this.visibleSlide = this.slideLens - 1
    //         }else {
    //            this.visibleSlide--; 
    //         }
    //         this.direction = "left"
    //     },
    //     next() {
    //         if( this.visibleSlide >= this.slideLens - 1 ) {
    //             this.visibleSlide = 0
    //         }else {
    //            this.visibleSlide++; 
    //         }
    //         this.direction = "right"
    //     }
    // }
}
</script>

<style scoped>
.features {
    background-image: url('../assets/images/FeaturedBg.jpg');
    background-position: center;
    background-size: cover;
}

.h2 {
    letter-spacing: 0.05em;    
}

h1,
p {
    letter-spacing: -0.02em;       
}

.line {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    border: 1px solid #CA0609;
    background-color: #CA0609;
    border-radius: 10px;
}

p {
    color: rgba(255, 255, 255, 0.57);
}

button {
    background-color: #AD0003;
    border: 1px solid #AD0003;
    width: 8.5rem;
    height: 2rem;
}

@media (min-width: 768px) {
    p,
    h1 {
        width: 60%;
    }
}

@media (min-width: 1024px) {
    h1 {
        width: 95%;
    }

    .jo {
        width: 70%;
    }

    p {
        width: 100%;
    }

    .joke {
        width: 100%;
    }

    button {
        width: 9rem;
        height: 2rem;
    }
}

@media (min-width: 1200px) {
    .joke {
        width: 35%;
    }   
    
    p {
        width: 70%;
    }
}

@media (min-width: 1440px) {
    .joke {
        width: 25%;
    }    
    
}
</style>