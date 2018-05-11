import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Pats from '@/components/pats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Goods
    },{
      path:'/goods',
      component: Goods
    },
    {
      path:'/puts',
      component:Pats
    }
  ]
})
