import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import DetailView from '../views/detail/DetailView.vue'
import AllGame from '../views/all_game/AllGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView,
  },
  {
    path: '/all-game',
    name: 'all-game',
    component: AllGame,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
