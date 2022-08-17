<template>
  <div class="home">
    <!-- <Banner /> -->
    <Denomination />
  </div>
</template>

<script>
// @ is an alias to /src
// import Banner from '@/components/Banner.vue'
import Denomination from './Denomination.vue';

export default {
  name: 'Home',
  components: {
    // Banner,
    Denomination
}
}
</script>

<style scoped>
body {
  overflow-y: hidden; 
  overflow-x: hidden;
}
</style>
