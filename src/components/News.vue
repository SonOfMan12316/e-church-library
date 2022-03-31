<template>
    <div class="news">
        <div class="news-content p-6 sm:p-8 lg:p-16 xl:p-20 ">
            <div class="news-head mt-4">
                <h1 class="font-semibold text-xl sm:text-2xl lg:text-3xl font-serif text-center">Subscribe to eChurch Library News</h1>
            </div>
            <form class="flex flex-col sm:flex-row mt-8 gap-y-4 sm:justify-center sm:items-center sm:gap-x-4">
                <div class="input">
                    <input class="text-tiny lg:text-base font-serif" type="email" placeholder="Your email address"/>    
                </div> 
                <div class="flex justify-center items-center ">
                    <button class="font-bold lg:text-base text-tiny font-serif">Subscribe</button>    
                </div>                
            </form>
            <!-- <div class="w-full">
                <p class="font-normal text-center text-tiny font-serif mt-4 w-full">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean ligula eget dolor. Aenean massa. Cum sociis natoque penatibu</p>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .news {
        background: #fff;
        background-image: url('../assets/images/NewsBg.png');
        background-position: center;
        background-size: cover;
    }

    h1 {
        letter-spacing: -0.06em;
        color: #AD0003;
    }

    input[type=email] {
        background: #FFFFFF;
        mix-blend-mode: normal;
        border: 3px solid #FFFFFF;
        box-shadow: 0px 4px 4px rgba(196, 196, 196, 0.25);
        border-radius: 10px;
        letter-spacing: -0.02em;
        color: rgba(97, 97, 97, 0.7);
        padding: 0.3rem 1.25rem;
        width: 100%;
        outline: none;
    }

    button {
        background: #CA0609;
        mix-blend-mode: normal;
        border: 3px solid #CA0609;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        color: white;
        width: 6rem;
        height: 2.5rem;
    }

    p {
        letter-spacing: -0.02em;
        color: rgba(97, 97, 97, 0.7);
        width: 85%;
        margin: 2rem auto 0 auto;
    }

    @media (min-width: 640px) {
        .input {
            width: 60%;            
        }

        p {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media (min-width: 1024px) {
        button {
            width: 7rem;           
        }

        p {
            width: 40%;
        }
    }
    @media (min-width: 1200px) {
        button {
            width: 7rem;           
        }

        p {
            width: 20%;
        }
    }
</style>