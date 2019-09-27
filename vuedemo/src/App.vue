<template><!--只能有一个父级-->
  <div id="app"><!--覆盖掉了index.html上id为app的dom元素-->

    <!--<img src="./assets/logo.png">

    <h1>Hello App!</h1>

    <p>

      &lt;!&ndash; 使用 router-link 组件来导航. &ndash;&gt;
      &lt;!&ndash; 通过传入 `to` 属性指定链接. &ndash;&gt;
      &lt;!&ndash; <router-link> 默认会被渲染成一个 `<a>` 标签 &ndash;&gt;
      &lt;!&ndash; <router-link to="/">Go to 首页</router-link>&ndash;&gt;
      <router-link to="/foo" >Go to Foo</router-link>&lt;!&ndash;index.js根据routes加载各个.vue文件&ndash;&gt;
      <router-link to="/bar" >Go to Bar</router-link>
      <router-link to="/login" >Go to Login</router-link>

     &lt;!&ndash; <a :href ="../compontents/login/Login.vue">Go to Login</a>&ndash;&gt;

    </p>
    &lt;!&ndash; 路由出口 &ndash;&gt;
    &lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;

    <router-view/> &lt;!&ndash;去加载index.js内容-&#45;&#45;index.js再去根据import加载各个.vue文件&ndash;&gt;
-->


      <div class="login_form">
        <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
        <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
        <!--<button class="login_btn el-button el-button&#45;&#45;primary is-round" type="primary" round>登录</button>-->
        <el-button class="login_btn" @click.native="login" type="primary" round :loading="isBtnLoading">登录</el-button>
        <div style="margin-top: 10px">
          <span style="float: right;color: #A9A9AB">忘记密码？</span>
        </div>
      </div>
    </div>



</template>

<script>
export default {
  name: 'App'

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
a:hover{
  cursor:pointer
}
</style>
