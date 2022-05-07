<template>
    <div>
        <Navigation/>
        <div class="">
            
            <!-- <CarouselApp class="carousel relative">
                <CarouselSlide v-for="(slide, index) in carouselSlides" :key="index">
                    <div class="slide-info absolute">
                        <img :src="require(`../assets/${slide}.jpg`)"/>
                    </div>
                    <div>
                        <p>Hello</p>
                    </div>
                </CarouselSlide>
            </CarouselApp> -->
            <RealBanner/>
            
        </div>        
        <Featured/>
        <Events/>
        <!-- <GetFamiliar/> -->
        <News/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import RealBanner from '../components/RealBanner.vue'
import Featured from '../components/Featured.vue'
import Events from '../components/Events.vue'
import GetFamiliar from '../components/GetFamiliar.vue'
import News from '../components/News.vue'
import Footer from '../components/Footer.vue'
import NewsApi from '../components/NewsApi.vue'
// import Carousel from '../components/Carousel.vue'
// import CarouselSlide from '../components/CarouselSlide.vue'
// import CarouselApp from '../components/CarouselApp.vue'
export default {
    name: 'Section',
    components: {
        Navigation,
        Featured,
        Events,
        GetFamiliar,
        News,
        Footer,
        RealBanner,
        NewsApi
    },
    data() {
        return {
            user: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    setup() {
        const carouselSlides = ["bg-1", "bg-2", "bg-3"];

        return { carouselSlides };
    },
    methods: {
    // handleSubmit() {
    //     const data = {
    //         name: this.name,
    //         email: this.email,
    //         message: this.message
    //     }
    // },
    submit() {
        this.$http.post('https://echurchlibrary-http-default-rtdb.firebaseio.com/data.json', this.user)
        .then(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.carousel {
    height: 100vh;
    max-height: 100vh;
}

.slide-info {
    top: 0;
    width: 100%;
    left: 0;
    max-height: 100%;
    max-height: 100%;
}

img {
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}

/* .section {
    background-image: url('../assets/images/sky-pattern-paradise-hd-free-church-baiyun-pull-material-9d3b8396d6ab6364c246950e89f5bd071.jpg');
    background-position: center;
    background-size: cover;
} */

/* .section::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(0px);
} */

.section-border {
    border: 0.5px solid #CA0609;
    border-radius: 20px;
}

.section-border form {
   width: 100%;
}

input[type=name],
input[type=email],
textarea[type=message] {
    border: 1.5px solid #CA0609;
    padding: 0.4rem 1.25rem;
    color: rgba(0, 0, 0, 0.4);
    width: 85%;
    margin: 0 auto 1.5rem auto;
}

button {
    border-radius: 5px;
    text-transform: uppercase;
    width: 85%;
    height: 2rem;
    margin-bottom: 1.5rem;
}

.second-p {
    background: rgba(115, 115, 116, 1);
    width: 45%;
}

@media (min-width: 375px) {
    .section-border {
        width: 95%;
    }

    form {
        margin: 0 1.5rem;
    }
}

@media (min-width: 400px) {
    .section-border {
        width: 90%;
    }
}

@media (min-width: 640px) {
    .section-border {
        width: 50%;
    }    
}

@media (min-width: 768px) {
    .section-border {
        width: 40%;
    } 

    .section {
        height: 100vh;
    }

    button {
        height: 2.3rem;
    }
}

@media (min-width: 1024px) {
    .section-border {
        width: 35%;
    } 

    .section {
        height: auto;
    }
}

@media (min-width: 1200px) {
    .section-border {
        width: 30%;
    }
    
    .welcome {
        width: 100%;
    }
}
</style>