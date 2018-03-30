import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/body/home/Home'
import Graduacao from '@/components/body/graduacao/Graduacao'
import Portifolio from '@/components/body/Portifolio'
import Outros from '@/components/body/Outros'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/graduacao',
      name: 'graduacao',
      component: Graduacao
    },
    {
      path: '/portifolio',
      name: 'portifolio',
      component: Portifolio
    },
    {
      path: '/outros',
      name: 'outros',
      component: Outros
    },
  ],
  mode: 'history'
})
