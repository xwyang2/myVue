<template>
  <div id="app">
    <iHeader v-show="bHeader"></iHeader>
    <iNav v-show="bNav"></iNav>
    <router-view></router-view>
    <iFooter v-show="bFooter"></iFooter>
  </div>
</template>
<script>
import iHeader from "./components/iHeader";
import iFooter from "./components//iFooter";
import iNav from "./components//iNav";
import {mapGetters} from 'vuex';
import * as types from './store/types'
export default {
  name: "app",
  components: { iHeader,iNav, iFooter },
  computed:mapGetters([
    'bNav','bFooter','bHeader'
  ]),
   watch:{
    $route:{
      handler:function(to){
        let path = to.path;
        if(/shoppingcart|account/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_HEADER,false);
          this.$store.dispatch(types.VIEW_FOOTER,true);
        }
        if(/chart|detail|login/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_HEADER,false);
          this.$store.dispatch(types.VIEW_FOOTER,false);
        }
        if(/home|beauty|bus|electric|house|sport/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_HEADER,true);
          this.$store.dispatch(types.VIEW_FOOTER,true);
        }
      },
      immediate:true
    }
  }
};
</script>



