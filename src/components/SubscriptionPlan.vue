<template>
    <div class="subscriptionPlan px-4 mx-auto">
        <div class="subscriptionPlanContent py-2 flex flex-col justify-center items-center rounded sm:mr-6">
            <div class="flex flex-row items-center justify-center">
                <h2 class="text-white font-serif text-xl lg:text-2xl">{{ amount }}</h2>
                <h1 class="text-white font-serif text-xs">{{ type }}</h1>
            </div>
            <p style="color: #000" class=" font-serif font-extralight text-xs">{{ count }}</p>
        </div>
        <h3 class="planType font-serif text-black font-light lg:font-normal xl:font-medium text-tiny md:text-base flex items-center justify-center py-4">{{ planType }}</h3>
        <div style="background: #f8f8f8;" class="grey-border mt-2 mb-8 sm:mr-6">
            <div class="flex flex-row items-center justify-center space-x-2 mb-4 pt-6">
                <TickedCheck/>
                <h4 class="font-serif text-black font-light text-tiny flex items-center justify-center">Secured Payment</h4>
            </div>
            <div class="flex flex-row items-center justify-center space-x-2 pb-6">
                <TickedCheck/>
                <h4 class="font-serif text-black font-light text-tiny flex items-center justify-center">100% Safe & Anonymous</h4>
            </div>
        </div>
        <div class="button-div flex justify-center my-4">
            <button class="text-white font-serif text-xs">Select Payment Method</button>
        </div>
    </div>
</template>

<script>
import TickedCheck from '../components/TickedCheck.vue'
export default {
    props: {
        'type': String,  
        'amount': String,  
        'count': String, 
        'planType': String 
    },
    components: {
        TickedCheck
    }
}
</script>

<style scoped>
    .subscriptionPlan {
        border: 2px solid #FFFFFF;
        box-shadow: 6px 0px 15px rgba(191, 194, 198, 0.5);
        border-radius: 5px;
    }

    .subscriptionPlanContent {
        background-color: #dd2c2f;
    }

    button {
       background-color: #dd2c2f; 
       border-radius: 5px;
       /* font-size: 0.85rem; */
       font-weight: 500;
       padding: 0.5rem;
    }

    @media (max-width: 375px) {
        .subscriptionPlan {
            margin: 0 1rem;
        }        
    }

    @media (min-width: 400px) {
        .subscriptionPlan {
            width: 80%;
            margin: 0 auto;
        }        
    }

    @media (min-width: 480px) {
        .subscriptionPlan {
            width: 75%;
            margin: 0 auto;
        }        
    }

    @media (min-width: 640px) {
        .subscriptionPlan {
            width: 80%;
        }  
        .planType {
            width: 85%;
        }

        .grey-border {
            width: 90%;
        }

        .button-div {
            width: 90%;
        }      
    }

    @media (min-width: 768px) {
        .subscriptionPlan {
            width: 75%;
        }    
        .planType {
            width: 90%;
        }    
    }

    @media (min-width: 1200px) {
        .subscriptionPlanContent {
            width: 82%;
        }

        .planType {
            width: 85%;
        }

        .grey-border {
            width: 80%;
        }

        .button-div {
            width: 80%;
        }
    }

    @media (min-width: 1300px) {
        .subscriptionPlanContent {
            width: 92%;
        }

        .planType {
            width: 90%;
        }

        .grey-border {
            width: 92%;
            /* margin: 0 1rem; */
        }

        .button-div {
            width: 90%;
        }
    }

    @media (min-width: 1400px) {
        .subscriptionPlanContent {
            width: 97%;
        }

        .planType {
            width: 95%;
        }

        .grey-border {
            width: 95%;
        }

        .button-div {
            width: 95%;
        }
    }

</style>