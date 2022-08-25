<template>
    <header :class="{ 'scrolled-nav' : scrolledNav }" class="relative transition duration-500">
        <nav class="flex flex-col lg:flex-row justify-center px-6 sm:px-6 lg:px-16  xl:px-20 lg:py-8 z-10">
            <div class="nav-content">    
                <div>
                    <router-link to="/" class="lg:flex lg:items-center"> 
                        <Logo/>               
                    </router-link>    
                </div> 
                <div class="nav-links hidden">
                    <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end">
                        <li class=""><router-link to="/" class="link font-serif not-italic font-normal text-base lg:text-lg text-red-600">Home</router-link></li>
                        <li class=""><router-link to="/audioVideo" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Audio &amp; Video</router-link></li>
                        <li class=""><router-link to="books" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Books</router-link></li>
                        <li class=""><router-link to="/subscription" class="link font-serif not-italic font-normal text-base lg:text-lg text-gray-500">Subscription</router-link></li>               
                    </ul>     
                </div> 
                <div class="form hidden xl:block" >
                    <SearchButton class="searchbutton" @click="toggleInput"/>
                    <transition name="fade" appear>
                        <Search v-show="input" class="absolute"/>
                    </transition>
                </div>
            </div> 
                <div class="icon flex absolute items-center"> 
                    <img @click="toggleMobileNav" v-show="mobile" class=" img w-8"  src="https://img.icons8.com/material/50/000000/menu--v1.png"/>
                </div>
                <transition name="mobile-nav" class="">
                    
                    <ul v-show="mobileNav" class="dropdown-nav flex flex-col gap-y-4 fixed bg-red-600 z-50 w-screen">  
                        <div class="ml-2 md:mt-1 lg:mt-3">
                            <CancelSvg  @click="toggleIsSelected" />    
                        </div>    
                        <li class=""><router-link to="/" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Home</router-link></li>
                        <li class=""><router-link to="/audioVideo" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Audio &amp; Video</router-link></li>
                        <li class=""><router-link to="/books" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Books</router-link></li>
                        <li class=""><router-link to="/subscription'" class="link font-serif not-italic text-base md:text-lg lg:text-xl text-white ml-3 mt-6 md:mt-8 lg:mt-10">Subscription</router-link></li>
                    </ul>
                </transition>
        </nav>
    </header>
</template>

<script>
import Logo from '../components/Logo.vue'
import CancelSvg from '../components/CancelSvg.vue'
import SearchButton from '../components/SearchButton.vue'
import Search from '../components/Search.vue'


export default {
    components: {
        Logo,
        CancelSvg,
        SearchButton,
        Search
    },
    name: 'Navigation',
    data() {
        return {
            scrolledNav: null,
            mobile: false,
            mobileNav: null,
            windowWidth: null,
            isSelected: false,
            input: false
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

        toggleInput() {
            this.input = !this.input;
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
    background: #FFFFFF;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
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

a.router-link-exact-active {
    color: #CA0609;
    border-bottom:  2px solid #CA0609;   
}


input[type=text] {
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    background: transparent;
    height: 2rem;
    outline: none;
    color: black;
    padding-top: 1.2rem;
    padding-left: 1.2rem;
    padding-bottom: 1.2rem;
    padding-right: 0.5rem;
    width: 95%;
    font-weight: 400;
}

::placeholder {
    color: rgb(17, 17, 17);    
}
.dropdown-nav {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08);
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100%;
    padding: 1rem 0;
    transition: 0.1s ease-in-out;
}

.icon {
    right: 1.5rem;
    top: 25%;
}

.searchbutton {
    cursor: pointer;
}

form {
    bottom: -4.5rem;
    left: 0;
    z-index: 999;
    right: 0;
    /* top: 1.5rem; */
    padding: 15px;
    background: #fff;
    border: 1px solid #ddd;
    border-top: 0;
    border-radius: 5px;
}

.secsearchbtn {
    border: 1px solid #ddd; 
    border-radius: 5px;
    padding: 0.5rem;
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

.fade-enter {
    opacity: 1;
}

.fade-enter-active {
    transition: opacity 0.1s;
    opacity: 0;
}

.fade-leave {
    opacity: 0;
}

.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}

@media (max-width: 280px) {
    .dropdown-nav {
        height: 87vh;        
    }
}


@media (min-width: 320px) {
    .dropdown-nav {
        height: 97.9vh;        
    }
}

@media (min-width: 540px) {
    .dropdown-nav {
        height: 80vh;        
    }
}

@media (min-width: 640px) {
    .dropdown-nav { 
        width: 40%; 
        padding: 1rem 0; 
        height: 95vh;      
    }    
}

@media (min-width: 768px) {
    .dropdown-nav { 
        width: 40%; 
        padding: 1rem 0; 
        height: 100vh;      
    }  

    .section {
        height: 100vh;
    }
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

    .dropdown-nav {  
        height: 86.7vh;      
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