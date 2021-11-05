<template>
    <div>
        <Navigation/>
            <div class="subscription p-6 sm:px-6 lg:px-16 xl:px-20">
                <div class="subscription-content flex flex-col justify-center items-center mb-8">
                    <h1 class="text-black font-serif font-extralight md:font-light text-tiny lg:text-base uppercase">Choose A Plan</h1>
                    <p class="text-black font-serif font-light md:font-normal lg:font-medium text-base lg:text-lg">Plans That Are Flexible</p>
                </div>
                <div class="subscriptionPlan flex flex-col gap-y-4">
                    <SubscriptionPlan  
                v-for="Subscription in Subscriptions" 
                :key="Subscription.id" 
                :type="Subscription.PaymentType"
                :amount="Subscription.Amount"
                :count="Subscription.AmountCount"
                :planType="Subscription.planType"/>
                </div>
            </div>      
        <HeroFooter/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HeroFooter from '../components/HeroFooter.vue'
import SubscriptionPlan from '../components/SubscriptionPlan.vue'
export default {
    components: {
        HeroFooter,
        Navigation,
        SubscriptionPlan
    },
    data() {
        return {
            Subscriptions: [
                {
                    id: 0,
                    PaymentType: '(1 Month)',
                    Amount: '$13',
                    AmountCount: '$0.42 Per Day',
                    planType: 'Basic'
                },
                {
                    id: 1,
                    PaymentType: '(3 Months)',
                    Amount: '$24.98',
                    AmountCount: '$0.13 Per Day',
                    planType: 'Standard'
                },
                {
                    id: 2,
                    PaymentType: '(6 Months)',
                    Amount: '$35.01',
                    AmountCount: '$0.05 Per Day',
                    planType: 'Premium'
                }
            ]
        }
    }
}
</script>

<style scoped>
@media (min-width: 600px) {
    .subscriptionPlan {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }
}

@media (min-width: 640px) {
    .subscriptionPlan {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    }
}

@media (min-width: 768px) {
    .subscriptionPlan {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }
}

@media (min-width: 1024px) {
    .subscriptionPlan {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
}

@media (min-width: 1200px) {
    .subscriptionPlan {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        
    }
}
</style>