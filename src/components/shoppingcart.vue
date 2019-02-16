<template>
  <div class="cart">
    <h3 class="title">购物车</h3>
    <cart v-show="shop" :infoList="infoList"></cart>
    <div class="title">{{msg}}</div>
  </div>
</template>
<script>
import cart from './cart.vue';
import store from "../store";
export default {

  beforeRouteEnter(to, from, next) {
    if (store.state.user.auth) {
      next();
    } else {
      next("/login");
    }
  },
  data(){
    return{
      msg:'',
      shop:false,
      infoList:[]
    }
  },
  components:{cart},
  mounted(){
      // console.log(this.$store.state.shopping)
      if (this.$store.state.shopping.length==0) {
        this.msg="空空如也，赶紧去抢购吧"
      }else{
        this.shop=true
      };
      let goodsinfo=this.$store.state.shopping
      this.$http({
        url:'/data/detail.json'
      }).then(
          res =>{
            let total=res.data["data"]
            goodsinfo.forEach(
              (item)=>{
                  total.forEach((val)=>{
                       if (item.id==val.id) {
                         val.count=item.count
                         val.checked=false;
                         this.infoList.push(val)                      
                       }
                  })
              }
            );
            // console.log(this.infoList)  
          }
      )
  }
};
</script>



