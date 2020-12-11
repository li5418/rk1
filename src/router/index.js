import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import List from '@/view/list'
import My from '@/view/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },{
      path:'/list',
      component:List
    },{
      path:'/my',
      component:My
    },{
      path:'/',
      redirect:'/home'
    }
  ]
})
