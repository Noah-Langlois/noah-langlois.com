import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuriculumVitae from '../components/CuriculumVitae.vue'
import Adhd from '../views/AdhdView.vue'
import MaFormationVue from '../views/MaFormationView.vue'
import MesStagesVue from '../views/MesStagesView.vue'
import TicTacToeVue from '../views/TicTacToeView.vue'
import LotoView from '@/views/LotoView.vue'
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
      path: '/CV',
      name: 'CV',
      component: CuriculumVitae
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
      path: '/ADHD_study',
      name: 'ADHD',
      component: Adhd
    }
  ]
})

export default router
