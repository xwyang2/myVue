<template>
  <div class="electric">
    <goodslist :list="list" dataName="electric"></goodslist>
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
       axios({
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
.electric{padding-top:1.58rem;}
</style>





