<template>
  <div class="sport">
    <goodslist :list="list" dataName="sport"></goodslist>
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
         url:'/data/live.json'
       }).then(
         res => {
          this.list=res.data['data']
         }
       )
    }
};
</script>
<style>
.sport{padding-top:1.58rem;}
</style>





