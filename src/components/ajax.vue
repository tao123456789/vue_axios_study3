<template>
  <div id="vm">
    <h2>显示AJAX获取的数据</h2>
    <p id="myDiv">使用 AJAX 修改该文本内容</p>
    <input type="button" value="AJAX获取数据" v-on:click="Greet" name=""/>
    <input type="button" value="VUE的axios获取数据" v-on:click="Axioss" name="">
    <p>{{joke}}</p>
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
      joke: "显示笑话",
    }
  },
methods:{
    Axioss:function (){
      axios.get("https://autumnfish.cn/api/joke/list?num=1")
          .then(res => {
            console.log(res);
            this.joke=res.data.jokes;
          })
          .catch(err => {
            console.error(err);
          })
      console.log("object");
    },
  Greet: function () {
    console.log("触发了按钮事件")
    let xmlhttp;
    if (window.XMLHttpRequest) {
      //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
      xmlhttp = new XMLHttpRequest();
    } else {
      // IE6, IE5 浏览器执行代码
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        console.log(xmlhttp.readyState);
      }
    }
    xmlhttp.open("GET", "/try/ajax/ajax_info.txt", true);
    xmlhttp.send();
  }
  }
}
</script>

