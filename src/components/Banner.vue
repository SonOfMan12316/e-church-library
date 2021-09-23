<template>
    <div class="banner">
        <div class="template bg-no-repeat p-4 sm:px-6 lg:px-16">
            <Logo/>
            <div class="first-div flex justify-center items-center flex-col my-10">
                    <p class="daily font-serif text-black not-italic font-extrabold text-6xl sm:text-7xl lg:text-7xl">DAILY</p>
                    <p class="devotional text-black not-italic  font-serif font-extrabold text-5xl sm:text-6xl lg:text-6xl">DEVOTIONAL</p>
                    <p class="on font-serif text-red-600 font-medium text-4xl sm:text-6xl">ON-THE-GO!</p>
                <div class="boxes mt-14 sm:mt-20 flex">
                    <div class="admin">
                        <router-link to="/denomination" class="px-6 py-3 sm:px-8 lg:px-12 lg:py-4 border-0 rounded-lg bg-red-600 text-white font-serif font-semibold lg:text-1xl">ADMIN</router-link>
                    </div>
                    <div class="user -ml-2 sm:-ml-4">
                        <router-link to="/denomination" class="px-8 py-3 sm:px-9 lg:px-12 lg:py-4 border-0 rounded-lg bg-white text-red-600 font-serif font-semibold lg:text-1xl">USER</router-link>
                    </div>
                </div>
                <p class="lorem font-serif mt-10 items-center mx-auto text-white text-1xl font-medium">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ligula eget dolor. Aenean massa. Cum sociis natoque penatibu</p>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
    components: {
        Logo
    }
}
</script>

<style scoped>
.banner {
    background-image: url('../assets/images/sixteen-miles-out-PpJOb2ByPBY-unsplash2(3).jpg');
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
}

.first-div {
    margin: 1rem;
}

.first-div {
    height: 80vh;
}

.daily {
    line-height: 30px;
}

.devotional {
    letter-spacing: -0.02em;
}

.on {
    line-height: 20px;
}

.lorem {
    line-height: 24px;
    width: 80%;
    letter-spacing: -0.02em;
}

@media (min-width: 640px) {
    .first-div {
        height: 80vh;
    }

    .lorem {
        width: 70%;
    }
}

@media (min-width: 1024px) {
    .header-div a span {
        font-size: 1.75rem;
    }

    .lorem {
        width: 45%;
    }
}
</style>