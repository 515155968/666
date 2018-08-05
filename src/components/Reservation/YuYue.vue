<template>
  <div>
    <div class="header">
      <ul style="display: inline-block" class="head-list">
        <li>
          <router-link to="/FanHui2"><i class="icon iconfont icon-fanhui" style="font-size:30px;margin-left:30px"></i>
          </router-link>
        </li>
      </ul>
      <p style="font-size: 30px">场地预约</p>
    </div><!--头部-->
    <div style="margin: 50px auto">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" style="margin: 0 auto;width:300px">
        <el-form-item label="姓名">
          <el-input :disabled="true" v-model="sizeForm.name" style="width: 200px;"></el-input>
        </el-form-item>

        <el-form-item label="娱乐项目"
        >
          <el-select v-model="sizeForm.qiulei" placeholder="请选择" style="width: 200px">
            <el-option label="篮球" value="篮球"></el-option>
            <el-option label="羽毛球" value="羽毛球"></el-option>
            <el-option label="台球" value="台球"></el-option>
            <el-option label="乒乓球" value="乒乓球"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-input
            v-model="sizeForm.time"
            :placeholder="time | formatDate"
            :disabled="true"
            style="width: 200px"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-col :span="11" style="width: 200px">
            <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1"
                            style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2"></el-col>
        </el-form-item>

        <el-form-item label="时间">
          <el-col :span="11" style="width: 200px">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2"
                            style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="娱乐时长"
        >
          <el-select v-model="sizeForm.region" placeholder="请选择" style="width: 200px">
            <el-option label="1/小时" value="1/小时"></el-option>
            <el-option label="2/小时" value="2/小时"></el-option>
            <el-option label="3/小时" value="3/小时"></el-option>
            <el-option label="4/小时" value="4/小时"></el-option>
            <el-option label="5/小时" value="5/小时"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="娱乐场地"
        >
          <el-select v-model="sizeForm.changdi" placeholder="请选择" style="width: 200px">
            <el-option label="一号场地" value="一号场地"></el-option>
            <el-option label="二号场地" value="二号场地"></el-option>
            <el-option label="三号场地" value="三号场地"></el-option>
            <el-option label="四号场地" value="四号场地"></el-option>
            <el-option label="五号场地" value="五号场地"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="sizeForm.phone"
                    style="width: 200px;"
          ></el-input>
        </el-form-item>
        <el-form-item label="场地费用">
          <el-input
            placeholder="50/小时"
            :disabled="true"
            style="width: 200px"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button :plain="true" type="primary" style="width: 100%;margin-top:50px" @click="submits()">预约</el-button>
  </div>
</template>
<script>
  import {formatDate} from '../js/data';

  export default {
    name: "yu-yue",
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          phone: "",
          delivery: false,
          qiulei: "",
          changdi: "",
          desc: '',
          change: {},
          state: "2",
          id: [],
          time: ""
        },
        result: [],

      }
    },
    methods: {
      submits() {
        let names = /^[a-zA-Z0-9_]{4,15}$/;
        let phones = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        if (this.sizeForm.name == null) {
          this.$message("未登录不能预约,请登录");
        } else if (!names.test(this.sizeForm.name)) {
          this.$message("用户名格式不正确(长度必须4-15不能包括中文)");
          return false;
        } else if (this.sizeForm.qiulei == '') {
          this.$message("类型不能为空");
        } else if (this.sizeForm.date1 == '') {
          this.$message("日期不能为空");
        } else if (this.sizeForm.date2 == '') {
          this.$message("时间不能为空");
        } else if (this.sizeForm.changdi == '') {
          this.$message("请选择场地");
        } else if (this.sizeForm.region == '') {
          this.$message("请选择时长");
        } else if (this.sizeForm.phone == '') {
          this.$message("请输入手机号");
        } else if (!phones.test(this.sizeForm.phone)) {
          this.$message("手机号格式不正确,请重新输入");
        } else {
          this.axios.get("/api/insYuYue", {
            params: {
              name: this.sizeForm.name,
              type: this.sizeForm.qiulei,
              //kaishi: this.sizeForm.kaishi,
              yuyue_data: this.sizeForm.date1,
              yuyue_Time: this.sizeForm.date2,
              duration: this.sizeForm.changdi,
              field: this.sizeForm.region,
              phone: this.sizeForm.phone
            }

          }).then((data) => {
            this.$message("预约成功");
            this.id = localStorage.getItem("id");
            this.$router.push("/yycg");
            this.axios.get("/api/updState", {
              params: {
                state: "2",
                id: this.id
              }
            }).catch((err) => {
            });
          }).catch((err) => {
          })
        }
      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, 'MM-dd hh:mm');
      }
    },
    created() {
      let data = new Date();
      this.time = data;
      data.getFullYear();
      this.sizeForm.name = localStorage.getItem("userName");
      console.log(this.sizeForm.name)
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

  .box {
    width: 400px;
  }

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
</style>
