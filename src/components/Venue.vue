<template>
<div>
  <div class="header">
    <ul style="display: inline-block" class="head-list">
      <li>
        <router-link to="/ShouYe"><i class="icon iconfont icon-fanhui" style="font-size:25px;margin-left:42px"></i></router-link>
      </li>
    </ul>
    <p style="font-size: 30px">总部场馆预约</p>
  </div><!--头部-->
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="router"
    style=" display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;"
    >
      <el-menu-item index="/YuYue">场馆预约</el-menu-item>
      <el-menu-item index="/GuiZe">预约规则</el-menu-item>
      <el-menu-item index="/My">我的预约</el-menu-item>
    </el-menu>
  </div><!--导航栏-->
  <router-view></router-view>
</div>
</template>
<script>
    export default {
      name: "venue",
      data() {
        return {
          activeIndex: '1',
          router:true,
        };
      },
      methods: {

      },
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height:100px;
    border-bottom: 1px solid #cccccc;
  }
  .header ul li {
    line-height:100px;
  }
  .header p{
    text-align: center;
    line-height:100px;
  }

  .head-list {
    position: absolute;
  }
  .type i{
    font-size: 35px;
  }
  el-table{
    margin: 0 auto;
  }
</style>
