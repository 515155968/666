<template>
  <div style="width: 100%">
    <div style="height: 50px">
     <ul class="herder" style="border: none">
       <li>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-caidanshouqi2"></use>
         </svg>
       </li>
       <li>首页</li>
       <li>
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-plus"></use>
         </svg>
       </li>
     </ul>
    </div>
    <div class="block">
      <el-carousel trigger="click" height="300px">
        <el-carousel-item v-for="item in imgArray" :key="item">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div><!--轮播图使用Element-ui-->
    <div>
      <ul class="myul" style="height:400px">
        <ul class="ul-1">
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-anquan"></use>
            </svg>
            <div class="fontclass">质量安全</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true" style="color: red">
              <use xlink:href="#icon-qianbao"></use>
            </svg>
            <div class="fontclass">公司钱包</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true"  style="color:pink">
              <use xlink:href="#icon-huodong"></use>
            </svg>
            <div class="fontclass">文化活动</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true"  style="color: black">
              <use xlink:href="#icon-lanqiu"></use>
            </svg>
            <router-link to="myVenue"><div class="fontclass">场馆预约</div></router-link>
          </li>
        </ul>
        <ul class="ul-2">
          <li>
            <svg class="icon" aria-hidden="true" style="color: #6566FF">
              <use xlink:href="#icon-yqdz_stxx"></use>
            </svg>
            <div class="fontclass">员工食堂</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true" style="color: #43BAB4">
              <use xlink:href="#icon-qiche"></use>
            </svg>
            <div class="fontclass">掌上班车</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true" style="color: #F9A64A">
              <use xlink:href="#icon-shangcheng"></use>
            </svg>
            <div class="fontclass">公司商城</div>
          </li>
          <p></p>
          <li>
            <svg class="icon" aria-hidden="true" style="color: #6566FF">
              <use xlink:href="#icon-fuli"></use>
            </svg>
            <div class="fontclass">公司福利</div>
          </li>
        </ul>
        <!-- <ul class="ul-3">
           <li>
             <svg class="icon" aria-hidden="true">
               <use xlink:href="#icon-plus"></use>
             </svg>
             <div class="fontclass"></div>
           </li>
         </ul>-->
      </ul>

    </div>
    <!--<router-view></router-view>-->
    <div  style="position:fixed; bottom:0;background: rgba(10,196,255,0.1);width: 100%;">
      <ul class="Top" style="border: none">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yemian"></use>
          </svg>
          <div class="fontclass">首页</div>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yingyong_bak-copy"></use>
          </svg>
          <div class="fontclass">应用</div>
        </li>
        <router-link to="/user">
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-geren11"></use>
          </svg>
          <div class="fontclass">个人</div>
        </li>
        </router-link>
      </ul>
    </div>

    </div>
</template>

<script>
  import img1 from "../assets/LB.png"
  import img2 from "../assets/LB2.jpg"
  import img3 from "../assets/LB3.jpg"
  export default {
    name: 'HelloWorld',
    data() {
      return {
        imgArray:[img1,img2,img3]
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  img {
    width: 100%;
    height: 300px;

  }

  .icon {
    width: 2em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .ul-1 {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }

  .ul-2 {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }

  /* .ul-3{

   }*/
  .myul li {
    margin: 50px auto;
  }

  svg {
    margin-left: 13px;
  }

  ul {
    border: 1px solid #cccccc;
  }
  .Top{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
  }
  .Top svg{
    margin-left:-3px;
  }
p{
  width: 1px;
  background: #cccccc;
  margin: 0;
}
.herder{
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  line-height: 50px;
}

</style>
