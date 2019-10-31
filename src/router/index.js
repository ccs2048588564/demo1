import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/Home'
import Invite from '@/components/Invite'
import New from '@/components/New'
import World from '@/components/World'
import Join from '@/components/Join'
Vue.use(Router)

export default new Router({
linkActiveClass:'my-active',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: 'world',
          name: 'World',
          component: World
        },
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: 'join',
          name: 'Join',
          component: Join
        },
        {
          path: 'invite',
          name: 'Invite',
          component: Invite
        }
      ]
    },
  ]
})
