<template>
  <div class="house">
    <goodslist :list="list" dataName="house"></goodslist>
  </div>
</template>
<script>
import goodslist from './goodslist.vue'
export default {
    data(){
        return {list:[]}
    },
    components:{goodslist},
    mounted() {
       this.$http({
         url:'/data/elec.json'
       }).then(
         res => {
          this.list=res.data['data']
         }
       )
    }
};
</script>
<style>
.house{padding-top:1.58rem;}
</style>





