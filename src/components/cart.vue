<template>
<div class="_cart">
    <div class="goodsInfo"  v-for="(item,index) of infoList" :key="index">
      <ul class="infoList">
        <li class="infoItem">
          <input type="checkbox" value="item.checked" v-model="item.checked">
        </li>
        <li class="infoItem2">
          <img :src="item.src[0]">
        </li>
        <li class="infoItem3">{{item.subitem}}</li>
        <a href="javascript:;" class='del' @click="handleRemove(index,item.id)">删 除</a>
      </ul>
      <ul class="infoList2">
        <li class="num">数量：
          <button @click="item.count++">+</button>
          <span>{{item.count}}</span>
          <button :disabled="item.count==1" @click="item.count--">-</button>
        </li>
        <li class="eachPrice">单价:￥{{item.price}}</li>
        <li class="eachPrice">小计：￥{{item.price*item.count}}</li>
      </ul>
    </div>
    <div class="totalPrice">
      <label for="all" class='total_l'>
      <input type="checkbox" id='all' value="status" v-model="status"/>&nbsp;全选/全不选
      </label>
      <p class='total_r'>总价：￥{{this.totalPrice()}}<span></span>&nbsp;&nbsp;&nbsp;&nbsp;<span class='btn'>结 算</span></p>
    </div>
  </div>
</template>
<script>
import * as types from '../store/types'
export default {
    data(){
        return {
          totalShow:false,
          status:false,
        }
    },
    props:["infoList"],
    methods:{
      totalPrice(){
          let _price = 0;
          this.infoList.forEach(item => {
             if (item.checked) {
               _price += item.price * item.count;
             }   
           });
          return _price;
      },
      _show(){
        this.totalShow=true;
      },
      handleRemove(index,id){
        this.infoList.splice(index,1);
        this.$store.dispatch(types.DEL_SHOPPING,{target:id});
      }
    },
    watch:{
      status:function(val){
          this.status=val;
          this.infoList.map((item)=>{
            item.checked=val;
            return item;
          })
      }
    },
    mounted(){
      
    }
}
</script>
<style>
.cart {
  padding-bottom: 0.84rem;
}
.cart .goodsInfo {
  padding: 0 0.15rem;
  margin-top: 0.2rem;
  border-top: 0.02rem solid #fb6226;
}
.goodsInfo .infoList {
  padding-top: 0.12rem;
  height: 0.9rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  position: relative;
}
.goodsInfo .infoList .del{
  width: 0.6rem;
  height: 0.3rem;
  border: none;
  background: #ccc;
  font-size: 0.2rem;
  line-height: 0.3rem;
  position: absolute;
  right: 0.2rem;
  bottom: 0.05rem;
  text-align: center;
}
.goodsInfo .infoList .infoItem {
  width: 0.4rem;
}
.goodsInfo .infoList .infoItem input {
  width: 0.32rem;
  height: 0.32rem;
  display: block;
  margin: 0.3rem 0;
}
.goodsInfo .infoList .infoItem2 {
  width: 1rem;
  margin: 0 0.05rem;
}
.goodsInfo .infoList .infoItem2 img {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0.05rem auto;
}
.goodsInfo .infoList .infoItem3 {
  font-size:0.2rem;
  line-height: 0.3rem;
  flex: 1;
  overflow: hidden;
}
.goodsInfo .infoList2 {
  border-bottom: 0.01rem dashed #333;
  height: 0.44rem;
  font-size:0.2rem;
  line-height: 0.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.goodsInfo .infoList2 .num button {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  border: none;
  background: #ccc;
  vertical-align: middle;
  text-align: center;
  font-size: 0.26rem;
  line-height: 0.3rem;
  font-weight: 900;
  
}
.goodsInfo .infoList2 .num  span {
  display: inline-block;
  width: 0.4rem;
  vertical-align: middle;
  text-align: center
}
.goodsInfo .infoList2 .eachPrice{
    margin:0 0.1rem;
}
.totalPrice {
  padding: 0 0.15rem;
  height: 0.6rem;

  font-size: 0.2rem;
  line-height: 0.6rem;

}
.totalPrice .total_l{
  float: left;
  line-height: 0.6rem;
}
.totalPrice .total_r{
  float: right;
}
.totalPrice .total_l input{
    width: 0.32rem;
    height: 0.32rem;
    vertical-align: middle;
}
.totalPrice .btn{
  width: 0.6rem;
  height: 0.4rem;
  display: inline-block;
  background: #ccc;

    font-size: 0.2rem;
    line-height: 0.4rem;

  text-align: center
}
</style>