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
    }
}
</script>

<style scoped>

</style>