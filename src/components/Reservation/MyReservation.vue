<template>
  <div>
    <div>
      <el-table
        :data="result"
        border
        stripe
        style="width:100%;text-align: center;margin: 30px auto"
        class="el-table__header"
      >
        <el-table-column
          prop="uid"
          label="员工编号"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="type"
          label="类型"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="yuyue_data"
          label="开始时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="yuyue_Time"
          label="结束时间"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="duration"
          label="场地"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="field"
          label="时长"
          align="center"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
    export default {
        name: "my-reservation",
      data(){
        return {
          result:[]
        };
      },
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        }
      },
      created(){
        let  name = localStorage.getItem("userName")
        console.log(name)
          this.axios.get("/api/addLogin",{
            params: {userName:localStorage.getItem("userName")}
          }).then((data) =>{
            this.result = data.data;
          }).catch((err) =>{
            console.error(err)
          })
      }
    }
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
