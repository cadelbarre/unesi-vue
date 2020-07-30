import Vue from 'vue'
import VueRouter from 'vue-router'

/*--------------  Importamos las paginas  --------------*/
import home from '../views/home.vue'
import nosotros from '../views/nosotros.vue'
import perfil from '../views/perfil.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: nosotros
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: perfil
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
