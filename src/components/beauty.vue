<template>
  <div class="beauty">
    <goodslist :list="list" dataName="beauty"></goodslist>
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
.beauty{padding-top:1.58rem;}
</style>


