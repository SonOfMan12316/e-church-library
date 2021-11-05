<template>
    <div class="familiarimages flex flex-col md:flex-row justify-center items-center">
        <div class="familiarimages-content flex flex-col justify-center items-center py-8 px-1 lg:px-3">
            <img class="mb-4 " :src="image"/>
            
                <h3 class="mb-4 text-black font-medium text-xl lg:text-2xl font-serif">{{ header }}</h3>
                <p class="text-black font-normal text-xs font-serif text-center">{{ content }}</p>
            
        </div>
    </div>
</template>

<script>
export default {
    props: {
        'image': String,
        'header': String,
        'content': String,
    }
}
</script>

<style scoped>
    .familiarimages-content {
        background: #FFFFFF;
        box-shadow: 0px 0px 5px rgba(196, 196, 196, 0.7);
        border-radius: 20px;
        margin: 4rem auto 0 auto;
    }

    h3 {
        letter-spacing: -0.01em;
    }

    p {
        letter-spacing: -0.05em;
        color: rgba(0, 0, 0, 0.7);
        width: 100%;
    }

    @media (max-width: 639px) {
        .familiarimages-content {
            width: 17rem;
        }        
    }

    @media (min-width: 640px) {
        .familiarimages-content {
            width: 17rem;
        }        
    }

    @media (min-width: 1200px) {
        .familiarimages-content {
            width: 17rem;
        }        
    }
</style>