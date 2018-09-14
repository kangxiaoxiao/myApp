<template>
    <div>
      <ul v-if="userList && userList.length">
        <li v-for="(item,$index) in userList" :key="$index">
          <div>姓名：{{item.name}}</div>
          <div>性别：{{item.sex}}</div>
          <div>班级：{{item.class}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "userList",
        data(){
          return{
            userList:[]
          }
        },
        mounted(){
          let _this=this;
          axios.get("/users/users").then(res=>{
            if(res.data.status==0){
                _this.userList=res.data.result;
            }else{
              console.log(res.data.msg)
            }
          })
        }
    }
</script>

<style scoped>

</style>
