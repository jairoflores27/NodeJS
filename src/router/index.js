import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Perfil from '../views/Perfil.vue'
import Registro from '../views/Registro.vue'
import Publicar from '../views/Publicar.vue'
import Categoria from '../views/Categoria.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Publicar',
      name: 'Publicar',
      component: Publicar
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/Categoria',
      name: 'Categoria',
      component: Categoria
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    }
  ]
})
