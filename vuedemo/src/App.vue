<template><!--只能有一个父级-->
  <div id="app"><!--覆盖掉了index.html上id为app的dom元素-->

    <img src="./assets/logo.png">

    <h1>Hello App!</h1>

    <p>

      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <!-- <router-link to="/">Go to 首页</router-link>-->
      <router-link to="/foo" >Go to Foo</router-link><!--index.js根据routes加载各个.vue文件-->
      <router-link to="/bar" >Go to Bar</router-link>
      <router-link to="/login" @click.native="gotologin()" >Go to Login</router-link>
    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view>
    </router-view><!--去加载index.js内容---index.js再去根据import加载各个.vue文件-->

  </div>

</template>

<script>
export default {
  name: 'App'

}

function gotologin() {
    $("#app").hide();

}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
