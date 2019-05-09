import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import UIelements from '@/pages/UIelements'
import forms from '@/pages/forms'
import tab_panel from '@/pages/tab_panel'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'index',
        component: index
      },
      {
        path: '/index',
        name: 'indexed',
        component: index
      },
      {
        path: '/UIelements',
        name: 'UIelements',
        component: UIelements
      },
      {
        path: '/forms',
        name: 'forms',
        component: forms
      },
      {
        path: '/tab_panel',
        name: 'tab_panel',
        component: tab_panel
      }
  ]
})
