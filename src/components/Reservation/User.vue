<template>
  <div>
    <div>
      <div class="header">
        <ul style="display: inline-block" class="head-list">
          <li>
            <router-link to="/ShouYe"><i class="icon iconfont icon-fanhui" style="font-size:25px;"></i></router-link>
          </li>
        </ul>
        <p style="font-size:20px;text-align:center ">篮球场地预约</p>
      </div><!--头部-->
    </div>
    <div style="width: 100%;border-bottom:1px solid #cccccc " class="div">
      <img src="../../assets/img1.jpg"/>
      <ul style="">
        <li></li>
        <li>姓名:{{userName}}</li>
        <li>手机号:{{phone}}</li>
      </ul>
    </div><!--姓名：手机号：头像-->
    <div style="">
      <div
        style="width: 50%;height: 50px;margin-top:100px;border-top: 1px solid #cccccc;border-bottom: 1px solid #cccccc;text-align: left;display: inline-block">
        <p>员工卡余额:</p>
      </div>
      <div
        style="width: 48%;height: 50px;margin-top:15px;border-top: 1px solid #cccccc;border-bottom: 1px solid #cccccc;text-align: right;display: inline-block">
        <p><span style="color: red">{{money}}</span>元</p>
        <p>充值</p>
      </div>
    </div><!--余额:充值-->
    <div style="text-align: center;margin-top: 50px">
      <router-link to="/login">
        <el-button type="success" v-show="user_Login" style="width: 70%;">登录</el-button>
      </router-link>
      <el-button type="success" v-show="user_register" style="width: 70%;margin-top:20px">注册</el-button>
      <el-button type="success" @click="Sign()" v-show="user_Sign"
                 style="width: 70%;"
      >退出登录
      </el-button>
    </div><!--登录:注册:重新登录-->
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        money: "",
        userName: "请登录",
        phone: "请登录",
        user_Login: true,
        user_register: true,
        user_Sign: false
      }
    },
    created() {
      console.log(this.money + this.userName + this.phone)
      this.money = localStorage.getItem("money");
      this.userName = localStorage.getItem("userName");
      this.phone = localStorage.getItem("phone");
      if (this.login == null && this.username == null && this.phone == null) {
        this.money = "0"
        this.userName = "请登录"
        this.phone = "请登录"
        this.user_Login = true
        this.user_Sign = false
        this.user_register = true
        this.user_register = true
        this.user_Login = true
        this.user_Sign = false
      } else {
        this.user_register = false
        this.user_Login = false
        this.user_Sign = true
      }
    },
    methods: {
      Sign() {
        this.money = "0"
        this.userName = "请登录"
        this.phone = "请登录"
        this.user_Login = true
        this.user_Sign = false
        this.user_register = true
        localStorage.clear();
      }
    }
  }
</script>

<style scoped>

  img {
    width: 100px;
    height: 100px;
    margin: 20px 0px 0px 40px;
    border-radius: 50%;
  }
  .div {
    display: -webkit-flex;
    display: flex;
    /*  -webkit-justify-content: space-between;
      justify-content: space-between;
      line-height: 50px;*/
  }

  li {

    margin-top: 32px;
    margin-left: 30px;
  }

  p {
    display: inline-block;
    line-height: 50px;
    margin-left: 30px;
  }
  .header{
    width: 100%;
    height:100px;
    border-bottom: 1px solid #cccccc;
  }
  .header ul li {
    line-height:50px;
  }
  .header p{
    text-align: center;
    width:70%;
  }
</style>
