<template>
    <div>
        <Navigation/>
        <div style="background: #F8F8F8;" class=" p-6 sm:px-6 lg:px-16 xl:px-20">
            <div class="ml-10 my-2 md:my-4">
                <router-link to="/audio"><button active-class="active" exact style="border-radius: 5px; border: 1px solid #CA0609;" class="uppercase font-light md:font-normal text-base md:text-lg font-serif" v-on:click="getAudio">Audio</button></router-link>
                <router-link to="/video"><button active-class="active" @click=" showVideo = !showVideo" style="border: 1px solid #CA0609; box-sizing: border-box; border-radius: 5px; " class="uppercase font-light md:font-normal text-base  md:text-lg ml-2 font-serif">Video</button></router-link>
            </div>
            
            <div v-show="showVideo">
                <div style="border: 1px solid #E8E8E8; border-radius: 20px; " class="w-48">
                    <img src="../assets/images/appleVideo.jpg"/>
                </div>
            </div>
            <!-- <Audio/> -->
        </div>
        <HeroFooter/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HeroFooter from '../components/HeroFooter.vue'
import Audio from '../views/Audio.vue'
export default {
    components: {
        HeroFooter,
        Navigation,
        Audio
    },
    data () {
        return {
            showAudio: true,
            showVideo: false
        }
    },
    methods: {
        toggleShowVideo() {
        this.showAudio = !this.showAudio
        },
        toggleShowAudio() {
        this.showAudio = !this.showAudio
        },
        getAudio() {
            this.$emit("audioGot")
        }
    }
}
</script>

<style scoped>
body {
    color: #CA0609;
}
button {
    color: #CA0609;
}

button:focus,
button:active {
    background-color: #CA0609;
    color: #fff;   
}

button:link {
    /* background-color: #CA0609; */
    color: #CA0609;   
}

button {
    width: 4rem;
}

img {
    width: 100%;
}

@media (min-width: 640px) {
    button {
        width: 5rem;
    }

    .audio-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }

    .audio-content div {
        width: 80%;
    }

    .image {
        height: 8.5rem;
    }
}

@media (min-width: 768px) {
    .audio-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); 
    }   

    .image {
        height: 11rem;
    }
}

@media (min-width: 1024px) {
    .audio-content div {
        width: 90%;
        row-gap: 2rem;
    }

    .image {
        height: 10rem;
    }
}

@media (min-width: 1200px) {
    .image {
        height: 10.3rem;
    }
}

@media (min-width: 1400px) {
    .image {
        height: 11rem;
    }
}

</style>