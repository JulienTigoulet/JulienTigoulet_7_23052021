import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
  },
  {
    path:'/inscription',
    name:'Inscription',
    component: () => import('../views/Inscription.vue')
  },
  {
    path:'/Wall',
    name:'Wall',
    component: () => import('../views/Wall.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
