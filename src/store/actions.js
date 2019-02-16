import * as types from "./types"
import state from './state'
let actions={
    [types.VIEW_HEADER]:({commit,state},payload)=>commit(types.VIEW_HEADER,payload),
    [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
    [types.VIEW_FOOTER]:({commit,state},payload)=>commit(types.VIEW_FOOTER,payload),
    [types.CHECK_USER]:({commit,state},payload)=>commit(types.CHECK_USER,payload),
    [types.SHOPPING]:({commit,state},payload)=>{
      let shopping2=state.shopping;
      let onOff=false;
      let goods=payload;
      shopping2.forEach((item)=>{
           if (item.id==goods.id) {
              item.count++;
              onOff=true;
           } 
      });
        if (onOff) {
          commit(types.SHOPPING,shopping2)
        } else {
          shopping2.push(goods)
          commit(types.SHOPPING,shopping2)
        };
    },
    [types.DEL_SHOPPING]:({commit,state},payload)=>{
      let shoppingOld=state.shopping;
      let key=payload.target
      shoppingOld.forEach((item,index)=>{
        if (key==item.id) {
          let delIndex=index;
          shoppingOld.splice(delIndex,1)
          // console.log(shoppingOld)
        }
      })
      commit(types.DEL_SHOPPING,shoppingOld)
    }
  };
  export default actions;