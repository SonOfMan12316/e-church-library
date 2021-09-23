<template>
    <div class="denominationimages">
        <router-link to="/section">
            <img :src="images"/>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        'images': String
    }
}
</script>

<style>

</style>