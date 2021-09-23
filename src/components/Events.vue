<template>
    <div class="events">
        <div class="events-content p-6 sm:p-8 lg:p-16 xl:p-20 bg-white">
            <div class="features-head flex flex-row justify-between">
                <div>
                    <h2 class="text-red-700 text-xl lg:text-2xl xl:text-3xl font-semibold mb-1 font-serif">Upcoming Events</h2>
                    <div class="line "></div>
                </div>
                <div class="jo flex flex-row justify-end items-center -mt-1">
                    <h1 class="font-serif font-normal text-tiny sm:text-base lg:text-xl">View All</h1>
                    <Arrow/>
                </div>
                <!--  -->
            </div>
            <EventsContent
            v-for="EventsContent in EventsContents" 
            :key="EventsContent.id" 
            :image="EventsContent.images" 
            :header="EventsContent.header" 
            :location="EventsContent.location" 
            :date="EventsContent.date" 
            :paragraph="EventsContent.paragraph"/>
        </div>
    </div>
</template>

<script>
import Arrow from '../components/Arrow.vue'
import EventsContent from '../components/EventsContent.vue'
export default {
    components: {
        Arrow,
        EventsContent
    },
    data() {
        return {
            EventsContents: [
                {
                    id: 0,
                    images: require('../assets/images/EventImage.jpg'),
                    header: 'Bible Study',
                    date: 'February 12, 2021',
                    location: 'Lagos Nigeria',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                },
                {
                    id: 1,
                    images: require('../assets/images/EventImage2.jpg'),
                    header: 'Preach the Word',
                    date: 'March 23, 2021',
                    location: 'Port-Harcourt Nigeria',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                },
                {
                    id: 2,
                    images: require('../assets/images/EventImage3.jpg'),
                    header: 'Pray for Salvation',
                    date: 'June 20, 2021',
                    location: 'Ogun Nigeria',
                    paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
                }
            ]
        }
    }
}
</script>

<style scoped>
.line {
    content: "";
    display: block;
    width: 40px;
    height: 4px;
    border: 1px solid #CA0609;
    background-color: #CA0609;
    border-radius: 10px;
}

h1 {
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.56);
}

@media (min-width: 768px) {
    .jo {
        width: 15%;
    }
}

@media (min-width: 1024px) {
    .jo {
        width: 30%;
    }

    .features-head {
        width: 98%;
    }
}

@media (min-width: 1200px) {
    .features-head {
        width: 98%;
    }
}
</style>