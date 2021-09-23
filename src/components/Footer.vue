<template>
    <footer>
        <div class="footer-content p-6 sm:p-8 lg:p-16 xl:p-20 flex flex-col gap-y-4">
            <div class="flex flex-col footer1">
                <div class="footerlogo flex justify-center items-center mb-10">
                    <FooterLogo/>
                </div>
                <p class="lorem font-normal text-tiny lg:text-base font-serif text-white mb-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                <div class="flex flex-row items-center gap-x-4">
                    <h2 class="font-medium text-tiny lg:text-base font-serif text-white mt-2">Follow Us:</h2>
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
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Contact Us</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Donations</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Preaching Aid</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Contact Us</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Contact Us</p>
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
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Home</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Books</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Audio & Video</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">Prayer Request</p>
                    </li>
                    <li class="flex flex-row">
                        <ArrowRight class="pt-1.5 pr-2"/>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white">Events</p>
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
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">6C Bode Thomas Surulere</p>
                    </li>
                    <li>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-8">Lagos Nigeria</p>
                    </li>
                    <li>
                        <p class="hidden">&nbsp;</p>
                    </li>
                    <li>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">+234800056728</p>
                    </li>
                    <li>
                        <p class="font-medium text-tiny lg:text-base font-serif text-white pb-1">eChurchlibrary@gmail.com</p>
                    </li>
                </ul>                                       
            </div>            
        </div>       
    </footer>
</template>

<script>
import FooterLogo from '../components/FooterLogo.vue'
import ArrowRight from '../components/ArrowRight.vue'
export default {
    components: {
        FooterLogo,
        ArrowRight
    }
}
</script>

<style scoped>
    footer {
        background: rgba(202, 6, 9, 1);
    }

    .footerlogo {
        background: #FFFFFF;
        border-radius: 10px;
        width: 10rem;
        height: 2rem;
    }

    p,
    .lorem {
        letter-spacing: -0.03em;
    }

    .line {
        content: "";
        display: block;
        width: 40px;
        /* height: 1px; */
        border: 1px solid #fff;
        background-color: #fff;
        border-radius: 10px;
    }

    @media (min-width: 768px) {
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
            gap: 2rem;
        }    
        
        .lorem {
            width: 80%;
        }
    }

    @media (min-width: 1024px) {
        .footerlogo {
            width: 13rem;
            height: 3rem;
        }
    }

    @media (min-width: 1200px) {
        .footer1 {
            width: 110%;
        }

        .lorem {
            width: 100%;
        }

        /* .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
            gap: 3rem;
        }  */
    }
</style>