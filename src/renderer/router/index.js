import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/main',
      name: 'main',
      component: require('@/components/view/main').default,
      children:[
        {
          path: '/chat',
          name: 'chat',
          component: require('@/components/view/chat').default
        },
        {
          path: '/contact',
          name: 'contact',
          component: require('@/components/view/contact').default
        },
      ]
    },
  ]
})
