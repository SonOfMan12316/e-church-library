<template>
    <div>
        <Navigation/>
        <NewsApi/>
        <HeroFooter/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import NewsApi from '../components/NewsApi.vue'
import HeroFooter from '../components/HeroFooter.vue'
export default {
    components: {
        HeroFooter,
        Navigation,
        NewsApi
    },
    // created() {
    //     fetchData() {
    //         // url: 'http://api.mediastack.com/v1/news ? access_key = ad9b3abd2ea6d8b7eca54397d22883d3'
    //         await axios.get(url).then(
    //             console.log(data)
    //         )
    //     }
    // }
}
</script>

<style scoped>

</style>