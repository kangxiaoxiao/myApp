import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import userList from '@/views/userList'
import goodsList from '@/views/goodsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/userList',
      name: 'userList',
      component: userList
    },{
      path: '/goodsList',
      name: 'goodsList',
      component: goodsList
    }
  ]
})
