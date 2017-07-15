import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Login from '../components/Login'
import Siderbar from '../components/Siderbar'
import Developing from '../components/Developing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path: '/siderbar',
      name: 'index',
      component: Siderbar
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/developing',
      component:Developing
    },
     {
      path:'/kinds',
      component:require('../components/Kinds')
    },
    { 
      name:'roomlist',
      path:'/roomlist',
      component:require('../components/RoomList')
    },
    {
      path:'/gameItem',
      component:require('../components/GameItem')
    },
    {
      path:'/freepage',
      component:require('../components/FreePage')
    }
  ]
})
