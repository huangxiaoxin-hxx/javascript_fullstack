<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/">首页</router-link>
    <router-link to="/mine">我的</router-link>
    <router-link to="/detail">详情</router-link>
    <p><router-link to="/mine/mine2">我的子页面</router-link></p>
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
</style>
