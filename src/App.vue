<template>
  <div id="app">
    <img src="../src/img/img1.jpg" height="128px" width="227px" alt="">
    <br>
    <router-link to="/index" replace>首页</router-link>
    <br>
    <router-link to="/pzsp" replace>索赔判责</router-link>
    <br>
    <router-link to="/ajax" replace>功能测试</router-link>
    <router-view class="view" style="background-color: ivory"></router-view>

  </div>
</template>
<script>
export default {
  name:'App1',
}
</script>
