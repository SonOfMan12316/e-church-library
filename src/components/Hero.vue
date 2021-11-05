<template>
    <div>
        <Navigation/>
        <div class="hero p-6 sm:px-6 lg:px-16  xl:px-20 lg:py-8">
            <div >
                <img class="logo" :src="logo"/>
            </div> 
            <h1 style="color: #333" class="pt-2 font-serif text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl font-bold md:font-extrabold">{{ header }}</h1> 
            <div class="flex flex-row">
                <div>
                    <CalendarSvg/>
                </div>
                <h2 class="flex items-center font-serif text-xs md:text-tiny" style="font-style: italic; color: #333;">{{ date}}</h2>
            </div>
            <img class=" py-2 image" :src="image">
            <!-- <div class="line" style="py-2 display: block; width: 100%; height: 0.1rem; color: #333; background-color: #333;" ></div> -->
            <h2 style="color: #333" class="font-serif font-bold text-tiny md:text-base lg:text-lg xl:text-xl">{{ quote }}</h2>
            <h2 style="color: #333" class="subheader font-serif font-bold text-tiny md:text-base lg:text-lg xl:text-xl">{{ subheader }}</h2>
            <p class="paragraph font-serif text-xs sm:text-tiny">{{ paragraph }}</p>
        </div>
        <LeaveAMsg/>
        <HeroFooter/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HeroFooter from '../components/HeroFooter.vue'
import LeaveAMsg from '../components/LeaveAMsg.vue'
import MessageSvg from '../components/MessageSvg.vue'
import CalendarSvg from '../components/CalendarSvg.vue'

export default {
    components: {
        Navigation,
        HeroFooter,
        LeaveAMsg,
        MessageSvg,
        CalendarSvg
    },
    props: {
        'logo': String,
        'header': String,
        // 'icon': String,
        'date': String,
        'image': String,
        'quote': String,
        'subheader': String,
        'paragraph': String,
    }
}
</script>

<style scoped>
    @media (min-width: 640px) {
        .logo {
            height: 3rem;
        }

        .subheader {
            width: 95%;
        }

        .paragraph {
            width: 95%;
        }
    }

    @media (min-width: 768px) {
        .subheader {
            width: 80%;
        }

        .paragraph {
            width: 80%;
        }
    }

    @media (min-width: 1024px) {
        .logo {
            height: 4rem;
        }

        .subheader {
            width: 70%;
        }

        .paragraph {
            width: 60%;
        }
    }

    @media (min-width: 1200px) {
        .logo {
            height: 5rem;
        }

        .subheader {
            width: 50%;
        }

        .paragraph {
            width: 45%;
        }
    }
</style>