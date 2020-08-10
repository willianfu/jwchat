import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/index',
      name: 'index',
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

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.matched.length === 0) {
    //next("/404");
  } else {
    //如果匹配到就跳转
    if (to.path !== "/404") {
      sessionStorage.setItem("routerCatch", to.path);
    }
    next();
  }
});

export default router

