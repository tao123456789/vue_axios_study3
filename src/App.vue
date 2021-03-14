<template>
  <div id="app">
    <img src="../src/img/img1.jpg" height="128px" width="227px" alt="">
    <br>
    <router-link to="index" replace>首页</router-link>
    <br>
    <router-link to="/pzsp" replace>索赔判责</router-link>
    <router-view id="view"></router-view>

  </div>
</template>
<script>
export default {
  name:'App1',
}
</script>


