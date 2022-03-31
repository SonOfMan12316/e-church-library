<template>
    <div class="footer" style="background-color: rgba(202, 6, 9, 1);">
        <div class="footer-content sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 sm:p-8 lg:p-16 xl:px-20">
            <div class="flex flex-col">
                <div class="footerlogo flex justify-start items-center mb-10">
                    <Logo/>
                </div>
                <p class="lorem font-normal text-tiny font-serif text-white mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                <div class="flex flex-row items-center gap-x-4">
                    <h2 class="font-medium text-tiny font-serif text-white mt-2">Follow Us:</h2>
                    <ul>
                        <li class="socials flex items-center gap-x-4 mt-4 mb-2">
                            <a href=""><img src="../assets/images/facebook1.png" /></a>
                            <a href=""><img src="../assets/images/twitter1.png" /></a>
                            <a href=""><img src="../assets/images/instagram1.png" /></a>
                            <a href=""><img src="../assets/images/linkedin1.png" /></a>
                        </li>
                    </ul>
                </div>
            </div> 
            <div class="lg:mt-4 lg:ml-4 xl:ml-20">
                <div class="footer-head mb-10 xl:mb-12">
                    <h1 class="font-normal font-serif text-base text-white">Support</h1>           
                    <div class="line"></div>         
                </div> 
                <ul class="flex flex-col gap-x-4 mt-4 mb-2">
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny font-serif text-white pb-1">Donations</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny font-serif text-white pb-1">Preaching Aid</p>
                    </li>
                </ul>                              
            </div>
            <div class="lg:mt-4 xl:ml-14">
                <div class="footer-head mb-10 xl:mb-12">
                    <h1 class="font-normal font-serif text-base text-white">Links</h1>           
                    <div class="line"></div>         
                </div> 
                <ul class="flex flex-col gap-x-4 mt-4 mb-2">
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny font-serif text-white pb-1">Home</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny font-serif text-white pb-1">Books</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny lg:text-base font-serif text-white pb-1">Audio & Video</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-normal text-tiny lg:text-base font-serif text-white pb-1">Subscription</p>
                    </li>
                </ul>                                    
            </div> 
            <div class="lg:mt-4 xl:ml-10">
                <div class="footer-head mb-10 xl:mb-12">
                    <h1 class="font-normal font-serif text-base text-white">Contact Info</h1>           
                    <div class="line"></div>         
                </div> 
                <ul class="flex flex-col gap-x-4 mt-4 mb-2">
                    <li>
                        <p class="font-normal text-tiny font-serif text-white pb-1">6C Bode Thomas Surulere</p>
                    </li>
                    <li>
                        <p class="font-normal text-tiny font-serif text-white pb-8">Lagos Nigeria</p>
                    </li>
                    <li>
                        <p class="hidden">&nbsp;</p>
                    </li>
                    <li>
                        <p class="font-normal text-tiny font-serif text-white pb-1">+234800056728</p>
                    </li>
                    <li>
                        <p class="font-normal text-tiny font-serif text-white pb-1">eChurchlibrary@gmail.com</p>
                    </li>
                </ul>                                       
            </div>   
        </div>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import ArrowRight from '../components/ArrowRight.vue'
export default {
    components: {
        Logo,
        ArrowRight
    }
}
</script>

<style>

</style>