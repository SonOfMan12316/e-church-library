<template>
    <div class="event-content mt-8">
        <div class=" flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm">
            <div class="jo sm:mt-2" @click="reloadPage">
                    <img :src="data.urlToImage"/>
            </div>
            <div class="content flex flex-col">
                <a :href="data.url">
                    <div class="content1 flex flex-row justify-between">
                        <div>
                            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold font-serif text-black">{{ data.title }}</h2>
                        </div>
                        <div class="flex flex-row items-center mt-1">
                            <!-- <p class="para font-serif text-tiny sm:text-base lg:text-xl">{{ (data.publishedAt).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit'}) }}</p> -->
                            <p class="para font-serif text-tiny sm:text-base lg:text-xl">{{ formatUnix(data.publishedAt) }}</p>
                        </div>
                    </div>
                    <h1 class=" font-serif font-medium text-base lg:text-xl xl:mb-1">{{ data.description }}</h1>
                    <p class="last-para font-normal font-serif text-tiny sm:text-base xl-text-xl">{{ data.source.name }}</p>                        
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// import { DateFilter } from '../Filters/date'
import formatUnix from '../DateFormat';
export default {
    props: [ 'data' ],
    data() {
        return {               
        }
    },
    setup() {
        return {
            formatUnix 
        }
    },
    methods: {
        reloadPage() {
            window.location.reload();
        }
    }
    
}
</script>

<style scoped>
    h2,
    h1,
    p {
        letter-spacing: -0.02em;
    }

    h1 {
        color: rgba(0, 0, 0, 0.53);
    }

    p {
        color: rgba(0, 0, 0, 0.50);
    }

    .jo {
        cursor: pointer;
    }

    @media (min-width: 640px) {
        .para {
            width: 100%;
        }

        .jo { 
            width: 45%;
        }

        .jo img {
            width: 100%;
            height: 10rem;
        }

        .content {
            width: 95%;
        }
    }

    @media (min-width: 1024px) {
        .jo img {
            height: 9.5rem;
        }     
        
        .content1 {
            width: 98%;
        }
    }

    @media (min-width: 1200px) {
        .jo { 
            width: 25%;
        }        

        .last-para{
            width: 95%;
        }
    }
</style>