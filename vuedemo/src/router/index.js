import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'
import Login from '@/components/login/Login'

Vue.use(Router)

export default new Router({
  proxyTable: {
    '/api': {
      target: 'http://localhost:8081',
      changeOrigin:true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
    ,
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
