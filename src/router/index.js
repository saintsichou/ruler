/*
 * @Date: 2020-06-28 15:48:26
 * @LastEditors: Lee
 * @LastEditTime: 2020-06-29 14:12:24
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ruler from '@/components/ruler'
import ruler2 from '@/components/ruler2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ruler',
      name: 'ruler',
      component: ruler
    },
    {
      path: '/ruler2',
      name: 'ruler2',
      component: ruler2
    }
  ]
})
