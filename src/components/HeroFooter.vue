<template>
    <div class="herofooter">
        <div class="herofooter-content lg:mx-auto">
            <div class="herofooter-content-1 px-10 lg:px-0 py-4 lg:py-6  lg:flex lg:justify-between">
                <div class="info-head flex">
                    <ul class="">
                        <li class="font-serif text-xs font-medium text-white">Privacy</li>
                        <li class="font-serif text-xs font-medium text-white">Advertise</li>
                        <li class="font-serif text-xs font-medium text-white">Settings</li>
                        <!-- <li class="font-serif text-xs font-medium text-white ">Ad Info</li> -->
                        <li class="font-serif text-xs font-medium text-white">Feedback</li>
                    </ul>
                </div>
                <div class="flex justify-center pt-2 lg:pt-0">
                   <p class="font-serif text-xs font-medium text-white">&copy; Copyright 2021.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.herofooter {
    background: rgba(202, 6, 9, 1);
}

.info-head {
    width: 100%;
    text-align: center;
}

.info-head ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    width: 100%;
    column-gap:3rem;
    row-gap: 0.1rem;
    margin: 0 auto;
    /* align-items: center; */
}

@media (min-width: 768px) {
    .info-head ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
        width: 65%;
        /* column-gap:3rem; */
        row-gap: 0.1rem;
        /* margin: 0 auto; */
        /* align-items: center; */
}     
}

@media (min-width: 1024px) {
    .info-head ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(1rem, 1fr));
        width: 45%;
        /* column-gap:3rem; */
        row-gap: 0.1rem;
        /* margin: 0 auto; */
        /* align-items: center; */
    }

    .info-head {
        width: 50%;
        justify-content: flex-start;
    }

    .herofooter-content-1 {
        width: 90%;
    }
} 


</style>