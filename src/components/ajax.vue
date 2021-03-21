<template>
  <div id="vm">
    <h2>功能实现</h2>
    <input type="button" value="按钮事件" v-on:click="Greet" name=""/>
    <p id="myDiv">使用 AJAX 修改该文本内容</p>
    <input type="button" value="axios获取数据" v-on:click="Axioss" name="">
    <p>{{msg}}</p>
    <p>{{joke}}</p>
    <div>
      <div class="pop" v-if="showModal">
        <button @click="showModal=false" class="btn">点击关闭弹框</button>
      </div>
      <button @click="showModal=true" class="btn">点击出现弹框</button>
    </div>
  </div>
</template>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"></script>

<script src=”https://unpkg.com/axios/dist/axios.min.js”></script>
<script>
import axios from "axios";

export default {
  data(){
    return {
      joke:"data数据",
      msg:"msg数据",
      showModal: false,
    }
  },
methods:{
    Axioss:function (){
      axios.get("https://autumnfish.cn/api/joke/list?num=6")
          .then(res => {
            console.log(res);
            this.joke=res.data.jokes;
            this.msg=res.data.msg;
          })
          .catch(err => {
            console.error(err);
          })
      console.log("object");
    },
  Greet: function () {
    console.log("触发了按钮事件")
    document.getElementById("myDiv").innerText="按钮实现，已经修改了"
  }
  }
}
</script>

