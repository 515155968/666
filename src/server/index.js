let express = require("express");
let router = express.Router();
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "321",
  port: 3306,
  database: "manage",
});
connection.connect();

router.get("/getSite", function (req, res) {
  let type = req.query.type;
  connection.query("select * from site where type=?", [type], function (err, result) {
    if (err) {
      err.error(err);
      return;
    }
    res.json(result)
  })
});

router.get("/insYuYue", function (req, res) {
  let param = req.query;
  let sql = "insert into reserve(`name`,type,yuyue_data,yuyue_Time,duration,field,phone) values(?,?,?,?,?,?,?)";
  connection.query(sql,
    [
      param.name,
      param.type,
     // param.kaishi,
      param.yuyue_data,
      param.yuyue_Time,
      param.duration,
      param.field,
      param.phone
    ], function (err, result) {
      if (err) {
        console.error(err, result);
        return;
      }
      res.json(result)
      console.log("成功")
    })
});
router.get("/getChaXun", function (req, res) {
  connection.query("select * from site s inner join reserve r on s.sid=r.rid", function (err, result) {
    if (err) {
      console.error(err)
      return;
    }
    res.json(result)
  })
});

router.get("/updState", function (req, res) {/*修改状态*/
  let state = req.query.state;
  let id = req.query.id;
  connection.query("update site set state = ? where id =?", [state, id], function (err, result) {
    if (err) {
      console.error(err)
      return;
    }
  })
})

router.get("/addLogin",function (req,res) {/*登录..*/
  let name = req.query.userName;
  connection.query("select * from reserve r inner join login l on l.userName=r.`name` where `name` =?",[name],function (err,result) {
    if (err){
      console.error(err)
    }
    res.json(result)
  })
})
router.get("/userLogin",function (req,res) {/*登录..*/
  connection.query("select * from login",function (err,result) {
    if (err){
      console.error(err)
    }
    res.json(result)
  })
})
module.exports = router;
