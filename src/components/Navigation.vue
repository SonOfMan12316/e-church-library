<template>
    <header :class="{ 'scrolled-nav' : scrolledNav }" class="relative transition duration-500">
        <nav class="flex flex-col lg:flex-row justify-center px-6 sm:px-6 lg:px-16  xl:px-20 lg:py-8">
            <div class="nav-content">    
                <div>
                    <router-link to="/" class="lg:flex lg:items-center"> 
                        <Logo/>               
                    </router-link>    
                </div> 
                <div class="nav-links hidden">
                    <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end">
                        <li class=""><router-link to="/" class="link font-serif not-italic font-normal text-base lg:text-lg text-red-600">Home</router-link></li>
                        <li class=""><router-link to="//audioVideo" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Audio &amp; Video</router-link></li>
                        <li class=""><router-link to="books" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Books</router-link></li>
                        <li class=""><router-link to="/subscription'" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Subscription</router-link></li>               
                    </ul>     
                </div> 
                <div class="form hidden xl:block" >
                    <form class="relative">
                        <input  type="text" v-model="text"/>
                        <img class="absolute input-search" src="../assets/images/InputSearch.png"/>
                    </form>
                </div>
            </div> 
                <div class="icon flex absolute items-center"> 
                    <img @click="toggleMobileNav" v-show="mobile" :class="{ 'icon-active': MobileNav}" class=" img w-8"  src="https://img.icons8.com/material/50/000000/menu--v1.png"/>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav flex flex-col gap-y-4 fixed bg-red-600">  
                        <div class="ml-2 md:mt-1 lg:mt-3">
                            <CancelSvg  @click="toggleIsSelected" :class="{ selected: IsSelected }"/>    
                        </div>    
                        <li class=""><router-link to="/" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Home</router-link></li>
                        <li class=""><router-link to="//audioVideo" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Audio &amp; Video</router-link></li>
                        <li class=""><router-link to="books" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Books</router-link></li>
                        <li class=""><router-link to="/subscription'" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Subscription</router-link></li>
                    </ul>
                </transition>
        </nav>
    </header>
</template>

<script>
import Logo from '../components/Logo.vue'
import CancelSvg from '../components/CancelSvg.vue'
export default {
    components: {
        Logo,
        CancelSvg
    },
    name: 'Navigation',
    data() {
        return {
            scrolledNav: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
            isSelected: false
        }
    },
    created() {
            window.addEventListener("resize", this.checkScreen);
            this.checkScreen();
    },

    methods() {
        window.addEventListener( "scroll", this.updateScroll);
    },

    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },

        toggleIsSelected() {
            this.mobileNav = !this.mobileNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
                this.scrolledNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 1024) {
                this.mobile = true;
                return; 
            }
                this.mobile = false;
                this.mobileNav = false;
                return;
        }
    }
}
</script>

<style scoped>
header {
    background: #F8F8F8;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
    max-width: 100vw;
    height: 12vh;
}

nav {
    height: 100%;
}
nav .nav-content {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav .nav-content .nav-links ul {
    font-size: 1rem;
}

nav .nav-content .nav-links ul li {
    margin: 0 2rem;
    /* letter-spacing: -0.065em; */
}

.link:hover,
.link:active {
    color: #CA0609;
    border-bottom:  2px solid #CA0609;
}


input[type=text] {
    border: 1px solid #CA0609;
    box-sizing: border-box;
    border-radius: 20px;
    background: transparent;
    height: 2rem;
    outline: none;
    color: black;
    padding: 0 0.5rem 0 1rem;
}
.dropdown-nav {
    height: 100vh;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 1rem 0;
    transition: 0.1s ease-in-out;
}

.icon {
    right: 1.5rem;
    top: 25%;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(450px);
}


.mobile-nav-enter-to {
    transform: translateX(0);
}

@media (min-width: 640px) {
    .dropdown-nav { 
        width: 40%; 
        padding: 1rem 0;       
    }    
}

@media (min-width: 768px) {
    .icon {
        top: 30%;
    }   
}

@media (min-width: 1024px) {
    .icon {
        top: 30%;
    }

    .icon img {
        width: 75%;
    }
}

@media (min-width: 1200px) {
    nav .nav-content .nav-links ul {
        font-size: 0.95rem;
    }    

    .nav-links {
        display: block;
    }

    .form {
        display: block;
    }

    .input-search {
        top: 0;
        right: 3px;
        width: 25%;
        
    }
}

/* .dropdown-nav ul li link{
    margin: 1.5rem 1rem;
} */
</style>