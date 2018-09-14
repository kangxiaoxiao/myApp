var express = require('express');
var mongoose=require("mongoose");
var Users=require("../modules/users");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/users",function(req,res,next){
  Users.fetch(function(err,users){
    if(err){
      res.json({
        "status":1,
        "msg":"数据异常",
        "result":""
      })
    }else{
      res.json({
        "status":0,
        "msg":"",
        "result":users
      })
    }
  })
})

module.exports = router;
