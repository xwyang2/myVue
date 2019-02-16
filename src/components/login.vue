<template>
    <div class="login reg">
        <h3 class='title'>登录</h3>
        <button @click="goback" class="back">&lt;</button>
        <router-link to="/reg" class='sign'>注册</router-link>
        <p class='userinfo'><label for="username" class="labels">用户名:</label><input type="text" id="username" class="infomation" v-model="msg"></p>
        <p class='userinfo'><label for="password" class="labels">密码:</label><input type="password" id="password" class="infomation" v-model="msg2"></p>
        <p class='userinfo'><input type="checkbox" id="checks" class="checks"><label for="checks" class="label2">？记住密码</label></p>
        <p><button class='submit' @click="_login">提交</button></p>
        <p class="title">{{loginMsg}}</p>
    </div>
</template>
<script>
import * as types from '../store/types'
export default {
    data(){
        return{
            msg:'',
            msg2:'',
            loginMsg:""
        }
    },
    methods:{
        _login(){
            let username=this.msg;
            let password=this.msg2;
            let verify=false;
            let users=[];
            let person={};
            this.$http({
               url:'/data/user.json'
            }).then(
               res =>{
                users=res.data;
                // console.log(users)
                users.forEach((item)=>{
                     if (username==item.username && password == item.password) { 
                         verify=true;
                         person.name=item["name"];
                         person.headImg=item["head_img"]
                         person.remain=item['remain']
                     } 
                });
                if (verify) {
                    this.loginMsg="验证成功，马上跳转->"
                    window.setTimeout(()=>{
                        this.$router.go(-1);
                        person.auth=true;
                        this.$store.dispatch(types.CHECK_USER,person);
                        // console.log(this.$store.state.user)
                    },2000)
                } else {
                    this.loginMsg="用户名或密码不正确"
                }
               }
            )
        },
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>
<style>
html,body{height:100%}
.login,.reg{
    width: 100%;
    height:100%;
    position: relative;
}
.login .back,.reg .back{
    width:0.5rem;
    height:0.5rem;
    text-align: center;
    border-radius: 50%;
    border: none;
    position: absolute;
    top:0.05rem;
    left:0.2rem;
    opacity: 0.3;
    font-size: 0.4rem;
    line-height: 0.5rem;
    font-weight: 900;
    background: #000;
    color: #fff;
    vertical-align: middle;
}
.login .sign{
    height:0.4rem;
    font-size:0.2rem;
    line-height: 0.4rem;
    background: #fb6226;
    border:none;
    color:#fff;
    position: absolute;
    top:0.1rem;
    right:0.1rem;
    padding: 0 0.1rem;
}
.login p{
    padding: 0 0.15rem;
}
.login .checks{
    float: left;
    vertical-align: middle;
    width: 0.3rem;
    height: 0.3rem;
    margin-top:0.35rem;
    margin-left:1.2rem;
}
.userinfo{
    width: 100%;
    height: 1rem;
    overflow: hidden;
}
.labels{
  float: left;
  width:1.2rem;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align: right;
}
.label2{
  float: left;
  width:4rem;
  font-size: 0.3rem;
  line-height: 1rem;
  text-align:left;
  vertical-align: middle;
  margin-left: 0.05rem;
}
.infomation{
  margin-top: 0.2rem;
  margin-left:5px; 
  padding: 0 0.05rem;
  float: left;
  width: 4rem;
  height: 0.6rem;
  border: 0.02rem solid #000;
  background: #f5f5f5;
  font-size: 0.3rem;
  line-height: 0.6rem;
  box-sizing: border-box;
}
.submit{
    display: block;
    height: 0.6rem;
    padding: 0 0.3rem;
    font-size: 0.3rem;
    line-height: 0.6rem;
    margin:0.2rem auto;
}
</style>


