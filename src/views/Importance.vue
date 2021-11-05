<template>
    <div>
        <Hero :logo="logo" :image="image" header="The Importance of Importunity" date="10/14/2021" quote="Romans 5:3-5; Galatians 6:9" subheader="The secret to the success of overcoming Satan and becoming prepared is to have anextensive strategy of effective prayer." paragraph="And the secret to having this extensive prayer is to have an extensive program of effectivepraise. There is no assurance of the desired manifestation apart from persistent and believing prayer. Prayer is where you strike the winning blow. Acts of service and our actions are where we gather the results. If Daniel had grown weary and becomed iscouraged, God would have been compelled to find somebody else to intercede on the people’s behalf to get the breakthrough.

Persistence or importunity is not required to persuade (an already willing) God, but it is
needed to overcome the opposition of evil spirits. God’s purpose is to give us valuable
training in being overcomers and to build character during that period, so He is able to
remove demonic hindrance.

If he were to go ahead of the church and take the matter out of our hands, winning the
victory for her (the church), it will prevent her from growing into the full stature of Christ.
This is the reason for biblical teaching on the importance of importunity. The answers to
many prayers that have already been granted in heaven may never be received because the
petitioner has become weary, discouraged, intimidated and given up the fight.

It is with all this, I encourage you finally to rejoice in hope, be patient in tribulation, and be
steadfast in prayer always (Romans 12:12)." />
    </div>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
    components: {
        Hero
    },
    data() {
        return {
            logo: require('../assets/images/favicon.png'),
            image: require('../assets/images/persistence.png'),

        }
    }
    
}
</script>

<style>

</style>