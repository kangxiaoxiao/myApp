//这是一个数据模型模块
var mongoose=require("mongoose");
var UsersSchema=require("../schemas/users");
var Users=mongoose.model("users",UsersSchema);
module.exports=Users;
