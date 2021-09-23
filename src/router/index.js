import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Denomination from '../views/Denomination.vue'
import Section from '../views/Section.vue'
import AudioVideo from '../views/AudioVideo.vue'
import Books from '../views/Books.vue'
import Subscription from '../views/Subscription.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/denomination',
    name: 'Denomination',
    component: Denomination
  },
  {
    path: '/section',
    name: 'Section',
    component: Section
  },
  {
    path: '/audioVideo',
    name: 'AudioVideo',
    component: AudioVideo
  },
  {
     path: '/books',
     name: 'books',
    component: Books
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
