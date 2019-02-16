<template>
    <div class="account">
        <h3>用户</h3>
        <button @click="exitLogin">{{person.status}}</button>
        <div class='user'>
            <div @click="login"><span class="user_l"><img :src="person.src" v-show="headImg"></span><span class="user_r">{{person.name}}</span></div>           
        </div> 
        <div class="othercontent">
            <span>资产</span>
            <p>
               <span class="content">余额：{{person.remain}}</span>
            </p>           
        </div>
        <div class="othercontent">
            <span>收藏</span>
            <p>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>收藏的商品</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>收藏的店铺</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>收藏的xx</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>其它</em></a>
            </p>           
        </div>
        <div class="othercontent">
            <span>订单</span>
            <p>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>支付</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>发货</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>收货</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>退货</em></a>
            </p>           
        </div>
        <div class="othercontent">
            <span>工具</span>
            <p>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>邮件</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>地图</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>导航</em></a>
                <a href="javascript:;"><img src="../assets/imgs/common2.jpg"><em>周围</em></a>
            </p>           
        </div>
    </div>
</template>
<script>
import * as types from '../store/types'
import store from '../store'
export default {
   data(){
       return {
           person:{
               status:'未登录',
               name:'登录',
               src:'../assets/imgs/common.jpg',
               remain:'xxx',
            },
            headImg:false
       }
   },
   methods:{
       exitLogin(){
            let loginStatus=this.$store.state.user.auth;
            if (loginStatus) {
                this.$store.dispatch(types.CHECK_USER,{auth:false})
                this.headImg=false;
                this.person.status='未登录';
                this.person.name='登录';
                this.person.remain='xxx';
            }
       },
       login(){
            if(store.state.user.auth){
                return;
            }else{
                this.$router.push({path:"/login"})
            }
       }
   },
   mounted(){
       let loginStatus=this.$store.state.user.auth;
       let personInfo={};
       if (loginStatus) {
           personInfo=this.$store.state.user;
           this.person.status='退出登录';
           this.person.name=personInfo.name;
           if (personInfo.headImg!='') {
               this.headImg=true
               this.person.src=personInfo.headImg;
           } else {
               this.headImg=false
           }
           this.person.remain=personInfo.remain;
       } 
   }
}
</script>
<style>
.account{
    position: relative;
    padding-bottom: 0.84rem;
}
.account button{
    padding: 0 0.1rem;
    height:0.4rem;
    font-size:0.2rem;
    line-height: 0.4rem;
    background: #fb6226;
    border:none;
    color:#fff;
    position: absolute;
    top:0.1rem;
    right:0.1rem;
}
.account .othercontent p span.content{
    background: #fb6226;
    margin-bottom: 0.2rem;
}
.account h3{
    color: #000;
    font-size:0.3rem;
    line-height: 0.6rem;
    font-weight:800; 
    background: #fff;
    text-align: center;
    border-bottom: 0.01rem solid #ccc;   
}
.account .user{   
    padding:0.15rem;
}
.account .user div{
    width: 50%;
    display: block;
    height: 0.8rem;
    overflow: hidden;
}
.account .user span.user_l{
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    background: url(../assets/imgs/common.jpg) no-repeat;
    background-size:0.8rem 0.8rem;  
}
.account .user span.user_l img{
    width:0.8rem;
    height: 0.8rem;
    display: block;
}
.account .user span.user_r{
    float: left;
    height: 0.8rem;
    margin-left: 0.2rem;
    font-size:0.4rem;
    line-height: 0.8rem;
    font-weight:800; 
}
</style>


