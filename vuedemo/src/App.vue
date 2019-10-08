<template><!--只能有一个父级-->
  <div id="app"><!--覆盖掉了index.html上id为app的dom元素-->

    <router-view/>

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
