<template>
    <div class="carousel">
        <slot :currentSlide="currentSlide"/>
                <!-- <div v-if="navEnabled" class="navigate">
                    <div class="toggle-page left">
                        <i @click="prevSlide" class="fas fa-chevron-left flex justify-center items-center"></i>
                    </div>
                    <div class="toggle-page right">
                        <i @click="nextSlide" class="fas fa-chevron-right flex justify-center items-center"></i>
                    </div>
                </div>     -->
            <div class="pagination" v-if="paginationEnabled">
                <span 
                @click="goToSlide(index)"
                v-for="(slide, index) in getSlideCount" 
                :key="index" 
                :class="{ active: index + 1 === currentSlide }">
                </span>           
            </div>  
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
    props: ["startAutoPlay", "timeout", "navigation", "pagination"],
    setup(props) {
        const currentSlide = ref(1);
        const getSlideCount = ref( null);
        const autoPlayEnabled = ref(
            props.startAutoPlay === undefined ? true : props.startAutoPlay
        );
        const timeoutDuration = ref(
            props.timeout === undefined ? 3000 : props.timeout
        );
        const paginationEnabled = ref(
            props.pagination === undefined ? true : props.pagination
        );
        const navEnabled = ref(
            props.navigation === undefined ? true : props.navigation
        );

        const nextSlide = () => {
            if ( currentSlide.value === getSlideCount.value ){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value += 1;
        };


        const prevSlide = () => {
            if ( currentSlide.value === getSlideCount.value ){
                currentSlide.value = 1;
                return;
            }
            currentSlide.value -= 1;
        };

        const goToSlide = (index) => {
            currentSlide.value = index + 1;
        };

        const autoPlay = () => {
            setInterval(() => { nextSlide() }, timeoutDuration.value);
        };

        if (autoPlayEnabled.value) {
            autoPlay();
        };

        onMounted(() => {
            getSlideCount.value = document.querySelectorAll(".carouselSlide").length;
        })

        return { currentSlide, nextSlide, prevSlide, getSlideCount, goToSlide, paginationEnabled, navEnabled };
    }
}
</script>

<style>
.navigate {
    padding: 0 16px;
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    }

.navigate .toggle-page {
    display: flex;
    flex: 1;
}

.right {
    justify-content: flex-end;
}

i {
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: #000;
    color: #fff;
    outline: none;
}

.pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 24px;
    width: 100%;
    gap: 16px;
}

.pagination span {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

span .active {
    background-color: rgb(238, 6, 84);
    display: none;
}
</style>