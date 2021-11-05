<template>
    <transition>
        <div class="familiarimage">
            <router-link to="importance">
                <img :src="icon"/>
                <p class="text-lg font-normal text-white font-serif flex justify-start">{{ paragraph }}</p>
            </router-link>
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['icon',
        'paragraph']
        
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

    .left-enter-active {
        animation: leftInAnimation 0.5s ease-in-out;   
    }

    .left-leave-active {
        animation: leftOutAnimation 0.5s ease-in-out;
    }

    .right-enter-active {
        animation: rightInAnimation 0.5s ease-in-out;   
    }

    .right-leave-active {
        animation: rightOutAnimation 0.5s ease-in-out;
    }

    @keyframes leftInAnimation {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes leftOutAnimation {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    @keyframes rightInAnimation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes rightOutAnimation {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(100%);
        }
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