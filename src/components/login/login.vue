<template>
  <div>
    <div class="div">
      <svg id="svg"></svg>
    </div><!--svg.....-->
    <div style="height: 50px;text-align: center;margin-top: 130px">
      <span style="font-size: 25px;color: #cccccc">员工登录</span>
    </div>
    <div style="text-align: center;">
      <el-input
        v-model="userID"
        placeholder="请输入员工编号"
        clearable
        maxlength="10"
        prefix-icon="el-icon-info"
        style="width:70%;text-align: center;"
      >
      </el-input>
    </div>
    <div style="text-align: center;margin-top:50px">
      <el-input
        placeholder="请输入员工密码"
        clearable
        prefix-icon="el-icon-info"
        v-model="userPwd"
        style="width:70%;text-align: center"
      >
      </el-input>
    </div>
    <div style="text-align: center;margin-top: 50px">
      <el-button type="success" style="width: 70%;text-align: center" @click="login()">登录</el-button>
    </div>

  </div>
</template>

<script>
  import ElButton from "element-ui/packages/button/src/button";

  export default {
    components: {ElButton},
    name: "login",
    data(){
      return{
        result:"",
        change:{},
        userID:"",
        userPwd:"",
      }
    },
   /* mounted() {
      var svg = document.getElementById("svg");
      svg.onclick = function (event) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", event.offsetX);//创建圆的x  setAttribute() 方法添加指定的属性，并为其赋指定的值。
        circle.setAttribute("cy", event.offsetY);//创建圆的y
        circle.setAttribute("r", 1);//创建圆的半径
        circle.setAttribute("fill", randomColor());
        circle.setAttribute("opacity", 1);
        svg.appendChild(circle);
        var t = setInterval(function () {
          var r = parseInt(circle.getAttribute("r"));//获取圆的半径
          // console.log(r)
          r++;//让圆++越来越大
          circle.setAttribute("r", r);//赋值给半径
          var opacity = parseFloat(circle.getAttribute("opacity"));//获取透明度
          opacity -= 0.01;//让圆透明度
          // console.log(opacity)
          circle.setAttribute("opacity", opacity);//赋值给透明度
          if (opacity <= 0) {
            circle.parentNode.removeChild(circle);
            clearInterval(t);
          }
        }, 10);
      }//创建圆
      function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        // return "rgb(" + r + "," + g + "," + b + ")";//ES6拼接
        return `rgb(${r},${g},${b})`;//使用变量名
      };//随机颜色

      var height = window.innerHeight;
      svg.style.height = height;
    },*/
    methods:{
      login(){
        if(this.userID==""){
          this.$message("编号不能为空")
        }else if(this.userPwd == ""){
          this.$message("请输入密码")
        }else{
          this.axios.get("/api/userLogin").then((data) =>{
            this.result = data.data;
            for (let i = 0; i <this.result.length; i++) {
              this.change = this.result[i];
              if (this.userID == this.change.uid && this.userPwd == this.change.password){
                console.log("编号"+this.userID+"密码"+this.userPwd);
                this.$message("登录成功！");
                localStorage.setItem("money",this.change.money);
                localStorage.setItem("userName",this.change.userName);
                localStorage.setItem("phone",this.change.phone);
                this.$router.push("/ok");
              }else{
                this.$message("编号或密码错误！")
              }
            }
          })
          /*this.axios.get("/api/addLogin").then((data) =>{
            this.result = data.data;
            for (let i = 0; i <this.result.length; i++) {
              this.change = this.result[i];
              if (this.userID == this.change.uid){
                console.log("编号"+this.userID+"密码"+this.userPwd);
                this.$message("登录成功！");
                localStorage.setItem("money",this.change.money);
                localStorage.setItem("userName",this.change.userName);
                localStorage.setItem("phone",this.change.phone);
                this.$router.push("/ok");
              }else{
                this.$message("编号或密码错误！")
              }
              console.log(this.change)
            }
          })*/
        }
      }
    }

  }
</script>
<style scoped>
  #svg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
