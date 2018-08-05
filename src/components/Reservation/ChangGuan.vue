<template>
  <div>
    <template>
      <div>
        <div>
          <ul class="type">
            <li>
              <router-link to="/basketball"> <i class="icon iconfont icon-lanqiu" style="color: #8F1B2D;"></i></router-link>
            </li>
            <li>
              <i class="icon iconfont icon-taiqiu" style="color: #01A29A"></i>
            </li>
            <li>
              <i class="icon iconfont icon-pingpangqiu" style="color: #F9A64A"></i>
            </li>
            <li>
              <i class="icon iconfont icon-yumaoqiu" style="color: #169FFF"></i>
            </li>
          </ul>
        </div>
      </div><!--类型-->
      <el-table
        :data="table"
        border
        stripe
        style="width:100%;text-align: center;margin: 30px auto"
        class="el-table__header"
      >
        <el-table-column
          prop="date"
          label="项目"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="场地数"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="价格"
          align="center"

        >
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
    export default {
      name: "aaa",
      data() {
        return {
          activeIndex: '1',
          router: true,
          table: [{
            date: '篮球',
            name: '5片/场地',
            address: '30/小时'
          }, {
            date: '台球',
            name: '25片/场地',
            address: '25/小时'
          }, {
            date: '乒乓球',
            name: '30片/场地',
            address: '20/小时'
          }, {
            date: '羽毛球',
            name: '15片/场地',
            address: '15/小时'
          }]
        };
      }
    }
</script>

<style scoped>
  i{
    font-size: 35px;
  }
  .type{
    display: flex;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    margin-top: 30px;
  }
</style>
