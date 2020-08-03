import Vue from 'vue'
import VueRouter from 'vue-router'

/*--------------  Importamos las paginas  --------------*/
import nosotros from '../views/nosotros.vue'
import perfil from '../views/perfil.vue'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: nosotros
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/nosotros.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: perfil
  },
   {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
