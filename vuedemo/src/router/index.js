import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Login from '@/components/login/Login'//@表示src

Vue.use(Router)

export default new Router({
  routes: [
   /* {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
  /*  {
      path: '/foo',
      name: 'Foo',
      /!*component: Foo*!/
      component:() => import("@/components/Foo")
    },
    {
      path: '/bar',
      name: 'Bar',
      /!*component: Bar*!/
      component:() => import("@/components/Bar")
    }
    ,*/
    {
      path: '/',//值为router-link 的to值，如果没有router-link则此处为/
      name: 'Login',
      component: Login
    }
  ]
})
