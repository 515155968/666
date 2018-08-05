<template>
  <div>
    <div>
      <div class="header">
        <ul style="display: inline-block" class="head-list">
          <li>
            <router-link to="/myVenue"><i class="icon iconfont icon-fanhui" style="font-size:25px;margin-left:42px"></i></router-link>
          </li>
        </ul>
        <p style="font-size: 30px">篮球场地预约</p>
      </div><!--头部-->
    </div>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
               style=" display: flex;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-around;
    justify-content: space-around;"
      >
        <el-menu-item index="1">{{time | formatDate}}</el-menu-item>
        <el-menu-item index="2">{{time | formatDate}}</el-menu-item>
        <el-menu-item index="3">{{time | formatDate}}</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>


    <div>
      <template>
        <el-table
          :data="result"
          stripe
          border
          :row-class-name="tableRowClassName"
          align="center"
          style="text-align: center"
        >
          <el-table-column
            prop="type"
            label="类型"
            align="center"

          >
          </el-table-column>
          <el-table-column
            prop="site_Number"
            label="场地"
            align="center"
            >
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格"
            align="center"
          >
          </el-table-column>
          <el-table-column label="操作" >
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="success"
                v-if="scope.row.state==1"
                @click="yuyue(scope.row.id)"
              >可预约
              </el-button>
              <el-button
                size="mini"
                type="danger"
                v-if="scope.row.state==2"
              >场地满
              </el-button>
              <!--<el-button
                size="mini"
                type="danger"
                v-show="hide"
              >场地满
              </el-button>-->
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
  <!--{{time | formatDate}}-->
</template>
<script>
  import {formatDate} from '../js/data';

  export default {
    name: "basketball",
    data() {
      return {
        time: "",
        activeIndex: '1',
        result: [],
        show:true,
        hide:false

      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'MM-dd');
      }
    }, /*格式化时间*/
    created() {
      let data = new Date();
      this.time = data;
      data.getFullYear();
      this.axios.get("/api/getSite", {
        params: {type: "篮球"}
      }).then((data) => {
        this.result = data.data;
      }).catch((err) => {
        console.log(err)
      })
    }, /*获取当前时间*/
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }/*判断Table状态*/,
      yuyue(id){
        this.$router.push("/Determine");
        console.log(id)
        localStorage.setItem("id",id);
      },
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #cccccc;
  }

  .header ul li {
    line-height: 100px;
  }

  .header p {
    text-align: center;
    line-height: 100px;
  }

  .head-list {
    position: absolute;
  }

  h5, .div {
    width: 50%;
    line-height: 60px;
    text-align: center;
    margin: 0 auto;
    border: 1px solid #ddd;
  }

  .active {
    color: red;
    background-color: #ddd;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
