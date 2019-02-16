<template>
    <div class="detail">
       <slider :imgs='imgs'></slider>
       <button @click="goback">&lt;</button>
       <p class='des'>
           {{detail.subitem}}
        </p>
       <p class='price'><i>￥&nbsp;{{detail.price}}</i><em>赚&nbsp;&nbsp;￥{{detail.price}}</em></p>
       <div class='details'>
           {{detail.details}}
        </div>
        <div class="othercontent">
            <span>官方品控师</span>
            <p>
                <a href="javascript:;"><img src="../assets/imgs/common.jpg"><em>孙大尾</em></a>
                <span class="content">货源可靠、值得信赖，是一件非常值得购买的产品，物美价廉</span>
            </p>           
        </div>
        <div class="othercontent">
            <span>宝贝赛单</span>
            <p>
                <a href="javascript:;"><img src="../assets/imgs/common.jpg"><em>孙小尾</em></a>
                <span class="content">好高兴好高兴哈哈哈哈哈</span>
            </p>           
        </div>
       <p class='bottom'>
           <router-link to="/chart" class="serve"><img src="../assets/imgs/detail01.jpg"><em>客服</em></router-link>
           <router-link to="/shoppingcart" class="serve"><img src="../assets/imgs/detail02.jpg"><em>购物车</em></router-link>
           <a href="javascript:;" @click="addCart">加入购物车</a>
           <a href="javascript:;">赚&nbsp;￥&nbsp;88</a>
       </p>
    </div>
</template>
<script>
import * as types from '../store/types'
import slider from './slider.vue'
export default {
    data(){
        return {
            detail:{},
            imgs:[]
        }
    },
    components:{slider} ,
    methods:{
        goback(){
            this.$router.go(-1);
        },
        addCart(){
            if (this.$store.state.user.auth) {                
                let goodsID=this.$route.params.id-0;
                this.$store.dispatch(types.SHOPPING,{id:goodsID,count:1});
            } else {
                this.$router.replace('/login')
            }
        }
    },
    mounted(){
    let id = this.$route.params.id-0;
    let info=[];
    let that=this;
    this.$http({
      url:'/data/detail.json'
    }).then(
      res=>{
          info=res.data['data']
          info.forEach((item)=>{
              if (id==item.id) {
                  that.detail=item;
              }
          });
          that.imgs=that.detail.src
      }
    )
  } 
}
</script>
<style>
.detail{width: 100%;position: relative; text-align: center;padding-bottom: 0.84rem;}
.detail .banner {
 width:100%;
 height: 5.4rem;
}
.detail .banner img{
 width:100%;
 height: 5.4rem;
}
.detail .slider {
 width:100%;
 height: 5.4rem;
}
.detail button{
    width:0.6rem;
    height:0.6rem;
    text-align: center;
    border-radius: 50%;
    border: none;
    position: absolute;
    top:0.2rem;
    left:0.2rem;
    opacity: 0.5;
    font-size: 0.5rem;
    line-height: 0.6rem;
    font-weight: 900;
    background: #000;
    color: #fff;
}
.detail .details{
    margin:0.2rem 0;
    text-align: left;
    padding: 0 0.2rem;
    font-size:0.3rem;
    line-height: 0.6rem;
    font-weight:500; 
    height: 1.2rem;
    overflow: hidden;
}
.detail .des{
    height: 0.4rem;
    margin-top: 0.1rem;
    font-size:0.26rem;
    line-height: 0.4rem;
    padding: 0 0.15rem;
    overflow: hidden;
}
.detail .price {
   overflow: hidden;
   padding: 0 0.15rem;
}
.detail .price i{
    float: left;
    height: 0.4rem;
    font-size:0.26rem;
    line-height: 0.4rem;
    color: #f00;
    padding: 0 0.3rem;

}
.detail .price em{
    float: right;
    height: 0.4rem;
    padding: 0 0.4rem;
    font-size:0.26rem;
    line-height: 0.4rem;
    color: #e26f50;
    background: #ffe5e1;
}
.detail .bottom{
    width:100%;
    overflow: hidden;
    border-top:0.02rem solid #000;
    position: fixed;
    bottom: 0;
    background: #fff;
    z-index: 2;   
}
.detail .bottom a{
    float: left;
}
.detail .bottom a.serve{
    width:20%;
   
}
.detail .bottom a.serve img{
    display: block;
    width:0.4rem;
    height:0.4rem;
    margin: 0.1rem  auto;
}
.detail .bottom a.serve em{
    display: block;
    font: 0.26rem/0.4rem "";
    font-size:0.26rem;
    line-height: 0.4rem;
}
.detail .bottom a:nth-child(3){
    width: 30%;
    color: #fff;
    font-size:0.3rem;
    line-height: 1rem;
    background: #e26f50;
}
.detail .bottom a:nth-child(4){
    width: 30%;
    color: #fff;
    font-size:0.3rem;
    line-height: 1rem;
    background: #f00;
}
</style>


