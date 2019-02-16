<template>
    <div class="chart">
        <h3 class='title'>聊天</h3>
        <button class="back" @click="goback">&lt;</button>
        <ul class='msgBox' > 
                <li v-for="(item,index) of msg" :key="index">{{item}}</li>
                <li v-for="(item) of iptMsg" :key="item" class="client">{{item}}</li>
         </ul>
        <div class='alarm' v-show="isShow">不可以发送空消息</div>
        <div class='sendBox'>
            <input type="text" class='sendMsg' v-model="iptVal" />
            <input type="button" class='sendBtn' value="发送" @click="send"/>
        </div>
    </div>
</template>
<script>
import store from '../store'
export default {
    data(){
        return{
           msg:['你好，亲'],
           isShow:false,
           ipt:false,
           iptMsg:[],
           iptVal:""
        }
    },
    methods:{
         goback(){
            this.$router.go(-1);
        },
        send(){
            if (this.iptVal) {
                let value=this.iptVal;
                this.iptMsg.push(value);
                this.iptVal='';
            } else {
                this.isShow=true;
                window.setTimeout(()=>{
                    this.isShow=false;
                },2000)
            }
        }
   },
   beforeRouteEnter(to,from,next){
       if(store.state.user.auth){
           next()
       }else{
           next('/login')
       }
   }
}
</script>
<style>
.chart{
    width: 100%;
    height:100%;
    position: relative;
}
.chart .back{
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
.msgBox li{
    margin:0.05rem 0.15rem;
    padding: 0.1rem;
    font-size: 0.2rem;
    line-height: 0.3rem;
    clear: both;  
    background:#fb6226;float:left; 
}
.msgBox li.client{background:#ccc;float:right;}
.sendBox{
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 0.78rem;
    background: #e5e7e8;
    overflow: hidden;
    padding: 0 0.3rem;
}
.alarm{
    height: 0.3rem;
    width: 2rem;

    font-size: 0.2rem;
    line-height: 0.3rem;

    padding:0.1rem;
    color: #000;
    background: #f5f5f5;
    position: fixed;
    left:0;
    bottom: 0.78rem;
}
.sendBox .sendMsg{
    float: left;
    width: 4.92rem;
    height: 0.58rem;
    border: none;
    padding:0 0.05rem;
    background: #f5f5f5;
    font-size: 0.26rem;
    line-height: 0.58rem;
    box-sizing: border-box;
    margin-top:0.1rem;
}
.sendBox .sendBtn{
    float: left;
    width: 0.78rem;
    height: 0.58rem;
    background: #666;
    border: none;
    box-sizing: border-box;
    margin-top:0.1rem;

    font-size: 0.2rem;
    line-height: 0.58rem;

}
</style>


