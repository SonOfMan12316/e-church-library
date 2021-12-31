<template>
    <div class="carouselSlide">
        <transition name="slide">
            <slot/>
        </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: 0.7s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    opacity: 1;
}


</style>