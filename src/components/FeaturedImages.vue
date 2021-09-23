<template>
    <div class="">
        <img :src="icon"/>
        <p class="text-lg font-normal text-white font-serif flex justify-start">{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
    props: {
        'icon': String,
        'paragraph': String
    }
}
</script>

<style scoped>
    img {
        width: 100%;   
    }
    p {
        letter-spacing: -0.02em;
        width: 95%;
    }

    @media (min-width: 640px ) {
        img {
            width: 60%;   
        }   
    }
    @media (min-width: 1024px ) {
        img {
            width: max-content;   
            height: 10rem;
        } 
        p {
            letter-spacing: -0.02em;
            width: 90%;
        }  
    }

    @media (min-width: 1200px ) {
        img {
            width: 95%;   
            height: 13rem;
        } 
        p {
            letter-spacing: -0.02em;
            width: 90%;
        }  
    }
</style>