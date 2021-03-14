<template>
  <div id="pzsp">
    <p>判责索赔界面</p>
    <div id="zrpd">
      <label for="gys_zr">
        <input type="radio" id="gys_zr" value="供应商责任" v-model="zr">供应商责任
      </label>
      <label>
        <input type="radio" id="sany_zr" value="三一责任" v-model="zr">三一责任
      </label>
    </div>
    <div id="zrpz_detail">

    </div>
  </div>
</template>

<script>
export default {
    el:'#pzsp',
    data(){
      return {
        message: '你好吗',
        zr: ''
      }
    }
  }
</script>
