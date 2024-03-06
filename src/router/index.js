import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CvView from '../views/CvView.vue'
import Adhd from '../views/AdhdView.vue'
import MaFormationVue from '../views/MaFormationView.vue'
import MesStagesVue from '../views/MesStagesView.vue'
import TicTacToeVue from '../views/TicTacToeView.vue'
import CNESView from '@/views/CNESView.vue'
import LotoView from '@/views/LotoView.vue'
import RUView from '@/views/RUView.vue'
import MenuDocView from '@/views/MenuDocView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/documents/CV',
      name: 'CV',
      component: CvView
    },
    {
      path: '/scolarite',
      name: 'scolarite',
      component: MaFormationVue
    },
    {
      path: '/stages',
      name: 'stages',
      component: MesStagesVue
    },
    {
      path: '/jeux/tictactoe',
      name: 'tictactoe',
      component: TicTacToeVue
    },
    {
      path: '/jeux/loto',
      name: 'loto',
      component:LotoView
    },
    {
      path: '/documents/ADHD_study',
      name: 'ADHD',
      component: Adhd
    },
    {
      path: '/stages/CNES',
      name: 'CNES',
      component: CNESView
    },
    {
      path: '/documents',
      name: 'Docs',
      component: MenuDocView
    },

    {
      path: '/stages/RU',
      name: 'RU',
      component: RUView
    }
  ]
})

export default router
