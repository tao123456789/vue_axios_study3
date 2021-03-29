<template>
  <div id="vm">
    <h2>功能实现</h2>
    <input type="button" value="按钮事件" v-on:click="Greet" name=""/>
    <p id="myDiv">使用 AJAX 修改该文本内容</p>
    <div>
      <div class="pop" v-if="showModal" >
        <div id="dialog" style="width: 500px;height: 600px;background-color: grey;position: absolute;top: 30%;left: 40%;margin-top: -100px;margin-left: -100px;">
          <button @click="showModal=false" class="btn">点击关闭</button>
          <br>
          <input type="text" value="1,el-progress使用"/>
          <div style="background-color: white;width: 510px">
            <el-progress type="circle" :percentage="0"></el-progress>
            <el-progress type="circle" :percentage="25"></el-progress>
            <el-progress type="circle" :percentage="100" status="success"></el-progress>
            <el-progress type="circle" :percentage="50" status="exception"></el-progress>
          </div>
          <br>
          <div>
            <input type="text" value="2,el-cascader使用"/>
            <br>
            <el-cascader
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
            </el-cascader>
          </div>
          <br>
          <div>
          <input type="text" value="3,el-time-select使用"/>
          <br>
          <el-time-select
              v-model="value1"
              :picker-options="{
                start:'08:30',
                step:'00:15',
                end:'18:30'
              }"
              placeholder="选择时间"
          ></el-time-select>

            <el-date-picker
                v-model="valueDate"
                type="date"
                placeholder="选择日期">
            </el-date-picker>

            <el-date-picker
                type='week'
                v-model='value'
                placeholder='选择周'
            >
            </el-date-picker>

            <el-date-picker
                v-model="value1"
                type="datetime"
                placeholder="选择日期时间">
            </el-date-picker>

            <div>
              <br>
              <input type="text" value="4,el-form使用"/>
              <el-form :model='list'>
                <el-form-item label='用户名' style="">
                <el-input></el-input>
              </el-form-item>
              <el-form-item label='密码'>
                <el-input></el-input>
              </el-form-item>
            </el-form>
            </div>
          </div>
          <br>

        </div>
      </div>
      <button @click="showModal=true" class="btn">点击出现弹框</button>
    </div>
    <br>
    <input type="button" value="axios获取数据" v-on:click="Axioss" name="">
    <p>{{msg}}</p>
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
      joke:"data数据",
      msg:"msg数据",
      showModal: false,
      options: [{
        value:'1',
        label:'components',
        children: [{
          label:'input'
        },{
          label:'swiper'
        }]
      },{
        value:'1',
        label:'views'
      },{
        value:'1',
        label:'actions'
      }],
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

