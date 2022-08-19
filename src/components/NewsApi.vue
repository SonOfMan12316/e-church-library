<template>
   <div class="event-content mt-8 px-6 py-6 ">
        <button @click="fetchData" class="bg-red-600 h-8 w-32 rounded text-white">Fetch</button>
        <div 
        v-for="article in articles" 
            :key="article" class=" flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm">
            <div class="content flex flex-col">
              
                    <img :src="article.top_image"/>
                    
           
                <a>
                    <div class="flex space-x-2 space-y-2">
                        <div class="flex items-center">
                            <img :src="article.meta_favicon" class="w-6"/>
                        </div>
                        <div>
                            <p class="para font-serif text-tiny sm:text-base lg:text-xl text-black">{{ formatUnix(article.published) }}</p>
                        </div>
                        <div>
                            <p class="last-para font-normal font-serif text-tiny sm:text-base xl-text-xl">{{ article.source_url }}</p>  
                        </div>
                    </div>
                    <div class="content1 flex flex-row justify-between">
                        <div>
                            <h2 class="text-lg sm:text-xl lg:text-2xl font-bold font-serif text-black">{{ article.meta_description }}</h2>
                        </div>
                        <div class="flex flex-row items-center mt-1">
                            <!-- <p class="para font-serif text-tiny sm:text-base lg:text-xl">{{ (data.publishedAt).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: '2-digit'}) }}</p> -->
                        </div>
                    </div>
                    <h1 class=" font-serif font-medium text-tiny lg:text-xl xl:mb-1">{{ article.text }}</h1>
                                          
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// import { DateFilter } from '../Filters/date'
import formatUnix from '../DateFormat';
// import axios from 'axios'


export default {
    props: [ 'data' ],
    data() {
        return { 
            articles: []
            // show: true
        }
    },
    setup() {
        return {
            formatUnix 
        }
    },
    methods: {
        async fetchData() {
            let res = await axios.get('http://api.mediastack.com/v1/news?access_key=ad9b3abd2ea6d8b7eca54397d22883d3&keywords=christian&countries=ng')
            .then(function (res) {
                console.log(res.data.data)
            }).catch(function (error) {
                console.error(error.message);
            });
        }
    },
    // methods: {
    
    //     fetchData() {
    //         var that = this;
    //         const options = {
   // http://api.mediastack.com/v1/news?access_key=YOUR_ACCESS_KEY&sources=cnn,-bbc
    //         method: 'GET',
    //         url: 'https://extract-news.p.rapidapi.com/v0/article',
    //         params: {
    //             url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
    //         },
    //         headers: {
    //             'X-RapidAPI-Host': 'extract-news.p.rapidapi.com',
    //             'X-RapidAPI-Key': 'c4b2a091b4msh28a4572761a2e24p1f65c1jsnb63fd98adca6'
    //         }
    //         };

    //         axios.request(options)
    //         .then(function (response) {
    //             return response;
    //         })
    //         .then(function (data) {
    //             that.articles = data.data;

    //             console.log(data.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
//            const options = {
//   method: 'GET',
//   url: 'https://extract-news.p.rapidapi.com/v0/article',
//   params: {
//     url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'extract-news.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c4b2a091b4msh28a4572761a2e24p1f65c1jsnb63fd98adca6'
//   }
// };

// axios.request(options)
// .then(function (response){
//     console.log(response)
// })
// .then( response =>
// 	(this.article = response.data)
//     )
//     .catch(function (error) {
// 	console.error(error);
// })
        //     axios.get('https://jsonplaceholder.typicode.com/posts')
        // // .then(response => this.posts = response.data)
        // .then(response => this.posts = response.data);
        // this.show = !this.show
        // }
        // reloadPage() {
        //     window.location.reload();
        // },
//         fetchData() {
//             Vue.axios.get(options)
//             .then(function (response) {
// 	console.log(response.data);
// })

//         }
    // },
    mounted() {
        
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