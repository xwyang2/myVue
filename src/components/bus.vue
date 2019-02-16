<template>
  <div class="bus">
    <goodslist :list="list" dataName="bus"></goodslist>
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
.bus{padding-top:1.58rem;}
</style>




