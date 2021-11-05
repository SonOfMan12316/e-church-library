import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Denomination from '../views/Denomination.vue'
import Section from '../views/Section.vue'
import AudioVideo from '../views/AudioVideo.vue'
import Books from '../views/Books.vue'
import Subscription from '../views/Subscription.vue'
import Importance from '../views/Importance.vue'
import Audio from '../views/Audio.vue'
import Video from '../views/Video.vue'

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
    path: '/audiovideo',
    name: 'AudioVideo',
    component: AudioVideo,
    children: [
      {
        path: '/video',
        name: 'Video',
        component: Video, 
      },
      {
        path: '/audio',
        name: 'Audio',
        component: Audio
      }
    ]
  },
  
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/subscription',
    name: 'Subscription',
    component: Subscription
  },
  {
    path: '/importance',
    name: 'Importance',
    component: Importance
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
