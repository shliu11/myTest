//第二步执行
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//1.在main.js中引入App.vue
import router from './router'
//引入组件
import Foo from './components/Foo'
import Bar from './components/Bar'
import Login from './components/login/Login'
//引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入jQuery
import $ from 'jquery'

// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({//2.新建一个vue实例
  el: '#app',//3.将这个vue实例挂载到index.html中id 为app的DOM元素上
  router,
  components: { App },
  template: '<App/>'//4.将APP.vue的内容替换挂载的元素，也就是替换id="app"的div
/*  render: h => h(App)*/
})
